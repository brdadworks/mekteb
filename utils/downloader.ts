// src/services/mektebDownloader.ts
import { Capacitor, CapacitorHttp } from "@capacitor/core";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { addStorageData, getStorageData } from "../utils/functions";

/**
 * Kayıt tipi ve ilerleme
 */
export type DownloadRecord = { url: string; path: string; name: string };
export type Progress = { done: number; total: number };

/**
 * ŞABLON: nameTemplate içinde {num} veya {num:3} kullan
 * Örn: "page-{num:3}.png"  => page-000.png
 *      "{num}.docx"        => 0.docx
 *      "{num}-fs8.png"     => 1-fs8.png
 */
export type RangeJob = {
  baseUrl: string; // "https://brd.com.tr/mekteb/pages"
  subdir: string; // "mekteb/pages" (app private path)
  nameTemplate: string; // "page-{num:3}.png"
  start: number; // inclusive
  end: number; // inclusive
};

export type StartOptions = {
  jobs?: RangeJob[]; // Belirtmezsen varsayılanları kullanır
  concurrency?: number; // default 3
  onProgress?: (p: Progress) => void;
};

const makeName = (template: string, n: number) =>
  template.replace(/\{num(?::(\d+))?\}/g, (_m, w) =>
    w ? String(n).padStart(parseInt(w, 10), "0") : String(n)
  );

const blobToBase64 = (blob: Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve((r.result as string).split(",")[1] || "");
    r.onerror = reject;
    r.readAsDataURL(blob);
  });

/**
 * fileExists:
 * - dosya yoksa false
 * - dosya varsa ama 0 byte ise false (bozuk dosya tekrar indirilsin)
 */
const fileExists = async (path: string) => {
  try {
    const st = await Filesystem.stat({ path, directory: Directory.Data });
    if (!st?.size || st.size === 0) return false;
    return true;
  } catch {
    return false;
  }
};

const mergeIndex = (oldItems: DownloadRecord[], newItems: DownloadRecord[]) => {
  const map = new Map<string, DownloadRecord>();
  for (const it of oldItems) map.set(it.url, it);
  for (const it of newItems) map.set(it.url, it); // aynı URL ise günceller
  return Array.from(map.values());
};

// Basit eşzamanlı havuz
async function withConcurrency<T, R>(
  items: T[],
  limit: number,
  worker: (item: T, idx: number) => Promise<R>
): Promise<PromiseSettledResult<R>[]> {
  const results: Promise<PromiseSettledResult<R>>[] = [];
  const executing: Promise<any>[] = [];
  for (let i = 0; i < items.length; i++) {
    const p = (async () => await worker(items[i], i))()
      .then(
        (v) => ({ status: "fulfilled", value: v } as PromiseFulfilledResult<R>)
      )
      .catch(
        (e) => ({ status: "rejected", reason: e } as PromiseRejectedResult)
      );
    results.push(p);
    const e = p.finally(() => {
      const idx = executing.indexOf(e);
      if (idx > -1) executing.splice(idx, 1);
    });
    executing.push(e);
    if (executing.length >= limit) await Promise.race(executing);
  }
  return Promise.all(results);
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

function arrayBufferToBase64(buffer: ArrayBufferLike) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++)
    binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

function stripDataUrlIfNeeded(s: string) {
  // "data:image/png;base64,AAA..." gelirse sadece base64 kısmını al
  const idx = s.indexOf(",");
  if (s.startsWith("data:") && idx >= 0) return s.slice(idx + 1);
  return s;
}

function normalizeCapHttpDataToBase64(data: any): string {
  // 1) Bazı cihazlarda "arraybuffer" istesen bile string(base64) gelir
  if (typeof data === "string") {
    const b64 = stripDataUrlIfNeeded(data);
    if (!b64 || b64.length < 10)
      throw new Error("CapacitorHttp string data boş/kısa geldi");
    return b64;
  }

  // 2) Gerçek ArrayBuffer geldiyse
  if (data instanceof ArrayBuffer) {
    if (data.byteLength === 0)
      throw new Error("CapacitorHttp ArrayBuffer 0 byte geldi");
    return arrayBufferToBase64(data);
  }

  // 3) Bazı implementasyonlarda Uint8Array gelebilir
  if (data instanceof Uint8Array) {
    if (data.byteLength === 0)
      throw new Error("CapacitorHttp Uint8Array 0 byte geldi");
    return arrayBufferToBase64(data.buffer);
  }

  // 4) Blob geldiyse (nadiren)
  if (typeof Blob !== "undefined" && data instanceof Blob) {
    // Blob senkron değil; burada yakalamak istemezsen bu case'i kullanmayabilirsin.
    // Bu fonksiyon sync, o yüzden blob'u burada desteklemiyoruz.
    throw new Error("CapacitorHttp Blob geldi (sync normalize desteklemiyor)");
  }

  // 5) Son çare: byteLength alanı olan bir şey geldiyse
  if (data && typeof data.byteLength === "number") {
    if (data.byteLength === 0)
      throw new Error("CapacitorHttp data.byteLength=0 geldi");
    return arrayBufferToBase64(data as ArrayBuffer);
  }

  throw new Error(
    `CapacitorHttp data tipi tanınmadı: ${Object.prototype.toString.call(data)}`
  );
}

async function downloadToBase64(url: string): Promise<string> {
  if (Capacitor.isNativePlatform()) {
    const headers = {
      Accept: "*/*",
      // bazı sunucular CapacitorHttp UA'yı sevmeyebiliyor, bu yüzden sabit bir UA veriyoruz:
      "User-Agent": "Mozilla/5.0",
      Referer: "https://brd.com.tr/",
    };

    // 1) arraybuffer iste
    const res: any = await CapacitorHttp.get({
      url,
      responseType: "arraybuffer",
      headers,
    });

    console.log(
      "[DL] status=",
      res?.status,
      "url=",
      url,
      "typeof data=",
      typeof res?.data
    );

    // status yoksa bile devam; ama varsa 200 değilse hata ver
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

    // 2) fallback: blob iste (bazı cihazlarda farklı dönüyor)
    const res2: any = await CapacitorHttp.get({
      url,
      responseType: "blob",
      headers,
    });

    console.log(
      "[DL] blob status=",
      res2?.status,
      "url=",
      url,
      "typeof data=",
      typeof res2?.data
    );

    if (typeof res2?.status === "number" && res2.status >= 400) {
      throw new Error(`Native(Blob) HTTP ${res2.status} - ${url}`);
    }

    // Blob responseType’da da çoğu zaman string(base64) geliyor.
    const b64_2 = normalizeCapHttpDataToBase64(res2?.data);
    console.log("[DL] native(blob) b64len=", b64_2.length, "url=", url);
    return b64_2;
  }

  // Web
  const r = await fetch(url);
  if (!r.ok) throw new Error(`HTTP ${r.status} - ${url}`);
  const ab = await r.arrayBuffer();
  if (ab.byteLength === 0) throw new Error(`Web download boş geldi: ${url}`);
  return arrayBufferToBase64(ab);
}

type Job = { url: string; path: string; directory?: Directory };

async function ensureCached(job: Job) {
  const directory = job.directory ?? Directory.Data;

  // 1) varsa geç (0 byte ise silip yeniden indir)
  try {
    const st = await Filesystem.stat({ path: job.path, directory });
    if ((st.size ?? 0) > 0) return;

    // 0 byte ise bozuk: sil
    await Filesystem.deleteFile({ path: job.path, directory });
  } catch {
    // yoksa devam
  }

  // 2) indir
  const base64 = await downloadToBase64(job.url);

  if (!base64 || base64.length < 50) {
    throw new Error(`Base64 boş/kısa geldi: ${job.url}`);
  }

  // 3) kaydet
  await Filesystem.writeFile({
    path: job.path,
    data: base64,
    directory,
    recursive: true,
  });

  // 4) yazdıktan sonra kontrol
  const st2 = await Filesystem.stat({ path: job.path, directory });
  console.log("[DL] saved", job.path, "size=", st2.size, "url=", job.url);

  if (!st2.size || st2.size === 0) {
    throw new Error(`Dosya 0 byte yazıldı: ${job.path}`);
  }
}

/**
 * Dışarıdan start/cancel arayüzü sunan downloader
 */
export function createMektebDownloader() {
  let cancelled = false;
  let done = 0;
  let total = 0;

  const cancel = () => {
    cancelled = true;
  };

  const start = async ({
    jobs = DEFAULT_JOBS,
    concurrency = 3,
    onProgress,
  }: StartOptions = {}) => {
    cancelled = false;

    console.log("[DL] start() çağrıldı", {
      native: Capacitor.isNativePlatform(),
      concurrency,
      jobsCount: jobs.length,
    });

    if (!Capacitor.isNativePlatform()) {
      console.warn(
        "[mektebDownloader] Web ortamında çok dosyayı kalıcı depolamak önerilmez. Native tercih edin."
      );
    }

    // İşleri tek listeye aç
    type Item = { url: string; name: string; path: string };
    const allItems: Item[] = [];

    for (const job of jobs) {
      const { baseUrl, subdir, nameTemplate, start, end } = job;
      if (end < start) continue;

      for (let n = start; n <= end; n++) {
        const name = makeName(nameTemplate, n);
        const url = `${baseUrl}/${name}`;
        const path = `${subdir}/${name}`;
        allItems.push({ url, name, path });
      }
    }

    // Aynı URL'leri tekille (muhtemel tekrarlar için)
    const uniqMap = new Map<string, Item>();
    for (const it of allItems) uniqMap.set(it.url, it);
    const items = Array.from(uniqMap.values());

    done = 0;
    total = items.length;
    onProgress?.({ done, total });

    // Eski indeksleri oku ve birleştir
    const oldImages =
      ((await getStorageData("downloadedImages")) as DownloadRecord[]) || [];
    const oldAssets =
      ((await getStorageData("downloadedAssets")) as DownloadRecord[]) || [];
    const oldIndex = mergeIndex(oldImages, oldAssets);

    // Not: eski index’te kayıt var ama dosya 0-byte olabilir.
    // worker içinde stat ile kontrol edeceğiz.
    const existingByUrl = new Map(oldIndex.map((r) => [r.url, r]));

    const worker = async (item: Item) => {
      const { url, name, path } = item;

      // İptal kontrolü
      if (cancelled) {
        done++;
        onProgress?.({ done, total });
        return { url, path, name, skipped: true };
      }

      // varsa atla (ama 0-byte ise atlama!)
      if (existingByUrl.has(url)) {
        // index var ama gerçekten dosya sağlam mı?
        const ok = await fileExists(path);
        if (ok) {
          done++;
          onProgress?.({ done, total });
          return { url, path, name, skipped: true };
        }
        // 0-byte ise devam edip yeniden indireceğiz
      } else {
        // index yoksa dosya var mı kontrol et (0-byte ise yok sayıyoruz)
        const ok = await fileExists(path);
        if (ok) {
          done++;
          onProgress?.({ done, total });
          return { url, path, name, skipped: true };
        }
      }

      // ✅ İNDİR + KAYDET
      if (Capacitor.isNativePlatform()) {
        console.log("[DL] ensureCached çağrılıyor", { url, path });

        await ensureCached({
          url,
          path,
          directory: Directory.Data,
        });

        console.log("[DL] ensureCached bitti", { url, path });
      } else {
        // Web fallback (istersen tamamen kapatabilirsin)
        const res = await fetch(url);
        if (!res.ok)
          throw new Error(`İndirilemedi: ${url} (HTTP ${res.status})`);
        const blob = await res.blob();
        const base64 = await blobToBase64(blob);
        void base64;
      }

      done++;
      onProgress?.({ done, total });
      return { url, path, name, skipped: false };
    };

    const settled = await withConcurrency(items, concurrency, worker);

    const successes: DownloadRecord[] = [];
    const fails: string[] = [];

    settled.forEach((r) => {
      if (r.status === "fulfilled") {
        const v = r.value as any;
        // skipped olsa bile mevcut index’e eklemiyoruz; sadece indirilenleri ekliyoruz
        if (!v.skipped)
          successes.push({ url: v.url, path: v.path, name: v.name });
      } else {
        fails.push((r as any).reason?.message || "Hata");
      }
    });

    // İndeksi güncelle (yeni anahtar: downloadedAssets)
    const merged = mergeIndex(oldIndex, successes);
    await addStorageData("downloadedAssets", merged);

    // Geriye doğru uyumluluk: istersen eski anahtara da yaz
    await addStorageData("downloadedImages", merged);

    return {
      successCount: successes.length,
      failCount: fails.length,
      failures: fails,
      index: merged,
      totals: { all: items.length },
    };
  };

  return { start, cancel };
}
