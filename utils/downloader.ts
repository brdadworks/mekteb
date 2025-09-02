// src/services/mektebDownloader.ts
import { Capacitor } from "@capacitor/core";
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

const fileExists = async (path: string) => {
  try {
    await Filesystem.stat({ path, directory: Directory.Data });
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
  {
    baseUrl:
      "https://brd.com.tr/mekteb_books/books/semsi_nuriye",
    subdir: "mekteb_books/semsi_nuriye",
    nameTemplate: "{num}-fs8.png",
    start: 1,
    end: 22,
  },
];

/**
 * Dışarıdan start/cancel arayüzü sunan downloader
 */
export function createMektebDownloader() {
  let controllers: AbortController[] = [];
  let done = 0;
  let total = 0;

  const cancel = () => {
    controllers.forEach((c) => c.abort());
    controllers = [];
  };

  const start = async ({
    jobs = DEFAULT_JOBS,
    concurrency = 3,
    onProgress,
  }: StartOptions = {}) => {
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
    const existingByUrl = new Map(oldIndex.map((r) => [r.url, r]));

    const worker = async (item: Item) => {
      const { url, name, path } = item;

      // varsa atla
      if (existingByUrl.has(url) || (await fileExists(path))) {
        done++;
        onProgress?.({ done, total });
        return { url, path, name, skipped: true };
      }

      const controller = new AbortController();
      controllers.push(controller);

      const res = await fetch(url, { signal: controller.signal });
      if (!res.ok) throw new Error(`İndirilemedi: ${url} (HTTP ${res.status})`);

      const blob = await res.blob();

      if (Capacitor.isNativePlatform()) {
        const base64 = await blobToBase64(blob);
        await Filesystem.writeFile({
          path,
          data: base64,
          directory: Directory.Data, // ÖZEL alan (görünmez)
          recursive: true,
        });
      } else {
        // Web fallback: büyük veri için uygun değil
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

    controllers = []; // bitti

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
