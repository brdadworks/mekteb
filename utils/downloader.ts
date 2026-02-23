// src/services/mektebDownloader.ts
import { Capacitor, CapacitorHttp } from "@capacitor/core";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { addStorageData, getStorageData } from "../utils/functions";

export type DownloadRecord = { url: string; path: string; name: string };
export type Progress = {
  done: number;
  total: number;
  ok: number;
  fail: number;
};

export type RangeJob = {
  baseUrl: string;
  subdir: string;
  nameTemplate: string;
  start: number;
  end: number;
};

export type StartOptions = {
  jobs?: RangeJob[];
  concurrency?: number; // default 1 (en stabil)
  onProgress?: (p: Progress) => void;
  logEvery?: number; // default 10
  timeoutMs?: number; // default 25000
  retries?: number; // default 3
  throttleMs?: number; // default 10
};

const makeName = (template: string, n: number) =>
  template.replace(/\{num(?::(\d+))?\}/g, (_m, w) =>
    w ? String(n).padStart(parseInt(w, 10), "0") : String(n)
  );

function arrayBufferToBase64(buffer: ArrayBufferLike) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++)
    binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

function stripDataUrlIfNeeded(s: string) {
  const idx = s.indexOf(",");
  if (s.startsWith("data:") && idx >= 0) return s.slice(idx + 1);
  return s;
}

function normalizeCapHttpDataToBase64(data: any): string {
  if (typeof data === "string") {
    const b64 = stripDataUrlIfNeeded(data);
    if (!b64 || b64.length < 10)
      throw new Error("CapacitorHttp string data boş/kısa geldi");
    return b64;
  }
  if (data instanceof ArrayBuffer) {
    if (data.byteLength === 0)
      throw new Error("CapacitorHttp ArrayBuffer 0 byte geldi");
    return arrayBufferToBase64(data);
  }
  if (data instanceof Uint8Array) {
    if (data.byteLength === 0)
      throw new Error("CapacitorHttp Uint8Array 0 byte geldi");
    return arrayBufferToBase64(data.buffer);
  }
  if (data && typeof data.byteLength === "number") {
    if (data.byteLength === 0)
      throw new Error("CapacitorHttp data.byteLength=0 geldi");
    return arrayBufferToBase64(data as ArrayBuffer);
  }
  throw new Error(
    `CapacitorHttp data tipi tanınmadı: ${Object.prototype.toString.call(data)}`
  );
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function httpGetWithTimeout(opts: any, timeoutMs: number) {
  // CapacitorHttp.get bazen “dönmüyor”; Promise.race ile kesiyoruz
  return await Promise.race([
    CapacitorHttp.get(opts),
    (async () => {
      await sleep(timeoutMs);
      throw new Error(`HTTP TIMEOUT (${timeoutMs}ms) url=${opts?.url}`);
    })(),
  ]);
}

async function downloadToBase64(
  url: string,
  timeoutMs: number
): Promise<string> {
  if (Capacitor.isNativePlatform()) {
    const headers = {
      Accept: "*/*",
      "User-Agent": "Mozilla/5.0",
      Referer: "https://brd.com.tr/",
      // Bazı sunucular keep-alive ile sorun çıkarabiliyor; etkisi cihazdan cihaza değişir:
      // Connection: "close",
    };

    const res: any = await httpGetWithTimeout(
      { url, responseType: "arraybuffer", headers },
      timeoutMs
    );

    console.log(
      "[DL] status=",
      res?.status,
      "url=",
      url,
      "typeof data=",
      typeof res?.data
    );

    if (typeof res?.status === "number" && res.status >= 400) {
      throw new Error(`Native HTTP ${res.status} - ${url}`);
    }

    try {
      const b64 = normalizeCapHttpDataToBase64(res?.data);
      console.log("[DL] native b64len=", b64.length, "url=", url);
      return b64;
    } catch (e) {
      console.log(
        "[DL] arraybuffer normalize failed, fallback blob. url=",
        url,
        e
      );
    }

    const res2: any = await httpGetWithTimeout(
      { url, responseType: "blob", headers },
      timeoutMs
    );

    if (typeof res2?.status === "number" && res2.status >= 400) {
      throw new Error(`Native(Blob) HTTP ${res2.status} - ${url}`);
    }

    const b64_2 = normalizeCapHttpDataToBase64(res2?.data);
    console.log("[DL] native(blob) b64len=", b64_2.length, "url=", url);
    return b64_2;
  }

  // web
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const r = await fetch(url, { signal: ctrl.signal });
    if (!r.ok) throw new Error(`HTTP ${r.status} - ${url}`);
    const ab = await r.arrayBuffer();
    if (ab.byteLength === 0) throw new Error(`Web download boş geldi: ${url}`);
    return arrayBufferToBase64(ab);
  } finally {
    clearTimeout(t);
  }
}

async function downloadToBase64WithRetry(
  url: string,
  timeoutMs: number,
  retries: number
): Promise<string> {
  let lastErr: any = null;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      if (attempt > 1) console.log("[DL] retry", attempt, "url=", url);
      return await downloadToBase64(url, timeoutMs);
    } catch (e: any) {
      lastErr = e;
      const backoff = Math.min(1500, 200 * attempt * attempt);
      console.log(
        "[DL] attempt failed",
        attempt,
        "url=",
        url,
        "err=",
        e?.message ?? e
      );
      await sleep(backoff);
    }
  }
  throw lastErr ?? new Error("download failed");
}

const fileExists = async (path: string, directory: Directory) => {
  try {
    await Filesystem.stat({ path, directory });
    return true;
  } catch {
    return false;
  }
};

const mergeIndex = (oldItems: DownloadRecord[], newItems: DownloadRecord[]) => {
  const map = new Map<string, DownloadRecord>();
  for (const it of oldItems) map.set(it.url, it);
  for (const it of newItems) map.set(it.url, it);
  return Array.from(map.values());
};

type Item = { url: string; name: string; path: string; directory: Directory };

// Hata alsa bile devam eden pool
async function pool<T>(
  items: T[],
  limit: number,
  worker: (item: T, idx: number) => Promise<void>
) {
  let i = 0;
  const runners = new Array(Math.max(1, limit)).fill(0).map(async () => {
    while (i < items.length) {
      const idx = i++;
      await worker(items[idx], idx);
    }
  });
  await Promise.all(runners);
}

// Sunucudan indirilecek dosyalar
export const DEFAULT_JOBS: RangeJob[] = [
  {
    baseUrl: "https://brd.com.tr/mekteb/pages",
    subdir: "mekteb/pages",
    nameTemplate: "page-{num:3}.png",
    start: 0,
    end: 604,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb/kuran-meal",
    subdir: "mekteb/kuran-meal",
    nameTemplate: "{num}.docx",
    start: 0,
    end: 604,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hadis/amel",
    subdir: "mekteb_books/hadis/amel",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 9,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hadis/annebaba",
    subdir: "mekteb_books/hadis/annebaba",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 5,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hadis/guzelahlak",
    subdir: "mekteb_books/hadis/guzelahlak",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 8,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hadis/haset",
    subdir: "mekteb_books/hadis/haset",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 5,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hadis/iman",
    subdir: "mekteb_books/hadis/iman",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 8,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hadis/kibir",
    subdir: "mekteb_books/hadis/kibir",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 7,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hadis/muhabbet",
    subdir: "mekteb_books/hadis/muhabbet",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 9,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hadis/riba",
    subdir: "mekteb_books/hadis/riba",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 4,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hadis/salatu",
    subdir: "mekteb_books/hadis/salatu",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 8,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hadis/takva",
    subdir: "mekteb_books/hadis/takva",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 12,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hadis/teheccud",
    subdir: "mekteb_books/hadis/teheccud",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 5,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hadis/teheccud",
    subdir: "mekteb_books/hadis/teheccud",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 6,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/hayati_hakika/beraat_gecesi",
    subdir: "mekteb_books/hayati_hakika/beraat_gecesi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 5,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/hayati_hakika/cuma_gun_ve_gecesi",
    subdir: "mekteb_books/hayati_hakika/cuma_gun_ve_gecesi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 5,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hayati_hakika/dua",
    subdir: "mekteb_books/hayati_hakika/dua",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 2,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/hayati_hakika/fatiha_hatmesi",
    subdir: "mekteb_books/hayati_hakika/fatiha_hatmesi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 7,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/hayati_hakika/hac_ve_umre_programi",
    subdir: "mekteb_books/hayati_hakika/hac_ve_umre_programi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 9,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hayati_hakika/hatme_adabi",
    subdir: "mekteb_books/hayati_hakika/hatme_adabi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 1,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hayati_hakika/hatmi_enbiya",
    subdir: "mekteb_books/hayati_hakika/hatmi_enbiya",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 5,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/hayati_hakika/ihyasi_mustehab_olan_geceler",
    subdir: "mekteb_books/hayati_hakika/ihyasi_mustehab_olan_geceler",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 4,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hayati_hakika/itikaf",
    subdir: "mekteb_books/hayati_hakika/itikaf",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 4,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hayati_hakika/itikaf",
    subdir: "mekteb_books/hayati_hakika/itikaf",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 4,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hayati_hakika/kadir_gecesi",
    subdir: "mekteb_books/hayati_hakika/kadir_gecesi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 3,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hayati_hakika/mirac_gecesi",
    subdir: "mekteb_books/hayati_hakika/mirac_gecesi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 2,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hayati_hakika/muharrem_ayi",
    subdir: "mekteb_books/hayati_hakika/muharrem_ayi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 8,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hayati_hakika/muharrem_ayi",
    subdir: "mekteb_books/hayati_hakika/muharrem_ayi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 2,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/hayati_hakika/pazartesi_gun_ve_gecesi",
    subdir: "mekteb_books/hayati_hakika/pazartesi_gun_ve_gecesi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 2,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hayati_hakika/ramazan_ayi",
    subdir: "mekteb_books/hayati_hakika/ramazan_ayi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 6,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/hayati_hakika/rebiulahir_cemaziyelevvel_cemaziyelahir",
    subdir:
      "mekteb_books/hayati_hakika/rebiulahir_cemaziyelevvel_cemaziyelahir",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 1,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/hayati_hakika/rebiulevvel_ayi",
    subdir: "mekteb_books/hayati_hakika/rebiulevvel_ayi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 4,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hayati_hakika/recep_ayi",
    subdir: "mekteb_books/hayati_hakika/recep_ayi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 7,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/hayati_hakika/regaib_gecesi",
    subdir: "mekteb_books/hayati_hakika/regaib_gecesi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 3,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hayati_hakika/saban_ayi",
    subdir: "mekteb_books/hayati_hakika/saban_ayi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 5,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/hayati_hakika/saban_ayinin_son_Gecesi",
    subdir: "mekteb_books/hayati_hakika/saban_ayinin_son_Gecesi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 1,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hayati_hakika/safer_ayi",
    subdir: "mekteb_books/hayati_hakika/safer_ayi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 2,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/hayati_hakika/salavat_hatmesi",
    subdir: "mekteb_books/hayati_hakika/salavat_hatmesi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 5,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/hayati_hakika/salavat_hatmesi",
    subdir: "mekteb_books/hayati_hakika/salavat_hatmesi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 1,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/hayati_hakika/tevbei_istigfar",
    subdir: "mekteb_books/hayati_hakika/tevbei_istigfar",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 4,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/hayati_hakika/zilhicce_ayi",
    subdir: "mekteb_books/hayati_hakika/zilhicce_ayi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 6,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/hayati_hakika/zilhicce_son_gecesi",
    subdir: "mekteb_books/hayati_hakika/zilhicce_son_gecesi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 1,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua/cevseni_kebir/pazartesi",
    subdir: "mekteb_books/mecmua/cevseni_kebir/pazartesi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 8,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/cevseni_kebir/sali",
    subdir: "mekteb_books/mecmua/cevseni_kebir/sali",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 4,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua/cevseni_kebir/carsamba",
    subdir: "mekteb_books/mecmua/cevseni_kebir/carsamba",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 5,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua/cevseni_kebir/persembe",
    subdir: "mekteb_books/mecmua/cevseni_kebir/persembe",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 8,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/cevseni_kebir/cuma",
    subdir: "mekteb_books/mecmua/cevseni_kebir/cuma",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 6,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua/cevseni_kebir/cumartesi",
    subdir: "mekteb_books/mecmua/cevseni_kebir/cumartesi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 4,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/cevseni_kebir/pazar",
    subdir: "mekteb_books/mecmua/cevseni_kebir/pazar",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 10,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/delilul_irfaniyye",
    subdir: "mekteb_books/mecmua/delilul_irfaniyye",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 28,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/duayi_ismi_azam",
    subdir: "mekteb_books/mecmua/duayi_ismi_azam",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 4,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/duayi_mustecab",
    subdir: "mekteb_books/mecmua/duayi_mustecab",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 4,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/evradi_fethiyye",
    subdir: "mekteb_books/mecmua/evradi_fethiyye",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 6,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/evradi_kadiriyye",
    subdir: "mekteb_books/mecmua/evradi_kadiriyye",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 8,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua/evradi_naksibendiyye",
    subdir: "mekteb_books/mecmua/evradi_naksibendiyye",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 8,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/evradi_rufaiyye",
    subdir: "mekteb_books/mecmua/evradi_rufaiyye",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 14,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua/evradi_ummul_kuraniyye",
    subdir: "mekteb_books/mecmua/evradi_ummul_kuraniyye",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 6,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/ala",
    subdir: "mekteb_books/mecmua/kurani_kerim/ala",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 1,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/bakara",
    subdir: "mekteb_books/mecmua/kurani_kerim/bakara",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 1,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/cuma",
    subdir: "mekteb_books/mecmua/kurani_kerim/cuma",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 2,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/duhan",
    subdir: "mekteb_books/mecmua/kurani_kerim/duhan",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 3,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/fatiha",
    subdir: "mekteb_books/mecmua/kurani_kerim/fatiha",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 1,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/fetih",
    subdir: "mekteb_books/mecmua/kurani_kerim/fetih",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 5,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/hasr",
    subdir: "mekteb_books/mecmua/kurani_kerim/hasr",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 2,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/hatim",
    subdir: "mekteb_books/mecmua/kurani_kerim/hatim",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 1,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/insan",
    subdir: "mekteb_books/mecmua/kurani_kerim/insan",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 3,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/kehf",
    subdir: "mekteb_books/mecmua/kurani_kerim/kehf",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 2,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/mulk",
    subdir: "mekteb_books/mecmua/kurani_kerim/mulk",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 3,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/nebe",
    subdir: "mekteb_books/mecmua/kurani_kerim/nebe",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 3,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/rahman",
    subdir: "mekteb_books/mecmua/kurani_kerim/rahman",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 4,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/tahrim",
    subdir: "mekteb_books/mecmua/kurani_kerim/tahrim",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 1,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/vakia",
    subdir: "mekteb_books/mecmua/kurani_kerim/vakia",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 4,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/yasin",
    subdir: "mekteb_books/mecmua/kurani_kerim/yasin",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 6,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/yusuf",
    subdir: "mekteb_books/mecmua/kurani_kerim/yusuf",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 1,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerimden_dualar",
    subdir: "mekteb_books/mecmua/kurani_kerimden_dualar",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 7,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua/munacati_veysel_karani",
    subdir: "mekteb_books/mecmua/munacati_veysel_karani",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 6,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua/munacati_veysel_karani",
    subdir: "mekteb_books/mecmua/munacati_veysel_karani",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 6,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/cevseni_kebir/pazartesi",
    subdir: "mekteb_books/mecmua_meal/cevseni_kebir/pazartesi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 14,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/cevseni_kebir/sali",
    subdir: "mekteb_books/mecmua_meal/cevseni_kebir/sali",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 8,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/cevseni_kebir/carsamba",
    subdir: "mekteb_books/mecmua_meal/cevseni_kebir/carsamba",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 10,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/cevseni_kebir/persembe",
    subdir: "mekteb_books/mecmua_meal/cevseni_kebir/persembe",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 16,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/cevseni_kebir/cuma",
    subdir: "mekteb_books/mecmua_meal/cevseni_kebir/cuma",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 12,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/cevseni_kebir/cumartesi",
    subdir: "mekteb_books/mecmua_meal/cevseni_kebir/cumartesi",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 8,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/cevseni_kebir/pazar",
    subdir: "mekteb_books/mecmua_meal/cevseni_kebir/pazar",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 20,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/delilul_irfaniyye",
    subdir: "mekteb_books/mecmua_meal/delilul_irfaniyye",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 51,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/duayi_ismi_azam",
    subdir: "mekteb_books/mecmua_meal/duayi_ismi_azam",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 6,
  },
  {
    baseUrl: "https://brd.com.tr/mekteb_books/books/mecmua_meal/duayi_mustecab",
    subdir: "mekteb_books/mecmua_meal/duayi_mustecab",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 6,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/evradi_fethiyye",
    subdir: "mekteb_books/mecmua_meal/evradi_fethiyye",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 10,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/evradi_kadiriyye",
    subdir: "mekteb_books/mecmua_meal/evradi_kadiriyye",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 14,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/evradi_naksibendiyye",
    subdir: "mekteb_books/mecmua_meal/evradi_naksibendiyye",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 14,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/evradi_rufaiyye",
    subdir: "mekteb_books/mecmua_meal/evradi_rufaiyye",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 25,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/evradi_ummul_kuraniyye",
    subdir: "mekteb_books/mecmua_meal/evradi_ummul_kuraniyye",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 10,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/ala",
    subdir: "mekteb_books/mecmua_meal/kurani_kerim/ala",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 2,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/bakara",
    subdir: "mekteb_books/mecmua_meal/kurani_kerim/bakara",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 2,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/cuma",
    subdir: "mekteb_books/mecmua_meal/kurani_kerim/cuma",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 4,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/duhan",
    subdir: "mekteb_books/mecmua_meal/kurani_kerim/duhan",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 6,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/fatiha",
    subdir: "mekteb_books/mecmua_meal/kurani_kerim/fatiha",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 2,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/fetih",
    subdir: "mekteb_books/mecmua_meal/kurani_kerim/fetih",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 10,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/hasr",
    subdir: "mekteb_books/mecmua_meal/kurani_kerim/hasr",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 4,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/hatim",
    subdir: "mekteb_books/mecmua_meal/kurani_kerim/hatim",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 2,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/insan",
    subdir: "mekteb_books/mecmua_meal/kurani_kerim/insan",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 6,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/kehf",
    subdir: "mekteb_books/mecmua_meal/kurani_kerim/kehf",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 4,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/mulk",
    subdir: "mekteb_books/mecmua_meal/kurani_kerim/mulk",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 6,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/nebe",
    subdir: "mekteb_books/mecmua_meal/kurani_kerim/nebe",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 6,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/rahman",
    subdir: "mekteb_books/mecmua_meal/kurani_kerim/rahman",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 8,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/tahrim",
    subdir: "mekteb_books/mecmua_meal/kurani_kerim/tahrim",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 2,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/vakia",
    subdir: "mekteb_books/mecmua_meal/kurani_kerim/vakia",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 8,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/yasin",
    subdir: "mekteb_books/mecmua_meal/kurani_kerim/yasin",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 12,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/yusuf",
    subdir: "mekteb_books/mecmua_meal/kurani_kerim/yusuf",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 2,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerimden_dualar",
    subdir: "mekteb_books/mecmua_meal/kurani_kerimden_dualar",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 11,
  },
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/mecmua_meal/munacati_veysel_karani",
    subdir: "mekteb_books/mecmua_meal/munacati_veysel_karani",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 10,
  },
  /* {
    baseUrl: "https://brd.com.tr/mekteb_books/books/semsi_nuriye",
    subdir: "mekteb_books/semsi_nuriye",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 22,
  }, */
];

export function createMektebDownloader() {
  let cancelled = false;

  const cancel = () => {
    cancelled = true;
    console.log("[DL] cancel() çağrıldı");
  };

  const start = async ({
    jobs = DEFAULT_JOBS,
    concurrency = 1, // 🔥 stabil
    onProgress,
    logEvery = 10,
    timeoutMs = 25000,
    retries = 3,
    throttleMs = 10,
  }: StartOptions = {}) => {
    cancelled = false;

    // işleri aç
    const all: Item[] = [];
    for (const job of jobs) {
      const { baseUrl, subdir, nameTemplate, start, end } = job;
      if (end < start) continue;
      for (let n = start; n <= end; n++) {
        const name = makeName(nameTemplate, n);
        const url = `${baseUrl}/${name}`;
        const path = `${subdir}/${name}`;
        all.push({ url, name, path, directory: Directory.Data });
      }
    }

    // uniq
    const uniq = new Map<string, Item>();
    for (const it of all) uniq.set(it.url, it);
    const items = Array.from(uniq.values());

    // index oku
    const oldImages =
      ((await getStorageData("downloadedImages")) as DownloadRecord[]) || [];
    const oldAssets =
      ((await getStorageData("downloadedAssets")) as DownloadRecord[]) || [];
    const oldIndex = mergeIndex(oldImages, oldAssets);
    const existingByUrl = new Map(oldIndex.map((r) => [r.url, r]));

    let done = 0;
    let ok = 0;
    let fail = 0;
    const total = items.length;

    const tick = () => onProgress?.({ done, total, ok, fail });
    tick();

    const successes: DownloadRecord[] = [];
    const failures: { url: string; err: string }[] = [];

    await pool(items, Math.max(1, concurrency), async (item, idx) => {
      if (cancelled) return;

      const { url, name, path, directory } = item;

      // varsa geç
      if (existingByUrl.has(url) || (await fileExists(path, directory))) {
        done++;
        if (done % logEvery === 0)
          console.log("[DL] progress", { done, total, ok, fail });
        tick();
        return;
      }

      try {
        // indir + retry + timeout
        const base64 = await downloadToBase64WithRetry(url, timeoutMs, retries);

        // yaz
        await Filesystem.writeFile({
          path,
          data: base64,
          directory,
          recursive: true,
        });

        // doğrula (size>0)
        const st = await Filesystem.stat({ path, directory });
        const size = (st as any).size ?? 0;
        if (!size || size <= 0) throw new Error("write sonrası size=0");

        console.log("[DL] saved", path, "size=", size, "url=", url);

        successes.push({ url, path, name });
        ok++;
      } catch (e: any) {
        const msg = e?.message ?? String(e);
        console.log("[DL] FAIL url=", url, "err=", msg);
        failures.push({ url, err: msg });
        fail++;
      } finally {
        done++;
        if (done % logEvery === 0)
          console.log("[DL] progress", { done, total, ok, fail });
        tick();

        // 🔥 event loop nefes alsın
        if (throttleMs > 0) await sleep(throttleMs);
      }
    });

    // index güncelle
    const merged = mergeIndex(oldIndex, successes);
    await addStorageData("downloadedAssets", merged);
    await addStorageData("downloadedImages", merged);

    console.log("[DL] DONE", { total, done, ok, fail });

    return {
      successCount: ok,
      failCount: fail,
      failures,
      index: merged,
      totals: { all: total },
    };
  };

  return { start, cancel };
}
