import { BookProps, BooksProps, IlahiProps } from "./types";
import * as allBooks from "../data/books";

export const bookHandler = (slug: string): BooksProps[] => {
  switch (slug) {
    case "kuran":
      return allBooks.kuran.map((item: any) => ({
        ...item,
        cuz: item.cuz !== null ? Number(item.cuz) : null,
      }));
    case "mecmua":
      return allBooks.mecmua.map((item: any) => ({
        ...item,
        sure: item.sure ?? "",
      }));
    case "mecmua_meal":
      return allBooks.mecmua_meal.map((item: any) => ({
        ...item,
        sure: item.sure ?? "",
      }));
    case "kurani_kerim":
      return allBooks.kurani_kerim.map((item: any) => ({
        ...item,
        sure: item.sure ?? "",
      }));
    case "cevseni_kebir":
      return allBooks.cevseni_kebir.map((item: any) => ({
        ...item,
        sure: item.sure ?? "",
      }));
    case "cevseni_kebir_meal":
      return allBooks.cevseni_kebir_meal.map((item: any) => ({
        ...item,
        sure: item.sure ?? "",
      }));
    case "kurani_kerim_meal":
      return allBooks.kurani_kerim_meal.map((item: any) => ({
        ...item,
        sure: item.sure ?? "",
      }));
    case "hayati_hakika":
      return allBooks.hayati_hakika.map((item: any) => ({
        ...item,
        sure: item.sure ?? "",
      }));
    case "hadisler":
      return allBooks.hadisler.map((item: any) => ({
        ...item,
        sure: item.sure ?? "",
      }));
    case "ilahiler":
      return allBooks.ilahiler.map((item: any) => ({
        ...item,
        sure: item.sure ?? "",
      }));
    case "yunus":
      return allBooks.yunus.map((item: any) => ({
        ...item,
        sure: item.sure ?? "",
      }));
    case "kuddusi":
      return allBooks.kuddusi.map((item: any) => ({
        ...item,
        sure: item.sure ?? "",
      }));
    case "niyazi":
      return allBooks.niyazi.map((item: any) => ({
        ...item,
        sure: item.sure ?? "",
      }));
    case "ibrahim_hakki":
      return allBooks.ibrahim_hakki.map((item: any) => ({
        ...item,
        sure: item.sure ?? "",
      }));
    case "abdulgani_efendi":
      return allBooks.abdulgani_efendi.map((item: any) => ({
        ...item,
        sure: item.sure ?? "",
      }));
    case "alvarlı_efe":
      return allBooks.alvarlı_efe.map((item: any) => ({
        ...item,
        sure: item.sure ?? "",
      }));
    case "irfani":
      return allBooks.irfani.map((item: any) => ({
        ...item,
        sure: item.sure ?? "",
      }));
    case "la_edri":
      return allBooks.la_edri.map((item: any) => ({
        ...item,
        sure: item.sure ?? "",
      }));
    default:
      return [];
  }
};

export const currentBook = (slug: string): BookProps => {
  console.log({ currentBookSlug: slug });
  switch (slug) {
    case "duayi_ismi_azam":
      return allBooks.duayi_ismi_azam;
    case "duayi_ismi_azam_meal":
      return allBooks.duayi_ismi_azam_meal;
    case "duayi_mustecab":
      return allBooks.duayi_mustecab;
    case "duayi_mustecab_meal":
      return allBooks.duayi_mustecab_meal;
    case "ala":
      return allBooks.ala;
    case "bakara":
      return allBooks.bakara;
    case "cuma":
      return allBooks.cuma;
    case "duhan":
      return allBooks.duhan;
    case "fatiha":
      return allBooks.fatiha;
    case "fetih":
      return allBooks.fetih;
    case "hasr":
      return allBooks.hasr;
    case "hatim":
      return allBooks.hatim;
    case "insan":
      return allBooks.insan;
    case "kehf":
      return allBooks.kehf;
    case "mulk":
      return allBooks.mulk;
    case "nebe":
      return allBooks.nebe;
    case "rahman":
      return allBooks.rahman;
    case "tahrim":
      return allBooks.tahrim;
    case "vakia":
      return allBooks.vakia;
    case "yasin":
      return allBooks.yasin;
    case "yusuf":
      return allBooks.yusuf;
    case "pazartesi":
      return allBooks.pazartesi;
    case "sali":
      return allBooks.sali;
    case "carsamba":
      return allBooks.carsamba;
    case "persembe":
      return allBooks.persembe;
    case "kebir_cuma":
      return allBooks.kebir_cuma;
    case "cumartesi":
      return allBooks.cumartesi;
    case "pazar":
      return allBooks.pazar;
    case "evradi_ummul_kuraniyye":
      return allBooks.evradi_ummul_kuraniyye;
    case "munacati_veysel_karani":
      return allBooks.munacati_veysel_karani;
    case "evradi_fethiyye":
      return allBooks.evradi_fethiyye;
    case "evradi_fethiyye_meal":
      return allBooks.evradi_fethiyye_meal;
    case "evradi_rufaiyye":
      return allBooks.evradi_rufaiyye;
    case "evradi_kadiriyye":
      return allBooks.evradi_kadiriyye;
    case "evradi_naksibendiyye":
      return allBooks.evradi_naksibendiyye;
    case "evradi_naksibendiyye_meal":
      return allBooks.evradi_naksibendiyye_meal;
    case "delilul_irfaniyye":
      return allBooks.delilul_irfaniyye;
    case "kurani_kerimden_dualar":
      return allBooks.kurani_kerimden_dualar;
    case "kurani_kerimden_dualar_meal":
      return allBooks.kurani_kerimden_dualar_meal;
    case "ala_meal":
      return allBooks.ala_meal;
    case "bakara_meal":
      return allBooks.bakara_meal;
    case "cuma_meal":
      return allBooks.cuma_meal;
    case "duhan_meal":
      return allBooks.duhan_meal;
    case "fatiha_meal":
      return allBooks.fatiha_meal;
    case "fetih_meal":
      return allBooks.fetih_meal;
    case "hasr_meal":
      return allBooks.hasr_meal;
    case "hatim_meal":
      return allBooks.hatim_meal;
    case "insan_meal":
      return allBooks.insan_meal;
    case "kehf_meal":
      return allBooks.kehf_meal;
    case "mulk_meal":
      return allBooks.mulk_meal;
    case "nebe_meal":
      return allBooks.nebe_meal;
    case "rahman_meal":
      return allBooks.rahman_meal;
    case "tahrim_meal":
      return allBooks.tahrim_meal;
    case "vakia_meal":
      return allBooks.vakia_meal;
    case "yasin_meal":
      return allBooks.yasin_meal;
    case "yusuf_meal":
      return allBooks.yusuf_meal;
    case "pazartesi_meal":
      return allBooks.pazartesi_meal;
    case "sali_meal":
      return allBooks.sali_meal;
    case "carsamba_meal":
      return allBooks.carsamba_meal;
    case "persembe_meal":
      return allBooks.persembe_meal;
    case "kebir_cuma_meal":
      return allBooks.kebir_cuma_meal;
    case "cumartesi_meal":
      return allBooks.cumartesi_meal;
    case "pazar_meal":
      return allBooks.pazar_meal;
    case "evradi_ummul_kuraniyye_meal":
      return allBooks.evradi_ummul_kuraniyye_meal;
    case "munacati_veysel_karani_meal":
      return allBooks.munacati_veysel_karani_meal;
    case "evradi_rufaiyye_meal":
      return allBooks.evradi_rufaiyye_meal;
    case "evradi_kadiriyye_meal":
      return allBooks.evradi_kadiriyye_meal;
    case "evradi_naksibendiyye_meal":
      return allBooks.evradi_naksibendiyye_meal;
    case "delilul_irfaniyye_meal":
      return allBooks.delilul_irfaniyye_meal;
    case "semsi_nuriye":
      return allBooks.semsi_nuriye;
    case "beraat_gecesi":
      return {
        ...allBooks.beraat_gecesi,
        direction:
          allBooks.beraat_gecesi.direction === "ltr" ||
          allBooks.beraat_gecesi.direction === "rtl"
            ? allBooks.beraat_gecesi.direction
            : undefined,
      };
    case "cuma_gun_ve_gecesi":
      return {
        ...allBooks.cuma_gun_ve_gecesi,
        direction:
          allBooks.cuma_gun_ve_gecesi.direction === "ltr" ||
          allBooks.cuma_gun_ve_gecesi.direction === "rtl"
            ? allBooks.cuma_gun_ve_gecesi.direction
            : undefined,
      };
    case "dua":
      return {
        ...allBooks.dua,
        direction:
          allBooks.dua.direction === "ltr" || allBooks.dua.direction === "rtl"
            ? allBooks.dua.direction
            : undefined,
      };
    case "fatiha_hatmesi":
      return {
        ...allBooks.fatiha_hatmesi,
        direction:
          allBooks.fatiha_hatmesi.direction === "ltr" ||
          allBooks.fatiha_hatmesi.direction === "rtl"
            ? allBooks.fatiha_hatmesi.direction
            : undefined,
      };
    case "hac_ve_umre_programi":
      return {
        ...allBooks.hac_ve_umre_programi,
        direction:
          allBooks.hac_ve_umre_programi.direction === "ltr" ||
          allBooks.hac_ve_umre_programi.direction === "rtl"
            ? allBooks.hac_ve_umre_programi.direction
            : undefined,
      };
    case "hatme_adabi":
      return {
        ...allBooks.hatme_adabi,
        direction:
          allBooks.hatme_adabi.direction === "ltr" ||
          allBooks.hatme_adabi.direction === "rtl"
            ? allBooks.hatme_adabi.direction
            : undefined,
      };
    case "hatmi_enbiya":
      return {
        ...allBooks.hatmi_enbiya,
        direction:
          allBooks.hatmi_enbiya.direction === "ltr" ||
          allBooks.hatmi_enbiya.direction === "rtl"
            ? allBooks.hatmi_enbiya.direction
            : undefined,
      };
    case "ihyasi_mustehab_olan_geceler":
      return {
        ...allBooks.ihyasi_mustehab_olan_geceler,
        direction:
          allBooks.ihyasi_mustehab_olan_geceler.direction === "ltr" ||
          allBooks.ihyasi_mustehab_olan_geceler.direction === "rtl"
            ? allBooks.ihyasi_mustehab_olan_geceler.direction
            : undefined,
      };
    case "itikaf":
      return {
        ...allBooks.itikaf,
        direction:
          allBooks.itikaf.direction === "ltr" ||
          allBooks.itikaf.direction === "rtl"
            ? allBooks.itikaf.direction
            : undefined,
      };
    case "kadir_gecesi":
      return {
        ...allBooks.kadir_gecesi,
        direction:
          allBooks.kadir_gecesi.direction === "ltr" ||
          allBooks.kadir_gecesi.direction === "rtl"
            ? allBooks.kadir_gecesi.direction
            : undefined,
      };
    case "mirac_gecesi":
      return {
        ...allBooks.mirac_gecesi,
        direction:
          allBooks.mirac_gecesi.direction === "ltr" ||
          allBooks.mirac_gecesi.direction === "rtl"
            ? allBooks.mirac_gecesi.direction
            : undefined,
      };
    case "muharrem_ayi":
      return {
        ...allBooks.muharrem_ayi,
        direction:
          allBooks.muharrem_ayi.direction === "ltr" ||
          allBooks.muharrem_ayi.direction === "rtl"
            ? allBooks.muharrem_ayi.direction
            : undefined,
      };
    case "mukaddime":
      return {
        ...allBooks.mukaddime,
        direction:
          allBooks.mukaddime.direction === "ltr" ||
          allBooks.mukaddime.direction === "rtl"
            ? allBooks.mukaddime.direction
            : undefined,
      };
    case "pazartesi_gun_ve_gecesi":
      return {
        ...allBooks.pazartesi_gun_ve_gecesi,
        direction:
          allBooks.pazartesi_gun_ve_gecesi.direction === "ltr" ||
          allBooks.pazartesi_gun_ve_gecesi.direction === "rtl"
            ? allBooks.pazartesi_gun_ve_gecesi.direction
            : undefined,
      };
    case "ramazan_ayi":
      return {
        ...allBooks.ramazan_ayi,
        direction:
          allBooks.ramazan_ayi.direction === "ltr" ||
          allBooks.ramazan_ayi.direction === "rtl"
            ? allBooks.ramazan_ayi.direction
            : undefined,
      };
    case "rebiulahir_cemaziyelevvel_cemaziyelahir":
      return {
        ...allBooks.rebiulahir_cemaziyelevvel_cemaziyelahir,
        direction:
          allBooks.rebiulahir_cemaziyelevvel_cemaziyelahir.direction ===
            "ltr" ||
          allBooks.rebiulahir_cemaziyelevvel_cemaziyelahir.direction === "rtl"
            ? allBooks.rebiulahir_cemaziyelevvel_cemaziyelahir.direction
            : undefined,
      };
    case "rebiulevvel_ayi":
      return {
        ...allBooks.rebiulevvel_ayi,
        direction:
          allBooks.rebiulevvel_ayi.direction === "ltr" ||
          allBooks.rebiulevvel_ayi.direction === "rtl"
            ? allBooks.rebiulevvel_ayi.direction
            : undefined,
      };
    case "recep_ayi":
      return {
        ...allBooks.recep_ayi,
        direction:
          allBooks.recep_ayi.direction === "ltr" ||
          allBooks.recep_ayi.direction === "rtl"
            ? allBooks.recep_ayi.direction
            : undefined,
      };
    case "regaib_gecesi":
      return {
        ...allBooks.regaib_gecesi,
        direction:
          allBooks.regaib_gecesi.direction === "ltr" ||
          allBooks.regaib_gecesi.direction === "rtl"
            ? allBooks.regaib_gecesi.direction
            : undefined,
      };
    case "saban_ayi":
      return {
        ...allBooks.saban_ayi,
        direction:
          allBooks.saban_ayi.direction === "ltr" ||
          allBooks.saban_ayi.direction === "rtl"
            ? allBooks.saban_ayi.direction
            : undefined,
      };
    case "saban_ayinin_son_Gecesi":
      return {
        ...allBooks.saban_ayinin_son_Gecesi,
        direction:
          allBooks.saban_ayinin_son_Gecesi.direction === "ltr" ||
          allBooks.saban_ayinin_son_Gecesi.direction === "rtl"
            ? allBooks.saban_ayinin_son_Gecesi.direction
            : undefined,
      };
    case "safer_ayi":
      return {
        ...allBooks.safer_ayi,
        direction:
          allBooks.safer_ayi.direction === "ltr" ||
          allBooks.safer_ayi.direction === "rtl"
            ? allBooks.safer_ayi.direction
            : undefined,
      };
    case "salavat_hatmesi":
      return {
        ...allBooks.salavat_hatmesi,
        direction:
          allBooks.salavat_hatmesi.direction === "ltr" ||
          allBooks.salavat_hatmesi.direction === "rtl"
            ? allBooks.salavat_hatmesi.direction
            : undefined,
      };
    case "sevval_ayi":
      return {
        ...allBooks.sevval_ayi,
        direction:
          allBooks.sevval_ayi.direction === "ltr" ||
          allBooks.sevval_ayi.direction === "rtl"
            ? allBooks.sevval_ayi.direction
            : undefined,
      };
    case "tevbei_istigfar":
      return {
        ...allBooks.tevbei_istigfar,
        direction:
          allBooks.tevbei_istigfar.direction === "ltr" ||
          allBooks.tevbei_istigfar.direction === "rtl"
            ? allBooks.tevbei_istigfar.direction
            : undefined,
      };
    case "zilhicce_ayi":
      return {
        ...allBooks.zilhicce_ayi,
        direction:
          allBooks.zilhicce_ayi.direction === "ltr" ||
          allBooks.zilhicce_ayi.direction === "rtl"
            ? allBooks.zilhicce_ayi.direction
            : undefined,
      };
    case "zilhicce_son_gecesi":
      return {
        ...allBooks.zilhicce_son_gecesi,
        direction:
          allBooks.zilhicce_son_gecesi.direction === "ltr" ||
          allBooks.zilhicce_son_gecesi.direction === "rtl"
            ? allBooks.zilhicce_son_gecesi.direction
            : undefined,
      };
    case "amel":
      return {
        ...allBooks.amel,
        direction:
          allBooks.amel.direction === "ltr" || allBooks.amel.direction === "rtl"
            ? allBooks.amel.direction
            : undefined,
      };
    case "annebaba":
      return {
        ...allBooks.annebaba,
        direction:
          allBooks.annebaba.direction === "ltr" ||
          allBooks.annebaba.direction === "rtl"
            ? allBooks.annebaba.direction
            : undefined,
      };
    case "guzelahlak":
      return {
        ...allBooks.guzelahlak,
        direction:
          allBooks.guzelahlak.direction === "ltr" ||
          allBooks.guzelahlak.direction === "rtl"
            ? allBooks.guzelahlak.direction
            : undefined,
      };
    case "haset":
      return {
        ...allBooks.haset,
        direction:
          allBooks.haset.direction === "ltr" ||
          allBooks.haset.direction === "rtl"
            ? allBooks.haset.direction
            : undefined,
      };
    case "kibir":
      return {
        ...allBooks.kibir,
        direction:
          allBooks.kibir.direction === "ltr" ||
          allBooks.kibir.direction === "rtl"
            ? allBooks.kibir.direction
            : undefined,
      };
    case "muhabbet":
      return {
        ...allBooks.muhabbet,
        direction:
          allBooks.muhabbet.direction === "ltr" ||
          allBooks.muhabbet.direction === "rtl"
            ? allBooks.muhabbet.direction
            : undefined,
      };
    case "riba":
      return {
        ...allBooks.riba,
        direction:
          allBooks.riba.direction === "ltr" || allBooks.riba.direction === "rtl"
            ? allBooks.riba.direction
            : undefined,
      };
    case "salatu":
      return {
        ...allBooks.salatu,
        direction:
          allBooks.salatu.direction === "ltr" ||
          allBooks.salatu.direction === "rtl"
            ? allBooks.salatu.direction
            : undefined,
      };
    case "takva":
      return {
        ...allBooks.takva,
        direction:
          allBooks.takva.direction === "ltr" ||
          allBooks.takva.direction === "rtl"
            ? allBooks.takva.direction
            : undefined,
      };
    case "teheccud":
      return {
        ...allBooks.teheccud,
        direction:
          allBooks.teheccud.direction === "ltr" ||
          allBooks.teheccud.direction === "rtl"
            ? allBooks.teheccud.direction
            : undefined,
      };
    case "zikir":
      return {
        ...allBooks.zikir,
        direction:
          allBooks.zikir.direction === "ltr" ||
          allBooks.zikir.direction === "rtl"
            ? allBooks.zikir.direction
            : undefined,
      };
    case "iman":
      return {
        ...allBooks.iman,
        direction:
          allBooks.iman.direction === "ltr" || allBooks.iman.direction === "rtl"
            ? allBooks.iman.direction
            : undefined,
      };

    default:
      return [] as unknown as BookProps;
  }
};

export const IlahiHandler = (slug: string): IlahiProps => {
  switch (slug) {
    case "nabi":
      return allBooks.nabi["1"];
    case "yunus_1":
      return allBooks.yunus_1;
    case "yunus_2":
      return allBooks.yunus_2;
    case "yunus_3":
      return allBooks.yunus_3;
    case "yunus_4":
      return allBooks.yunus_4;
    case "yunus_5":
      return allBooks.yunus_5;
    case "yunus_6":
      return allBooks.yunus_6;
    case "la_edri_1":
      return allBooks.la_edri_1;
    case "la_edri_2":
      return allBooks.la_edri_2;
    case "la_edri_3":
      return allBooks.la_edri_3;
    case "la_edri_4":
      return allBooks.la_edri_4;
    case "fuzuli":
      return allBooks.fuzuli_1;
    case "haci_bayram_veli":
      return allBooks.haci_bayram_veli_1;
    case "aziz_mahmud_hudai":
      return allBooks.aziz_mahmud_hudai_1;
    case "ali_ulvi_kurucu":
      return allBooks.ali_ulvi_kurucu_1;
    case "seyyid_nizamoğlu":
      return allBooks.seyyid_nizamoğlu_1;
    case "esad_erbili":
      return allBooks.esad_erbili_1;
    case "kul_yusuf":
      return allBooks.kul_yusuf_1;
    case "seyh_said":
      return allBooks.seyh_said_1;
    case "semi":
      return allBooks.semi_1;
    case "seyfullah":
      return allBooks.seyfullah_1;
    case "habesi":
      return allBooks.habesi_1;
    case "irfani_1":
      return allBooks.irfani_1;
    case "irfani_2":
      return allBooks.irfani_2;
    case "irfani_3":
      return allBooks.irfani_3;
    case "irfani_4":
      return allBooks.irfani_4;
    case "irfani_5":
      return allBooks.irfani_5;
    case "alvarlı_efe_1":
      return allBooks.alvarlı_efe_1;
    case "alvarlı_efe_2":
      return allBooks.alvarlı_efe_2;
    case "alvarlı_efe_3":
      return allBooks.alvarlı_efe_3;
    case "alvarlı_efe_4":
      return allBooks.alvarlı_efe_4;
    case "alvarlı_efe_5":
      return allBooks.alvarlı_efe_5;
    case "alvarlı_efe_6":
      return allBooks.alvarlı_efe_6;
    case "abdulgani_efendi_1":
      return allBooks.abdulgani_efendi_1;
    case "abdulgani_efendi_2":
      return allBooks.abdulgani_efendi_2;
    case "abdulgani_efendi_3":
      return allBooks.abdulgani_efendi_3;
    case "abdulgani_efendi_4":
      return allBooks.abdulgani_efendi_4;
    case "ibrahim_hakki_1":
      return allBooks.ibrahim_hakki_1;
    case "ibrahim_hakki_2":
      return allBooks.ibrahim_hakki_2;
    case "ibrahim_hakki_3":
      return allBooks.ibrahim_hakki_3;
    case "niyazi_1":
      return allBooks.niyazi_1;
    case "niyazi_2":
      return allBooks.niyazi_2;
    case "niyazi_3":
      return allBooks.niyazi_3;
    case "esrefoglu":
      return allBooks.esrefoglu_1;
    case "kuddusi_1":
      return allBooks.kuddusi_1;
    case "kuddusi_2":
      return allBooks.kuddusi_2;
    case "kuddusi_3":
      return allBooks.kuddusi_3;
    default:
      return [] as unknown as IlahiProps;
  }
};
