export const all_books = [
  {
    id: 1,
    title: "Kuran-ı Kerim",
    slug: "kuran",
    read: false,
  },
  {
    id: 2,
    title: "Mecmuat’ul İrfaniyye",
    slug: "mecmua",
    read: false,
  },
  {
    id: 3,
    title: "Mecmuat’ul İrfaniyye (Mealli)",
    slug: "mecmua_meal",
    read: false,
  },
  {
    id: 4,
    title: "Şems-i Nuriye",
    slug: "semsi_nuriye",
    read: true,
  },
  {
    id: 5,
    title: "Hayat-ı Hakika Risalesi",
    slug: "hayati_hakika",
    read: false,
  },
  {
    id: 6,
    title: "Hadis-i Şerifler ve Âyet-i Kerîmeler",
    slug: "hadisler",
    read: false,
  },
  {
    id: 7,
    title: "İlahiler",
    slug: "ilahiler",
    read: false,
  },
];

export const mecmua = [
  {
    id: 1,
    title: "Kur'an-ı Kerim",
    slug: "kurani_kerim",
    read: false,
  },
  {
    id: 2,
    title: "Dua-ı Müstecab",
    slug: "duayi_mustecab",
    read: true,
  },
  {
    id: 3,
    title: "Cevşen-ül Kebir",
    slug: "cevseni_kebir",
    read: false,
  },
  {
    id: 4,
    title: "Dua-ı İsmi Azam",
    slug: "duayi_ismi_azam",
    read: true,
  },
  {
    id: 5,
    title: "Evrad-ı Ümmül Kur'aniyye",
    slug: "evradi_ummul_kuraniyye",
    read: true,
  },
  {
    id: 6,
    title: "Munacat-ı Veysel Karani",
    slug: "munacati_veysel_karani",
    read: true,
  },
  {
    id: 7,
    title: "Evrad-ı Fethiyye",
    slug: "evradi_fethiyye",
    read: true,
  },
  {
    id: 8,
    title: "Evrad-ı Rufaiyye",
    slug: "evradi_rufaiyye",
    read: true,
  },
  {
    id: 9,
    title: "Evrad-ı Kadiriyye",
    slug: "evradi_kadiriyye",
    read: true,
  },
  {
    id: 10,
    title: "Evrad-ı Nakşibendiyye",
    slug: "evradi_naksibendiyye",
    read: true,
  },
  {
    id: 11,
    title: "Delail-ül İrfaniyye",
    slug: "delilul_irfaniyye",
    read: true,
  },
  {
    id: 12,
    title: "Kur'an-ı Kerim'den Dualar",
    slug: "kurani_kerimden_dualar",
    read: true,
  },
];

export const kurani_kerim = [
  {
    id: 5,
    title: "Fatiha Suresi",
    slug: "fatiha",
    read: true,
    startPage: 0,
  },
  {
    id: 2,
    title: "Bakara Suresi",
    slug: "bakara",
    read: true,
    startPage: 1,
  },
  {
    id: 17,
    title: "Yusuf Suresi",
    slug: "yusuf",
    read: true,
    startPage: 2,
  },
  {
    id: 10,
    title: "Kehf Suresi",
    slug: "kehf",
    read: true,
    startPage: 3,
  },
  {
    id: 16,
    title: "Yasin Suresi",
    slug: "yasin",
    read: true,
    startPage: 5,
  },
  {
    id: 4,
    title: "Duhan Suresi",
    slug: "duhan",
    read: true,
    startPage: 11,
  },
  {
    id: 6,
    title: "Fetih Suresi",
    slug: "fetih",
    read: true,
    startPage: 14,
  },
  {
    id: 13,
    title: "Rahman Suresi",
    slug: "rahman",
    read: true,
    startPage: 19,
  },
  {
    id: 15,
    title: "Vakıa Suresi",
    slug: "vakia",
    read: true,
    startPage: 23,
  },
  {
    id: 7,
    title: "Haşir Suresi",
    slug: "hasr",
    read: true,
    startPage: 27,
  },
  {
    id: 3,
    title: "Cuma Suresi",
    slug: "cuma",
    read: true,
    startPage: 29,
  },
  {
    id: 14,
    title: "Tahrim Suresi",
    slug: "tahrim",
    read: true,
    startPage: 31,
  },
  {
    id: 11,
    title: "Mülk Suresi",
    slug: "mulk",
    read: true,
    startPage: 32,
  },
  {
    id: 9,
    title: "İnsan Suresi",
    slug: "insan",
    read: true,
    startPage: 35,
  },
  {
    id: 12,
    title: "Nebe Suresi",
    slug: "nebe",
    read: true,
    startPage: 38,
  },
  {
    id: 1,
    title: "A'la Suresi",
    slug: "ala",
    read: true,
    startPage: 41,
  },
  {
    id: 8,
    title: "Hatim Duası",
    slug: "hatim",
    read: true,
    startPage: 42,
  },
];

export const kuran = [
  {
    cuz: "1",
    id: 0,
    title: "Fatiha",
    slug: "page-0",
    read: true,
    startPage: 0,
    sound: "page-000.mp3",
    img: "page-000.png",
    sure: "Fâtiha Sûresi",
    meal: `/kuran-meal/${0}.docx`,
  },
  {
    cuz: null,
    id: 1,
    title: "Sayfa 1",
    slug: "page-1",
    read: true,
    startPage: 1,
    sound: "page-001.mp3",
    img: "page-001.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${1}.docx`,
  },
  {
    cuz: null,
    id: 2,
    title: "Sayfa 2",
    slug: "page-2",
    read: true,
    startPage: 2,
    sound: "page-002.mp3",
    img: "page-002.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${2}.docx`,
  },
  {
    cuz: null,
    id: 3,
    title: "Sayfa 3",
    slug: "page-3",
    read: true,
    startPage: 3,
    sound: "page-003.mp3",
    img: "page-003.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${3}.docx`,
  },
  {
    cuz: null,
    id: 4,
    title: "Sayfa 4",
    slug: "page-4",
    read: true,
    startPage: 4,
    sound: "page-004.mp3",
    img: "page-004.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${4}.docx`,
  },
  {
    cuz: null,
    id: 5,
    title: "Sayfa 5",
    slug: "page-5",
    read: true,
    startPage: 5,
    sound: "page-005.mp3",
    img: "page-005.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${5}.docx`,
  },
  {
    cuz: null,
    id: 6,
    title: "Sayfa 6",
    slug: "page-6",
    read: true,
    startPage: 6,
    sound: "page-006.mp3",
    img: "page-006.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${6}.docx`,
  },
  {
    cuz: null,
    id: 7,
    title: "Sayfa 7",
    slug: "page-7",
    read: true,
    startPage: 7,
    sound: "page-007.mp3",
    img: "page-007.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${7}.docx`,
  },
  {
    cuz: null,
    id: 8,
    title: "Sayfa 8",
    slug: "page-8",
    read: true,
    startPage: 8,
    sound: "page-008.mp3",
    img: "page-008.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${8}.docx`,
  },
  {
    cuz: null,
    id: 9,
    title: "Sayfa 9",
    slug: "page-9",
    read: true,
    startPage: 9,
    sound: "page-009.mp3",
    img: "page-009.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${9}.docx`,
  },
  {
    cuz: null,
    id: 10,
    title: "Sayfa 10",
    slug: "page-10",
    read: true,
    startPage: 10,
    sound: "page-010.mp3",
    img: "page-010.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${10}.docx`,
  },
  {
    cuz: null,
    id: 11,
    title: "Sayfa 11",
    slug: "page-11",
    read: true,
    startPage: 11,
    sound: "page-011.mp3",
    img: "page-011.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${11}.docx`,
  },
  {
    cuz: null,
    id: 12,
    title: "Sayfa 12",
    slug: "page-12",
    read: true,
    startPage: 12,
    sound: "page-012.mp3",
    img: "page-012.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${12}.docx`,
  },
  {
    cuz: null,
    id: 13,
    title: "Sayfa 13",
    slug: "page-13",
    read: true,
    startPage: 13,
    sound: "page-013.mp3",
    img: "page-013.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${13}.docx`,
  },
  {
    cuz: null,
    id: 14,
    title: "Sayfa 14",
    slug: "page-14",
    read: true,
    startPage: 14,
    sound: "page-014.mp3",
    img: "page-014.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${14}.docx`,
  },
  {
    cuz: null,
    id: 15,
    title: "Sayfa 15",
    slug: "page-15",
    read: true,
    startPage: 15,
    sound: "page-015.mp3",
    img: "page-015.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${15}.docx`,
  },
  {
    cuz: null,
    id: 16,
    title: "Sayfa 16",
    slug: "page-16",
    read: true,
    startPage: 16,
    sound: "page-016.mp3",
    img: "page-016.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${16}.docx`,
  },
  {
    cuz: null,
    id: 17,
    title: "Sayfa 17",
    slug: "page-17",
    read: true,
    startPage: 17,
    sound: "page-017.mp3",
    img: "page-017.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${17}.docx`,
  },
  {
    cuz: null,
    id: 18,
    title: "Sayfa 18",
    slug: "page-18",
    read: true,
    startPage: 18,
    sound: "page-018.mp3",
    img: "page-018.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${18}.docx`,
  },
  {
    cuz: null,
    id: 19,
    title: "Sayfa 19",
    slug: "page-19",
    read: true,
    startPage: 19,
    sound: "page-019.mp3",
    img: "page-019.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${19}.docx`,
  },
  {
    cuz: "2",
    id: 20,
    title: "Sayfa 20",
    slug: "page-20",
    read: true,
    startPage: 20,
    sound: "page-020.mp3",
    img: "page-020.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${20}.docx`,
  },
  {
    cuz: null,
    id: 21,
    title: "Sayfa 21",
    slug: "page-21",
    read: true,
    startPage: 21,
    sound: "page-021.mp3",
    img: "page-021.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${21}.docx`,
  },
  {
    cuz: null,
    id: 22,
    title: "Sayfa 22",
    slug: "page-22",
    read: true,
    startPage: 22,
    sound: "page-022.mp3",
    img: "page-022.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${22}.docx`,
  },
  {
    cuz: null,
    id: 23,
    title: "Sayfa 23",
    slug: "page-23",
    read: true,
    startPage: 23,
    sound: "page-023.mp3",
    img: "page-023.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${23}.docx`,
  },
  {
    cuz: null,
    id: 24,
    title: "Sayfa 24",
    slug: "page-24",
    read: true,
    startPage: 24,
    sound: "page-024.mp3",
    img: "page-024.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${24}.docx`,
  },
  {
    cuz: null,
    id: 25,
    title: "Sayfa 25",
    slug: "page-25",
    read: true,
    startPage: 25,
    sound: "page-025.mp3",
    img: "page-025.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${25}.docx`,
  },
  {
    cuz: null,
    id: 26,
    title: "Sayfa 26",
    slug: "page-26",
    read: true,
    startPage: 26,
    sound: "page-026.mp3",
    img: "page-026.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${26}.docx`,
  },
  {
    cuz: null,
    id: 27,
    title: "Sayfa 27",
    slug: "page-27",
    read: true,
    startPage: 27,
    sound: "page-027.mp3",
    img: "page-027.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${27}.docx`,
  },
  {
    cuz: null,
    id: 28,
    title: "Sayfa 28",
    slug: "page-28",
    read: true,
    startPage: 28,
    sound: "page-028.mp3",
    img: "page-028.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${28}.docx`,
  },
  {
    cuz: null,
    id: 29,
    title: "Sayfa 29",
    slug: "page-29",
    read: true,
    startPage: 29,
    sound: "page-029.mp3",
    img: "page-029.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${29}.docx`,
  },
  {
    cuz: null,
    id: 30,
    title: "Sayfa 30",
    slug: "page-30",
    read: true,
    startPage: 30,
    sound: "page-030.mp3",
    img: "page-030.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${30}.docx`,
  },
  {
    cuz: null,
    id: 31,
    title: "Sayfa 31",
    slug: "page-31",
    read: true,
    startPage: 31,
    sound: "page-031.mp3",
    img: "page-031.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${31}.docx`,
  },
  {
    cuz: null,
    id: 32,
    title: "Sayfa 32",
    slug: "page-32",
    read: true,
    startPage: 32,
    sound: "page-032.mp3",
    img: "page-032.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${32}.docx`,
  },
  {
    cuz: null,
    id: 33,
    title: "Sayfa 33",
    slug: "page-33",
    read: true,
    startPage: 33,
    sound: "page-033.mp3",
    img: "page-033.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${33}.docx`,
  },
  {
    cuz: null,
    id: 34,
    title: "Sayfa 34",
    slug: "page-34",
    read: true,
    startPage: 34,
    sound: "page-034.mp3",
    img: "page-034.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${34}.docx`,
  },
  {
    cuz: null,
    id: 35,
    title: "Sayfa 35",
    slug: "page-35",
    read: true,
    startPage: 35,
    sound: "page-035.mp3",
    img: "page-035.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${35}.docx`,
  },
  {
    cuz: null,
    id: 36,
    title: "Sayfa 36",
    slug: "page-36",
    read: true,
    startPage: 36,
    sound: "page-036.mp3",
    img: "page-036.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${36}.docx`,
  },
  {
    cuz: null,
    id: 37,
    title: "Sayfa 37",
    slug: "page-37",
    read: true,
    startPage: 37,
    sound: "page-037.mp3",
    img: "page-037.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${37}.docx`,
  },
  {
    cuz: null,
    id: 38,
    title: "Sayfa 38",
    slug: "page-38",
    read: true,
    startPage: 38,
    sound: "page-038.mp3",
    img: "page-038.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${38}.docx`,
  },
  {
    cuz: null,
    id: 39,
    title: "Sayfa 39",
    slug: "page-39",
    read: true,
    startPage: 39,
    sound: "page-039.mp3",
    img: "page-039.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${39}.docx`,
  },
  {
    cuz: "3",
    id: 40,
    title: "Sayfa 40",
    slug: "page-40",
    read: true,
    startPage: 40,
    sound: "page-040.mp3",
    img: "page-040.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${40}.docx`,
  },
  {
    cuz: null,
    id: 41,
    title: "Sayfa 41",
    slug: "page-41",
    read: true,
    startPage: 41,
    sound: "page-041.mp3",
    img: "page-041.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${41}.docx`,
  },
  {
    cuz: null,
    id: 42,
    title: "Sayfa 42",
    slug: "page-42",
    read: true,
    startPage: 42,
    sound: "page-042.mp3",
    img: "page-042.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${42}.docx`,
  },
  {
    cuz: null,
    id: 43,
    title: "Sayfa 43",
    slug: "page-43",
    read: true,
    startPage: 43,
    sound: "page-043.mp3",
    img: "page-043.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${43}.docx`,
  },
  {
    cuz: null,
    id: 44,
    title: "Sayfa 44",
    slug: "page-44",
    read: true,
    startPage: 44,
    sound: "page-044.mp3",
    img: "page-044.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${44}.docx`,
  },
  {
    cuz: null,
    id: 45,
    title: "Sayfa 45",
    slug: "page-45",
    read: true,
    startPage: 45,
    sound: "page-045.mp3",
    img: "page-045.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${45}.docx`,
  },
  {
    cuz: null,
    id: 46,
    title: "Sayfa 46",
    slug: "page-46",
    read: true,
    startPage: 46,
    sound: "page-046.mp3",
    img: "page-046.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${46}.docx`,
  },
  {
    cuz: null,
    id: 47,
    title: "Sayfa 47",
    slug: "page-47",
    read: true,
    startPage: 47,
    sound: "page-047.mp3",
    img: "page-047.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${47}.docx`,
  },
  {
    cuz: null,
    id: 48,
    title: "Sayfa 48",
    slug: "page-48",
    read: true,
    startPage: 48,
    sound: "page-048.mp3",
    img: "page-048.png",
    sure: "Bakara Sûresi",
    meal: `/kuran-meal/${48}.docx`,
  },
  {
    cuz: null,
    id: 49,
    title: "Sayfa 49",
    slug: "page-49",
    read: true,
    startPage: 49,
    sound: "page-049.mp3",
    img: "page-049.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${49}.docx`,
  },
  {
    cuz: null,
    id: 50,
    title: "Sayfa 50",
    slug: "page-50",
    read: true,
    startPage: 50,
    sound: "page-050.mp3",
    img: "page-050.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${50}.docx`,
  },
  {
    cuz: null,
    id: 51,
    title: "Sayfa 51",
    slug: "page-51",
    read: true,
    startPage: 51,
    sound: "page-051.mp3",
    img: "page-051.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${51}.docx`,
  },
  {
    cuz: null,
    id: 52,
    title: "Sayfa 52",
    slug: "page-52",
    read: true,
    startPage: 52,
    sound: "page-052.mp3",
    img: "page-052.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${52}.docx`,
  },
  {
    cuz: null,
    id: 53,
    title: "Sayfa 53",
    slug: "page-53",
    read: true,
    startPage: 53,
    sound: "page-053.mp3",
    img: "page-053.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${53}.docx`,
  },
  {
    cuz: null,
    id: 54,
    title: "Sayfa 54",
    slug: "page-54",
    read: true,
    startPage: 54,
    sound: "page-054.mp3",
    img: "page-054.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${54}.docx`,
  },
  {
    cuz: null,
    id: 55,
    title: "Sayfa 55",
    slug: "page-55",
    read: true,
    startPage: 55,
    sound: "page-055.mp3",
    img: "page-055.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${55}.docx`,
  },
  {
    cuz: null,
    id: 56,
    title: "Sayfa 56",
    slug: "page-56",
    read: true,
    startPage: 56,
    sound: "page-056.mp3",
    img: "page-056.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${56}.docx`,
  },
  {
    cuz: null,
    id: 57,
    title: "Sayfa 57",
    slug: "page-57",
    read: true,
    startPage: 57,
    sound: "page-057.mp3",
    img: "page-057.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${57}.docx`,
  },
  {
    cuz: null,
    id: 58,
    title: "Sayfa 58",
    slug: "page-58",
    read: true,
    startPage: 58,
    sound: "page-058.mp3",
    img: "page-058.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${58}.docx`,
  },
  {
    cuz: null,
    id: 59,
    title: "Sayfa 59",
    slug: "page-59",
    read: true,
    startPage: 59,
    sound: "page-059.mp3",
    img: "page-059.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${59}.docx`,
  },
  {
    cuz: "4",
    id: 60,
    title: "Sayfa 60",
    slug: "page-60",
    read: true,
    startPage: 60,
    sound: "page-060.mp3",
    img: "page-060.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${60}.docx`,
  },
  {
    cuz: null,
    id: 61,
    title: "Sayfa 61",
    slug: "page-61",
    read: true,
    startPage: 61,
    sound: "page-061.mp3",
    img: "page-061.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${61}.docx`,
  },
  {
    cuz: null,
    id: 62,
    title: "Sayfa 62",
    slug: "page-62",
    read: true,
    startPage: 62,
    sound: "page-062.mp3",
    img: "page-062.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${62}.docx`,
  },
  {
    cuz: null,
    id: 63,
    title: "Sayfa 63",
    slug: "page-63",
    read: true,
    startPage: 63,
    sound: "page-063.mp3",
    img: "page-063.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${63}.docx`,
  },
  {
    cuz: null,
    id: 64,
    title: "Sayfa 64",
    slug: "page-64",
    read: true,
    startPage: 64,
    sound: "page-064.mp3",
    img: "page-064.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${64}.docx`,
  },
  {
    cuz: null,
    id: 65,
    title: "Sayfa 65",
    slug: "page-65",
    read: true,
    startPage: 65,
    sound: "page-065.mp3",
    img: "page-065.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${65}.docx`,
  },
  {
    cuz: null,
    id: 66,
    title: "Sayfa 66",
    slug: "page-66",
    read: true,
    startPage: 66,
    sound: "page-066.mp3",
    img: "page-066.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${66}.docx`,
  },
  {
    cuz: null,
    id: 67,
    title: "Sayfa 67",
    slug: "page-67",
    read: true,
    startPage: 67,
    sound: "page-067.mp3",
    img: "page-067.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${67}.docx`,
  },
  {
    cuz: null,
    id: 68,
    title: "Sayfa 68",
    slug: "page-68",
    read: true,
    startPage: 68,
    sound: "page-068.mp3",
    img: "page-068.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${68}.docx`,
  },
  {
    cuz: null,
    id: 69,
    title: "Sayfa 69",
    slug: "page-69",
    read: true,
    startPage: 69,
    sound: "page-069.mp3",
    img: "page-069.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${69}.docx`,
  },
  {
    cuz: null,
    id: 70,
    title: "Sayfa 70",
    slug: "page-70",
    read: true,
    startPage: 70,
    sound: "page-070.mp3",
    img: "page-070.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${70}.docx`,
  },
  {
    cuz: null,
    id: 71,
    title: "Sayfa 71",
    slug: "page-71",
    read: true,
    startPage: 71,
    sound: "page-071.mp3",
    img: "page-071.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${71}.docx`,
  },
  {
    cuz: null,
    id: 72,
    title: "Sayfa 72",
    slug: "page-72",
    read: true,
    startPage: 72,
    sound: "page-072.mp3",
    img: "page-072.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${72}.docx`,
  },
  {
    cuz: null,
    id: 73,
    title: "Sayfa 73",
    slug: "page-73",
    read: true,
    startPage: 73,
    sound: "page-073.mp3",
    img: "page-073.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${73}.docx`,
  },
  {
    cuz: null,
    id: 74,
    title: "Sayfa 74",
    slug: "page-74",
    read: true,
    startPage: 74,
    sound: "page-074.mp3",
    img: "page-074.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${74}.docx`,
  },
  {
    cuz: null,
    id: 75,
    title: "Sayfa 75",
    slug: "page-75",
    read: true,
    startPage: 75,
    sound: "page-075.mp3",
    img: "page-075.png",
    sure: "Âl-i İmrân Sûresi",
    meal: `/kuran-meal/${75}.docx`,
  },
  {
    cuz: null,
    id: 76,
    title: "Sayfa 76",
    slug: "page-76",
    read: true,
    startPage: 76,
    sound: "page-076.mp3",
    img: "page-076.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${76}.docx`,
  },
  {
    cuz: null,
    id: 77,
    title: "Sayfa 77",
    slug: "page-77",
    read: true,
    startPage: 77,
    sound: "page-077.mp3",
    img: "page-077.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${77}.docx`,
  },
  {
    cuz: null,
    id: 78,
    title: "Sayfa 78",
    slug: "page-78",
    read: true,
    startPage: 78,
    sound: "page-078.mp3",
    img: "page-078.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${78}.docx`,
  },
  {
    cuz: null,
    id: 79,
    title: "Sayfa 79",
    slug: "page-79",
    read: true,
    startPage: 79,
    sound: "page-079.mp3",
    img: "page-079.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${79}.docx`,
  },
  {
    cuz: "5",
    id: 80,
    title: "Sayfa 80",
    slug: "page-80",
    read: true,
    startPage: 80,
    sound: "page-080.mp3",
    img: "page-080.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${80}.docx`,
  },
  {
    cuz: null,
    id: 81,
    title: "Sayfa 81",
    slug: "page-81",
    read: true,
    startPage: 81,
    sound: "page-081.mp3",
    img: "page-081.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${81}.docx`,
  },
  {
    cuz: null,
    id: 82,
    title: "Sayfa 82",
    slug: "page-82",
    read: true,
    startPage: 82,
    sound: "page-082.mp3",
    img: "page-082.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${82}.docx`,
  },
  {
    cuz: null,
    id: 83,
    title: "Sayfa 83",
    slug: "page-83",
    read: true,
    startPage: 83,
    sound: "page-083.mp3",
    img: "page-083.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${83}.docx`,
  },
  {
    cuz: null,
    id: 84,
    title: "Sayfa 84",
    slug: "page-84",
    read: true,
    startPage: 84,
    sound: "page-084.mp3",
    img: "page-084.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${84}.docx`,
  },
  {
    cuz: null,
    id: 85,
    title: "Sayfa 85",
    slug: "page-85",
    read: true,
    startPage: 85,
    sound: "page-085.mp3",
    img: "page-085.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${85}.docx`,
  },
  {
    cuz: null,
    id: 86,
    title: "Sayfa 86",
    slug: "page-86",
    read: true,
    startPage: 86,
    sound: "page-086.mp3",
    img: "page-086.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${86}.docx`,
  },
  {
    cuz: null,
    id: 87,
    title: "Sayfa 87",
    slug: "page-87",
    read: true,
    startPage: 87,
    sound: "page-087.mp3",
    img: "page-087.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${87}.docx`,
  },
  {
    cuz: null,
    id: 88,
    title: "Sayfa 88",
    slug: "page-88",
    read: true,
    startPage: 88,
    sound: "page-088.mp3",
    img: "page-088.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${88}.docx`,
  },
  {
    cuz: null,
    id: 89,
    title: "Sayfa 89",
    slug: "page-89",
    read: true,
    startPage: 89,
    sound: "page-089.mp3",
    img: "page-089.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${89}.docx`,
  },
  {
    cuz: null,
    id: 90,
    title: "Sayfa 90",
    slug: "page-90",
    read: true,
    startPage: 90,
    sound: "page-090.mp3",
    img: "page-090.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${90}.docx`,
  },
  {
    cuz: null,
    id: 91,
    title: "Sayfa 91",
    slug: "page-91",
    read: true,
    startPage: 91,
    sound: "page-091.mp3",
    img: "page-091.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${91}.docx`,
  },
  {
    cuz: null,
    id: 92,
    title: "Sayfa 92",
    slug: "page-92",
    read: true,
    startPage: 92,
    sound: "page-092.mp3",
    img: "page-092.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${92}.docx`,
  },
  {
    cuz: null,
    id: 93,
    title: "Sayfa 93",
    slug: "page-93",
    read: true,
    startPage: 93,
    sound: "page-093.mp3",
    img: "page-093.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${93}.docx`,
  },
  {
    cuz: null,
    id: 94,
    title: "Sayfa 94",
    slug: "page-94",
    read: true,
    startPage: 94,
    sound: "page-094.mp3",
    img: "page-094.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${94}.docx`,
  },
  {
    cuz: null,
    id: 95,
    title: "Sayfa 95",
    slug: "page-95",
    read: true,
    startPage: 95,
    sound: "page-095.mp3",
    img: "page-095.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${95}.docx`,
  },
  {
    cuz: null,
    id: 96,
    title: "Sayfa 96",
    slug: "page-96",
    read: true,
    startPage: 96,
    sound: "page-096.mp3",
    img: "page-096.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${96}.docx`,
  },
  {
    cuz: null,
    id: 97,
    title: "Sayfa 97",
    slug: "page-97",
    read: true,
    startPage: 97,
    sound: "page-097.mp3",
    img: "page-097.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${97}.docx`,
  },
  {
    cuz: null,
    id: 98,
    title: "Sayfa 98",
    slug: "page-98",
    read: true,
    startPage: 98,
    sound: "page-098.mp3",
    img: "page-098.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${98}.docx`,
  },
  {
    cuz: null,
    id: 99,
    title: "Sayfa 99",
    slug: "page-99",
    read: true,
    startPage: 99,
    sound: "page-099.mp3",
    img: "page-099.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${99}.docx`,
  },
  {
    cuz: "6",
    id: 100,
    title: "Sayfa 100",
    slug: "page-100",
    read: true,
    startPage: 100,
    sound: "page-100.mp3",
    img: "page-100.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${100}.docx`,
  },
  {
    cuz: null,
    id: 101,
    title: "Sayfa 101",
    slug: "page-101",
    read: true,
    startPage: 101,
    sound: "page-101.mp3",
    img: "page-101.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${101}.docx`,
  },
  {
    cuz: null,
    id: 102,
    title: "Sayfa 102",
    slug: "page-102",
    read: true,
    startPage: 102,
    sound: "page-102.mp3",
    img: "page-102.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${102}.docx`,
  },
  {
    cuz: null,
    id: 103,
    title: "Sayfa 103",
    slug: "page-103",
    read: true,
    startPage: 103,
    sound: "page-103.mp3",
    img: "page-103.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${103}.docx`,
  },
  {
    cuz: null,
    id: 104,
    title: "Sayfa 104",
    slug: "page-104",
    read: true,
    startPage: 104,
    sound: "page-104.mp3",
    img: "page-104.png",
    sure: "Nisâ Sûresi",
    meal: `/kuran-meal/${104}.docx`,
  },
  {
    cuz: null,
    id: 105,
    title: "Sayfa 105",
    slug: "page-105",
    read: true,
    startPage: 105,
    sound: "page-105.mp3",
    img: "page-105.png",
    sure: "Mâide Sûresi",
    meal: `/kuran-meal/${105}.docx`,
  },
  {
    cuz: null,
    id: 106,
    title: "Sayfa 106",
    slug: "page-106",
    read: true,
    startPage: 106,
    sound: "page-106.mp3",
    img: "page-106.png",
    sure: "Mâide Sûresi",
    meal: `/kuran-meal/${106}.docx`,
  },
  {
    cuz: null,
    id: 107,
    title: "Sayfa 107",
    slug: "page-107",
    read: true,
    startPage: 107,
    sound: "page-107.mp3",
    img: "page-107.png",
    sure: "Mâide Sûresi",
    meal: `/kuran-meal/${107}.docx`,
  },
  {
    cuz: null,
    id: 108,
    title: "Sayfa 108",
    slug: "page-108",
    read: true,
    startPage: 108,
    sound: "page-108.mp3",
    img: "page-108.png",
    sure: "Mâide Sûresi",
    meal: `/kuran-meal/${108}.docx`,
  },
  {
    cuz: null,
    id: 109,
    title: "Sayfa 109",
    slug: "page-109",
    read: true,
    startPage: 109,
    sound: "page-109.mp3",
    img: "page-109.png",
    sure: "Mâide Sûresi",
    meal: `/kuran-meal/${109}.docx`,
  },
  {
    cuz: null,
    id: 110,
    title: "Sayfa 110",
    slug: "page-110",
    read: true,
    startPage: 110,
    sound: "page-110.mp3",
    img: "page-110.png",
    sure: "Mâide Sûresi",
    meal: `/kuran-meal/${110}.docx`,
  },
  {
    cuz: null,
    id: 111,
    title: "Sayfa 111",
    slug: "page-111",
    read: true,
    startPage: 111,
    sound: "page-111.mp3",
    img: "page-111.png",
    sure: "Mâide Sûresi",
    meal: `/kuran-meal/${111}.docx`,
  },
  {
    cuz: null,
    id: 112,
    title: "Sayfa 112",
    slug: "page-112",
    read: true,
    startPage: 112,
    sound: "page-112.mp3",
    img: "page-112.png",
    sure: "Mâide Sûresi",
    meal: `/kuran-meal/${112}.docx`,
  },
  {
    cuz: null,
    id: 113,
    title: "Sayfa 113",
    slug: "page-113",
    read: true,
    startPage: 113,
    sound: "page-113.mp3",
    img: "page-113.png",
    sure: "Mâide Sûresi",
    meal: `/kuran-meal/${113}.docx`,
  },
  {
    cuz: null,
    id: 114,
    title: "Sayfa 114",
    slug: "page-114",
    read: true,
    startPage: 114,
    sound: "page-114.mp3",
    img: "page-114.png",
    sure: "Mâide Sûresi",
    meal: `/kuran-meal/${114}.docx`,
  },
  {
    cuz: null,
    id: 115,
    title: "Sayfa 115",
    slug: "page-115",
    read: true,
    startPage: 115,
    sound: "page-115.mp3",
    img: "page-115.png",
    sure: "Mâide Sûresi",
    meal: `/kuran-meal/${115}.docx`,
  },
  {
    cuz: null,
    id: 116,
    title: "Sayfa 116",
    slug: "page-116",
    read: true,
    startPage: 116,
    sound: "page-116.mp3",
    img: "page-116.png",
    sure: "Mâide Sûresi",
    meal: `/kuran-meal/${116}.docx`,
  },
  {
    cuz: null,
    id: 117,
    title: "Sayfa 117",
    slug: "page-117",
    read: true,
    startPage: 117,
    sound: "page-117.mp3",
    img: "page-117.png",
    sure: "Mâide Sûresi",
    meal: `/kuran-meal/${117}.docx`,
  },
  {
    cuz: null,
    id: 118,
    title: "Sayfa 118",
    slug: "page-118",
    read: true,
    startPage: 118,
    sound: "page-118.mp3",
    img: "page-118.png",
    sure: "Mâide Sûresi",
    meal: `/kuran-meal/${118}.docx`,
  },
  {
    cuz: null,
    id: 119,
    title: "Sayfa 119",
    slug: "page-119",
    read: true,
    startPage: 119,
    sound: "page-119.mp3",
    img: "page-119.png",
    sure: "Mâide Sûresi",
    meal: `/kuran-meal/${119}.docx`,
  },
  {
    cuz: "7",
    id: 120,
    title: "Sayfa 120",
    slug: "page-120",
    read: true,
    startPage: 120,
    sound: "page-120.mp3",
    img: "page-120.png",
    sure: "Mâide Sûresi",
    meal: `/kuran-meal/${120}.docx`,
  },
  {
    cuz: null,
    id: 121,
    title: "Sayfa 121",
    slug: "page-121",
    read: true,
    startPage: 121,
    sound: "page-121.mp3",
    img: "page-121.png",
    sure: "Mâide Sûresi",
    meal: `/kuran-meal/${121}.docx`,
  },
  {
    cuz: null,
    id: 122,
    title: "Sayfa 122",
    slug: "page-122",
    read: true,
    startPage: 122,
    sound: "page-122.mp3",
    img: "page-122.png",
    sure: "Mâide Sûresi",
    meal: `/kuran-meal/${122}.docx`,
  },
  {
    cuz: null,
    id: 123,
    title: "Sayfa 123",
    slug: "page-123",
    read: true,
    startPage: 123,
    sound: "page-123.mp3",
    img: "page-123.png",
    sure: "Mâide Sûresi",
    meal: `/kuran-meal/${123}.docx`,
  },
  {
    cuz: null,
    id: 124,
    title: "Sayfa 124",
    slug: "page-124",
    read: true,
    startPage: 124,
    sound: "page-124.mp3",
    img: "page-124.png",
    sure: "Mâide Sûresi",
    meal: `/kuran-meal/${124}.docx`,
  },
  {
    cuz: null,
    id: 125,
    title: "Sayfa 125",
    slug: "page-125",
    read: true,
    startPage: 125,
    sound: "page-125.mp3",
    img: "page-125.png",
    sure: "Mâide Sûresi",
    meal: `/kuran-meal/${125}.docx`,
  },
  {
    cuz: null,
    id: 126,
    title: "Sayfa 126",
    slug: "page-126",
    read: true,
    startPage: 126,
    sound: "page-126.mp3",
    img: "page-126.png",
    sure: "Mâide Sûresi",
    meal: `/kuran-meal/${126}.docx`,
  },
  {
    cuz: null,
    id: 127,
    title: "Sayfa 127",
    slug: "page-127",
    read: true,
    startPage: 127,
    sound: "page-127.mp3",
    img: "page-127.png",
    sure: "En'âm Sûresi",
    meal: `/kuran-meal/${127}.docx`,
  },
  {
    cuz: null,
    id: 128,
    title: "Sayfa 128",
    slug: "page-128",
    read: true,
    startPage: 128,
    sound: "page-128.mp3",
    img: "page-128.png",
    sure: "En'âm Sûresi",
    meal: `/kuran-meal/${128}.docx`,
  },
  {
    cuz: null,
    id: 129,
    title: "Sayfa 129",
    slug: "page-129",
    read: true,
    startPage: 129,
    sound: "page-129.mp3",
    img: "page-129.png",
    sure: "En'âm Sûresi",
    meal: `/kuran-meal/${129}.docx`,
  },
  {
    cuz: null,
    id: 130,
    title: "Sayfa 130",
    slug: "page-130",
    read: true,
    startPage: 130,
    sound: "page-130.mp3",
    img: "page-130.png",
    sure: "En'âm Sûresi",
    meal: `/kuran-meal/${130}.docx`,
  },
  {
    cuz: null,
    id: 131,
    title: "Sayfa 131",
    slug: "page-131",
    read: true,
    startPage: 131,
    sound: "page-131.mp3",
    img: "page-131.png",
    sure: "En'âm Sûresi",
    meal: `/kuran-meal/${131}.docx`,
  },
  {
    cuz: null,
    id: 132,
    title: "Sayfa 132",
    slug: "page-132",
    read: true,
    startPage: 132,
    sound: "page-132.mp3",
    img: "page-132.png",
    sure: "En'âm Sûresi",
    meal: `/kuran-meal/${132}.docx`,
  },
  {
    cuz: null,
    id: 133,
    title: "Sayfa 133",
    slug: "page-133",
    read: true,
    startPage: 133,
    sound: "page-133.mp3",
    img: "page-133.png",
    sure: "En'âm Sûresi",
    meal: `/kuran-meal/${133}.docx`,
  },
  {
    cuz: null,
    id: 134,
    title: "Sayfa 134",
    slug: "page-134",
    read: true,
    startPage: 134,
    sound: "page-134.mp3",
    img: "page-134.png",
    sure: "En'âm Sûresi",
    meal: `/kuran-meal/${134}.docx`,
  },
  {
    cuz: null,
    id: 135,
    title: "Sayfa 135",
    slug: "page-135",
    read: true,
    startPage: 135,
    sound: "page-135.mp3",
    img: "page-135.png",
    sure: "En'âm Sûresi",
    meal: `/kuran-meal/${135}.docx`,
  },
  {
    cuz: null,
    id: 136,
    title: "Sayfa 136",
    slug: "page-136",
    read: true,
    startPage: 136,
    sound: "page-136.mp3",
    img: "page-136.png",
    sure: "En'âm Sûresi",
    meal: `/kuran-meal/${136}.docx`,
  },
  {
    cuz: null,
    id: 137,
    title: "Sayfa 137",
    slug: "page-137",
    read: true,
    startPage: 137,
    sound: "page-137.mp3",
    img: "page-137.png",
    sure: "En'âm Sûresi",
    meal: `/kuran-meal/${137}.docx`,
  },
  {
    cuz: null,
    id: 138,
    title: "Sayfa 138",
    slug: "page-138",
    read: true,
    startPage: 138,
    sound: "page-138.mp3",
    img: "page-138.png",
    sure: "En'âm Sûresi",
    meal: `/kuran-meal/${138}.docx`,
  },
  {
    cuz: null,
    id: 139,
    title: "Sayfa 139",
    slug: "page-139",
    read: true,
    startPage: 139,
    sound: "page-139.mp3",
    img: "page-139.png",
    sure: "En'âm Sûresi",
    meal: `/kuran-meal/${139}.docx`,
  },
  {
    cuz: "8",
    id: 140,
    title: "Sayfa 140",
    slug: "page-140",
    read: true,
    startPage: 140,
    sound: "page-140.mp3",
    img: "page-140.png",
    sure: "En'âm Sûresi",
    meal: `/kuran-meal/${140}.docx`,
  },
  {
    cuz: null,
    id: 141,
    title: "Sayfa 141",
    slug: "page-141",
    read: true,
    startPage: 141,
    sound: "page-141.mp3",
    img: "page-141.png",
    sure: "En'âm Sûresi",
    meal: `/kuran-meal/${141}.docx`,
  },
  {
    cuz: null,
    id: 142,
    title: "Sayfa 142",
    slug: "page-142",
    read: true,
    startPage: 142,
    sound: "page-142.mp3",
    img: "page-142.png",
    sure: "En'âm Sûresi",
    meal: `/kuran-meal/${142}.docx`,
  },
  {
    cuz: null,
    id: 143,
    title: "Sayfa 143",
    slug: "page-143",
    read: true,
    startPage: 143,
    sound: "page-143.mp3",
    img: "page-143.png",
    sure: "En'âm Sûresi",
    meal: `/kuran-meal/${143}.docx`,
  },
  {
    cuz: null,
    id: 144,
    title: "Sayfa 144",
    slug: "page-144",
    read: true,
    startPage: 144,
    sound: "page-144.mp3",
    img: "page-144.png",
    sure: "En'âm Sûresi",
    meal: `/kuran-meal/${144}.docx`,
  },
  {
    cuz: null,
    id: 145,
    title: "Sayfa 145",
    slug: "page-145",
    read: true,
    startPage: 145,
    sound: "page-145.mp3",
    img: "page-145.png",
    sure: "En'âm Sûresi",
    meal: `/kuran-meal/${145}.docx`,
  },
  {
    cuz: null,
    id: 146,
    title: "Sayfa 146",
    slug: "page-146",
    read: true,
    startPage: 146,
    sound: "page-146.mp3",
    img: "page-146.png",
    sure: "En'âm Sûresi",
    meal: `/kuran-meal/${146}.docx`,
  },
  {
    cuz: null,
    id: 147,
    title: "Sayfa 147",
    slug: "page-147",
    read: true,
    startPage: 147,
    sound: "page-147.mp3",
    img: "page-147.png",
    sure: "En'âm Sûresi",
    meal: `/kuran-meal/${147}.docx`,
  },
  {
    cuz: null,
    id: 148,
    title: "Sayfa 148",
    slug: "page-148",
    read: true,
    startPage: 148,
    sound: "page-148.mp3",
    img: "page-148.png",
    sure: "En'âm Sûresi",
    meal: `/kuran-meal/${148}.docx`,
  },
  {
    cuz: null,
    id: 149,
    title: "Sayfa 149",
    slug: "page-149",
    read: true,
    startPage: 149,
    sound: "page-149.mp3",
    img: "page-149.png",
    sure: "En'âm Sûresi",
    meal: `/kuran-meal/${149}.docx`,
  },
  {
    cuz: null,
    id: 150,
    title: "Sayfa 150",
    slug: "page-150",
    read: true,
    startPage: 150,
    sound: "page-150.mp3",
    img: "page-150.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${150}.docx`,
  },
  {
    cuz: null,
    id: 151,
    title: "Sayfa 151",
    slug: "page-151",
    read: true,
    startPage: 151,
    sound: "page-151.mp3",
    img: "page-151.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${151}.docx`,
  },
  {
    cuz: null,
    id: 152,
    title: "Sayfa 152",
    slug: "page-152",
    read: true,
    startPage: 152,
    sound: "page-152.mp3",
    img: "page-152.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${152}.docx`,
  },
  {
    cuz: null,
    id: 153,
    title: "Sayfa 153",
    slug: "page-153",
    read: true,
    startPage: 153,
    sound: "page-153.mp3",
    img: "page-153.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${153}.docx`,
  },
  {
    cuz: null,
    id: 154,
    title: "Sayfa 154",
    slug: "page-154",
    read: true,
    startPage: 154,
    sound: "page-154.mp3",
    img: "page-154.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${154}.docx`,
  },
  {
    cuz: null,
    id: 155,
    title: "Sayfa 155",
    slug: "page-155",
    read: true,
    startPage: 155,
    sound: "page-155.mp3",
    img: "page-155.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${155}.docx`,
  },
  {
    cuz: null,
    id: 156,
    title: "Sayfa 156",
    slug: "page-156",
    read: true,
    startPage: 156,
    sound: "page-156.mp3",
    img: "page-156.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${156}.docx`,
  },
  {
    cuz: null,
    id: 157,
    title: "Sayfa 157",
    slug: "page-157",
    read: true,
    startPage: 157,
    sound: "page-157.mp3",
    img: "page-157.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${157}.docx`,
  },
  {
    cuz: null,
    id: 158,
    title: "Sayfa 158",
    slug: "page-158",
    read: true,
    startPage: 158,
    sound: "page-158.mp3",
    img: "page-158.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${158}.docx`,
  },
  {
    cuz: null,
    id: 159,
    title: "Sayfa 159",
    slug: "page-159",
    read: true,
    startPage: 159,
    sound: "page-159.mp3",
    img: "page-159.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${159}.docx`,
  },
  {
    cuz: "9",
    id: 160,
    title: "Sayfa 160",
    slug: "page-160",
    read: true,
    startPage: 160,
    sound: "page-160.mp3",
    img: "page-160.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${160}.docx`,
  },
  {
    cuz: null,
    id: 161,
    title: "Sayfa 161",
    slug: "page-161",
    read: true,
    startPage: 161,
    sound: "page-161.mp3",
    img: "page-161.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${161}.docx`,
  },
  {
    cuz: null,
    id: 162,
    title: "Sayfa 162",
    slug: "page-162",
    read: true,
    startPage: 162,
    sound: "page-162.mp3",
    img: "page-162.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${162}.docx`,
  },
  {
    cuz: null,
    id: 163,
    title: "Sayfa 163",
    slug: "page-163",
    read: true,
    startPage: 163,
    sound: "page-163.mp3",
    img: "page-163.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${163}.docx`,
  },
  {
    cuz: null,
    id: 164,
    title: "Sayfa 164",
    slug: "page-164",
    read: true,
    startPage: 164,
    sound: "page-164.mp3",
    img: "page-164.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${164}.docx`,
  },
  {
    cuz: null,
    id: 165,
    title: "Sayfa 165",
    slug: "page-165",
    read: true,
    startPage: 165,
    sound: "page-165.mp3",
    img: "page-165.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${165}.docx`,
  },
  {
    cuz: null,
    id: 166,
    title: "Sayfa 166",
    slug: "page-166",
    read: true,
    startPage: 166,
    sound: "page-166.mp3",
    img: "page-166.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${166}.docx`,
  },
  {
    cuz: null,
    id: 167,
    title: "Sayfa 167",
    slug: "page-167",
    read: true,
    startPage: 167,
    sound: "page-167.mp3",
    img: "page-167.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${167}.docx`,
  },
  {
    cuz: null,
    id: 168,
    title: "Sayfa 168",
    slug: "page-168",
    read: true,
    startPage: 168,
    sound: "page-168.mp3",
    img: "page-168.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${168}.docx`,
  },
  {
    cuz: null,
    id: 169,
    title: "Sayfa 169",
    slug: "page-169",
    read: true,
    startPage: 169,
    sound: "page-169.mp3",
    img: "page-169.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${169}.docx`,
  },
  {
    cuz: null,
    id: 170,
    title: "Sayfa 170",
    slug: "page-170",
    read: true,
    startPage: 170,
    sound: "page-170.mp3",
    img: "page-170.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${170}.docx`,
  },
  {
    cuz: null,
    id: 171,
    title: "Sayfa 171",
    slug: "page-171",
    read: true,
    startPage: 171,
    sound: "page-171.mp3",
    img: "page-171.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${171}.docx`,
  },
  {
    cuz: null,
    id: 172,
    title: "Sayfa 172",
    slug: "page-172",
    read: true,
    startPage: 172,
    sound: "page-172.mp3",
    img: "page-172.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${172}.docx`,
  },
  {
    cuz: null,
    id: 173,
    title: "Sayfa 173",
    slug: "page-173",
    read: true,
    startPage: 173,
    sound: "page-173.mp3",
    img: "page-173.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${173}.docx`,
  },
  {
    cuz: null,
    id: 174,
    title: "Sayfa 174",
    slug: "page-174",
    read: true,
    startPage: 174,
    sound: "page-174.mp3",
    img: "page-174.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${174}.docx`,
  },
  {
    cuz: null,
    id: 175,
    title: "Sayfa 175",
    slug: "page-175",
    read: true,
    startPage: 175,
    sound: "page-175.mp3",
    img: "page-175.png",
    sure: "A'râf Sûresi",
    meal: `/kuran-meal/${175}.docx`,
  },
  {
    cuz: null,
    id: 176,
    title: "Sayfa 176",
    slug: "page-176",
    read: true,
    startPage: 176,
    sound: "page-176.mp3",
    img: "page-176.png",
    sure: "Enfâl Sûresi",
    meal: `/kuran-meal/${176}.docx`,
  },
  {
    cuz: null,
    id: 177,
    title: "Sayfa 177",
    slug: "page-177",
    read: true,
    startPage: 177,
    sound: "page-177.mp3",
    img: "page-177.png",
    sure: "Enfâl Sûresi",
    meal: `/kuran-meal/${177}.docx`,
  },
  {
    cuz: null,
    id: 178,
    title: "Sayfa 178",
    slug: "page-178",
    read: true,
    startPage: 178,
    sound: "page-178.mp3",
    img: "page-178.png",
    sure: "Enfâl Sûresi",
    meal: `/kuran-meal/${178}.docx`,
  },
  {
    cuz: null,
    id: 179,
    title: "Sayfa 179",
    slug: "page-179",
    read: true,
    startPage: 179,
    sound: "page-179.mp3",
    img: "page-179.png",
    sure: "Enfâl Sûresi",
    meal: `/kuran-meal/${179}.docx`,
  },
  {
    cuz: "10",
    id: 180,
    title: "Sayfa 180",
    slug: "page-180",
    read: true,
    startPage: 180,
    sound: "page-180.mp3",
    img: "page-180.png",
    sure: "Enfâl Sûresi",
    meal: `/kuran-meal/${180}.docx`,
  },
  {
    cuz: null,
    id: 181,
    title: "Sayfa 181",
    slug: "page-181",
    read: true,
    startPage: 181,
    sound: "page-181.mp3",
    img: "page-181.png",
    sure: "Enfâl Sûresi",
    meal: `/kuran-meal/${181}.docx`,
  },
  {
    cuz: null,
    id: 182,
    title: "Sayfa 182",
    slug: "page-182",
    read: true,
    startPage: 182,
    sound: "page-182.mp3",
    img: "page-182.png",
    sure: "Enfâl Sûresi",
    meal: `/kuran-meal/${182}.docx`,
  },
  {
    cuz: null,
    id: 183,
    title: "Sayfa 183",
    slug: "page-183",
    read: true,
    startPage: 183,
    sound: "page-183.mp3",
    img: "page-183.png",
    sure: "Enfâl Sûresi",
    meal: `/kuran-meal/${183}.docx`,
  },
  {
    cuz: null,
    id: 184,
    title: "Sayfa 184",
    slug: "page-184",
    read: true,
    startPage: 184,
    sound: "page-184.mp3",
    img: "page-184.png",
    sure: "Enfâl Sûresi",
    meal: `/kuran-meal/${184}.docx`,
  },
  {
    cuz: null,
    id: 185,
    title: "Sayfa 185",
    slug: "page-185",
    read: true,
    startPage: 185,
    sound: "page-185.mp3",
    img: "page-185.png",
    sure: "Enfâl Sûresi",
    meal: `/kuran-meal/${185}.docx`,
  },
  {
    cuz: null,
    id: 186,
    title: "Sayfa 186",
    slug: "page-186",
    read: true,
    startPage: 186,
    sound: "page-186.mp3",
    img: "page-186.png",
    sure: "Tevbe Sûresi",
    meal: `/kuran-meal/${186}.docx`,
  },
  {
    cuz: null,
    id: 187,
    title: "Sayfa 187",
    slug: "page-187",
    read: true,
    startPage: 187,
    sound: "page-187.mp3",
    img: "page-187.png",
    sure: "Tevbe Sûresi",
    meal: `/kuran-meal/${187}.docx`,
  },
  {
    cuz: null,
    id: 188,
    title: "Sayfa 188",
    slug: "page-188",
    read: true,
    startPage: 188,
    sound: "page-188.mp3",
    img: "page-188.png",
    sure: "Tevbe Sûresi",
    meal: `/kuran-meal/${188}.docx`,
  },
  {
    cuz: null,
    id: 189,
    title: "Sayfa 189",
    slug: "page-189",
    read: true,
    startPage: 189,
    sound: "page-189.mp3",
    img: "page-189.png",
    sure: "Tevbe Sûresi",
    meal: `/kuran-meal/${189}.docx`,
  },
  {
    cuz: null,
    id: 190,
    title: "Sayfa 190",
    slug: "page-190",
    read: true,
    startPage: 190,
    sound: "page-190.mp3",
    img: "page-190.png",
    sure: "Tevbe Sûresi",
    meal: `/kuran-meal/${190}.docx`,
  },
  {
    cuz: null,
    id: 191,
    title: "Sayfa 191",
    slug: "page-191",
    read: true,
    startPage: 191,
    sound: "page-191.mp3",
    img: "page-191.png",
    sure: "Tevbe Sûresi",
    meal: `/kuran-meal/${191}.docx`,
  },
  {
    cuz: null,
    id: 192,
    title: "Sayfa 192",
    slug: "page-192",
    read: true,
    startPage: 192,
    sound: "page-192.mp3",
    img: "page-192.png",
    sure: "Tevbe Sûresi",
    meal: `/kuran-meal/${192}.docx`,
  },
  {
    cuz: null,
    id: 193,
    title: "Sayfa 193",
    slug: "page-193",
    read: true,
    startPage: 193,
    sound: "page-193.mp3",
    img: "page-193.png",
    sure: "Tevbe Sûresi",
    meal: `/kuran-meal/${193}.docx`,
  },
  {
    cuz: null,
    id: 194,
    title: "Sayfa 194",
    slug: "page-194",
    read: true,
    startPage: 194,
    sound: "page-194.mp3",
    img: "page-194.png",
    sure: "Tevbe Sûresi",
    meal: `/kuran-meal/${194}.docx`,
  },
  {
    cuz: null,
    id: 195,
    title: "Sayfa 195",
    slug: "page-195",
    read: true,
    startPage: 195,
    sound: "page-195.mp3",
    img: "page-195.png",
    sure: "Tevbe Sûresi",
    meal: `/kuran-meal/${195}.docx`,
  },
  {
    cuz: null,
    id: 196,
    title: "Sayfa 196",
    slug: "page-196",
    read: true,
    startPage: 196,
    sound: "page-196.mp3",
    img: "page-196.png",
    sure: "Tevbe Sûresi",
    meal: `/kuran-meal/${196}.docx`,
  },
  {
    cuz: null,
    id: 197,
    title: "Sayfa 197",
    slug: "page-197",
    read: true,
    startPage: 197,
    sound: "page-197.mp3",
    img: "page-197.png",
    sure: "Tevbe Sûresi",
    meal: `/kuran-meal/${197}.docx`,
  },
  {
    cuz: null,
    id: 198,
    title: "Sayfa 198",
    slug: "page-198",
    read: true,
    startPage: 198,
    sound: "page-198.mp3",
    img: "page-198.png",
    sure: "Tevbe Sûresi",
    meal: `/kuran-meal/${198}.docx`,
  },
  {
    cuz: null,
    id: 199,
    title: "Sayfa 199",
    slug: "page-199",
    read: true,
    startPage: 199,
    sound: "page-199.mp3",
    img: "page-199.png",
    sure: "Tevbe Sûresi",
    meal: `/kuran-meal/${199}.docx`,
  },
  {
    cuz: "11",
    id: 200,
    title: "Sayfa 200",
    slug: "page-200",
    read: true,
    startPage: 200,
    sound: "page-200.mp3",
    img: "page-200.png",
    sure: "Tevbe Sûresi",
    meal: `/kuran-meal/${200}.docx`,
  },
  {
    cuz: null,
    id: 201,
    title: "Sayfa 201",
    slug: "page-201",
    read: true,
    startPage: 201,
    sound: "page-201.mp3",
    img: "page-201.png",
    sure: "Tevbe Sûresi",
    meal: `/kuran-meal/${201}.docx`,
  },
  {
    cuz: null,
    id: 202,
    title: "Sayfa 202",
    slug: "page-202",
    read: true,
    startPage: 202,
    sound: "page-202.mp3",
    img: "page-202.png",
    sure: "Tevbe Sûresi",
    meal: `/kuran-meal/${202}.docx`,
  },
  {
    cuz: null,
    id: 203,
    title: "Sayfa 203",
    slug: "page-203",
    read: true,
    startPage: 203,
    sound: "page-203.mp3",
    img: "page-203.png",
    sure: "Tevbe Sûresi",
    meal: `/kuran-meal/${203}.docx`,
  },
  {
    cuz: null,
    id: 204,
    title: "Sayfa 204",
    slug: "page-204",
    read: true,
    startPage: 204,
    sound: "page-204.mp3",
    img: "page-204.png",
    sure: "Tevbe Sûresi",
    meal: `/kuran-meal/${204}.docx`,
  },
  {
    cuz: null,
    id: 205,
    title: "Sayfa 205",
    slug: "page-205",
    read: true,
    startPage: 205,
    sound: "page-205.mp3",
    img: "page-205.png",
    sure: "Tevbe Sûresi",
    meal: `/kuran-meal/${205}.docx`,
  },
  {
    cuz: null,
    id: 206,
    title: "Sayfa 206",
    slug: "page-206",
    read: true,
    startPage: 206,
    sound: "page-206.mp3",
    img: "page-206.png",
    sure: "Tevbe Sûresi",
    meal: `/kuran-meal/${206}.docx`,
  },
  {
    cuz: null,
    id: 207,
    title: "Sayfa 207",
    slug: "page-207",
    read: true,
    startPage: 207,
    sound: "page-207.mp3",
    img: "page-207.png",
    sure: "Yunus Sûresi",
    meal: `/kuran-meal/${207}.docx`,
  },
  {
    cuz: null,
    id: 208,
    title: "Sayfa 208",
    slug: "page-208",
    read: true,
    startPage: 208,
    sound: "page-208.mp3",
    img: "page-208.png",
    sure: "Yunus Sûresi",
    meal: `/kuran-meal/${208}.docx`,
  },
  {
    cuz: null,
    id: 209,
    title: "Sayfa 209",
    slug: "page-209",
    read: true,
    startPage: 209,
    sound: "page-209.mp3",
    img: "page-209.png",
    sure: "Yunus Sûresi",
    meal: `/kuran-meal/${209}.docx`,
  },
  {
    cuz: null,
    id: 210,
    title: "Sayfa 210",
    slug: "page-210",
    read: true,
    startPage: 210,
    sound: "page-210.mp3",
    img: "page-210.png",
    sure: "Yunus Sûresi",
    meal: `/kuran-meal/${210}.docx`,
  },
  {
    cuz: null,
    id: 211,
    title: "Sayfa 211",
    slug: "page-211",
    read: true,
    startPage: 211,
    sound: "page-211.mp3",
    img: "page-211.png",
    sure: "Yunus Sûresi",
    meal: `/kuran-meal/${211}.docx`,
  },
  {
    cuz: null,
    id: 212,
    title: "Sayfa 212",
    slug: "page-212",
    read: true,
    startPage: 212,
    sound: "page-212.mp3",
    img: "page-212.png",
    sure: "Yunus Sûresi",
    meal: `/kuran-meal/${212}.docx`,
  },
  {
    cuz: null,
    id: 213,
    title: "Sayfa 213",
    slug: "page-213",
    read: true,
    startPage: 213,
    sound: "page-213.mp3",
    img: "page-213.png",
    sure: "Yunus Sûresi",
    meal: `/kuran-meal/${213}.docx`,
  },
  {
    cuz: null,
    id: 214,
    title: "Sayfa 214",
    slug: "page-214",
    read: true,
    startPage: 214,
    sound: "page-214.mp3",
    img: "page-214.png",
    sure: "Yunus Sûresi",
    meal: `/kuran-meal/${214}.docx`,
  },
  {
    cuz: null,
    id: 215,
    title: "Sayfa 215",
    slug: "page-215",
    read: true,
    startPage: 215,
    sound: "page-215.mp3",
    img: "page-215.png",
    sure: "Yunus Sûresi",
    meal: `/kuran-meal/${215}.docx`,
  },
  {
    cuz: null,
    id: 216,
    title: "Sayfa 216",
    slug: "page-216",
    read: true,
    startPage: 216,
    sound: "page-216.mp3",
    img: "page-216.png",
    sure: "Yunus Sûresi",
    meal: `/kuran-meal/${216}.docx`,
  },
  {
    cuz: null,
    id: 217,
    title: "Sayfa 217",
    slug: "page-217",
    read: true,
    startPage: 217,
    sound: "page-217.mp3",
    img: "page-217.png",
    sure: "Yunus Sûresi",
    meal: `/kuran-meal/${217}.docx`,
  },
  {
    cuz: null,
    id: 218,
    title: "Sayfa 218",
    slug: "page-218",
    read: true,
    startPage: 218,
    sound: "page-218.mp3",
    img: "page-218.png",
    sure: "Yunus Sûresi",
    meal: `/kuran-meal/${218}.docx`,
  },
  {
    cuz: null,
    id: 219,
    title: "Sayfa 219",
    slug: "page-219",
    read: true,
    startPage: 219,
    sound: "page-219.mp3",
    img: "page-219.png",
    sure: "Yunus Sûresi",
    meal: `/kuran-meal/${219}.docx`,
  },
  {
    cuz: "12",
    id: 220,
    title: "Sayfa 220",
    slug: "page-220",
    read: true,
    startPage: 220,
    sound: "page-220.mp3",
    img: "page-220.png",
    sure: "Hûd Sûresi",
    meal: `/kuran-meal/${220}.docx`,
  },
  {
    cuz: null,
    id: 221,
    title: "Sayfa 221",
    slug: "page-221",
    read: true,
    startPage: 221,
    sound: "page-221.mp3",
    img: "page-221.png",
    sure: "Hûd Sûresi",
    meal: `/kuran-meal/${221}.docx`,
  },
  {
    cuz: null,
    id: 222,
    title: "Sayfa 222",
    slug: "page-222",
    read: true,
    startPage: 222,
    sound: "page-222.mp3",
    img: "page-222.png",
    sure: "Hûd Sûresi",
    meal: `/kuran-meal/${222}.docx`,
  },
  {
    cuz: null,
    id: 223,
    title: "Sayfa 223",
    slug: "page-223",
    read: true,
    startPage: 223,
    sound: "page-223.mp3",
    img: "page-223.png",
    sure: "Hûd Sûresi",
    meal: `/kuran-meal/${223}.docx`,
  },
  {
    cuz: null,
    id: 224,
    title: "Sayfa 224",
    slug: "page-224",
    read: true,
    startPage: 224,
    sound: "page-224.mp3",
    img: "page-224.png",
    sure: "Hûd Sûresi",
    meal: `/kuran-meal/${224}.docx`,
  },
  {
    cuz: null,
    id: 225,
    title: "Sayfa 225",
    slug: "page-225",
    read: true,
    startPage: 225,
    sound: "page-225.mp3",
    img: "page-225.png",
    sure: "Hûd Sûresi",
    meal: `/kuran-meal/${225}.docx`,
  },
  {
    cuz: null,
    id: 226,
    title: "Sayfa 226",
    slug: "page-226",
    read: true,
    startPage: 226,
    sound: "page-226.mp3",
    img: "page-226.png",
    sure: "Hûd Sûresi",
    meal: `/kuran-meal/${226}.docx`,
  },
  {
    cuz: null,
    id: 227,
    title: "Sayfa 227",
    slug: "page-227",
    read: true,
    startPage: 227,
    sound: "page-227.mp3",
    img: "page-227.png",
    sure: "Hûd Sûresi",
    meal: `/kuran-meal/${227}.docx`,
  },
  {
    cuz: null,
    id: 228,
    title: "Sayfa 228",
    slug: "page-228",
    read: true,
    startPage: 228,
    sound: "page-228.mp3",
    img: "page-228.png",
    sure: "Hûd Sûresi",
    meal: `/kuran-meal/${228}.docx`,
  },
  {
    cuz: null,
    id: 229,
    title: "Sayfa 229",
    slug: "page-229",
    read: true,
    startPage: 229,
    sound: "page-229.mp3",
    img: "page-229.png",
    sure: "Hûd Sûresi",
    meal: `/kuran-meal/${229}.docx`,
  },
  {
    cuz: null,
    id: 230,
    title: "Sayfa 230",
    slug: "page-230",
    read: true,
    startPage: 230,
    sound: "page-230.mp3",
    img: "page-230.png",
    sure: "Hûd Sûresi",
    meal: `/kuran-meal/${230}.docx`,
  },
  {
    cuz: null,
    id: 231,
    title: "Sayfa 231",
    slug: "page-231",
    read: true,
    startPage: 231,
    sound: "page-231.mp3",
    img: "page-231.png",
    sure: "Hûd Sûresi",
    meal: `/kuran-meal/${231}.docx`,
  },
  {
    cuz: null,
    id: 232,
    title: "Sayfa 232",
    slug: "page-232",
    read: true,
    startPage: 232,
    sound: "page-232.mp3",
    img: "page-232.png",
    sure: "Hûd Sûresi",
    meal: `/kuran-meal/${232}.docx`,
  },
  {
    cuz: null,
    id: 233,
    title: "Sayfa 233",
    slug: "page-233",
    read: true,
    startPage: 233,
    sound: "page-233.mp3",
    img: "page-233.png",
    sure: "Hûd Sûresi",
    meal: `/kuran-meal/${233}.docx`,
  },
  {
    cuz: null,
    id: 234,
    title: "Sayfa 234",
    slug: "page-234",
    read: true,
    startPage: 234,
    sound: "page-234.mp3",
    img: "page-234.png",
    sure: "Yusuf Sûresi",
    meal: `/kuran-meal/${234}.docx`,
  },
  {
    cuz: null,
    id: 235,
    title: "Sayfa 235",
    slug: "page-235",
    read: true,
    startPage: 235,
    sound: "page-235.mp3",
    img: "page-235.png",
    sure: "Yusuf Sûresi",
    meal: `/kuran-meal/${235}.docx`,
  },
  {
    cuz: null,
    id: 236,
    title: "Sayfa 236",
    slug: "page-236",
    read: true,
    startPage: 236,
    sound: "page-236.mp3",
    img: "page-236.png",
    sure: "Yusuf Sûresi",
    meal: `/kuran-meal/${236}.docx`,
  },
  {
    cuz: null,
    id: 237,
    title: "Sayfa 237",
    slug: "page-237",
    read: true,
    startPage: 237,
    sound: "page-237.mp3",
    img: "page-237.png",
    sure: "Yusuf Sûresi",
    meal: `/kuran-meal/${237}.docx`,
  },
  {
    cuz: null,
    id: 238,
    title: "Sayfa 238",
    slug: "page-238",
    read: true,
    startPage: 238,
    sound: "page-238.mp3",
    img: "page-238.png",
    sure: "Yusuf Sûresi",
    meal: `/kuran-meal/${238}.docx`,
  },
  {
    cuz: null,
    id: 239,
    title: "Sayfa 239",
    slug: "page-239",
    read: true,
    startPage: 239,
    sound: "page-239.mp3",
    img: "page-239.png",
    sure: "Yusuf Sûresi",
    meal: `/kuran-meal/${239}.docx`,
  },
  {
    cuz: "13",
    id: 240,
    title: "Sayfa 240",
    slug: "page-240",
    read: true,
    startPage: 240,
    sound: "page-240.mp3",
    img: "page-240.png",
    sure: "Yusuf Sûresi",
    meal: `/kuran-meal/${240}.docx`,
  },
  {
    cuz: null,
    id: 241,
    title: "Sayfa 241",
    slug: "page-241",
    read: true,
    startPage: 241,
    sound: "page-241.mp3",
    img: "page-241.png",
    sure: "Yusuf Sûresi",
    meal: `/kuran-meal/${241}.docx`,
  },
  {
    cuz: null,
    id: 242,
    title: "Sayfa 242",
    slug: "page-242",
    read: true,
    startPage: 242,
    sound: "page-242.mp3",
    img: "page-242.png",
    sure: "Yusuf Sûresi",
    meal: `/kuran-meal/${242}.docx`,
  },
  {
    cuz: null,
    id: 243,
    title: "Sayfa 243",
    slug: "page-243",
    read: true,
    startPage: 243,
    sound: "page-243.mp3",
    img: "page-243.png",
    sure: "Yusuf Sûresi",
    meal: `/kuran-meal/${243}.docx`,
  },
  {
    cuz: null,
    id: 244,
    title: "Sayfa 244",
    slug: "page-244",
    read: true,
    startPage: 244,
    sound: "page-244.mp3",
    img: "page-244.png",
    sure: "Yusuf Sûresi",
    meal: `/kuran-meal/${244}.docx`,
  },
  {
    cuz: null,
    id: 245,
    title: "Sayfa 245",
    slug: "page-245",
    read: true,
    startPage: 245,
    sound: "page-245.mp3",
    img: "page-245.png",
    sure: "Yusuf Sûresi",
    meal: `/kuran-meal/${245}.docx`,
  },
  {
    cuz: null,
    id: 246,
    title: "Sayfa 246",
    slug: "page-246",
    read: true,
    startPage: 246,
    sound: "page-246.mp3",
    img: "page-246.png",
    sure: "Yusuf Sûresi",
    meal: `/kuran-meal/${246}.docx`,
  },
  {
    cuz: null,
    id: 247,
    title: "Sayfa 247",
    slug: "page-247",
    read: true,
    startPage: 247,
    sound: "page-247.mp3",
    img: "page-247.png",
    sure: "Yusuf Sûresi",
    meal: `/kuran-meal/${247}.docx`,
  },
  {
    cuz: null,
    id: 248,
    title: "Sayfa 248",
    slug: "page-248",
    read: true,
    startPage: 248,
    sound: "page-248.mp3",
    img: "page-248.png",
    sure: "Ra'd Sûresi",
    meal: `/kuran-meal/${248}.docx`,
  },
  {
    cuz: null,
    id: 249,
    title: "Sayfa 249",
    slug: "page-249",
    read: true,
    startPage: 249,
    sound: "page-249.mp3",
    img: "page-249.png",
    sure: "Ra'd Sûresi",
    meal: `/kuran-meal/${249}.docx`,
  },
  {
    cuz: null,
    id: 250,
    title: "Sayfa 250",
    slug: "page-250",
    read: true,
    startPage: 250,
    sound: "page-250.mp3",
    img: "page-250.png",
    sure: "Ra'd Sûresi",
    meal: `/kuran-meal/${250}.docx`,
  },
  {
    cuz: null,
    id: 251,
    title: "Sayfa 251",
    slug: "page-251",
    read: true,
    startPage: 251,
    sound: "page-251.mp3",
    img: "page-251.png",
    sure: "Ra'd Sûresi",
    meal: `/kuran-meal/${251}.docx`,
  },
  {
    cuz: null,
    id: 252,
    title: "Sayfa 252",
    slug: "page-252",
    read: true,
    startPage: 252,
    sound: "page-252.mp3",
    img: "page-252.png",
    sure: "Ra'd Sûresi",
    meal: `/kuran-meal/${252}.docx`,
  },
  {
    cuz: null,
    id: 253,
    title: "Sayfa 253",
    slug: "page-253",
    read: true,
    startPage: 253,
    sound: "page-253.mp3",
    img: "page-253.png",
    sure: "Ra'd Sûresi",
    meal: `/kuran-meal/${253}.docx`,
  },
  {
    cuz: null,
    id: 254,
    title: "Sayfa 254",
    slug: "page-254",
    read: true,
    startPage: 254,
    sound: "page-254.mp3",
    img: "page-254.png",
    sure: "İbrahim Sûresi",
    meal: `/kuran-meal/${254}.docx`,
  },
  {
    cuz: null,
    id: 255,
    title: "Sayfa 255",
    slug: "page-255",
    read: true,
    startPage: 255,
    sound: "page-255.mp3",
    img: "page-255.png",
    sure: "İbrahim Sûresi",
    meal: `/kuran-meal/${255}.docx`,
  },
  {
    cuz: null,
    id: 256,
    title: "Sayfa 256",
    slug: "page-256",
    read: true,
    startPage: 256,
    sound: "page-256.mp3",
    img: "page-256.png",
    sure: "İbrahim Sûresi",
    meal: `/kuran-meal/${256}.docx`,
  },
  {
    cuz: null,
    id: 257,
    title: "Sayfa 257",
    slug: "page-257",
    read: true,
    startPage: 257,
    sound: "page-257.mp3",
    img: "page-257.png",
    sure: "İbrahim Sûresi",
    meal: `/kuran-meal/${257}.docx`,
  },
  {
    cuz: null,
    id: 258,
    title: "Sayfa 258",
    slug: "page-258",
    read: true,
    startPage: 258,
    sound: "page-258.mp3",
    img: "page-258.png",
    sure: "İbrahim Sûresi",
    meal: `/kuran-meal/${258}.docx`,
  },
  {
    cuz: null,
    id: 259,
    title: "Sayfa 259",
    slug: "page-259",
    read: true,
    startPage: 259,
    sound: "page-259.mp3",
    img: "page-259.png",
    sure: "İbrahim Sûresi",
    meal: `/kuran-meal/${259}.docx`,
  },
  {
    cuz: "14",
    id: 260,
    title: "Sayfa 260",
    slug: "page-260",
    read: true,
    startPage: 260,
    sound: "page-260.mp3",
    img: "page-260.png",
    sure: "İbrahim Sûresi",
    meal: `/kuran-meal/${260}.docx`,
  },
  {
    cuz: null,
    id: 261,
    title: "Sayfa 261",
    slug: "page-261",
    read: true,
    startPage: 261,
    sound: "page-261.mp3",
    img: "page-261.png",
    sure: "Hicr Sûresi",
    meal: `/kuran-meal/${261}.docx`,
  },
  {
    cuz: null,
    id: 262,
    title: "Sayfa 262",
    slug: "page-262",
    read: true,
    startPage: 262,
    sound: "page-262.mp3",
    img: "page-262.png",
    sure: "Hicr Sûresi",
    meal: `/kuran-meal/${262}.docx`,
  },
  {
    cuz: null,
    id: 263,
    title: "Sayfa 263",
    slug: "page-263",
    read: true,
    startPage: 263,
    sound: "page-263.mp3",
    img: "page-263.png",
    sure: "Hicr Sûresi",
    meal: `/kuran-meal/${263}.docx`,
  },
  {
    cuz: null,
    id: 264,
    title: "Sayfa 264",
    slug: "page-264",
    read: true,
    startPage: 264,
    sound: "page-264.mp3",
    img: "page-264.png",
    sure: "Hicr Sûresi",
    meal: `/kuran-meal/${264}.docx`,
  },
  {
    cuz: null,
    id: 265,
    title: "Sayfa 265",
    slug: "page-265",
    read: true,
    startPage: 265,
    sound: "page-265.mp3",
    img: "page-265.png",
    sure: "Hicr Sûresi",
    meal: `/kuran-meal/${265}.docx`,
  },
  {
    cuz: null,
    id: 266,
    title: "Sayfa 266",
    slug: "page-266",
    read: true,
    startPage: 266,
    sound: "page-266.mp3",
    img: "page-266.png",
    sure: "Hicr Sûresi",
    meal: `/kuran-meal/${266}.docx`,
  },
  {
    cuz: null,
    id: 267,
    title: "Sayfa 267",
    slug: "page-267",
    read: true,
    startPage: 267,
    sound: "page-267.mp3",
    img: "page-267.png",
    sure: "Hicr Sûresi",
    meal: `/kuran-meal/${267}.docx`,
  },
  {
    cuz: null,
    id: 268,
    title: "Sayfa 268",
    slug: "page-268",
    read: true,
    startPage: 268,
    sound: "page-268.mp3",
    img: "page-268.png",
    sure: "Nahl Sûresi",
    meal: `/kuran-meal/${268}.docx`,
  },
  {
    cuz: null,
    id: 269,
    title: "Sayfa 269",
    slug: "page-269",
    read: true,
    startPage: 269,
    sound: "page-269.mp3",
    img: "page-269.png",
    sure: "Nahl Sûresi",
    meal: `/kuran-meal/${269}.docx`,
  },
  {
    cuz: null,
    id: 270,
    title: "Sayfa 270",
    slug: "page-270",
    read: true,
    startPage: 270,
    sound: "page-270.mp3",
    img: "page-270.png",
    sure: "Nahl Sûresi",
    meal: `/kuran-meal/${270}.docx`,
  },
  {
    cuz: null,
    id: 271,
    title: "Sayfa 271",
    slug: "page-271",
    read: true,
    startPage: 271,
    sound: "page-271.mp3",
    img: "page-271.png",
    sure: "Nahl Sûresi",
    meal: `/kuran-meal/${271}.docx`,
  },
  {
    cuz: null,
    id: 272,
    title: "Sayfa 272",
    slug: "page-272",
    read: true,
    startPage: 272,
    sound: "page-272.mp3",
    img: "page-272.png",
    sure: "Nahl Sûresi",
    meal: `/kuran-meal/${272}.docx`,
  },
  {
    cuz: null,
    id: 273,
    title: "Sayfa 273",
    slug: "page-273",
    read: true,
    startPage: 273,
    sound: "page-273.mp3",
    img: "page-273.png",
    sure: "Nahl Sûresi",
    meal: `/kuran-meal/${273}.docx`,
  },
  {
    cuz: null,
    id: 274,
    title: "Sayfa 274",
    slug: "page-274",
    read: true,
    startPage: 274,
    sound: "page-274.mp3",
    img: "page-274.png",
    sure: "Nahl Sûresi",
    meal: `/kuran-meal/${274}.docx`,
  },
  {
    cuz: null,
    id: 275,
    title: "Sayfa 275",
    slug: "page-275",
    read: true,
    startPage: 275,
    sound: "page-275.mp3",
    img: "page-275.png",
    sure: "Nahl Sûresi",
    meal: `/kuran-meal/${275}.docx`,
  },
  {
    cuz: null,
    id: 276,
    title: "Sayfa 276",
    slug: "page-276",
    read: true,
    startPage: 276,
    sound: "page-276.mp3",
    img: "page-276.png",
    sure: "Nahl Sûresi",
    meal: `/kuran-meal/${276}.docx`,
  },
  {
    cuz: null,
    id: 277,
    title: "Sayfa 277",
    slug: "page-277",
    read: true,
    startPage: 277,
    sound: "page-277.mp3",
    img: "page-277.png",
    sure: "Nahl Sûresi",
    meal: `/kuran-meal/${277}.docx`,
  },
  {
    cuz: null,
    id: 278,
    title: "Sayfa 278",
    slug: "page-278",
    read: true,
    startPage: 278,
    sound: "page-278.mp3",
    img: "page-278.png",
    sure: "Nahl Sûresi",
    meal: `/kuran-meal/${278}.docx`,
  },
  {
    cuz: null,
    id: 279,
    title: "Sayfa 279",
    slug: "page-279",
    read: true,
    startPage: 279,
    sound: "page-279.mp3",
    img: "page-279.png",
    sure: "Nahl Sûresi",
    meal: `/kuran-meal/${279}.docx`,
  },
  {
    cuz: "15",
    id: 280,
    title: "Sayfa 280",
    slug: "page-280",
    read: true,
    startPage: 280,
    sound: "page-280.mp3",
    img: "page-280.png",
    sure: "Nahl Sûresi",
    meal: `/kuran-meal/${280}.docx`,
  },
  {
    cuz: null,
    id: 281,
    title: "Sayfa 281",
    slug: "page-281",
    read: true,
    startPage: 281,
    sound: "page-281.mp3",
    img: "page-281.png",
    sure: "İsrâ Sûresi",
    meal: `/kuran-meal/${281}.docx`,
  },
  {
    cuz: null,
    id: 282,
    title: "Sayfa 282",
    slug: "page-282",
    read: true,
    startPage: 282,
    sound: "page-282.mp3",
    img: "page-282.png",
    sure: "İsrâ Sûresi",
    meal: `/kuran-meal/${282}.docx`,
  },
  {
    cuz: null,
    id: 283,
    title: "Sayfa 283",
    slug: "page-283",
    read: true,
    startPage: 283,
    sound: "page-283.mp3",
    img: "page-283.png",
    sure: "İsrâ Sûresi",
    meal: `/kuran-meal/${283}.docx`,
  },
  {
    cuz: null,
    id: 284,
    title: "Sayfa 284",
    slug: "page-284",
    read: true,
    startPage: 284,
    sound: "page-284.mp3",
    img: "page-284.png",
    sure: "İsrâ Sûresi",
    meal: `/kuran-meal/${284}.docx`,
  },
  {
    cuz: null,
    id: 285,
    title: "Sayfa 285",
    slug: "page-285",
    read: true,
    startPage: 285,
    sound: "page-285.mp3",
    img: "page-285.png",
    sure: "İsrâ Sûresi",
    meal: `/kuran-meal/${285}.docx`,
  },
  {
    cuz: null,
    id: 286,
    title: "Sayfa 286",
    slug: "page-286",
    read: true,
    startPage: 286,
    sound: "page-286.mp3",
    img: "page-286.png",
    sure: "İsrâ Sûresi",
    meal: `/kuran-meal/${286}.docx`,
  },
  {
    cuz: null,
    id: 287,
    title: "Sayfa 287",
    slug: "page-287",
    read: true,
    startPage: 287,
    sound: "page-287.mp3",
    img: "page-287.png",
    sure: "İsrâ Sûresi",
    meal: `/kuran-meal/${287}.docx`,
  },
  {
    cuz: null,
    id: 288,
    title: "Sayfa 288",
    slug: "page-288",
    read: true,
    startPage: 288,
    sound: "page-288.mp3",
    img: "page-288.png",
    sure: "İsrâ Sûresi",
    meal: `/kuran-meal/${288}.docx`,
  },
  {
    cuz: null,
    id: 289,
    title: "Sayfa 289",
    slug: "page-289",
    read: true,
    startPage: 289,
    sound: "page-289.mp3",
    img: "page-289.png",
    sure: "İsrâ Sûresi",
    meal: `/kuran-meal/${289}.docx`,
  },
  {
    cuz: null,
    id: 290,
    title: "Sayfa 290",
    slug: "page-290",
    read: true,
    startPage: 290,
    sound: "page-290.mp3",
    img: "page-290.png",
    sure: "İsrâ Sûresi",
    meal: `/kuran-meal/${290}.docx`,
  },
  {
    cuz: null,
    id: 291,
    title: "Sayfa 291",
    slug: "page-291",
    read: true,
    startPage: 291,
    sound: "page-291.mp3",
    img: "page-291.png",
    sure: "İsrâ Sûresi",
    meal: `/kuran-meal/${291}.docx`,
  },
  {
    cuz: null,
    id: 292,
    title: "Sayfa 292",
    slug: "page-292",
    read: true,
    startPage: 292,
    sound: "page-292.mp3",
    img: "page-292.png",
    sure: "Kehf Sûresi",
    meal: `/kuran-meal/${292}.docx`,
  },
  {
    cuz: null,
    id: 293,
    title: "Sayfa 293",
    slug: "page-293",
    read: true,
    startPage: 293,
    sound: "page-293.mp3",
    img: "page-293.png",
    sure: "Kehf Sûresi",
    meal: `/kuran-meal/${293}.docx`,
  },
  {
    cuz: null,
    id: 294,
    title: "Sayfa 294",
    slug: "page-294",
    read: true,
    startPage: 294,
    sound: "page-294.mp3",
    img: "page-294.png",
    sure: "Kehf Sûresi",
    meal: `/kuran-meal/${294}.docx`,
  },
  {
    cuz: null,
    id: 295,
    title: "Sayfa 295",
    slug: "page-295",
    read: true,
    startPage: 295,
    sound: "page-295.mp3",
    img: "page-295.png",
    sure: "Kehf Sûresi",
    meal: `/kuran-meal/${295}.docx`,
  },
  {
    cuz: null,
    id: 296,
    title: "Sayfa 296",
    slug: "page-296",
    read: true,
    startPage: 296,
    sound: "page-296.mp3",
    img: "page-296.png",
    sure: "Kehf Sûresi",
    meal: `/kuran-meal/${296}.docx`,
  },
  {
    cuz: null,
    id: 297,
    title: "Sayfa 297",
    slug: "page-297",
    read: true,
    startPage: 297,
    sound: "page-297.mp3",
    img: "page-297.png",
    sure: "Kehf Sûresi",
    meal: `/kuran-meal/${297}.docx`,
  },
  {
    cuz: null,
    id: 298,
    title: "Sayfa 298",
    slug: "page-298",
    read: true,
    startPage: 298,
    sound: "page-298.mp3",
    img: "page-298.png",
    sure: "Kehf Sûresi",
    meal: `/kuran-meal/${298}.docx`,
  },
  {
    cuz: null,
    id: 299,
    title: "Sayfa 299",
    slug: "page-299",
    read: true,
    startPage: 299,
    sound: "page-299.mp3",
    img: "page-299.png",
    sure: "Kehf Sûresi",
    meal: `/kuran-meal/${299}.docx`,
  },
  {
    cuz: "16",
    id: 300,
    title: "Sayfa 300",
    slug: "page-300",
    read: true,
    startPage: 300,
    sound: "page-300.mp3",
    img: "page-300.png",
    sure: "Kehf Sûresi",
    meal: `/kuran-meal/${300}.docx`,
  },
  {
    cuz: null,
    id: 301,
    title: "Sayfa 301",
    slug: "page-301",
    read: true,
    startPage: 301,
    sound: "page-301.mp3",
    img: "page-301.png",
    sure: "Kehf Sûresi",
    meal: `/kuran-meal/${301}.docx`,
  },
  {
    cuz: null,
    id: 302,
    title: "Sayfa 302",
    slug: "page-302",
    read: true,
    startPage: 302,
    sound: "page-302.mp3",
    img: "page-302.png",
    sure: "Kehf Sûresi",
    meal: `/kuran-meal/${302}.docx`,
  },
  {
    cuz: null,
    id: 303,
    title: "Sayfa 303",
    slug: "page-303",
    read: true,
    startPage: 303,
    sound: "page-303.mp3",
    img: "page-303.png",
    sure: "Kehf Sûresi",
    meal: `/kuran-meal/${303}.docx`,
  },
  {
    cuz: null,
    id: 304,
    title: "Sayfa 304",
    slug: "page-304",
    read: true,
    startPage: 304,
    sound: "page-304.mp3",
    img: "page-304.png",
    sure: "Meryem Sûresi",
    meal: `/kuran-meal/${304}.docx`,
  },
  {
    cuz: null,
    id: 305,
    title: "Sayfa 305",
    slug: "page-305",
    read: true,
    startPage: 305,
    sound: "page-305.mp3",
    img: "page-305.png",
    sure: "Meryem Sûresi",
    meal: `/kuran-meal/${305}.docx`,
  },
  {
    cuz: null,
    id: 306,
    title: "Sayfa 306",
    slug: "page-306",
    read: true,
    startPage: 306,
    sound: "page-306.mp3",
    img: "page-306.png",
    sure: "Meryem Sûresi",
    meal: `/kuran-meal/${306}.docx`,
  },
  {
    cuz: null,
    id: 307,
    title: "Sayfa 307",
    slug: "page-307",
    read: true,
    startPage: 307,
    sound: "page-307.mp3",
    img: "page-307.png",
    sure: "Meryem Sûresi",
    meal: `/kuran-meal/${307}.docx`,
  },
  {
    cuz: null,
    id: 308,
    title: "Sayfa 308",
    slug: "page-308",
    read: true,
    startPage: 308,
    sound: "page-308.mp3",
    img: "page-308.png",
    sure: "Meryem Sûresi",
    meal: `/kuran-meal/${308}.docx`,
  },
  {
    cuz: null,
    id: 309,
    title: "Sayfa 309",
    slug: "page-309",
    read: true,
    startPage: 309,
    sound: "page-309.mp3",
    img: "page-309.png",
    sure: "Meryem Sûresi",
    meal: `/kuran-meal/${309}.docx`,
  },
  {
    cuz: null,
    id: 310,
    title: "Sayfa 310",
    slug: "page-310",
    read: true,
    startPage: 310,
    sound: "page-310.mp3",
    img: "page-310.png",
    sure: "Meryem Sûresi",
    meal: `/kuran-meal/${310}.docx`,
  },
  {
    cuz: null,
    id: 311,
    title: "Sayfa 311",
    slug: "page-311",
    read: true,
    startPage: 311,
    sound: "page-311.mp3",
    img: "page-311.png",
    sure: "Tâ-Hâ Sûresi",
    meal: `/kuran-meal/${311}.docx`,
  },
  {
    cuz: null,
    id: 312,
    title: "Sayfa 312",
    slug: "page-312",
    read: true,
    startPage: 312,
    sound: "page-312.mp3",
    img: "page-312.png",
    sure: "Tâ-Hâ Sûresi",
    meal: `/kuran-meal/${312}.docx`,
  },
  {
    cuz: null,
    id: 313,
    title: "Sayfa 313",
    slug: "page-313",
    read: true,
    startPage: 313,
    sound: "page-313.mp3",
    img: "page-313.png",
    sure: "Tâ-Hâ Sûresi",
    meal: `/kuran-meal/${313}.docx`,
  },
  {
    cuz: null,
    id: 314,
    title: "Sayfa 314",
    slug: "page-314",
    read: true,
    startPage: 314,
    sound: "page-314.mp3",
    img: "page-314.png",
    sure: "Tâ-Hâ Sûresi",
    meal: `/kuran-meal/${314}.docx`,
  },
  {
    cuz: null,
    id: 315,
    title: "Sayfa 315",
    slug: "page-315",
    read: true,
    startPage: 315,
    sound: "page-315.mp3",
    img: "page-315.png",
    sure: "Tâ-Hâ Sûresi",
    meal: `/kuran-meal/${315}.docx`,
  },
  {
    cuz: null,
    id: 316,
    title: "Sayfa 316",
    slug: "page-316",
    read: true,
    startPage: 316,
    sound: "page-316.mp3",
    img: "page-316.png",
    sure: "Tâ-Hâ Sûresi",
    meal: `/kuran-meal/${316}.docx`,
  },
  {
    cuz: null,
    id: 317,
    title: "Sayfa 317",
    slug: "page-317",
    read: true,
    startPage: 317,
    sound: "page-317.mp3",
    img: "page-317.png",
    sure: "Tâ-Hâ Sûresi",
    meal: `/kuran-meal/${317}.docx`,
  },
  {
    cuz: null,
    id: 318,
    title: "Sayfa 318",
    slug: "page-318",
    read: true,
    startPage: 318,
    sound: "page-318.mp3",
    img: "page-318.png",
    sure: "Tâ-Hâ Sûresi",
    meal: `/kuran-meal/${318}.docx`,
  },
  {
    cuz: null,
    id: 319,
    title: "Sayfa 319",
    slug: "page-319",
    read: true,
    startPage: 319,
    sound: "page-319.mp3",
    img: "page-319.png",
    sure: "Tâ-Hâ Sûresi",
    meal: `/kuran-meal/${319}.docx`,
  },
  {
    cuz: "17",
    id: 320,
    title: "Sayfa 320",
    slug: "page-320",
    read: true,
    startPage: 320,
    sound: "page-320.mp3",
    img: "page-320.png",
    sure: "Tâ-Hâ Sûresi",
    meal: `/kuran-meal/${320}.docx`,
  },
  {
    cuz: null,
    id: 321,
    title: "Sayfa 321",
    slug: "page-321",
    read: true,
    startPage: 321,
    sound: "page-321.mp3",
    img: "page-321.png",
    sure: "Enbiyâ Sûresi",
    meal: `/kuran-meal/${321}.docx`,
  },
  {
    cuz: null,
    id: 322,
    title: "Sayfa 322",
    slug: "page-322",
    read: true,
    startPage: 322,
    sound: "page-322.mp3",
    img: "page-322.png",
    sure: "Enbiyâ Sûresi",
    meal: `/kuran-meal/${322}.docx`,
  },
  {
    cuz: null,
    id: 323,
    title: "Sayfa 323",
    slug: "page-323",
    read: true,
    startPage: 323,
    sound: "page-323.mp3",
    img: "page-323.png",
    sure: "Enbiyâ Sûresi",
    meal: `/kuran-meal/${323}.docx`,
  },
  {
    cuz: null,
    id: 324,
    title: "Sayfa 324",
    slug: "page-324",
    read: true,
    startPage: 324,
    sound: "page-324.mp3",
    img: "page-324.png",
    sure: "Enbiyâ Sûresi",
    meal: `/kuran-meal/${324}.docx`,
  },
  {
    cuz: null,
    id: 325,
    title: "Sayfa 325",
    slug: "page-325",
    read: true,
    startPage: 325,
    sound: "page-325.mp3",
    img: "page-325.png",
    sure: "Enbiyâ Sûresi",
    meal: `/kuran-meal/${325}.docx`,
  },
  {
    cuz: null,
    id: 326,
    title: "Sayfa 326",
    slug: "page-326",
    read: true,
    startPage: 326,
    sound: "page-326.mp3",
    img: "page-326.png",
    sure: "Enbiyâ Sûresi",
    meal: `/kuran-meal/${326}.docx`,
  },
  {
    cuz: null,
    id: 327,
    title: "Sayfa 327",
    slug: "page-327",
    read: true,
    startPage: 327,
    sound: "page-327.mp3",
    img: "page-327.png",
    sure: "Enbiyâ Sûresi",
    meal: `/kuran-meal/${327}.docx`,
  },
  {
    cuz: null,
    id: 328,
    title: "Sayfa 328",
    slug: "page-328",
    read: true,
    startPage: 328,
    sound: "page-328.mp3",
    img: "page-328.png",
    sure: "Enbiyâ Sûresi",
    meal: `/kuran-meal/${328}.docx`,
  },
  {
    cuz: null,
    id: 329,
    title: "Sayfa 329",
    slug: "page-329",
    read: true,
    startPage: 329,
    sound: "page-329.mp3",
    img: "page-329.png",
    sure: "Enbiyâ Sûresi",
    meal: `/kuran-meal/${329}.docx`,
  },
  {
    cuz: null,
    id: 330,
    title: "Sayfa 330",
    slug: "page-330",
    read: true,
    startPage: 330,
    sound: "page-330.mp3",
    img: "page-330.png",
    sure: "Enbiyâ Sûresi",
    meal: `/kuran-meal/${330}.docx`,
  },
  {
    cuz: null,
    id: 331,
    title: "Sayfa 331",
    slug: "page-331",
    read: true,
    startPage: 331,
    sound: "page-331.mp3",
    img: "page-331.png",
    sure: "Hac Sûresi",
    meal: `/kuran-meal/${331}.docx`,
  },
  {
    cuz: null,
    id: 332,
    title: "Sayfa 332",
    slug: "page-332",
    read: true,
    startPage: 332,
    sound: "page-332.mp3",
    img: "page-332.png",
    sure: "Hac Sûresi",
    meal: `/kuran-meal/${332}.docx`,
  },
  {
    cuz: null,
    id: 333,
    title: "Sayfa 333",
    slug: "page-333",
    read: true,
    startPage: 333,
    sound: "page-333.mp3",
    img: "page-333.png",
    sure: "Hac Sûresi",
    meal: `/kuran-meal/${333}.docx`,
  },
  {
    cuz: null,
    id: 334,
    title: "Sayfa 334",
    slug: "page-334",
    read: true,
    startPage: 334,
    sound: "page-334.mp3",
    img: "page-334.png",
    sure: "Hac Sûresi",
    meal: `/kuran-meal/${334}.docx`,
  },
  {
    cuz: null,
    id: 335,
    title: "Sayfa 335",
    slug: "page-335",
    read: true,
    startPage: 335,
    sound: "page-335.mp3",
    img: "page-335.png",
    sure: "Hac Sûresi",
    meal: `/kuran-meal/${335}.docx`,
  },
  {
    cuz: null,
    id: 336,
    title: "Sayfa 336",
    slug: "page-336",
    read: true,
    startPage: 336,
    sound: "page-336.mp3",
    img: "page-336.png",
    sure: "Hac Sûresi",
    meal: `/kuran-meal/${336}.docx`,
  },
  {
    cuz: null,
    id: 337,
    title: "Sayfa 337",
    slug: "page-337",
    read: true,
    startPage: 337,
    sound: "page-337.mp3",
    img: "page-337.png",
    sure: "Hac Sûresi",
    meal: `/kuran-meal/${337}.docx`,
  },
  {
    cuz: null,
    id: 338,
    title: "Sayfa 338",
    slug: "page-338",
    read: true,
    startPage: 338,
    sound: "page-338.mp3",
    img: "page-338.png",
    sure: "Hac Sûresi",
    meal: `/kuran-meal/${338}.docx`,
  },
  {
    cuz: null,
    id: 339,
    title: "Sayfa 339",
    slug: "page-339",
    read: true,
    startPage: 339,
    sound: "page-339.mp3",
    img: "page-339.png",
    sure: "Hac Sûresi",
    meal: `/kuran-meal/${339}.docx`,
  },
  {
    cuz: "18",
    id: 340,
    title: "Sayfa 340",
    slug: "page-340",
    read: true,
    startPage: 340,
    sound: "page-340.mp3",
    img: "page-340.png",
    sure: "Hac Sûresi",
    meal: `/kuran-meal/${340}.docx`,
  },
  {
    cuz: null,
    id: 341,
    title: "Sayfa 341",
    slug: "page-341",
    read: true,
    startPage: 341,
    sound: "page-341.mp3",
    img: "page-341.png",
    sure: "Mü'minûn Sûresi",
    meal: `/kuran-meal/${341}.docx`,
  },
  {
    cuz: null,
    id: 342,
    title: "Sayfa 342",
    slug: "page-342",
    read: true,
    startPage: 342,
    sound: "page-342.mp3",
    img: "page-342.png",
    sure: "Mü'minûn Sûresi",
    meal: `/kuran-meal/${342}.docx`,
  },
  {
    cuz: null,
    id: 343,
    title: "Sayfa 343",
    slug: "page-343",
    read: true,
    startPage: 343,
    sound: "page-343.mp3",
    img: "page-343.png",
    sure: "Mü'minûn Sûresi",
    meal: `/kuran-meal/${343}.docx`,
  },
  {
    cuz: null,
    id: 344,
    title: "Sayfa 344",
    slug: "page-344",
    read: true,
    startPage: 344,
    sound: "page-344.mp3",
    img: "page-344.png",
    sure: "Mü'minûn Sûresi",
    meal: `/kuran-meal/${344}.docx`,
  },
  {
    cuz: null,
    id: 345,
    title: "Sayfa 345",
    slug: "page-345",
    read: true,
    startPage: 345,
    sound: "page-345.mp3",
    img: "page-345.png",
    sure: "Mü'minûn Sûresi",
    meal: `/kuran-meal/${345}.docx`,
  },
  {
    cuz: null,
    id: 346,
    title: "Sayfa 346",
    slug: "page-346",
    read: true,
    startPage: 346,
    sound: "page-346.mp3",
    img: "page-346.png",
    sure: "Mü'minûn Sûresi",
    meal: `/kuran-meal/${346}.docx`,
  },
  {
    cuz: null,
    id: 347,
    title: "Sayfa 347",
    slug: "page-347",
    read: true,
    startPage: 347,
    sound: "page-347.mp3",
    img: "page-347.png",
    sure: "Mü'minûn Sûresi",
    meal: `/kuran-meal/${347}.docx`,
  },
  {
    cuz: null,
    id: 348,
    title: "Sayfa 348",
    slug: "page-348",
    read: true,
    startPage: 348,
    sound: "page-348.mp3",
    img: "page-348.png",
    sure: "Mü'minûn Sûresi",
    meal: `/kuran-meal/${348}.docx`,
  },
  {
    cuz: null,
    id: 349,
    title: "Sayfa 349",
    slug: "page-349",
    read: true,
    startPage: 349,
    sound: "page-349.mp3",
    img: "page-349.png",
    sure: "Nûr Sûresi",
    meal: `/kuran-meal/${349}.docx`,
  },
  {
    cuz: null,
    id: 350,
    title: "Sayfa 350",
    slug: "page-350",
    read: true,
    startPage: 350,
    sound: "page-350.mp3",
    img: "page-350.png",
    sure: "Nûr Sûresi",
    meal: `/kuran-meal/${350}.docx`,
  },
  {
    cuz: null,
    id: 351,
    title: "Sayfa 351",
    slug: "page-351",
    read: true,
    startPage: 351,
    sound: "page-351.mp3",
    img: "page-351.png",
    sure: "Nûr Sûresi",
    meal: `/kuran-meal/${351}.docx`,
  },
  {
    cuz: null,
    id: 352,
    title: "Sayfa 352",
    slug: "page-352",
    read: true,
    startPage: 352,
    sound: "page-352.mp3",
    img: "page-352.png",
    sure: "Nûr Sûresi",
    meal: `/kuran-meal/${352}.docx`,
  },
  {
    cuz: null,
    id: 353,
    title: "Sayfa 353",
    slug: "page-353",
    read: true,
    startPage: 353,
    sound: "page-353.mp3",
    img: "page-353.png",
    sure: "Nûr Sûresi",
    meal: `/kuran-meal/${353}.docx`,
  },
  {
    cuz: null,
    id: 354,
    title: "Sayfa 354",
    slug: "page-354",
    read: true,
    startPage: 354,
    sound: "page-354.mp3",
    img: "page-354.png",
    sure: "Nûr Sûresi",
    meal: `/kuran-meal/${354}.docx`,
  },
  {
    cuz: null,
    id: 355,
    title: "Sayfa 355",
    slug: "page-355",
    read: true,
    startPage: 355,
    sound: "page-355.mp3",
    img: "page-355.png",
    sure: "Nûr Sûresi",
    meal: `/kuran-meal/${355}.docx`,
  },
  {
    cuz: null,
    id: 356,
    title: "Sayfa 356",
    slug: "page-356",
    read: true,
    startPage: 356,
    sound: "page-356.mp3",
    img: "page-356.png",
    sure: "Nûr Sûresi",
    meal: `/kuran-meal/${356}.docx`,
  },
  {
    cuz: null,
    id: 357,
    title: "Sayfa 357",
    slug: "page-357",
    read: true,
    startPage: 357,
    sound: "page-357.mp3",
    img: "page-357.png",
    sure: "Nûr Sûresi",
    meal: `/kuran-meal/${357}.docx`,
  },
  {
    cuz: null,
    id: 358,
    title: "Sayfa 358",
    slug: "page-358",
    read: true,
    startPage: 358,
    sound: "page-358.mp3",
    img: "page-358.png",
    sure: "Furkan Sûresi",
    meal: `/kuran-meal/${358}.docx`,
  },
  {
    cuz: null,
    id: 359,
    title: "Sayfa 359",
    slug: "page-359",
    read: true,
    startPage: 359,
    sound: "page-359.mp3",
    img: "page-359.png",
    sure: "Furkan Sûresi",
    meal: `/kuran-meal/${359}.docx`,
  },
  {
    cuz: "19",
    id: 360,
    title: "Sayfa 360",
    slug: "page-360",
    read: true,
    startPage: 360,
    sound: "page-360.mp3",
    img: "page-360.png",
    sure: "Furkan Sûresi",
    meal: `/kuran-meal/${360}.docx`,
  },
  {
    cuz: null,
    id: 361,
    title: "Sayfa 361",
    slug: "page-361",
    read: true,
    startPage: 361,
    sound: "page-361.mp3",
    img: "page-361.png",
    sure: "Furkan Sûresi",
    meal: `/kuran-meal/${361}.docx`,
  },
  {
    cuz: null,
    id: 362,
    title: "Sayfa 362",
    slug: "page-362",
    read: true,
    startPage: 362,
    sound: "page-362.mp3",
    img: "page-362.png",
    sure: "Furkan Sûresi",
    meal: `/kuran-meal/${362}.docx`,
  },
  {
    cuz: null,
    id: 363,
    title: "Sayfa 363",
    slug: "page-363",
    read: true,
    startPage: 363,
    sound: "page-363.mp3",
    img: "page-363.png",
    sure: "Furkan Sûresi",
    meal: `/kuran-meal/${363}.docx`,
  },
  {
    cuz: null,
    id: 364,
    title: "Sayfa 364",
    slug: "page-364",
    read: true,
    startPage: 364,
    sound: "page-364.mp3",
    img: "page-364.png",
    sure: "Furkan Sûresi",
    meal: `/kuran-meal/${364}.docx`,
  },
  {
    cuz: null,
    id: 365,
    title: "Sayfa 365",
    slug: "page-365",
    read: true,
    startPage: 365,
    sound: "page-365.mp3",
    img: "page-365.png",
    sure: "Furkan Sûresi",
    meal: `/kuran-meal/${365}.docx`,
  },
  {
    cuz: null,
    id: 366,
    title: "Sayfa 366",
    slug: "page-366",
    read: true,
    startPage: 366,
    sound: "page-366.mp3",
    img: "page-366.png",
    sure: "Şuarâ Sûresi",
    meal: `/kuran-meal/${366}.docx`,
  },
  {
    cuz: null,
    id: 367,
    title: "Sayfa 367",
    slug: "page-367",
    read: true,
    startPage: 367,
    sound: "page-367.mp3",
    img: "page-367.png",
    sure: "Şuarâ Sûresi",
    meal: `/kuran-meal/${367}.docx`,
  },
  {
    cuz: null,
    id: 368,
    title: "Sayfa 368",
    slug: "page-368",
    read: true,
    startPage: 368,
    sound: "page-368.mp3",
    img: "page-368.png",
    sure: "Şuarâ Sûresi",
    meal: `/kuran-meal/${368}.docx`,
  },
  {
    cuz: null,
    id: 369,
    title: "Sayfa 369",
    slug: "page-369",
    read: true,
    startPage: 369,
    sound: "page-369.mp3",
    img: "page-369.png",
    sure: "Şuarâ Sûresi",
    meal: `/kuran-meal/${369}.docx`,
  },
  {
    cuz: null,
    id: 370,
    title: "Sayfa 370",
    slug: "page-370",
    read: true,
    startPage: 370,
    sound: "page-370.mp3",
    img: "page-370.png",
    sure: "Şuarâ Sûresi",
    meal: `/kuran-meal/${370}.docx`,
  },
  {
    cuz: null,
    id: 371,
    title: "Sayfa 371",
    slug: "page-371",
    read: true,
    startPage: 371,
    sound: "page-371.mp3",
    img: "page-371.png",
    sure: "Şuarâ Sûresi",
    meal: `/kuran-meal/${371}.docx`,
  },
  {
    cuz: null,
    id: 372,
    title: "Sayfa 372",
    slug: "page-372",
    read: true,
    startPage: 372,
    sound: "page-372.mp3",
    img: "page-372.png",
    sure: "Şuarâ Sûresi",
    meal: `/kuran-meal/${372}.docx`,
  },
  {
    cuz: null,
    id: 373,
    title: "Sayfa 373",
    slug: "page-373",
    read: true,
    startPage: 373,
    sound: "page-373.mp3",
    img: "page-373.png",
    sure: "Şuarâ Sûresi",
    meal: `/kuran-meal/${373}.docx`,
  },
  {
    cuz: null,
    id: 374,
    title: "Sayfa 374",
    slug: "page-374",
    read: true,
    startPage: 374,
    sound: "page-374.mp3",
    img: "page-374.png",
    sure: "Şuarâ Sûresi",
    meal: `/kuran-meal/${374}.docx`,
  },
  {
    cuz: null,
    id: 375,
    title: "Sayfa 375",
    slug: "page-375",
    read: true,
    startPage: 375,
    sound: "page-375.mp3",
    img: "page-375.png",
    sure: "Şuarâ Sûresi",
    meal: `/kuran-meal/${375}.docx`,
  },
  {
    cuz: null,
    id: 376,
    title: "Sayfa 376",
    slug: "page-376",
    read: true,
    startPage: 376,
    sound: "page-376.mp3",
    img: "page-376.png",
    sure: "Neml Sûresi",
    meal: `/kuran-meal/${376}.docx`,
  },
  {
    cuz: null,
    id: 377,
    title: "Sayfa 377",
    slug: "page-377",
    read: true,
    startPage: 377,
    sound: "page-377.mp3",
    img: "page-377.png",
    sure: "Neml Sûresi",
    meal: `/kuran-meal/${377}.docx`,
  },
  {
    cuz: null,
    id: 378,
    title: "Sayfa 378",
    slug: "page-378",
    read: true,
    startPage: 378,
    sound: "page-378.mp3",
    img: "page-378.png",
    sure: "Neml Sûresi",
    meal: `/kuran-meal/${378}.docx`,
  },
  {
    cuz: null,
    id: 379,
    title: "Sayfa 379",
    slug: "page-379",
    read: true,
    startPage: 379,
    sound: "page-379.mp3",
    img: "page-379.png",
    sure: "Neml Sûresi",
    meal: `/kuran-meal/${379}.docx`,
  },
  {
    cuz: "20",
    id: 380,
    title: "Sayfa 380",
    slug: "page-380",
    read: true,
    startPage: 380,
    sound: "page-380.mp3",
    img: "page-380.png",
    sure: "Neml Sûresi",
    meal: `/kuran-meal/${380}.docx`,
  },
  {
    cuz: null,
    id: 381,
    title: "Sayfa 381",
    slug: "page-381",
    read: true,
    startPage: 381,
    sound: "page-381.mp3",
    img: "page-381.png",
    sure: "Neml Sûresi",
    meal: `/kuran-meal/${381}.docx`,
  },
  {
    cuz: null,
    id: 382,
    title: "Sayfa 382",
    slug: "page-382",
    read: true,
    startPage: 382,
    sound: "page-382.mp3",
    img: "page-382.png",
    sure: "Neml Sûresi",
    meal: `/kuran-meal/${382}.docx`,
  },
  {
    cuz: null,
    id: 383,
    title: "Sayfa 383",
    slug: "page-383",
    read: true,
    startPage: 383,
    sound: "page-383.mp3",
    img: "page-383.png",
    sure: "Neml Sûresi",
    meal: `/kuran-meal/${383}.docx`,
  },
  {
    cuz: null,
    id: 384,
    title: "Sayfa 384",
    slug: "page-384",
    read: true,
    startPage: 384,
    sound: "page-384.mp3",
    img: "page-384.png",
    sure: "Kasas Sûresi",
    meal: `/kuran-meal/${384}.docx`,
  },
  {
    cuz: null,
    id: 385,
    title: "Sayfa 385",
    slug: "page-385",
    read: true,
    startPage: 385,
    sound: "page-385.mp3",
    img: "page-385.png",
    sure: "Kasas Sûresi",
    meal: `/kuran-meal/${385}.docx`,
  },
  {
    cuz: null,
    id: 386,
    title: "Sayfa 386",
    slug: "page-386",
    read: true,
    startPage: 386,
    sound: "page-386.mp3",
    img: "page-386.png",
    sure: "Kasas Sûresi",
    meal: `/kuran-meal/${386}.docx`,
  },
  {
    cuz: null,
    id: 387,
    title: "Sayfa 387",
    slug: "page-387",
    read: true,
    startPage: 387,
    sound: "page-387.mp3",
    img: "page-387.png",
    sure: "Kasas Sûresi",
    meal: `/kuran-meal/${387}.docx`,
  },
  {
    cuz: null,
    id: 388,
    title: "Sayfa 388",
    slug: "page-388",
    read: true,
    startPage: 388,
    sound: "page-388.mp3",
    img: "page-388.png",
    sure: "Kasas Sûresi",
    meal: `/kuran-meal/${388}.docx`,
  },
  {
    cuz: null,
    id: 389,
    title: "Sayfa 389",
    slug: "page-389",
    read: true,
    startPage: 389,
    sound: "page-389.mp3",
    img: "page-389.png",
    sure: "Kasas Sûresi",
    meal: `/kuran-meal/${389}.docx`,
  },
  {
    cuz: null,
    id: 390,
    title: "Sayfa 390",
    slug: "page-390",
    read: true,
    startPage: 390,
    sound: "page-390.mp3",
    img: "page-390.png",
    sure: "Kasas Sûresi",
    meal: `/kuran-meal/${390}.docx`,
  },
  {
    cuz: null,
    id: 391,
    title: "Sayfa 391",
    slug: "page-391",
    read: true,
    startPage: 391,
    sound: "page-391.mp3",
    img: "page-391.png",
    sure: "Kasas Sûresi",
    meal: `/kuran-meal/${391}.docx`,
  },
  {
    cuz: null,
    id: 392,
    title: "Sayfa 392",
    slug: "page-392",
    read: true,
    startPage: 392,
    sound: "page-392.mp3",
    img: "page-392.png",
    sure: "Kasas Sûresi",
    meal: `/kuran-meal/${392}.docx`,
  },
  {
    cuz: null,
    id: 393,
    title: "Sayfa 393",
    slug: "page-393",
    read: true,
    startPage: 393,
    sound: "page-393.mp3",
    img: "page-393.png",
    sure: "Kasas Sûresi",
    meal: `/kuran-meal/${393}.docx`,
  },
  {
    cuz: null,
    id: 394,
    title: "Sayfa 394",
    slug: "page-394",
    read: true,
    startPage: 394,
    sound: "page-394.mp3",
    img: "page-394.png",
    sure: "Kasas Sûresi",
    meal: `/kuran-meal/${394}.docx`,
  },
  {
    cuz: null,
    id: 395,
    title: "Sayfa 395",
    slug: "page-395",
    read: true,
    startPage: 395,
    sound: "page-395.mp3",
    img: "page-395.png",
    sure: "Ankebût Sûresi",
    meal: `/kuran-meal/${395}.docx`,
  },
  {
    cuz: null,
    id: 396,
    title: "Sayfa 396",
    slug: "page-396",
    read: true,
    startPage: 396,
    sound: "page-396.mp3",
    img: "page-396.png",
    sure: "Ankebût Sûresi",
    meal: `/kuran-meal/${396}.docx`,
  },
  {
    cuz: null,
    id: 397,
    title: "Sayfa 397",
    slug: "page-397",
    read: true,
    startPage: 397,
    sound: "page-397.mp3",
    img: "page-397.png",
    sure: "Ankebût Sûresi",
    meal: `/kuran-meal/${397}.docx`,
  },
  {
    cuz: null,
    id: 398,
    title: "Sayfa 398",
    slug: "page-398",
    read: true,
    startPage: 398,
    sound: "page-398.mp3",
    img: "page-398.png",
    sure: "Ankebût Sûresi",
    meal: `/kuran-meal/${398}.docx`,
  },
  {
    cuz: null,
    id: 399,
    title: "Sayfa 399",
    slug: "page-399",
    read: true,
    startPage: 399,
    sound: "page-399.mp3",
    img: "page-399.png",
    sure: "Ankebût Sûresi",
    meal: `/kuran-meal/${399}.docx`,
  },
  {
    cuz: "21",
    id: 400,
    title: "Sayfa 400",
    slug: "page-400",
    read: true,
    startPage: 400,
    sound: "page-400.mp3",
    img: "page-400.png",
    sure: "Ankebût Sûresi",
    meal: `/kuran-meal/${400}.docx`,
  },
  {
    cuz: null,
    id: 401,
    title: "Sayfa 401",
    slug: "page-401",
    read: true,
    startPage: 401,
    sound: "page-401.mp3",
    img: "page-401.png",
    sure: "Ankebût Sûresi",
    meal: `/kuran-meal/${401}.docx`,
  },
  {
    cuz: null,
    id: 402,
    title: "Sayfa 402",
    slug: "page-402",
    read: true,
    startPage: 402,
    sound: "page-402.mp3",
    img: "page-402.png",
    sure: "Ankebût Sûresi",
    meal: `/kuran-meal/${402}.docx`,
  },
  {
    cuz: null,
    id: 403,
    title: "Sayfa 403",
    slug: "page-403",
    read: true,
    startPage: 403,
    sound: "page-403.mp3",
    img: "page-403.png",
    sure: "Rûm Sûresi",
    meal: `/kuran-meal/${403}.docx`,
  },
  {
    cuz: null,
    id: 404,
    title: "Sayfa 404",
    slug: "page-404",
    read: true,
    startPage: 404,
    sound: "page-404.mp3",
    img: "page-404.png",
    sure: "Rûm Sûresi",
    meal: `/kuran-meal/${404}.docx`,
  },
  {
    cuz: null,
    id: 405,
    title: "Sayfa 405",
    slug: "page-405",
    read: true,
    startPage: 405,
    sound: "page-405.mp3",
    img: "page-405.png",
    sure: "Rûm Sûresi",
    meal: `/kuran-meal/${405}.docx`,
  },
  {
    cuz: null,
    id: 406,
    title: "Sayfa 406",
    slug: "page-406",
    read: true,
    startPage: 406,
    sound: "page-406.mp3",
    img: "page-406.png",
    sure: "Rûm Sûresi",
    meal: `/kuran-meal/${406}.docx`,
  },
  {
    cuz: null,
    id: 407,
    title: "Sayfa 407",
    slug: "page-407",
    read: true,
    startPage: 407,
    sound: "page-407.mp3",
    img: "page-407.png",
    sure: "Rûm Sûresi",
    meal: `/kuran-meal/${407}.docx`,
  },
  {
    cuz: null,
    id: 408,
    title: "Sayfa 408",
    slug: "page-408",
    read: true,
    startPage: 408,
    sound: "page-408.mp3",
    img: "page-408.png",
    sure: "Rûm Sûresi",
    meal: `/kuran-meal/${408}.docx`,
  },
  {
    cuz: null,
    id: 409,
    title: "Sayfa 409",
    slug: "page-409",
    read: true,
    startPage: 409,
    sound: "page-409.mp3",
    img: "page-409.png",
    sure: "Rûm Sûresi",
    meal: `/kuran-meal/${409}.docx`,
  },
  {
    cuz: null,
    id: 410,
    title: "Sayfa 410",
    slug: "page-410",
    read: true,
    startPage: 410,
    sound: "page-410.mp3",
    img: "page-410.png",
    sure: "Lokman Sûresi",
    meal: `/kuran-meal/${410}.docx`,
  },
  {
    cuz: null,
    id: 411,
    title: "Sayfa 411",
    slug: "page-411",
    read: true,
    startPage: 411,
    sound: "page-411.mp3",
    img: "page-411.png",
    sure: "Lokman Sûresi",
    meal: `/kuran-meal/${411}.docx`,
  },
  {
    cuz: null,
    id: 412,
    title: "Sayfa 412",
    slug: "page-412",
    read: true,
    startPage: 412,
    sound: "page-412.mp3",
    img: "page-412.png",
    sure: "Lokman Sûresi",
    meal: `/kuran-meal/${412}.docx`,
  },
  {
    cuz: null,
    id: 413,
    title: "Sayfa 413",
    slug: "page-413",
    read: true,
    startPage: 413,
    sound: "page-413.mp3",
    img: "page-413.png",
    sure: "Lokman Sûresi",
    meal: `/kuran-meal/${413}.docx`,
  },
  {
    cuz: null,
    id: 414,
    title: "Sayfa 414",
    slug: "page-414",
    read: true,
    startPage: 414,
    sound: "page-414.mp3",
    img: "page-414.png",
    sure: "Secde Sûresi",
    meal: `/kuran-meal/${414}.docx`,
  },
  {
    cuz: null,
    id: 415,
    title: "Sayfa 415",
    slug: "page-415",
    read: true,
    startPage: 415,
    sound: "page-415.mp3",
    img: "page-415.png",
    sure: "Secde Sûresi",
    meal: `/kuran-meal/${415}.docx`,
  },
  {
    cuz: null,
    id: 416,
    title: "Sayfa 416",
    slug: "page-416",
    read: true,
    startPage: 416,
    sound: "page-416.mp3",
    img: "page-416.png",
    sure: "Secde Sûresi",
    meal: `/kuran-meal/${416}.docx`,
  },
  {
    cuz: null,
    id: 417,
    title: "Sayfa 417",
    slug: "page-417",
    read: true,
    startPage: 417,
    sound: "page-417.mp3",
    img: "page-417.png",
    sure: "Ahzâb Sûresi",
    meal: `/kuran-meal/${417}.docx`,
  },
  {
    cuz: null,
    id: 418,
    title: "Sayfa 418",
    slug: "page-418",
    read: true,
    startPage: 418,
    sound: "page-418.mp3",
    img: "page-418.png",
    sure: "Ahzâb Sûresi",
    meal: `/kuran-meal/${418}.docx`,
  },
  {
    cuz: null,
    id: 419,
    title: "Sayfa 419",
    slug: "page-419",
    read: true,
    startPage: 419,
    sound: "page-419.mp3",
    img: "page-419.png",
    sure: "Ahzâb Sûresi",
    meal: `/kuran-meal/${419}.docx`,
  },
  {
    cuz: "22",
    id: 420,
    title: "Sayfa 420",
    slug: "page-420",
    read: true,
    startPage: 420,
    sound: "page-420.mp3",
    img: "page-420.png",
    sure: "Ahzâb Sûresi",
    meal: `/kuran-meal/${420}.docx`,
  },
  {
    cuz: null,
    id: 421,
    title: "Sayfa 421",
    slug: "page-421",
    read: true,
    startPage: 421,
    sound: "page-421.mp3",
    img: "page-421.png",
    sure: "Ahzâb Sûresi",
    meal: `/kuran-meal/${421}.docx`,
  },
  {
    cuz: null,
    id: 422,
    title: "Sayfa 422",
    slug: "page-422",
    read: true,
    startPage: 422,
    sound: "page-422.mp3",
    img: "page-422.png",
    sure: "Ahzâb Sûresi",
    meal: `/kuran-meal/${422}.docx`,
  },
  {
    cuz: null,
    id: 423,
    title: "Sayfa 423",
    slug: "page-423",
    read: true,
    startPage: 423,
    sound: "page-423.mp3",
    img: "page-423.png",
    sure: "Ahzâb Sûresi",
    meal: `/kuran-meal/${423}.docx`,
  },
  {
    cuz: null,
    id: 424,
    title: "Sayfa 424",
    slug: "page-424",
    read: true,
    startPage: 424,
    sound: "page-424.mp3",
    img: "page-424.png",
    sure: "Ahzâb Sûresi",
    meal: `/kuran-meal/${424}.docx`,
  },
  {
    cuz: null,
    id: 425,
    title: "Sayfa 425",
    slug: "page-425",
    read: true,
    startPage: 425,
    sound: "page-425.mp3",
    img: "page-425.png",
    sure: "Ahzâb Sûresi",
    meal: `/kuran-meal/${425}.docx`,
  },
  {
    cuz: null,
    id: 426,
    title: "Sayfa 426",
    slug: "page-426",
    read: true,
    startPage: 426,
    sound: "page-426.mp3",
    img: "page-426.png",
    sure: "Ahzâb Sûresi",
    meal: `/kuran-meal/${426}.docx`,
  },
  {
    cuz: null,
    id: 427,
    title: "Sayfa 427",
    slug: "page-427",
    read: true,
    startPage: 427,
    sound: "page-427.mp3",
    img: "page-427.png",
    sure: "Sebe' Sûresi",
    meal: `/kuran-meal/${427}.docx`,
  },
  {
    cuz: null,
    id: 428,
    title: "Sayfa 428",
    slug: "page-428",
    read: true,
    startPage: 428,
    sound: "page-428.mp3",
    img: "page-428.png",
    sure: "Sebe' Sûresi",
    meal: `/kuran-meal/${428}.docx`,
  },
  {
    cuz: null,
    id: 429,
    title: "Sayfa 429",
    slug: "page-429",
    read: true,
    startPage: 429,
    sound: "page-429.mp3",
    img: "page-429.png",
    sure: "Sebe' Sûresi",
    meal: `/kuran-meal/${429}.docx`,
  },
  {
    cuz: null,
    id: 430,
    title: "Sayfa 430",
    slug: "page-430",
    read: true,
    startPage: 430,
    sound: "page-430.mp3",
    img: "page-430.png",
    sure: "Sebe' Sûresi",
    meal: `/kuran-meal/${430}.docx`,
  },
  {
    cuz: null,
    id: 431,
    title: "Sayfa 431",
    slug: "page-431",
    read: true,
    startPage: 431,
    sound: "page-431.mp3",
    img: "page-431.png",
    sure: "Sebe' Sûresi",
    meal: `/kuran-meal/${431}.docx`,
  },
  {
    cuz: null,
    id: 432,
    title: "Sayfa 432",
    slug: "page-432",
    read: true,
    startPage: 432,
    sound: "page-432.mp3",
    img: "page-432.png",
    sure: "Sebe' Sûresi",
    meal: `/kuran-meal/${432}.docx`,
  },
  {
    cuz: null,
    id: 433,
    title: "Sayfa 433",
    slug: "page-433",
    read: true,
    startPage: 433,
    sound: "page-433.mp3",
    img: "page-433.png",
    sure: "Fâtır Sûresi",
    meal: `/kuran-meal/${433}.docx`,
  },
  {
    cuz: null,
    id: 434,
    title: "Sayfa 434",
    slug: "page-434",
    read: true,
    startPage: 434,
    sound: "page-434.mp3",
    img: "page-434.png",
    sure: "Fâtır Sûresi",
    meal: `/kuran-meal/${434}.docx`,
  },
  {
    cuz: null,
    id: 435,
    title: "Sayfa 435",
    slug: "page-435",
    read: true,
    startPage: 435,
    sound: "page-435.mp3",
    img: "page-435.png",
    sure: "Fâtır Sûresi",
    meal: `/kuran-meal/${435}.docx`,
  },
  {
    cuz: null,
    id: 436,
    title: "Sayfa 436",
    slug: "page-436",
    read: true,
    startPage: 436,
    sound: "page-436.mp3",
    img: "page-436.png",
    sure: "Fâtır Sûresi",
    meal: `/kuran-meal/${436}.docx`,
  },
  {
    cuz: null,
    id: 437,
    title: "Sayfa 437",
    slug: "page-437",
    read: true,
    startPage: 437,
    sound: "page-437.mp3",
    img: "page-437.png",
    sure: "Fâtır Sûresi",
    meal: `/kuran-meal/${437}.docx`,
  },
  {
    cuz: null,
    id: 438,
    title: "Sayfa 438",
    slug: "page-438",
    read: true,
    startPage: 438,
    sound: "page-438.mp3",
    img: "page-438.png",
    sure: "Fâtır Sûresi",
    meal: `/kuran-meal/${438}.docx`,
  },
  {
    cuz: null,
    id: 439,
    title: "Sayfa 439",
    slug: "page-439",
    read: true,
    startPage: 439,
    sound: "page-439.mp3",
    img: "page-439.png",
    sure: "Yâsin Sûresi",
    meal: `/kuran-meal/${439}.docx`,
  },
  {
    cuz: "23",
    id: 440,
    title: "Sayfa 440",
    slug: "page-440",
    read: true,
    startPage: 440,
    sound: "page-440.mp3",
    img: "page-440.png",
    sure: "Yâsin Sûresi",
    meal: `/kuran-meal/${440}.docx`,
  },
  {
    cuz: null,
    id: 441,
    title: "Sayfa 441",
    slug: "page-441",
    read: true,
    startPage: 441,
    sound: "page-441.mp3",
    img: "page-441.png",
    sure: "Yâsin Sûresi",
    meal: `/kuran-meal/${441}.docx`,
  },
  {
    cuz: null,
    id: 442,
    title: "Sayfa 442",
    slug: "page-442",
    read: true,
    startPage: 442,
    sound: "page-442.mp3",
    img: "page-442.png",
    sure: "Yâsin Sûresi",
    meal: `/kuran-meal/${442}.docx`,
  },
  {
    cuz: null,
    id: 443,
    title: "Sayfa 443",
    slug: "page-443",
    read: true,
    startPage: 443,
    sound: "page-443.mp3",
    img: "page-443.png",
    sure: "Yâsin Sûresi",
    meal: `/kuran-meal/${443}.docx`,
  },
  {
    cuz: null,
    id: 444,
    title: "Sayfa 444",
    slug: "page-444",
    read: true,
    startPage: 444,
    sound: "page-444.mp3",
    img: "page-444.png",
    sure: "Yâsin Sûresi",
    meal: `/kuran-meal/${444}.docx`,
  },
  {
    cuz: null,
    id: 445,
    title: "Sayfa 445",
    slug: "page-445",
    read: true,
    startPage: 445,
    sound: "page-445.mp3",
    img: "page-445.png",
    sure: "Sâffât Sûresi",
    meal: `/kuran-meal/${445}.docx`,
  },
  {
    cuz: null,
    id: 446,
    title: "Sayfa 446",
    slug: "page-446",
    read: true,
    startPage: 446,
    sound: "page-446.mp3",
    img: "page-446.png",
    sure: "Sâffât Sûresi",
    meal: `/kuran-meal/${446}.docx`,
  },
  {
    cuz: null,
    id: 447,
    title: "Sayfa 447",
    slug: "page-447",
    read: true,
    startPage: 447,
    sound: "page-447.mp3",
    img: "page-447.png",
    sure: "Sâffât Sûresi",
    meal: `/kuran-meal/${447}.docx`,
  },
  {
    cuz: null,
    id: 448,
    title: "Sayfa 448",
    slug: "page-448",
    read: true,
    startPage: 448,
    sound: "page-448.mp3",
    img: "page-448.png",
    sure: "Sâffât Sûresi",
    meal: `/kuran-meal/${448}.docx`,
  },
  {
    cuz: null,
    id: 449,
    title: "Sayfa 449",
    slug: "page-449",
    read: true,
    startPage: 449,
    sound: "page-449.mp3",
    img: "page-449.png",
    sure: "Sâffât Sûresi",
    meal: `/kuran-meal/${449}.docx`,
  },
  {
    cuz: null,
    id: 450,
    title: "Sayfa 450",
    slug: "page-450",
    read: true,
    startPage: 450,
    sound: "page-450.mp3",
    img: "page-450.png",
    sure: "Sâffât Sûresi",
    meal: `/kuran-meal/${450}.docx`,
  },
  {
    cuz: null,
    id: 451,
    title: "Sayfa 451",
    slug: "page-451",
    read: true,
    startPage: 451,
    sound: "page-451.mp3",
    img: "page-451.png",
    sure: "Sâffât Sûresi",
    meal: `/kuran-meal/${451}.docx`,
  },
  {
    cuz: null,
    id: 452,
    title: "Sayfa 452",
    slug: "page-452",
    read: true,
    startPage: 452,
    sound: "page-452.mp3",
    img: "page-452.png",
    sure: "Sâd Sûresi",
    meal: `/kuran-meal/${452}.docx`,
  },
  {
    cuz: null,
    id: 453,
    title: "Sayfa 453",
    slug: "page-453",
    read: true,
    startPage: 453,
    sound: "page-453.mp3",
    img: "page-453.png",
    sure: "Sâd Sûresi",
    meal: `/kuran-meal/${453}.docx`,
  },
  {
    cuz: null,
    id: 454,
    title: "Sayfa 454",
    slug: "page-454",
    read: true,
    startPage: 454,
    sound: "page-454.mp3",
    img: "page-454.png",
    sure: "Sâd Sûresi",
    meal: `/kuran-meal/${454}.docx`,
  },
  {
    cuz: null,
    id: 455,
    title: "Sayfa 455",
    slug: "page-455",
    read: true,
    startPage: 455,
    sound: "page-455.mp3",
    img: "page-455.png",
    sure: "Sâd Sûresi",
    meal: `/kuran-meal/${455}.docx`,
  },
  {
    cuz: null,
    id: 456,
    title: "Sayfa 456",
    slug: "page-456",
    read: true,
    startPage: 456,
    sound: "page-456.mp3",
    img: "page-456.png",
    sure: "Sâd Sûresi",
    meal: `/kuran-meal/${456}.docx`,
  },
  {
    cuz: null,
    id: 457,
    title: "Sayfa 457",
    slug: "page-457",
    read: true,
    startPage: 457,
    sound: "page-457.mp3",
    img: "page-457.png",
    sure: "Zümer Sûresi",
    meal: `/kuran-meal/${457}.docx`,
  },
  {
    cuz: null,
    id: 458,
    title: "Sayfa 458",
    slug: "page-458",
    read: true,
    startPage: 458,
    sound: "page-458.mp3",
    img: "page-458.png",
    sure: "Zümer Sûresi",
    meal: `/kuran-meal/${458}.docx`,
  },
  {
    cuz: null,
    id: 459,
    title: "Sayfa 459",
    slug: "page-459",
    read: true,
    startPage: 459,
    sound: "page-459.mp3",
    img: "page-459.png",
    sure: "Zümer Sûresi",
    meal: `/kuran-meal/${459}.docx`,
  },
  {
    cuz: "24",
    id: 460,
    title: "Sayfa 460",
    slug: "page-460",
    read: true,
    startPage: 460,
    sound: "page-460.mp3",
    img: "page-460.png",
    sure: "Zümer Sûresi",
    meal: `/kuran-meal/${460}.docx`,
  },
  {
    cuz: null,
    id: 461,
    title: "Sayfa 461",
    slug: "page-461",
    read: true,
    startPage: 461,
    sound: "page-461.mp3",
    img: "page-461.png",
    sure: "Zümer Sûresi",
    meal: `/kuran-meal/${461}.docx`,
  },
  {
    cuz: null,
    id: 462,
    title: "Sayfa 462",
    slug: "page-462",
    read: true,
    startPage: 462,
    sound: "page-462.mp3",
    img: "page-462.png",
    sure: "Zümer Sûresi",
    meal: `/kuran-meal/${462}.docx`,
  },
  {
    cuz: null,
    id: 463,
    title: "Sayfa 463",
    slug: "page-463",
    read: true,
    startPage: 463,
    sound: "page-463.mp3",
    img: "page-463.png",
    sure: "Zümer Sûresi",
    meal: `/kuran-meal/${463}.docx`,
  },
  {
    cuz: null,
    id: 464,
    title: "Sayfa 464",
    slug: "page-464",
    read: true,
    startPage: 464,
    sound: "page-464.mp3",
    img: "page-464.png",
    sure: "Zümer Sûresi",
    meal: `/kuran-meal/${464}.docx`,
  },
  {
    cuz: null,
    id: 465,
    title: "Sayfa 465",
    slug: "page-465",
    read: true,
    startPage: 465,
    sound: "page-465.mp3",
    img: "page-465.png",
    sure: "Zümer Sûresi",
    meal: `/kuran-meal/${465}.docx`,
  },
  {
    cuz: null,
    id: 466,
    title: "Sayfa 466",
    slug: "page-466",
    read: true,
    startPage: 466,
    sound: "page-466.mp3",
    img: "page-466.png",
    sure: "Mü'min Sûresi",
    meal: `/kuran-meal/${466}.docx`,
  },
  {
    cuz: null,
    id: 467,
    title: "Sayfa 467",
    slug: "page-467",
    read: true,
    startPage: 467,
    sound: "page-467.mp3",
    img: "page-467.png",
    sure: "Mü'min Sûresi",
    meal: `/kuran-meal/${467}.docx`,
  },
  {
    cuz: null,
    id: 468,
    title: "Sayfa 468",
    slug: "page-468",
    read: true,
    startPage: 468,
    sound: "page-468.mp3",
    img: "page-468.png",
    sure: "Mü'min Sûresi",
    meal: `/kuran-meal/${468}.docx`,
  },
  {
    cuz: null,
    id: 469,
    title: "Sayfa 469",
    slug: "page-469",
    read: true,
    startPage: 469,
    sound: "page-469.mp3",
    img: "page-469.png",
    sure: "Mü'min Sûresi",
    meal: `/kuran-meal/${469}.docx`,
  },
  {
    cuz: null,
    id: 470,
    title: "Sayfa 470",
    slug: "page-470",
    read: true,
    startPage: 470,
    sound: "page-470.mp3",
    img: "page-470.png",
    sure: "Mü'min Sûresi",
    meal: `/kuran-meal/${470}.docx`,
  },
  {
    cuz: null,
    id: 471,
    title: "Sayfa 471",
    slug: "page-471",
    read: true,
    startPage: 471,
    sound: "page-471.mp3",
    img: "page-471.png",
    sure: "Mü'min Sûresi",
    meal: `/kuran-meal/${471}.docx`,
  },
  {
    cuz: null,
    id: 472,
    title: "Sayfa 472",
    slug: "page-472",
    read: true,
    startPage: 472,
    sound: "page-472.mp3",
    img: "page-472.png",
    sure: "Mü'min Sûresi",
    meal: `/kuran-meal/${472}.docx`,
  },
  {
    cuz: null,
    id: 473,
    title: "Sayfa 473",
    slug: "page-473",
    read: true,
    startPage: 473,
    sound: "page-473.mp3",
    img: "page-473.png",
    sure: "Mü'min Sûresi",
    meal: `/kuran-meal/${473}.docx`,
  },
  {
    cuz: null,
    id: 474,
    title: "Sayfa 474",
    slug: "page-474",
    read: true,
    startPage: 474,
    sound: "page-474.mp3",
    img: "page-474.png",
    sure: "Mü'min Sûresi",
    meal: `/kuran-meal/${474}.docx`,
  },
  {
    cuz: null,
    id: 475,
    title: "Sayfa 475",
    slug: "page-475",
    read: true,
    startPage: 475,
    sound: "page-475.mp3",
    img: "page-475.png",
    sure: "Mü'min Sûresi",
    meal: `/kuran-meal/${475}.docx`,
  },
  {
    cuz: null,
    id: 476,
    title: "Sayfa 476",
    slug: "page-476",
    read: true,
    startPage: 476,
    sound: "page-476.mp3",
    img: "page-476.png",
    sure: "Fussilet Sûresi",
    meal: `/kuran-meal/${476}.docx`,
  },
  {
    cuz: null,
    id: 477,
    title: "Sayfa 477",
    slug: "page-477",
    read: true,
    startPage: 477,
    sound: "page-477.mp3",
    img: "page-477.png",
    sure: "Fussilet Sûresi",
    meal: `/kuran-meal/${477}.docx`,
  },
  {
    cuz: null,
    id: 478,
    title: "Sayfa 478",
    slug: "page-478",
    read: true,
    startPage: 478,
    sound: "page-478.mp3",
    img: "page-478.png",
    sure: "Fussilet Sûresi",
    meal: `/kuran-meal/${478}.docx`,
  },
  {
    cuz: null,
    id: 479,
    title: "Sayfa 479",
    slug: "page-479",
    read: true,
    startPage: 479,
    sound: "page-479.mp3",
    img: "page-479.png",
    sure: "Fussilet Sûresi",
    meal: `/kuran-meal/${479}.docx`,
  },
  {
    cuz: "25",
    id: 480,
    title: "Sayfa 480",
    slug: "page-480",
    read: true,
    startPage: 480,
    sound: "page-480.mp3",
    img: "page-480.png",
    sure: "Fussilet Sûresi",
    meal: `/kuran-meal/${480}.docx`,
  },
  {
    cuz: null,
    id: 481,
    title: "Sayfa 481",
    slug: "page-481",
    read: true,
    startPage: 481,
    sound: "page-481.mp3",
    img: "page-481.png",
    sure: "Fussilet Sûresi",
    meal: `/kuran-meal/${481}.docx`,
  },
  {
    cuz: null,
    id: 482,
    title: "Sayfa 482",
    slug: "page-482",
    read: true,
    startPage: 482,
    sound: "page-482.mp3",
    img: "page-482.png",
    sure: "Şûrâ Sûresi",
    meal: `/kuran-meal/${482}.docx`,
  },
  {
    cuz: null,
    id: 483,
    title: "Sayfa 483",
    slug: "page-483",
    read: true,
    startPage: 483,
    sound: "page-483.mp3",
    img: "page-483.png",
    sure: "Şûrâ Sûresi",
    meal: `/kuran-meal/${483}.docx`,
  },
  {
    cuz: null,
    id: 484,
    title: "Sayfa 484",
    slug: "page-484",
    read: true,
    startPage: 484,
    sound: "page-484.mp3",
    img: "page-484.png",
    sure: "Şûrâ Sûresi",
    meal: `/kuran-meal/${484}.docx`,
  },
  {
    cuz: null,
    id: 485,
    title: "Sayfa 485",
    slug: "page-485",
    read: true,
    startPage: 485,
    sound: "page-485.mp3",
    img: "page-485.png",
    sure: "Şûrâ Sûresi",
    meal: `/kuran-meal/${485}.docx`,
  },
  {
    cuz: null,
    id: 486,
    title: "Sayfa 486",
    slug: "page-486",
    read: true,
    startPage: 486,
    sound: "page-486.mp3",
    img: "page-486.png",
    sure: "Şûrâ Sûresi",
    meal: `/kuran-meal/${486}.docx`,
  },
  {
    cuz: null,
    id: 487,
    title: "Sayfa 487",
    slug: "page-487",
    read: true,
    startPage: 487,
    sound: "page-487.mp3",
    img: "page-487.png",
    sure: "Şûrâ Sûresi",
    meal: `/kuran-meal/${487}.docx`,
  },
  {
    cuz: null,
    id: 488,
    title: "Sayfa 488",
    slug: "page-488",
    read: true,
    startPage: 488,
    sound: "page-488.mp3",
    img: "page-488.png",
    sure: "Zuhruf Sûresi",
    meal: `/kuran-meal/${488}.docx`,
  },
  {
    cuz: null,
    id: 489,
    title: "Sayfa 489",
    slug: "page-489",
    read: true,
    startPage: 489,
    sound: "page-489.mp3",
    img: "page-489.png",
    sure: "Zuhruf Sûresi",
    meal: `/kuran-meal/${489}.docx`,
  },
  {
    cuz: null,
    id: 490,
    title: "Sayfa 490",
    slug: "page-490",
    read: true,
    startPage: 490,
    sound: "page-490.mp3",
    img: "page-490.png",
    sure: "Zuhruf Sûresi",
    meal: `/kuran-meal/${490}.docx`,
  },
  {
    cuz: null,
    id: 491,
    title: "Sayfa 491",
    slug: "page-491",
    read: true,
    startPage: 491,
    sound: "page-491.mp3",
    img: "page-491.png",
    sure: "Zuhruf Sûresi",
    meal: `/kuran-meal/${491}.docx`,
  },
  {
    cuz: null,
    id: 492,
    title: "Sayfa 492",
    slug: "page-492",
    read: true,
    startPage: 492,
    sound: "page-492.mp3",
    img: "page-492.png",
    sure: "Zuhruf Sûresi",
    meal: `/kuran-meal/${492}.docx`,
  },
  {
    cuz: null,
    id: 493,
    title: "Sayfa 493",
    slug: "page-493",
    read: true,
    startPage: 493,
    sound: "page-493.mp3",
    img: "page-493.png",
    sure: "Zuhruf Sûresi",
    meal: `/kuran-meal/${493}.docx`,
  },
  {
    cuz: null,
    id: 494,
    title: "Sayfa 494",
    slug: "page-494",
    read: true,
    startPage: 494,
    sound: "page-494.mp3",
    img: "page-494.png",
    sure: "Zuhruf Sûresi",
    meal: `/kuran-meal/${494}.docx`,
  },
  {
    cuz: null,
    id: 495,
    title: "Sayfa 495",
    slug: "page-495",
    read: true,
    startPage: 495,
    sound: "page-495.mp3",
    img: "page-495.png",
    sure: "Duhân Sûresi",
    meal: `/kuran-meal/${495}.docx`,
  },
  {
    cuz: null,
    id: 496,
    title: "Sayfa 496",
    slug: "page-496",
    read: true,
    startPage: 496,
    sound: "page-496.mp3",
    img: "page-496.png",
    sure: "Duhân Sûresi",
    meal: `/kuran-meal/${496}.docx`,
  },
  {
    cuz: null,
    id: 497,
    title: "Sayfa 497",
    slug: "page-497",
    read: true,
    startPage: 497,
    sound: "page-497.mp3",
    img: "page-497.png",
    sure: "Duhân Sûresi",
    meal: `/kuran-meal/${497}.docx`,
  },
  {
    cuz: null,
    id: 498,
    title: "Sayfa 498",
    slug: "page-498",
    read: true,
    startPage: 498,
    sound: "page-498.mp3",
    img: "page-498.png",
    sure: "Câsiye Sûresi",
    meal: `/kuran-meal/${498}.docx`,
  },
  {
    cuz: null,
    id: 499,
    title: "Sayfa 499",
    slug: "page-499",
    read: true,
    startPage: 499,
    sound: "page-499.mp3",
    img: "page-499.png",
    sure: "Câsiye Sûresi",
    meal: `/kuran-meal/${499}.docx`,
  },
  {
    cuz: "26",
    id: 500,
    title: "Sayfa 500",
    slug: "page-500",
    read: true,
    startPage: 500,
    sound: "page-500.mp3",
    img: "page-500.png",
    sure: "Câsiye Sûresi",
    meal: `/kuran-meal/${500}.docx`,
  },
  {
    cuz: null,
    id: 501,
    title: "Sayfa 501",
    slug: "page-501",
    read: true,
    startPage: 501,
    sound: "page-501.mp3",
    img: "page-501.png",
    sure: "Ahkaf Sûresi",
    meal: `/kuran-meal/${501}.docx`,
  },
  {
    cuz: null,
    id: 502,
    title: "Sayfa 502",
    slug: "page-502",
    read: true,
    startPage: 502,
    sound: "page-502.mp3",
    img: "page-502.png",
    sure: "Ahkaf Sûresi",
    meal: `/kuran-meal/${502}.docx`,
  },
  {
    cuz: null,
    id: 503,
    title: "Sayfa 503",
    slug: "page-503",
    read: true,
    startPage: 503,
    sound: "page-503.mp3",
    img: "page-503.png",
    sure: "Ahkaf Sûresi",
    meal: `/kuran-meal/${503}.docx`,
  },
  {
    cuz: null,
    id: 504,
    title: "Sayfa 504",
    slug: "page-504",
    read: true,
    startPage: 504,
    sound: "page-504.mp3",
    img: "page-504.png",
    sure: "Ahkaf Sûresi",
    meal: `/kuran-meal/${504}.docx`,
  },
  {
    cuz: null,
    id: 505,
    title: "Sayfa 505",
    slug: "page-505",
    read: true,
    startPage: 505,
    sound: "page-505.mp3",
    img: "page-505.png",
    sure: "Ahkaf Sûresi",
    meal: `/kuran-meal/${505}.docx`,
  },
  {
    cuz: null,
    id: 506,
    title: "Sayfa 506",
    slug: "page-506",
    read: true,
    startPage: 506,
    sound: "page-506.mp3",
    img: "page-506.png",
    sure: "Muhammed Sûresi",
    meal: `/kuran-meal/${506}.docx`,
  },
  {
    cuz: null,
    id: 507,
    title: "Sayfa 507",
    slug: "page-507",
    read: true,
    startPage: 507,
    sound: "page-507.mp3",
    img: "page-507.png",
    sure: "Muhammed Sûresi",
    meal: `/kuran-meal/${507}.docx`,
  },
  {
    cuz: null,
    id: 508,
    title: "Sayfa 508",
    slug: "page-508",
    read: true,
    startPage: 508,
    sound: "page-508.mp3",
    img: "page-508.png",
    sure: "Muhammed Sûresi",
    meal: `/kuran-meal/${508}.docx`,
  },
  {
    cuz: null,
    id: 509,
    title: "Sayfa 509",
    slug: "page-509",
    read: true,
    startPage: 509,
    sound: "page-509.mp3",
    img: "page-509.png",
    sure: "Muhammed Sûresi",
    meal: `/kuran-meal/${509}.docx`,
  },
  {
    cuz: null,
    id: 510,
    title: "Sayfa 510",
    slug: "page-510",
    read: true,
    startPage: 510,
    sound: "page-510.mp3",
    img: "page-510.png",
    sure: "Fetih Sûresi",
    meal: `/kuran-meal/${510}.docx`,
  },
  {
    cuz: null,
    id: 511,
    title: "Sayfa 511",
    slug: "page-511",
    read: true,
    startPage: 511,
    sound: "page-511.mp3",
    img: "page-511.png",
    sure: "Fetih Sûresi",
    meal: `/kuran-meal/${511}.docx`,
  },
  {
    cuz: null,
    id: 512,
    title: "Sayfa 512",
    slug: "page-512",
    read: true,
    startPage: 512,
    sound: "page-512.mp3",
    img: "page-512.png",
    sure: "Fetih Sûresi",
    meal: `/kuran-meal/${512}.docx`,
  },
  {
    cuz: null,
    id: 513,
    title: "Sayfa 513",
    slug: "page-513",
    read: true,
    startPage: 513,
    sound: "page-513.mp3",
    img: "page-513.png",
    sure: "Fetih Sûresi",
    meal: `/kuran-meal/${513}.docx`,
  },
  {
    cuz: null,
    id: 514,
    title: "Sayfa 514",
    slug: "page-514",
    read: true,
    startPage: 514,
    sound: "page-514.mp3",
    img: "page-514.png",
    sure: "Hucurât Sûresi",
    meal: `/kuran-meal/${514}.docx`,
  },
  {
    cuz: null,
    id: 515,
    title: "Sayfa 515",
    slug: "page-515",
    read: true,
    startPage: 515,
    sound: "page-515.mp3",
    img: "page-515.png",
    sure: "Hucurât Sûresi",
    meal: `/kuran-meal/${515}.docx`,
  },
  {
    cuz: null,
    id: 516,
    title: "Sayfa 516",
    slug: "page-516",
    read: true,
    startPage: 516,
    sound: "page-516.mp3",
    img: "page-516.png",
    sure: "Hucurât Sûresi",
    meal: `/kuran-meal/${516}.docx`,
  },
  {
    cuz: null,
    id: 517,
    title: "Sayfa 517",
    slug: "page-517",
    read: true,
    startPage: 517,
    sound: "page-517.mp3",
    img: "page-517.png",
    sure: "Kaf Sûresi",
    meal: `/kuran-meal/${517}.docx`,
  },
  {
    cuz: null,
    id: 518,
    title: "Sayfa 518",
    slug: "page-518",
    read: true,
    startPage: 518,
    sound: "page-518.mp3",
    img: "page-518.png",
    sure: "Kaf Sûresi",
    meal: `/kuran-meal/${518}.docx`,
  },
  {
    cuz: null,
    id: 519,
    title: "Sayfa 519",
    slug: "page-519",
    read: true,
    startPage: 519,
    sound: "page-519.mp3",
    img: "page-519.png",
    sure: "Zâriyât Sûresi",
    meal: `/kuran-meal/${519}.docx`,
  },
  {
    cuz: "27",
    id: 520,
    title: "Sayfa 520",
    slug: "page-520",
    read: true,
    startPage: 520,
    sound: "page-520.mp3",
    img: "page-520.png",
    sure: "Zâriyât Sûresi",
    meal: `/kuran-meal/${520}.docx`,
  },
  {
    cuz: null,
    id: 521,
    title: "Sayfa 521",
    slug: "page-521",
    read: true,
    startPage: 521,
    sound: "page-521.mp3",
    img: "page-521.png",
    sure: "Zâriyât Sûresi",
    meal: `/kuran-meal/${521}.docx`,
  },
  {
    cuz: null,
    id: 522,
    title: "Sayfa 522",
    slug: "page-522",
    read: true,
    startPage: 522,
    sound: "page-522.mp3",
    img: "page-522.png",
    sure: "Tûr Sûresi",
    meal: `/kuran-meal/${522}.docx`,
  },
  {
    cuz: null,
    id: 523,
    title: "Sayfa 523",
    slug: "page-523",
    read: true,
    startPage: 523,
    sound: "page-523.mp3",
    img: "page-523.png",
    sure: "Tûr Sûresi",
    meal: `/kuran-meal/${523}.docx`,
  },
  {
    cuz: null,
    id: 524,
    title: "Sayfa 524",
    slug: "page-524",
    read: true,
    startPage: 524,
    sound: "page-524.mp3",
    img: "page-524.png",
    sure: "Tûr Sûresi",
    meal: `/kuran-meal/${524}.docx`,
  },
  {
    cuz: null,
    id: 525,
    title: "Sayfa 525",
    slug: "page-525",
    read: true,
    startPage: 525,
    sound: "page-525.mp3",
    img: "page-525.png",
    sure: "Necm Sûresi",
    meal: `/kuran-meal/${525}.docx`,
  },
  {
    cuz: null,
    id: 526,
    title: "Sayfa 526",
    slug: "page-526",
    read: true,
    startPage: 526,
    sound: "page-526.mp3",
    img: "page-526.png",
    sure: "Necm Sûresi",
    meal: `/kuran-meal/${526}.docx`,
  },
  {
    cuz: null,
    id: 527,
    title: "Sayfa 527",
    slug: "page-527",
    read: true,
    startPage: 527,
    sound: "page-527.mp3",
    img: "page-527.png",
    sure: "Kamer Sûresi",
    meal: `/kuran-meal/${527}.docx`,
  },
  {
    cuz: null,
    id: 528,
    title: "Sayfa 528",
    slug: "page-528",
    read: true,
    startPage: 528,
    sound: "page-528.mp3",
    img: "page-528.png",
    sure: "Kamer Sûresi",
    meal: `/kuran-meal/${528}.docx`,
  },
  {
    cuz: null,
    id: 529,
    title: "Sayfa 529",
    slug: "page-529",
    read: true,
    startPage: 529,
    sound: "page-529.mp3",
    img: "page-529.png",
    sure: "Kamer Sûresi",
    meal: `/kuran-meal/${529}.docx`,
  },
  {
    cuz: null,
    id: 530,
    title: "Sayfa 530",
    slug: "page-530",
    read: true,
    startPage: 530,
    sound: "page-530.mp3",
    img: "page-530.png",
    sure: "Rahmân Sûresi",
    meal: `/kuran-meal/${530}.docx`,
  },
  {
    cuz: null,
    id: 531,
    title: "Sayfa 531",
    slug: "page-531",
    read: true,
    startPage: 531,
    sound: "page-531.mp3",
    img: "page-531.png",
    sure: "Rahmân Sûresi",
    meal: `/kuran-meal/${531}.docx`,
  },
  {
    cuz: null,
    id: 532,
    title: "Sayfa 532",
    slug: "page-532",
    read: true,
    startPage: 532,
    sound: "page-532.mp3",
    img: "page-532.png",
    sure: "Rahmân Sûresi",
    meal: `/kuran-meal/${532}.docx`,
  },
  {
    cuz: null,
    id: 533,
    title: "Sayfa 533",
    slug: "page-533",
    read: true,
    startPage: 533,
    sound: "page-533.mp3",
    img: "page-533.png",
    sure: "Vâkıa Sûresi",
    meal: `/kuran-meal/${533}.docx`,
  },
  {
    cuz: null,
    id: 534,
    title: "Sayfa 534",
    slug: "page-534",
    read: true,
    startPage: 534,
    sound: "page-534.mp3",
    img: "page-534.png",
    sure: "Vâkıa Sûresi",
    meal: `/kuran-meal/${534}.docx`,
  },
  {
    cuz: null,
    id: 535,
    title: "Sayfa 535",
    slug: "page-535",
    read: true,
    startPage: 535,
    sound: "page-535.mp3",
    img: "page-535.png",
    sure: "Vâkıa Sûresi",
    meal: `/kuran-meal/${535}.docx`,
  },
  {
    cuz: null,
    id: 536,
    title: "Sayfa 536",
    slug: "page-536",
    read: true,
    startPage: 536,
    sound: "page-536.mp3",
    img: "page-536.png",
    sure: "Hadid Sûresi",
    meal: `/kuran-meal/${536}.docx`,
  },
  {
    cuz: null,
    id: 537,
    title: "Sayfa 537",
    slug: "page-537",
    read: true,
    startPage: 537,
    sound: "page-537.mp3",
    img: "page-537.png",
    sure: "Hadid Sûresi",
    meal: `/kuran-meal/${537}.docx`,
  },
  {
    cuz: null,
    id: 538,
    title: "Sayfa 538",
    slug: "page-538",
    read: true,
    startPage: 538,
    sound: "page-538.mp3",
    img: "page-538.png",
    sure: "Hadid Sûresi",
    meal: `/kuran-meal/${538}.docx`,
  },
  {
    cuz: null,
    id: 539,
    title: "Sayfa 539",
    slug: "page-539",
    read: true,
    startPage: 539,
    sound: "page-539.mp3",
    img: "page-539.png",
    sure: "Hadid Sûresi",
    meal: `/kuran-meal/${539}.docx`,
  },
  {
    cuz: "28",
    id: 540,
    title: "Sayfa 540",
    slug: "page-540",
    read: true,
    startPage: 540,
    sound: "page-540.mp3",
    img: "page-540.png",
    sure: "Hadid Sûresi",
    meal: `/kuran-meal/${540}.docx`,
  },
  {
    cuz: null,
    id: 541,
    title: "Sayfa 541",
    slug: "page-541",
    read: true,
    startPage: 541,
    sound: "page-541.mp3",
    img: "page-541.png",
    sure: "Mücâdele Sûresi",
    meal: `/kuran-meal/${541}.docx`,
  },
  {
    cuz: null,
    id: 542,
    title: "Sayfa 542",
    slug: "page-542",
    read: true,
    startPage: 542,
    sound: "page-542.mp3",
    img: "page-542.png",
    sure: "Mücâdele Sûresi",
    meal: `/kuran-meal/${542}.docx`,
  },
  {
    cuz: null,
    id: 543,
    title: "Sayfa 543",
    slug: "page-543",
    read: true,
    startPage: 543,
    sound: "page-543.mp3",
    img: "page-543.png",
    sure: "Mücâdele Sûresi",
    meal: `/kuran-meal/${543}.docx`,
  },
  {
    cuz: null,
    id: 544,
    title: "Sayfa 544",
    slug: "page-544",
    read: true,
    startPage: 544,
    sound: "page-544.mp3",
    img: "page-544.png",
    sure: "Haşir Sûresi",
    meal: `/kuran-meal/${544}.docx`,
  },
  {
    cuz: null,
    id: 545,
    title: "Sayfa 545",
    slug: "page-545",
    read: true,
    startPage: 545,
    sound: "page-545.mp3",
    img: "page-545.png",
    sure: "Haşir Sûresi",
    meal: `/kuran-meal/${545}.docx`,
  },
  {
    cuz: null,
    id: 546,
    title: "Sayfa 546",
    slug: "page-546",
    read: true,
    startPage: 546,
    sound: "page-546.mp3",
    img: "page-546.png",
    sure: "Haşir Sûresi",
    meal: `/kuran-meal/${546}.docx`,
  },
  {
    cuz: null,
    id: 547,
    title: "Sayfa 547",
    slug: "page-547",
    read: true,
    startPage: 547,
    sound: "page-547.mp3",
    img: "page-547.png",
    sure: "Haşir Sûresi",
    meal: `/kuran-meal/${547}.docx`,
  },
  {
    cuz: null,
    id: 548,
    title: "Sayfa 548",
    slug: "page-548",
    read: true,
    startPage: 548,
    sound: "page-548.mp3",
    img: "page-548.png",
    sure: "Mümtehine Sûresi",
    meal: `/kuran-meal/${548}.docx`,
  },
  {
    cuz: null,
    id: 549,
    title: "Sayfa 549",
    slug: "page-549",
    read: true,
    startPage: 549,
    sound: "page-549.mp3",
    img: "page-549.png",
    sure: "Mümtehine Sûresi",
    meal: `/kuran-meal/${549}.docx`,
  },
  {
    cuz: null,
    id: 550,
    title: "Sayfa 550",
    slug: "page-550",
    read: true,
    startPage: 550,
    sound: "page-550.mp3",
    img: "page-550.png",
    sure: "Saf Sûresi",
    meal: `/kuran-meal/${550}.docx`,
  },
  {
    cuz: null,
    id: 551,
    title: "Sayfa 551",
    slug: "page-551",
    read: true,
    startPage: 551,
    sound: "page-551.mp3",
    img: "page-551.png",
    sure: "Saf Sûresi",
    meal: `/kuran-meal/${551}.docx`,
  },
  {
    cuz: null,
    id: 552,
    title: "Sayfa 552",
    slug: "page-552",
    read: true,
    startPage: 552,
    sound: "page-552.mp3",
    img: "page-552.png",
    sure: "Cum'a Sûresi",
    meal: `/kuran-meal/${552}.docx`,
  },
  {
    cuz: null,
    id: 553,
    title: "Sayfa 553",
    slug: "page-553",
    read: true,
    startPage: 553,
    sound: "page-553.mp3",
    img: "page-553.png",
    sure: "Münâfikûn Sûresi",
    meal: `/kuran-meal/${553}.docx`,
  },
  {
    cuz: null,
    id: 554,
    title: "Sayfa 554",
    slug: "page-554",
    read: true,
    startPage: 554,
    sound: "page-554.mp3",
    img: "page-554.png",
    sure: "Münâfikûn Sûresi",
    meal: `/kuran-meal/${554}.docx`,
  },
  {
    cuz: null,
    id: 555,
    title: "Sayfa 555",
    slug: "page-555",
    read: true,
    startPage: 555,
    sound: "page-555.mp3",
    img: "page-555.png",
    sure: "Teğabün Sûresi",
    meal: `/kuran-meal/${555}.docx`,
  },
  {
    cuz: null,
    id: 556,
    title: "Sayfa 556",
    slug: "page-556",
    read: true,
    startPage: 556,
    sound: "page-556.mp3",
    img: "page-556.png",
    sure: "Teğabün Sûresi",
    meal: `/kuran-meal/${556}.docx`,
  },
  {
    cuz: null,
    id: 557,
    title: "Sayfa 557",
    slug: "page-557",
    read: true,
    startPage: 557,
    sound: "page-557.mp3",
    img: "page-557.png",
    sure: "Talâk Sûresi",
    meal: `/kuran-meal/${557}.docx`,
  },
  {
    cuz: null,
    id: 558,
    title: "Sayfa 558",
    slug: "page-558",
    read: true,
    startPage: 558,
    sound: "page-558.mp3",
    img: "page-558.png",
    sure: "Talâk Sûresi",
    meal: `/kuran-meal/${558}.docx`,
  },
  {
    cuz: null,
    id: 559,
    title: "Sayfa 559",
    slug: "page-559",
    read: true,
    startPage: 559,
    sound: "page-559.mp3",
    img: "page-559.png",
    sure: "Tahrim Sûresi",
    meal: `/kuran-meal/${559}.docx`,
  },
  {
    cuz: "29",
    id: 560,
    title: "Sayfa 560",
    slug: "page-560",
    read: true,
    startPage: 560,
    sound: "page-560.mp3",
    img: "page-560.png",
    sure: "Tahrim Sûresi",
    meal: `/kuran-meal/${560}.docx`,
  },
  {
    cuz: null,
    id: 561,
    title: "Sayfa 561",
    slug: "page-561",
    read: true,
    startPage: 561,
    sound: "page-561.mp3",
    img: "page-561.png",
    sure: "Mülk Sûresi",
    meal: `/kuran-meal/${561}.docx`,
  },
  {
    cuz: null,
    id: 562,
    title: "Sayfa 562",
    slug: "page-562",
    read: true,
    startPage: 562,
    sound: "page-562.mp3",
    img: "page-562.png",
    sure: "Mülk Sûresi",
    meal: `/kuran-meal/${562}.docx`,
  },
  {
    cuz: null,
    id: 563,
    title: "Sayfa 563",
    slug: "page-563",
    read: true,
    startPage: 563,
    sound: "page-563.mp3",
    img: "page-563.png",
    sure: "Kalem Sûresi",
    meal: `/kuran-meal/${563}.docx`,
  },
  {
    cuz: null,
    id: 564,
    title: "Sayfa 564",
    slug: "page-564",
    read: true,
    startPage: 564,
    sound: "page-564.mp3",
    img: "page-564.png",
    sure: "Kalem Sûresi",
    meal: `/kuran-meal/${564}.docx`,
  },
  {
    cuz: null,
    id: 565,
    title: "Sayfa 565",
    slug: "page-565",
    read: true,
    startPage: 565,
    sound: "page-565.mp3",
    img: "page-565.png",
    sure: "Hâkka Sûresi",
    meal: `/kuran-meal/${565}.docx`,
  },
  {
    cuz: null,
    id: 566,
    title: "Sayfa 566",
    slug: "page-566",
    read: true,
    startPage: 566,
    sound: "page-566.mp3",
    img: "page-566.png",
    sure: "Hâkka Sûresi",
    meal: `/kuran-meal/${566}.docx`,
  },
  {
    cuz: null,
    id: 567,
    title: "Sayfa 567",
    slug: "page-567",
    read: true,
    startPage: 567,
    sound: "page-567.mp3",
    img: "page-567.png",
    sure: "Meâric Sûresi",
    meal: `/kuran-meal/${567}.docx`,
  },
  {
    cuz: null,
    id: 568,
    title: "Sayfa 568",
    slug: "page-568",
    read: true,
    startPage: 568,
    sound: "page-568.mp3",
    img: "page-568.png",
    sure: "Meâric Sûresi",
    meal: `/kuran-meal/${568}.docx`,
  },
  {
    cuz: null,
    id: 569,
    title: "Sayfa 569",
    slug: "page-569",
    read: true,
    startPage: 569,
    sound: "page-569.mp3",
    img: "page-569.png",
    sure: "Nuh Sûresi",
    meal: `/kuran-meal/${569}.docx`,
  },
  {
    cuz: null,
    id: 570,
    title: "Sayfa 570",
    slug: "page-570",
    read: true,
    startPage: 570,
    sound: "page-570.mp3",
    img: "page-570.png",
    sure: "Nuh Sûresi",
    meal: `/kuran-meal/${570}.docx`,
  },
  {
    cuz: null,
    id: 571,
    title: "Sayfa 571",
    slug: "page-571",
    read: true,
    startPage: 571,
    sound: "page-571.mp3",
    img: "page-571.png",
    sure: "Cin Sûresi",
    meal: `/kuran-meal/${571}.docx`,
  },
  {
    cuz: null,
    id: 572,
    title: "Sayfa 572",
    slug: "page-572",
    read: true,
    startPage: 572,
    sound: "page-572.mp3",
    img: "page-572.png",
    sure: "Cin Sûresi",
    meal: `/kuran-meal/${572}.docx`,
  },
  {
    cuz: null,
    id: 573,
    title: "Sayfa 573",
    slug: "page-573",
    read: true,
    startPage: 573,
    sound: "page-573.mp3",
    img: "page-573.png",
    sure: "Müzzemmil Sûresi",
    meal: `/kuran-meal/${573}.docx`,
  },
  {
    cuz: null,
    id: 574,
    title: "Sayfa 574",
    slug: "page-574",
    read: true,
    startPage: 574,
    sound: "page-574.mp3",
    img: "page-574.png",
    sure: "Müddessir Sûresi",
    meal: `/kuran-meal/${574}.docx`,
  },
  {
    cuz: null,
    id: 575,
    title: "Sayfa 575",
    slug: "page-575",
    read: true,
    startPage: 575,
    sound: "page-575.mp3",
    img: "page-575.png",
    sure: "Müddessir Sûresi",
    meal: `/kuran-meal/${575}.docx`,
  },
  {
    cuz: null,
    id: 576,
    title: "Sayfa 576",
    slug: "page-576",
    read: true,
    startPage: 576,
    sound: "page-576.mp3",
    img: "page-576.png",
    sure: "Kıyamet Sûresi",
    meal: `/kuran-meal/${576}.docx`,
  },
  {
    cuz: null,
    id: 577,
    title: "Sayfa 577",
    slug: "page-577",
    read: true,
    startPage: 577,
    sound: "page-577.mp3",
    img: "page-577.png",
    sure: "İnsan Sûresi",
    meal: `/kuran-meal/${577}.docx`,
  },
  {
    cuz: null,
    id: 578,
    title: "Sayfa 578",
    slug: "page-578",
    read: true,
    startPage: 578,
    sound: "page-578.mp3",
    img: "page-578.png",
    sure: "İnsan Sûresi",
    meal: `/kuran-meal/${578}.docx`,
  },
  {
    cuz: null,
    id: 579,
    title: "Sayfa 579",
    slug: "page-579",
    read: true,
    startPage: 579,
    sound: "page-579.mp3",
    img: "page-579.png",
    sure: "Mürselât Sûresi",
    meal: `/kuran-meal/${579}.docx`,
  },
  {
    cuz: "30",
    id: 580,
    title: "Sayfa 580",
    slug: "page-580",
    read: true,
    startPage: 580,
    sound: "page-580.mp3",
    img: "page-580.png",
    sure: "Mürselât Sûresi",
    meal: `/kuran-meal/${580}.docx`,
  },
  {
    cuz: null,
    id: 581,
    title: "Sayfa 581",
    slug: "page-581",
    read: true,
    startPage: 581,
    sound: "page-581.mp3",
    img: "page-581.png",
    sure: "Nebe' Sûresi",
    meal: `/kuran-meal/${581}.docx`,
  },
  {
    cuz: null,
    id: 582,
    title: "Sayfa 582",
    slug: "page-582",
    read: true,
    startPage: 582,
    sound: "page-582.mp3",
    img: "page-582.png",
    sure: "Nâziât Sûresi",
    meal: `/kuran-meal/${582}.docx`,
  },
  {
    cuz: null,
    id: 583,
    title: "Sayfa 583",
    slug: "page-583",
    read: true,
    startPage: 583,
    sound: "page-583.mp3",
    img: "page-583.png",
    sure: "Nâziât Sûresi",
    meal: `/kuran-meal/${583}.docx`,
  },
  {
    cuz: null,
    id: 584,
    title: "Sayfa 584",
    slug: "page-584",
    read: true,
    startPage: 584,
    sound: "page-584.mp3",
    img: "page-584.png",
    sure: "Abese Sûresi",
    meal: `/kuran-meal/${584}.docx`,
  },
  {
    cuz: null,
    id: 585,
    title: "Sayfa 585",
    slug: "page-585",
    read: true,
    startPage: 585,
    sound: "page-585.mp3",
    img: "page-585.png",
    sure: "Tekvir Sûresi",
    meal: `/kuran-meal/${585}.docx`,
  },
  {
    cuz: null,
    id: 586,
    title: "Sayfa 586",
    slug: "page-586",
    read: true,
    startPage: 586,
    sound: "page-586.mp3",
    img: "page-586.png",
    sure: "İnfitâr Sûresi",
    meal: `/kuran-meal/${586}.docx`,
  },
  {
    cuz: null,
    id: 587,
    title: "Sayfa 587",
    slug: "page-587",
    read: true,
    startPage: 587,
    sound: "page-587.mp3",
    img: "page-587.png",
    sure: "Mutaffifin Sûresi",
    meal: `/kuran-meal/${587}.docx`,
  },
  {
    cuz: null,
    id: 588,
    title: "Sayfa 588",
    slug: "page-588",
    read: true,
    startPage: 588,
    sound: "page-588.mp3",
    img: "page-588.png",
    sure: "İnşikak Sûresi",
    meal: `/kuran-meal/${588}.docx`,
  },
  {
    cuz: null,
    id: 589,
    title: "Sayfa 589",
    slug: "page-589",
    read: true,
    startPage: 589,
    sound: "page-589.mp3",
    img: "page-589.png",
    sure: "Bürûc Sûresi",
    meal: `/kuran-meal/${589}.docx`,
  },
  {
    cuz: null,
    id: 590,
    title: "Sayfa 590",
    slug: "page-590",
    read: true,
    startPage: 590,
    sound: "page-590.mp3",
    img: "page-590.png",
    sure: "Târık Sûresi",
    meal: `/kuran-meal/${590}.docx`,
  },
  {
    cuz: null,
    id: 591,
    title: "Sayfa 591",
    slug: "page-591",
    read: true,
    startPage: 591,
    sound: "page-591.mp3",
    img: "page-591.png",
    sure: "A'lâ Sûresi, Gâşiye Sûresi",
    meal: `/kuran-meal/${591}.docx`,
  },
  {
    cuz: null,
    id: 592,
    title: "Sayfa 592",
    slug: "page-592",
    read: true,
    startPage: 592,
    sound: "page-592.mp3",
    img: "page-592.png",
    sure: "Fecr Sûresi",
    meal: `/kuran-meal/${592}.docx`,
  },
  {
    cuz: null,
    id: 593,
    title: "Sayfa 593",
    slug: "page-593",
    read: true,
    startPage: 593,
    sound: "page-593.mp3",
    img: "page-593.png",
    sure: "Beled Sûresi",
    meal: `/kuran-meal/${593}.docx`,
  },
  {
    cuz: null,
    id: 594,
    title: "Sayfa 594",
    slug: "page-594",
    read: true,
    startPage: 594,
    sound: "page-594.mp3",
    img: "page-594.png",
    sure: "Şems Sûresi",
    meal: `/kuran-meal/${594}.docx`,
  },
  {
    cuz: null,
    id: 595,
    title: "Sayfa 595",
    slug: "page-595",
    read: true,
    startPage: 595,
    sound: "page-595.mp3",
    img: "page-595.png",
    sure: "Leyl Sûresi, Duhâ Sûresi",
    meal: `/kuran-meal/${595}.docx`,
  },
  {
    cuz: null,
    id: 596,
    title: "Sayfa 596",
    slug: "page-596",
    read: true,
    startPage: 596,
    sound: "page-596.mp3",
    img: "page-596.png",
    sure: "İnşirâh Sûresi, Tin Sûresi",
    meal: `/kuran-meal/${596}.docx`,
  },
  {
    cuz: null,
    id: 597,
    title: "Sayfa 597",
    slug: "page-597",
    read: true,
    startPage: 597,
    sound: "page-597.mp3",
    img: "page-597.png",
    sure: "Alak Sûresi",
    meal: `/kuran-meal/${597}.docx`,
  },
  {
    cuz: null,
    id: 598,
    title: "Sayfa 598",
    slug: "page-598",
    read: true,
    startPage: 598,
    sound: "page-598.mp3",
    img: "page-598.png",
    sure: "Kadir Sûresi, Beyyine Sûresi",
    meal: `/kuran-meal/${598}.docx`,
  },
  {
    cuz: null,
    id: 599,
    title: "Sayfa 599",
    slug: "page-599",
    read: true,
    startPage: 599,
    sound: "page-599.mp3",
    img: "page-599.png",
    sure: "Zilzâl Sûresi, Âdiyât Sûresi",
    meal: `/kuran-meal/${599}.docx`,
  },
  {
    cuz: null,
    id: 600,
    title: "Sayfa 600",
    slug: "page-600",
    read: true,
    startPage: 600,
    sound: "page-600.mp3",
    img: "page-600.png",
    sure: "Kâria Sûresi, Tekâsür Sûresi",
    meal: `/kuran-meal/${600}.docx`,
  },
  {
    cuz: null,
    id: 601,
    title: "Sayfa 601",
    slug: "page-601",
    read: true,
    startPage: 601,
    sound: "page-601.mp3",
    img: "page-601.png",
    sure: "Asr Sûresi, Hümeze Sûresi, Fil Sûresi",
    meal: `/kuran-meal/${601}.docx`,
  },
  {
    cuz: null,
    id: 602,
    title: "Sayfa 602",
    slug: "page-602",
    read: true,
    startPage: 602,
    sound: "page-602.mp3",
    img: "page-602.png",
    sure: "Kureyş Sûresi, Mâûn Sûresi, Kevser Sûresi",
    meal: `/kuran-meal/${602}.docx`,
  },
  {
    cuz: null,
    id: 603,
    title: "Sayfa 603",
    slug: "page-603",
    read: true,
    startPage: 603,
    sound: "page-603.mp3",
    img: "page-603.png",
    sure: "Kâfirûn Sûresi, Nasr Sûresi, Tebbet Sûresi",
    meal: `/kuran-meal/${603}.docx`,
  },
  {
    cuz: null,
    id: 604,
    title: "Sayfa 604",
    slug: "page-604",
    read: true,
    startPage: 604,
    sound: "page-604.mp3",
    img: "page-604.png",
    sure: "İhlâs Sûresi, Felâk Sûresi, Nâs Sûresi",
    meal: `/kuran-meal/${604}.docx`,
  },
];

export const sureler = [
  {
    id: 1,
    title: "Fâtiha Sûresi",
    ayet: 7,
    startPage: 0,
  },
  {
    id: 2,
    title: "Bakara Sûresi",
    ayet: 286,
    startPage: 1,
  },
  {
    id: 3,
    title: "Âl-i İmrân Sûresi",
    ayet: 200,
    startPage: 49,
  },
  {
    id: 4,
    title: "Nisâ Sûresi",
    ayet: 176,
    startPage: 76,
  },
  {
    id: 5,
    title: "Mâide Sûresi",
    ayet: 120,
    startPage: 105,
  },
  {
    id: 6,
    title: "En'âm Sûresi",
    ayet: 165,
    startPage: 127,
  },
  {
    id: 7,
    title: "A'râf Sûresi",
    ayet: 206,
    startPage: 150,
  },
  {
    id: 8,
    title: "Enfâl Sûresi",
    ayet: 75,
    startPage: 176,
  },
  {
    id: 9,
    title: "Tevbe Sûresi",
    ayet: 129,
    startPage: 186,
  },
  {
    id: 10,
    title: "Yunus Sûresi",
    ayet: 109,
    startPage: 207,
  },
  {
    id: 11,
    title: "Hûd Sûresi",
    ayet: 123,
    startPage: 220,
  },
  {
    id: 12,
    title: "Yusuf Sûresi",
    ayet: 111,
    startPage: 234,
  },
  {
    id: 13,
    title: "Ra'd Sûresi",
    ayet: 43,
    startPage: 248,
  },
  {
    id: 14,
    title: "İbrahim Sûresi",
    ayet: 52,
    startPage: 254,
  },
  {
    id: 15,
    title: "Hicr Sûresi",
    ayet: 99,
    startPage: 261,
  },
  {
    id: 16,
    title: "Nahl Sûresi",
    ayet: 128,
    startPage: 268,
  },
  {
    id: 17,
    title: "İsrâ Sûresi",
    ayet: 111,
    startPage: 281,
  },
  {
    id: 18,
    title: "Kehf Sûresi",
    ayet: 110,
    startPage: 292,
  },
  {
    id: 19,
    title: "Meryem Sûresi",
    ayet: 98,
    startPage: 304,
  },
  {
    id: 20,
    title: "Tâ-Hâ Sûresi",
    ayet: 135,
    startPage: 311,
  },
  {
    id: 21,
    title: "Enbiyâ Sûresi",
    ayet: 112,
    startPage: 321,
  },
  {
    id: 22,
    title: "Hac Sûresi",
    ayet: 78,
    startPage: 331,
  },
  {
    id: 23,
    title: "Mü'minûn Sûresi",
    ayet: 118,
    startPage: 341,
  },
  {
    id: 24,
    title: "Nûr Sûresi",
    ayet: 64,
    startPage: 349,
  },
  {
    id: 25,
    title: "Furkan Sûresi",
    ayet: 77,
    startPage: 358,
  },
  {
    id: 26,
    title: "Şuarâ Sûresi",
    ayet: 227,
    startPage: 366,
  },
  {
    id: 27,
    title: "Neml Sûresi",
    ayet: 93,
    startPage: 376,
  },
  {
    id: 28,
    title: "Kasas Sûresi",
    ayet: 88,
    startPage: 384,
  },
  {
    id: 29,
    title: "Ankebût Sûresi",
    ayet: 69,
    startPage: 395,
  },
  {
    id: 30,
    title: "Rûm Sûresi",
    ayet: 60,
    startPage: 403,
  },
  {
    id: 31,
    title: "Lokman Sûresi",
    ayet: 34,
    startPage: 410,
  },
  {
    id: 32,
    title: "Secde Sûresi",
    ayet: 30,
    startPage: 414,
  },
  {
    id: 33,
    title: "Ahzâb Sûresi",
    ayet: 73,
    startPage: 417,
  },
  {
    id: 34,
    title: "Sebe' Sûresi",
    ayet: 54,
    startPage: 427,
  },
  {
    id: 35,
    title: "Fâtır Sûresi",
    ayet: 45,
    startPage: 433,
  },
  {
    id: 36,
    title: "Yâsin Sûresi",
    ayet: 83,
    startPage: 439,
  },
  {
    id: 37,
    title: "Sâffât Sûresi",
    ayet: 182,
    startPage: 445,
  },
  {
    id: 38,
    title: "Sâd Sûresi",
    ayet: 88,
    startPage: 452,
  },
  {
    id: 39,
    title: "Zümer Sûresi",
    ayet: 75,
    startPage: 457,
  },
  {
    id: 40,
    title: "Mü'min Sûresi",
    ayet: 85,
    startPage: 466,
  },
  {
    id: 41,
    title: "Fussilet Sûresi",
    ayet: 54,
    startPage: 476,
  },
  {
    id: 42,
    title: "Şûrâ Sûresi",
    ayet: 53,
    startPage: 482,
  },
  {
    id: 43,
    title: "Zuhruf Sûresi",
    ayet: 89,
    startPage: 488,
  },
  {
    id: 44,
    title: "Duhân Sûresi",
    ayet: 59,
    startPage: 495,
  },
  {
    id: 45,
    title: "Câsiye Sûresi",
    ayet: 37,
    startPage: 498,
  },
  {
    id: 46,
    title: "Ahkaf Sûresi",
    ayet: 35,
    startPage: 501,
  },
  {
    id: 47,
    title: "Muhammed Sûresi",
    ayet: 38,
    startPage: 506,
  },
  {
    id: 48,
    title: "Fetih Sûresi",
    ayet: 29,
    startPage: 510,
  },
  {
    id: 49,
    title: "Hucurât Sûresi",
    ayet: 18,
    startPage: 514,
  },
  {
    id: 50,
    title: "Kaf Sûresi",
    ayet: 45,
    startPage: 517,
  },
  {
    id: 51,
    title: "Zâriyât Sûresi",
    ayet: 60,
    startPage: 519,
  },
  {
    id: 52,
    title: "Tûr Sûresi",
    ayet: 49,
    startPage: 522,
  },
  {
    id: 53,
    title: "Necm Sûresi",
    ayet: 62,
    startPage: 525,
  },
  {
    id: 54,
    title: "Kamer Sûresi",
    ayet: 55,
    startPage: 527,
  },
  {
    id: 55,
    title: "Rahmân Sûresi",
    ayet: 78,
    startPage: 530,
  },
  {
    id: 56,
    title: "Vâkıa Sûresi",
    ayet: 96,
    startPage: 533,
  },
  {
    id: 57,
    title: "Hadid Sûresi",
    ayet: 29,
    startPage: 536,
  },
  {
    id: 58,
    title: "Mücâdele Sûresi",
    ayet: 22,
    startPage: 541,
  },
  {
    id: 59,
    title: "Haşir Sûresi",
    ayet: 24,
    startPage: 544,
  },
  {
    id: 60,
    title: "Mümtehine Sûresi",
    ayet: 13,
    startPage: 548,
  },
  {
    id: 61,
    title: "Saf Sûresi",
    ayet: 14,
    startPage: 550,
  },
  {
    id: 62,
    title: "Cum'a Sûresi",
    ayet: 11,
    startPage: 552,
  },
  {
    id: 63,
    title: "Münâfikûn Sûresi",
    ayet: 11,
    startPage: 553,
  },
  {
    id: 64,
    title: "Teğabün Sûresi",
    ayet: 18,
    startPage: 555,
  },
  {
    id: 65,
    title: "Talâk Sûresi",
    ayet: 12,
    startPage: 557,
  },
  {
    id: 66,
    title: "Tahrim Sûresi",
    ayet: 12,
    startPage: 559,
  },
  {
    id: 67,
    title: "Mülk Sûresi",
    ayet: 30,
    startPage: 561,
  },
  {
    id: 68,
    title: "Kalem Sûresi",
    ayet: 52,
    startPage: 563,
  },
  {
    id: 69,
    title: "Hâkka Sûresi",
    ayet: 52,
    startPage: 565,
  },
  {
    id: 70,
    title: "Meâric Sûresi",
    ayet: 44,
    startPage: 567,
  },
  {
    id: 71,
    title: "Nuh Sûresi",
    ayet: 28,
    startPage: 569,
  },
  {
    id: 72,
    title: "Cin Sûresi",
    ayet: 28,
    startPage: 571,
  },
  {
    id: 73,
    title: "Müzzemmil Sûresi",
    ayet: 20,
    startPage: 573,
  },
  {
    id: 74,
    title: "Müddessir Sûresi",
    ayet: 56,
    startPage: 574,
  },
  {
    id: 75,
    title: "Kıyamet Sûresi",
    ayet: 40,
    startPage: 576,
  },
  {
    id: 76,
    title: "İnsan Sûresi",
    ayet: 31,
    startPage: 577,
  },
  {
    id: 77,
    title: "Mürselât Sûresi",
    ayet: 50,
    startPage: 579,
  },
  {
    id: 78,
    title: "Nebe' Sûresi",
    ayet: 40,
    startPage: 581,
  },
  {
    id: 79,
    title: "Nâziât Sûresi",
    ayet: 46,
    startPage: 582,
  },
  {
    id: 80,
    title: "Abese Sûresi",
    ayet: 42,
    startPage: 584,
  },
  {
    id: 81,
    title: "Tekvir Sûresi",
    ayet: 29,
    startPage: 585,
  },
  {
    id: 82,
    title: "İnfitâr Sûresi",
    ayet: 19,
    startPage: 586,
  },
  {
    id: 83,
    title: "Mutaffifin Sûresi",
    ayet: 36,
    startPage: 587,
  },
  {
    id: 84,
    title: "İnşikak Sûresi",
    ayet: 25,
    startPage: 588,
  },
  {
    id: 85,
    title: "Bürûc Sûresi",
    ayet: 22,
    startPage: 589,
  },
  {
    id: 86,
    title: "Târık Sûresi",
    ayet: 17,
    startPage: 590,
  },
  {
    id: 87,
    title: "A'lâ Sûresi",
    ayet: 19,
    startPage: 591,
  },
  {
    id: 88,
    title: "Gâşiye Sûresi",
    ayet: 26,
    startPage: 591,
  },
  {
    id: 89,
    title: "Fecr Sûresi",
    ayet: 30,
    startPage: 592,
  },
  {
    id: 90,
    title: "Beled Sûresi",
    ayet: 20,
    startPage: 593,
  },
  {
    id: 91,
    title: "Şems Sûresi",
    ayet: 15,
    startPage: 594,
  },
  {
    id: 92,
    title: "Leyl Sûresi",
    ayet: 21,
    startPage: 595,
  },
  {
    id: 93,
    title: "Duhâ Sûresi",
    ayet: 11,
    startPage: 595,
  },
  {
    id: 94,
    title: "İnşirâh Sûresi",
    ayet: 8,
    startPage: 596,
  },
  {
    id: 95,
    title: "Tin Sûresi",
    ayet: 8,
    startPage: 596,
  },
  {
    id: 96,
    title: "Alak Sûresi",
    ayet: 19,
    startPage: 597,
  },
  {
    id: 97,
    title: "Kadir Sûresi",
    ayet: 5,
    startPage: 598,
  },
  {
    id: 98,
    title: "Beyyine Sûresi",
    ayet: 8,
    startPage: 598,
  },
  {
    id: 99,
    title: "Zilzâl Sûresi",
    ayet: 8,
    startPage: 599,
  },
  {
    id: 100,
    title: "Âdiyât Sûresi",
    ayet: 11,
    startPage: 599,
  },
  {
    id: 101,
    title: "Kâria Sûresi",
    ayet: 11,
    startPage: 600,
  },
  {
    id: 102,
    title: "Tekâsür Sûresi",
    ayet: 8,
    startPage: 600,
  },
  {
    id: 103,
    title: "Asr Sûresi",
    ayet: 3,
    startPage: 601,
  },
  {
    id: 104,
    title: "Hümeze Sûresi",
    ayet: 9,
    startPage: 601,
  },
  {
    id: 105,
    title: "Fil Sûresi",
    ayet: 5,
    startPage: 601,
  },
  {
    id: 106,
    title: "Kureyş Sûresi",
    ayet: 4,
    startPage: 602,
  },
  {
    id: 107,
    title: "Mâûn Sûresi",
    ayet: 7,
    startPage: 602,
  },
  {
    id: 108,
    title: "Kevser Sûresi",
    ayet: 3,
    startPage: 602,
  },
  {
    id: 109,
    title: "Kâfirûn Sûresi",
    ayet: 6,
    startPage: 603,
  },
  {
    id: 110,
    title: "Nasr Sûresi",
    ayet: 3,
    startPage: 603,
  },
  {
    id: 111,
    title: "Tebbet Sûresi",
    ayet: 5,
    startPage: 603,
  },
  {
    id: 112,
    title: "İhlâs Sûresi",
    ayet: 4,
    startPage: 604,
  },
  {
    id: 113,
    title: "Felâk Sûresi",
    ayet: 5,
    startPage: 604,
  },
  {
    id: 114,
    title: "Nâs Sûresi",
    ayet: 6,
    startPage: 604,
  },
];

export const ala = {
  title: "Ala",
  slug: "ala",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/ala/",
  page: 1,
};

export const duayi_ismi_azam = {
  title: "Dua-ı İsmi Azam",
  slug: "duayi_ismi_azam",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/duayi_ismi_azam/",
  page: 4,
};

export const duayi_ismi_azam_meal = {
  title: "Dua-ı İsmi Azam",
  slug: "duayi_ismi_azam_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/duayi_ismi_azam/",
  page: 6,
};

export const bakara = {
  title: "Bakara",
  slug: "bakara",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/bakara/",
  page: 1,
};

export const cuma = {
  title: "Cuma",
  slug: "cuma",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/cuma/",
  page: 2,
};

export const duhan = {
  title: "Duhan",
  slug: "duhan",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/duhan/",
  page: 3,
};

export const fatiha = {
  title: "Fatiha",
  slug: "fatiha",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/fatiha/",
  page: 1,
};

export const fetih = {
  title: "Fetih",
  slug: "fetih",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/fetih/",
  page: 5,
};

export const hasr = {
  title: "Hasr",
  slug: "hasr",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/hasr/",
  page: 2,
};

export const hatim = {
  title: "Hatim",
  slug: "hatim",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/hatim/",
  page: 1,
};

export const insan = {
  title: "İnsan",
  slug: "insan",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/insan/",
  page: 3,
};

export const kehf = {
  title: "Kehf",
  slug: "kehf",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/kehf/",
  page: 2,
};

export const mulk = {
  title: "Mulk",
  slug: "mulk",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/mulk/",
  page: 3,
};

export const nebe = {
  title: "Nebe",
  slug: "nebe",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/nebe/",
  page: 3,
};

export const rahman = {
  title: "Rahman",
  slug: "rahman",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/rahman/",
  page: 4,
};

export const tahrim = {
  title: "Tahrim",
  slug: "tahrim",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/tahrim/",
  page: 1,
};

export const vakia = {
  title: "Vakia",
  slug: "vakia",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/vakia/",
  page: 4,
};

export const yasin = {
  title: "Yasin",
  slug: "yasin",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/yasin/",
  page: 6,
};

export const yusuf = {
  title: "Yusuf",
  slug: "yusuf",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerim/yusuf/",
  page: 1,
};

export const duayi_mustecab = {
  title: "Dua-ı Müstecab",
  slug: "duayi_mustecab",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/duayi_mustecab/",
  page: 4,
};

export const cevseni_kebir = [
  {
    id: 1,
    title: "Pazartesi",
    slug: "pazartesi",
    read: true,
  },
  {
    id: 2,
    title: "Salı",
    slug: "sali",
    read: true,
  },
  {
    id: 3,
    title: "Çarşamba",
    slug: "carsamba",
    read: true,
  },
  {
    id: 4,
    title: "Perşembe",
    slug: "persembe",
    read: true,
  },
  {
    id: 5,
    title: "Cuma",
    slug: "kebir_cuma",
    read: true,
  },
  {
    id: 6,
    title: "Cumartesi",
    slug: "cumartesi",
    read: true,
  },
  {
    id: 7,
    title: "Pazar",
    slug: "pazar",
    read: true,
  },
];

export const pazartesi = {
  title: "Pazartesi",
  slug: "pazartesi",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/cevseni_kebir/pazartesi/",
  page: 8,
};

export const sali = {
  title: "Salı",
  slug: "sali",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/cevseni_kebir/sali/",
  page: 4,
};

export const carsamba = {
  title: "Çarşamba",
  slug: "carsamba",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/cevseni_kebir/carsamba/",
  page: 5,
};

export const persembe = {
  title: "Perşembe",
  slug: "persembe",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/cevseni_kebir/persembe/",
  page: 8,
};

export const kebir_cuma = {
  title: "Cuma",
  slug: "kebir_cuma",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/cevseni_kebir/cuma/",
  page: 6,
};

export const cumartesi = {
  title: "Cumartesi",
  slug: "cumartesi",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/cevseni_kebir/cumartesi/",
  page: 4,
};

export const pazar = {
  title: "Pazar",
  slug: "pazar",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/cevseni_kebir/pazar/",
  page: 10,
};

export const evradi_ummul_kuraniyye = {
  title: "Evrad-ı Ümmül Kur'aniyye",
  slug: "evradi_ummul_kuraniyye",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/evradi_ummul_kuraniyye/",
  page: 6,
};

export const munacati_veysel_karani = {
  title: "Munacat-ı Veysel Karani",
  slug: "munacati_veysel_karani",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/munacati_veysel_karani/",
  page: 6,
};

export const evradi_fethiyye = {
  title: "Evrad-ı Fethiyye",
  slug: "evradi_fethiyye",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/evradi_fethiyye/",
  page: 6,
};

export const evradi_rufaiyye = {
  title: "Evrad-ı Rufaiyye",
  slug: "evradi_rufaiyye",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/evradi_rufaiyye/",
  page: 14,
};

export const evradi_kadiriyye = {
  title: "Evrad-ı Kadiriyye",
  slug: "evradi_kadiriyye",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/evradi_kadiriyye/",
  page: 8,
};

export const evradi_naksibendiyye = {
  title: "Evrad-ı Nakşibendiyye",
  slug: "evradi_naksibendiyye",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/evradi_naksibendiyye/",
  page: 8,
};

export const delilul_irfaniyye = {
  title: "Delail-ül İrfaniyye",
  slug: "delilul_irfaniyye",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/delilul_irfaniyye/",
  page: 28,
};

export const kurani_kerimden_dualar = {
  title: "Kur'an-ı Kerim'den Dualar",
  slug: "kurani_kerimden_dualar",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/kurani_kerimden_dualar/",
  page: 7,
};

// ----- MEAL

export const mecmua_meal = [
  {
    id: 1,
    title: "Kur'an-ı Kerim",
    slug: "kurani_kerim_meal",
    read: false,
  },
  {
    id: 2,
    title: "Dua-ı Müstecab",
    slug: "duayi_mustecab_meal",
    read: true,
  },
  {
    id: 3,
    title: "Cevşen-ül Kebir",
    slug: "cevseni_kebir_meal",
    read: false,
  },
  {
    id: 4,
    title: "Dua-ı İsmi Azam",
    slug: "duayi_ismi_azam_meal",
    read: true,
  },
  {
    id: 5,
    title: "Evrad-ı Ümmül Kur'aniyye",
    slug: "evradi_ummul_kuraniyye_meal",
    read: true,
  },
  {
    id: 6,
    title: "Munacat-ı Veysel Karani",
    slug: "munacati_veysel_karani_meal",
    read: true,
  },
  {
    id: 7,
    title: "Evrad-ı Fethiyye",
    slug: "evradi_fethiyye_meal",
    read: true,
  },
  {
    id: 8,
    title: "Evrad-ı Rufaiyye",
    slug: "evradi_rufaiyye_meal",
    read: true,
  },
  {
    id: 9,
    title: "Evrad-ı Kadiriyye",
    slug: "evradi_kadiriyye_meal",
    read: true,
  },
  {
    id: 10,
    title: "Evrad-ı Nakşibendiyye",
    slug: "evradi_naksibendiyye_meal",
    read: true,
  },
  {
    id: 11,
    title: "Delail-ül İrfaniyye",
    slug: "delilul_irfaniyye_meal",
    read: true,
  },
  {
    id: 12,
    title: "Kur'an-ı Kerim'den Dualar",
    slug: "kurani_kerimden_dualar_meal",
    read: true,
  },
];

export const kurani_kerim_meal = [
  {
    id: 5,
    title: "Fatiha Suresi",
    slug: "fatiha_meal",
    read: true,
    startPage: 0,
  },
  {
    id: 2,
    title: "Bakara Suresi",
    slug: "bakara_meal",
    read: true,
    startPage: 2,
  },
  {
    id: 17,
    title: "Yusuf Suresi",
    slug: "yusuf_meal",
    read: true,
    startPage: 4,
  },
  {
    id: 10,
    title: "Kehf Suresi",
    slug: "kehf_meal",
    read: true,
    startPage: 6,
  },
  {
    id: 16,
    title: "Yasin Suresi",
    slug: "yasin_meal",
    read: true,
    startPage: 10,
  },
  {
    id: 4,
    title: "Duhan Suresi",
    slug: "duhan_meal",
    read: true,
    startPage: 22,
  },
  {
    id: 6,
    title: "Fetih Suresi",
    slug: "fetih_meal",
    read: true,
    startPage: 28,
  },
  {
    id: 13,
    title: "Rahman Suresi",
    slug: "rahman_meal",
    read: true,
    startPage: 38,
  },
  {
    id: 15,
    title: "Vakıa Suresi",
    slug: "vakia_meal",
    read: true,
    startPage: 46,
  },
  {
    id: 7,
    title: "Haşir Suresi",
    slug: "hasr_meal",
    read: true,
    startPage: 54,
  },
  {
    id: 3,
    title: "Cuma Suresi",
    slug: "cuma_meal",
    read: true,
    startPage: 58,
  },
  {
    id: 14,
    title: "Tahrim Suresi",
    slug: "tahrim_meal",
    read: true,
    startPage: 62,
  },
  {
    id: 11,
    title: "Mülk Suresi",
    slug: "mulk_meal",
    read: true,
    startPage: 64,
  },
  {
    id: 9,
    title: "İnsan Suresi",
    slug: "insan_meal",
    read: true,
    startPage: 70,
  },
  {
    id: 12,
    title: "Nebe Suresi",
    slug: "nebe_meal",
    read: true,
    startPage: 76,
  },
  {
    id: 1,
    title: "A'la Suresi",
    slug: "ala_meal",
    read: true,
    startPage: 82,
  },
  {
    id: 8,
    title: "Hatim Duası",
    slug: "hatim_meal",
    read: true,
    startPage: 84,
  },
];

export const ala_meal = {
  title: "Ala",
  slug: "ala_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/ala/",
  page: 2,
};

export const bakara_meal = {
  title: "Bakara",
  slug: "bakara_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/bakara/",
  page: 2,
};

export const cuma_meal = {
  title: "Cuma",
  slug: "cuma_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/cuma/",
  page: 4,
};

export const duhan_meal = {
  title: "Duhan",
  slug: "duhan_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/duhan/",
  page: 6,
};

export const fatiha_meal = {
  title: "Fatiha",
  slug: "fatiha_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/fatiha/",
  page: 2,
};

export const fetih_meal = {
  title: "Fetih",
  slug: "fetih_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/fetih/",
  page: 10,
};

export const hasr_meal = {
  title: "Hasr",
  slug: "hasr_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/hasr/",
  page: 4,
};

export const hatim_meal = {
  title: "Hatim",
  slug: "hatim_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/hatim/",
  page: 2,
};

export const insan_meal = {
  title: "İnsan",
  slug: "insan_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/insan/",
  page: 6,
};

export const kehf_meal = {
  title: "Kehf",
  slug: "kehf_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/kehf/",
  page: 4,
};

export const mulk_meal = {
  title: "Mulk",
  slug: "mulk_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/mulk/",
  page: 6,
};

export const nebe_meal = {
  title: "Nebe",
  slug: "nebe_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/nebe/",
  page: 6,
};

export const rahman_meal = {
  title: "Rahman",
  slug: "rahman_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/rahman/",
  page: 8,
};

export const tahrim_meal = {
  title: "Tahrim",
  slug: "tahrim_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/tahrim/",
  page: 2,
};

export const vakia_meal = {
  title: "Vakia",
  slug: "vakia_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/vakia/",
  page: 8,
};

export const yasin_meal = {
  title: "Yasin",
  slug: "yasin_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/yasin/",
  page: 12,
};

export const yusuf_meal = {
  title: "Yusuf",
  slug: "yusuf_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerim/yusuf/",
  page: 2,
};

export const duayi_mustecab_meal = {
  title: "Dua-ı Müstecab",
  slug: "duayi_mustecab_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/duayi_mustecab/",
  page: 6,
};

export const cevseni_kebir_meal = [
  {
    id: 1,
    title: "Pazartesi",
    slug: "pazartesi_meal",
    read: true,
  },
  {
    id: 2,
    title: "Salı",
    slug: "sali_meal",
    read: true,
  },
  {
    id: 3,
    title: "Çarşamba",
    slug: "carsamba_meal",
    read: true,
  },
  {
    id: 4,
    title: "Perşembe",
    slug: "persembe_meal",
    read: true,
  },
  {
    id: 5,
    title: "Cuma",
    slug: "kebir_cuma_meal",
    read: true,
  },
  {
    id: 6,
    title: "Cumartesi",
    slug: "cumartesi_meal",
    read: true,
  },
  {
    id: 7,
    title: "Pazar",
    slug: "pazar_meal",
    read: true,
  },
];

export const pazartesi_meal = {
  title: "Pazartesi",
  slug: "pazartesi_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/cevseni_kebir/pazartesi/",
  page: 14,
};

export const sali_meal = {
  title: "Salı",
  slug: "sali_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/cevseni_kebir/sali/",
  page: 8,
};

export const carsamba_meal = {
  title: "Çarşamba",
  slug: "carsamba_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/cevseni_kebir/carsamba/",
  page: 10,
};

export const persembe_meal = {
  title: "Perşembe",
  slug: "persembe_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/cevseni_kebir/persembe/",
  page: 16,
};

export const kebir_cuma_meal = {
  title: "Cuma",
  slug: "kebir_cuma_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/cevseni_kebir/cuma/",
  page: 12,
};

export const cumartesi_meal = {
  title: "Cumartesi",
  slug: "cumartesi_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/cevseni_kebir/cumartesi/",
  page: 8,
};

export const pazar_meal = {
  title: "Pazar",
  slug: "pazar_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/cevseni_kebir/pazar/",
  page: 20,
};

export const evradi_ummul_kuraniyye_meal = {
  title: "Evrad-ı Ümmül Kur'aniyye",
  slug: "evradi_ummul_kuraniyye_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/evradi_ummul_kuraniyye/",
  page: 10,
};

export const munacati_veysel_karani_meal = {
  title: "Munacat-ı Veysel Karani",
  slug: "munacati_veysel_karani_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/munacati_veysel_karani/",
  page: 10,
};

export const evradi_fethiyye_meal = {
  title: "Evrad-ı Fethiyye",
  slug: "evradi_fethiyye_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/evradi_fethiyye/",
  page: 10,
};

export const evradi_rufaiyye_meal = {
  title: "Evrad-ı Rufaiyye",
  slug: "evradi_rufaiyye_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/evradi_rufaiyye/",
  page: 25,
};

export const evradi_kadiriyye_meal = {
  title: "Evrad-ı Kadiriyye",
  slug: "evradi_kadiriyye_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/evradi_kadiriyye/",
  page: 14,
};

export const evradi_naksibendiyye_meal = {
  title: "Evrad-ı Nakşibendiyye",
  slug: "evradi_naksibendiyye_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua/evradi_naksibendiyye/",
  page: 14,
};

export const delilul_irfaniyye_meal = {
  title: "Delail-ül İrfaniyye",
  slug: "delilul_irfaniyye_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/delilul_irfaniyye/",
  page: 51,
};

export const kurani_kerimden_dualar_meal = {
  title: "Kur'an-ı Kerim'den Dualar",
  slug: "kurani_kerimden_dualar_meal",
  content: "https://brd.com.tr/mekteb_books/books/mecmua_meal/kurani_kerimden_dualar/",
  page: 11,
};

export const semsi_nuriye = {
  title: "Şems-i Nuriye",
  slug: "semsi_nuriye",
  content: "https://brd.com.tr/mekteb_books/books/semsi_nuriye/",
  page: 22,
};

export const hayati_hakika = [
  {
    id: 13,
    title: "Mukaddime",
    slug: "mukaddime",
    read: true,
  },
  {
    id: 8,
    title: "İhyası Mustehab Olan Geceler",
    slug: "ihyasi_mustehab_olan_geceler",
    read: true,
  },
  {
    id: 2,
    title: "Cuma Gün ve Gecesi",
    slug: "cuma_gun_ve_gecesi",
    read: true,
  },
  {
    id: 14,
    title: "Pazartesi Gün ve Gecesi",
    slug: "pazartesi_gun_ve_gecesi",
    read: true,
  },
  {
    id: 12,
    title: "Muharrem Ayı",
    slug: "muharrem_ayi",
    read: true,
  },
  {
    id: 22,
    title: "Safer Ayı",
    slug: "safer_ayi",
    read: true,
  },
  {
    id: 17,
    title: "Rebiulevvel Ayı",
    slug: "rebiulevvel_ayi",
    read: true,
  },
  {
    id: 16,
    title: "Rebiulahir, Cemaziyelevvel, Cemaziyelahir",
    slug: "rebiulahir_cemaziyelevvel_cemaziyelahir",
    read: true,
  },
  {
    id: 18,
    title: "Recep Ayı",
    slug: "recep_ayi",
    read: true,
  },
  {
    id: 19,
    title: "Regaib Gecesi",
    slug: "regaib_gecesi",
    read: true,
  },
  {
    id: 11,
    title: "Mirac Gecesi",
    slug: "mirac_gecesi",
    read: true,
  },
  {
    id: 20,
    title: "Şaban Ayı",
    slug: "saban_ayi",
    read: true,
  },
  {
    id: 1,
    title: "Beraat Gecesi",
    slug: "beraat_gecesi",
    read: true,
  },
  {
    id: 21,
    title: "Şaban Ayının Son Gecesi",
    slug: "saban_ayinin_son_Gecesi",
    read: true,
  },
  {
    id: 15,
    title: "Ramazan Ayı",
    slug: "ramazan_ayi",
    read: true,
  },
  {
    id: 9,
    title: "İtikaf",
    slug: "itikaf",
    read: true,
  },
  {
    id: 10,
    title: "Kadir Gecesi",
    slug: "kadir_gecesi",
    read: true,
  },
  {
    id: 24,
    title: "Şevval Ayı",
    slug: "sevval_ayi",
    read: true,
  },
  {
    id: 26,
    title: "Zilhicce Ayı",
    slug: "zilhicce_ayi",
    read: true,
  },
  {
    id: 27,
    title: "Zilhicce Ayının Son Gecesi",
    slug: "zilhicce_son_gecesi",
    read: true,
  },
  {
    id: 6,
    title: "Hatme Adabı",
    slug: "hatme_adabi",
    read: true,
  },
  {
    id: 4,
    title: "Fatiha Hatmesi",
    slug: "fatiha_hatmesi",
    read: true,
  },
  {
    id: 7,
    title: "Hatmi Enbiya",
    slug: "hatmi_enbiya",
    read: true,
  },
  {
    id: 25,
    title: "Tevbe-i İstiğfar",
    slug: "tevbei_istigfar",
    read: true,
  },
  {
    id: 23,
    title: "Salavat Hatmesi",
    slug: "salavat_hatmesi",
    read: true,
  },
  {
    id: 3,
    title: "Dua",
    slug: "dua",
    read: true,
  },
  {
    id: 5,
    title: "Hac ve Umre Programı",
    slug: "hac_ve_umre_programi",
    read: true,
  },
];

export const beraat_gecesi = {
  title: "Beraat Gecesi",
  slug: "beraat_gecesi",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/beraat_gecesi/",
  page: 5,
  direction: "ltr",
};

export const cuma_gun_ve_gecesi = {
  title: "Cuma Gün ve Gecesi",
  slug: "cuma_gun_ve_gecesi",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/cuma_gun_ve_gecesi/",
  page: 5,
  direction: "ltr",
};

export const dua = {
  title: "Dua",
  slug: "dua",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/dua/",
  page: 2,
  direction: "ltr",
};

export const fatiha_hatmesi = {
  title: "Fatiha Hatmesi",
  slug: "fatiha_hatmesi",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/fatiha_hatmesi/",
  page: 7,
  direction: "ltr",
};

export const hac_ve_umre_programi = {
  title: "Hac ve Umre Programı",
  slug: "hac_ve_umre_programi",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/hac_ve_umre_programi/",
  page: 9,
  direction: "ltr",
};

export const hatme_adabi = {
  title: "Hatme Adabı",
  slug: "hatme_adabi",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/hatme_adabi/",
  page: 1,
  direction: "ltr",
};

export const hatmi_enbiya = {
  title: "Hatmi Enbiya",
  slug: "hatmi_enbiya",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/hatmi_enbiya/",
  page: 5,
  direction: "ltr",
};

export const ihyasi_mustehab_olan_geceler = {
  title: "İhyası Mustehab Olan Geceler",
  slug: "ihyasi_mustehab_olan_geceler",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/ihyasi_mustehab_olan_geceler/",
  page: 4,
  direction: "ltr",
};

export const itikaf = {
  title: "İtikaf",
  slug: "itikaf",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/itikaf/",
  page: 4,
  direction: "ltr",
};

export const kadir_gecesi = {
  title: "Kadir Gecesi",
  slug: "kadir_gecesi",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/kadir_gecesi/",
  page: 3,
  direction: "ltr",
};

export const mirac_gecesi = {
  title: "Mirac Gecesi",
  slug: "mirac_gecesi",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/mirac_gecesi/",
  page: 2,
  direction: "ltr",
};

export const muharrem_ayi = {
  title: "Muharrem Ayı",
  slug: "muharrem_ayi",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/muharrem_ayi/",
  page: 8,
  direction: "ltr",
};

export const mukaddime = {
  title: "Mukaddime",
  slug: "mukaddime",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/mukaddime/",
  page: 2,
  direction: "ltr",
};

export const pazartesi_gun_ve_gecesi = {
  title: "Pazartesi Gün ve Gecesi",
  slug: "pazartesi_gun_ve_gecesi",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/pazartesi_gun_ve_gecesi/",
  page: 2,
  direction: "ltr",
};

export const ramazan_ayi = {
  title: "Ramazan Ayı",
  slug: "ramazan_ayi",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/ramazan_ayi/",
  page: 6,
  direction: "ltr",
};

export const rebiulahir_cemaziyelevvel_cemaziyelahir = {
  title: "Rebiulahir, Cemaziyelevvel, Cemaziyelahir",
  slug: "rebiulahir_cemaziyelevvel_cemaziyelahir",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/rebiulahir_cemaziyelevvel_cemaziyelahir/",
  page: 1,
  direction: "ltr",
};

export const rebiulevvel_ayi = {
  title: "Rebiulevvel Ayı",
  slug: "rebiulevvel_ayi",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/rebiulevvel_ayi/",
  page: 4,
  direction: "ltr",
};

export const recep_ayi = {
  title: "Recep Ayı",
  slug: "recep_ayi",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/recep_ayi/",
  page: 7,
  direction: "ltr",
};

export const regaib_gecesi = {
  title: "Regaib Gecesi",
  slug: "regaib_gecesi",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/regaib_gecesi/",
  page: 3,
  direction: "ltr",
};

export const saban_ayi = {
  title: "Şaban Ayı",
  slug: "saban_ayi",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/saban_ayi/",
  page: 5,
  direction: "ltr",
};

export const saban_ayinin_son_Gecesi = {
  title: "Şaban Ayının Son Gecesi",
  slug: "saban_ayinin_son_Gecesi",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/saban_ayinin_son_Gecesi/",
  page: 1,
  direction: "ltr",
};

export const safer_ayi = {
  title: "Safer Ayı",
  slug: "safer_ayi",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/safer_ayi/",
  page: 2,
  direction: "ltr",
};

export const salavat_hatmesi = {
  title: "Salavat Hatmesi",
  slug: "salavat_hatmesi",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/salavat_hatmesi/",
  page: 5,
  direction: "ltr",
};

export const sevval_ayi = {
  title: "Şevval Ayı",
  slug: "sevval_ayi",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/sevval_ayi/",
  page: 1,
  direction: "ltr",
};

export const tevbei_istigfar = {
  title: "Tevbe-i İstiğfar",
  slug: "tevbei_istigfar",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/tevbei_istigfar/",
  page: 4,
  direction: "ltr",
};

export const zilhicce_ayi = {
  title: "Zilhicce Ayı",
  slug: "zilhicce_ayi",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/zilhicce_ayi/",
  page: 6,
  direction: "ltr",
};

export const zilhicce_son_gecesi = {
  title: "Zilhicce Ayının Son Gecesi",
  slug: "zilhicce_son_gecesi",
  content: "https://brd.com.tr/mekteb_books/books/hayati_hakika/zilhicce_son_gecesi/",
  page: 1,
  direction: "ltr",
};

export const hadisler = [
  {
    id: 1,
    title: "Amel - İbadet",
    slug: "amel",
    read: true,
  },
  {
    id: 2,
    title: "Anne Baba Hakkı",
    slug: "annebaba",
    read: true,
  },
  {
    id: 3,
    title: "Güzel Ahlak",
    slug: "guzelahlak",
    read: true,
  },
  {
    id: 4,
    title: "Haset",
    slug: "haset",
    read: true,
  },
  {
    id: 5,
    title: "İman",
    slug: "iman",
    read: true,
  },
  {
    id: 6,
    title: "Kibir Ucub",
    slug: "kibir",
    read: true,
  },
  {
    id: 7,
    title: "Muhabbet",
    slug: "muhabbet",
    read: true,
  },
  {
    id: 8,
    title: "Riba",
    slug: "riba",
    read: true,
  },
  {
    id: 9,
    title: "Salat-ü Selam",
    slug: "salatu",
    read: true,
  },
  {
    id: 10,
    title: "Takva - Vera",
    slug: "takva",
    read: true,
  },
  {
    id: 11,
    title: "Teheccud",
    slug: "teheccud",
    read: true,
  },
  {
    id: 12,
    title: "Zikir",
    slug: "zikir",
    read: true,
  },
];

export const amel = {
  title: "Amel",
  slug: "amel",
  content: "https://brd.com.tr/mekteb_books/books/hadis/amel/",
  page: 9,
  direction: "ltr",
};

export const annebaba = {
  title: "Anne Baba",
  slug: "annebaba",
  content: "https://brd.com.tr/mekteb_books/books/hadis/annebaba/",
  page: 5,
  direction: "ltr",
};

export const guzelahlak = {
  title: "Güzel Ahlak",
  slug: "guzelahlak",
  content: "https://brd.com.tr/mekteb_books/books/hadis/guzelahlak/",
  page: 9,
  direction: "ltr",
};

export const haset = {
  title: "Haset",
  slug: "haset",
  content: "https://brd.com.tr/mekteb_books/books/hadis/haset/",
  page: 5,
  direction: "ltr",
};

export const iman = {
  title: "İman",
  slug: "iman",
  content: "https://brd.com.tr/mekteb_books/books/hadis/iman/",
  page: 8,
  direction: "ltr",
};

export const kibir = {
  title: "Kibir",
  slug: "kibir",
  content: "https://brd.com.tr/mekteb_books/books/hadis/kibir/",
  page: 6,
  direction: "ltr",
};

export const muhabbet = {
  title: "Muhabbet",
  slug: "muhabbet",
  content: "https://brd.com.tr/mekteb_books/books/hadis/muhabbet/",
  page: 9,
  direction: "ltr",
};

export const riba = {
  title: "Riba",
  slug: "riba",
  content: "https://brd.com.tr/mekteb_books/books/hadis/riba/",
  page: 4,
  direction: "ltr",
};

export const salatu = {
  title: "Salat-ü Selam",
  slug: "salatu",
  content: "https://brd.com.tr/mekteb_books/books/hadis/salatu/",
  page: 8,
  direction: "ltr",
};

export const takva = {
  title: "Takva",
  slug: "takva",
  content: "https://brd.com.tr/mekteb_books/books/hadis/takva/",
  page: 12,
  direction: "ltr",
};

export const teheccud = {
  title: "Teheccud",
  slug: "teheccud",
  content: "https://brd.com.tr/mekteb_books/books/hadis/teheccud/",
  page: 5,
  direction: "ltr",
};

export const zikir = {
  title: "Zikir",
  slug: "zikir",
  content: "https://brd.com.tr/mekteb_books/books/hadis/zikir/",
  page: 6,
  direction: "ltr",
};

export const ilahiler = [
  {
    id: 1,
    title: "Nabi",
    slug: "nabi",
    read: true,
  },
  {
    id: 2,
    title: "Yunus",
    slug: "yunus",
    read: false,
  },
  {
    id: 3,
    title: "Kuddusi",
    slug: "kuddusi",
    read: false,
  },
  {
    id: 4,
    title: "Eşrefoğlu",
    slug: "esrefoglu",
    read: true,
  },
  {
    id: 5,
    title: "Niyazi",
    slug: "niyazi",
    read: false,
  },
  {
    id: 6,
    title: "İbrahim Hakkı",
    slug: "ibrahim_hakki",
    read: false,
  },
  {
    id: 7,
    title: "Abdülgani Efendi",
    slug: "abdulgani_efendi",
    read: false,
  },
  {
    id: 8,
    title: "Alvarlı-Efe",
    slug: "alvarlı_efe",
    read: false,
  },
  {
    id: 9,
    title: "İrfani",
    slug: "irfani",
    read: false,
  },
  {
    id: 10,
    title: "Habeşi",
    slug: "habesi",
    read: true,
  },
  {
    id: 11,
    title: "Seyfullah",
    slug: "seyfullah",
    read: true,
  },
  {
    id: 12,
    title: "Şem'i",
    slug: "semi",
    read: true,
  },
  {
    id: 13,
    title: "Şeyh Said",
    slug: "seyh_said",
    read: true,
  },
  {
    id: 14,
    title: "Kul Yusuf",
    slug: "kul_yusuf",
    read: true,
  },
  {
    id: 15,
    title: "Es'ad Erbili",
    slug: "esad_erbili",
    read: true,
  },
  {
    id: 16,
    title: "Seyyid Nızamoğlu",
    slug: "seyyid_nizamoğlu",
    read: true,
  },
  {
    id: 17,
    title: "Ali Ulvi Kurucu",
    slug: "ali_ulvi_kurucu",
    read: true,
  },
  {
    id: 18,
    title: "Aziz Mahmud Hüdai",
    slug: "aziz_mahmud_hudai",
    read: true,
  },
  {
    id: 19,
    title: "Hacı Bayram Veli",
    slug: "haci_bayram_veli",
    read: true,
  },
  {
    id: 20,
    title: "Fuzuli",
    slug: "fuzuli",
    read: true,
  },
  {
    id: 21,
    title: "La Edri",
    slug: "la_edri",
    read: false,
  },
];

export const nabi = {
  1: {
    title: "",
    slug: "",
    content: `Sakın terki edepten Kuy’ı mahbubu Hüdadır bu
        Nazargahı ilahidir makamı Mustafa’dır bu
        
        Habibi kibriyanın hab gahıdır hakikatte
        Teveffuk kerde-i Arşi canabi kibriyadır bu
        
        Bu hakin pertevinden oldu dey curi Adem Zail
        Amadan açtı mevcudat dü çeşmin tutiyadır bu
        
        Felekte mah’ı nev babüs selamın sine cakidir
        Anın kandilidir,Cevza matla’ı ziyadır bu
        
        Muraatı edeb şartıyle gir Nabi bu dergaha
        Metafı Kudsiyandır Busegah’ı enbiyadır bu`,
    split: 2,
  },
};

export const yunus = [
  {
    id: 1,
    title: "Yar yüreğim yar gör ki nerler var",
    slug: "yunus_1",
    read: true,
  },
  {
    id: 2,
    title: "Şeyhimin illeri uzaktır yolları",
    slug: "yunus_2",
    read: true,
  },
  {
    id: 3,
    title: "Milk i bekadan gelmişem fani cihanı neylerim",
    slug: "yunus_3",
    read: true,
  },
  {
    id: 4,
    title: "Gel ey kardaş Hakkı bulayım dersen",
    slug: "yunus_4",
    read: true,
  },
  {
    id: 5,
    title: "Ne zaman anarsam seni kararım kalmaz Allahım",
    slug: "yunus_5",
    read: true,
  },
  {
    id: 6,
    title: "Hak yarattı alemi aşkına Muhammed’in",
    slug: "yunus_6",
    read: true,
  },
];

export const yunus_1 = {
  title: "Yar yüreğim yar gör ki nerler var",
  slug: "yunus_1",
  content: `Yar yüreğim yar gör ki nerler var
Bu halk içinde bize güller var
Gittin bu yola aşk ile bile
Gariblik ile bizi salar var

Bu yol uzaktır menzili çoktur
Geçidi yoktur derin sular var
Gözleri giryan ciğeri püryan 
Olmuşlar hayran divaneler var

Herkim pervane gelsin meydane 
Kalmasın cane kimde hüner var
Yunus sen meydan isteme 
Meydan içinde merdaneler var
`,
  split: 4,
};

export const yunus_2 = {
  title: "Şeyhimin illeri uzaktır yolları",
  slug: "yunus_2",
  content: `Yar yüreğim yar gör ki nerler var
    Bu halk içinde bize güller var
    Gittin bu yola aşk ile bile
    Gariblik ile bizi salar var

Bu yol uzaktır menzili çoktur
Geçidi yoktur derin sular var
Gözleri giryan ciğeri püryan 
Olmuşlar hayran divaneler var

Herkim pervane gelsin meydane 
Kalmasın cane kimde hüner var
Yunus sen meydan isteme 
Meydan içinde merdaneler var`,
  split: 4,
};

export const yunus_3 = {
  title: "Milk i bekadan gelmişem fani cihanı neylerim",
  slug: "yunus_3",
  content: `Milk i bekadan gelmişem fani cihanı neylerim
Ben dost cemalin görmüşem huri cinanı neylerim

Vahdet meyinin cürasın maşuk elinden içmişem
Ben dost kokusun almışam misk ü hitanı neylerim

Isa gibi dünya koyup gökleri seyran eylerim
Musayı didar olmuşam ben lenterani neylerim

Eyyüplerin şol maşukun cevrin tahammül eyledim 
Cercisleyin Hakk yoluna çıkmayan canı neylerim

Ibrahimem Cebrail’e hiç ihtiyacım kalmadı 
Muhammeden dosta gidem ben tercümanı neylerim

Ismailem Hakk yoluna canımı kurban eylerem
Çünkü bu can kurban sana koçu kurbanı neylerem

Aşık Yunus maşukuna vuslat bulunca mest olur 
Ben şişeyi çaldım taşa namusu arı neylerim`,
  split: 2,
};

export const yunus_4 = {
  title: "Gel ey kardaş Hakkı bulayım dersen",
  slug: "yunus_4",
  content: `Gel ey kardaş Hakkı bulayım dersen
Bir kamil mürşide varmayınca olmaz
Resülün cemalin göreyim dersen 
Bir kamil mürşide varmayınca olmaz

Niceler gittiler mürşid arayı
Arayanlar buldu derde devayı 
Bin okursan akdan karayı
Bir kamil mürşide varmayınca olmaz

Gel imdi kardaşlar gidelüm bile 
Nice aşıkların bağrını dele
Cebrail delildir Muhammed’e bile 
Bir kamil mürşide varmayınca olmaz

Kadılar müftüler cümle geldiler
Kitabların hep bir yerde koydular
Sen bu ilmi kimden aldın dediler 
Bir kamil mürşide varmayınca olmaz

Yunus Emre bunda mana var dedi 
Bir kamil mürşide sende var imdi 
Hazreti Musaya Hızra var dedi 
Bir kamil mürşide varmayınca olmaz`,
  split: 4,
};

export const yunus_5 = {
  title: "Ne zaman anarsam seni kararım kalmaz Allahım",
  slug: "yunus_5",
  content: `Ne zaman anarsam seni kararım kalmaz Allahım
Senden gayrı gözüm yaşın kimseler silmez Allahım

Sensin ismi Baki olan, sensin dillerde okunan
Senin aşkına dokunan, kendini bilmez Allahım

Okunur dilde destanın açıldı bağı bostanı
Sen baktığın gülistanın gülleri solmaz Allahım

Aşkın bahrine dolmayan canını feda kılmayan
Senin cemalin görmeyen meydana gelmez Allahım

Aşık Yunus seni ister lutf eyle cemalin göster
Cemalin gören aşıklar ebedi ölmez Allahım`,
  split: 2,
};

export const yunus_6 = {
  title: "Hak yarattı alemi aşkına Muhammed’in",
  slug: "yunus_6",
  content: `Hak yarattı alemi aşkına Muhammed’in
Ay ve günü yarattı aşkına Muhammed’in

Ol dedi oldu alem yazıldı levhü kalem
Okundu hatmi kelam şanına Muhammed’in

Hep aşıklar geldiler dergaha yüz sürdüler
Zikri tevhid ettiler nuruna Muhammed’in

Yunus kim ede methi över Kur’an ayeti
An vergil salavatı aşkına Muhammed’in`,
  split: 2,
};

export const kuddusi = [
  {
    id: 1,
    title: "Ey rahmeti bol padişah ",
    slug: "kuddusi_1",
    read: true,
  },
  {
    id: 2,
    title: "Sülük ahvalini salik yola gidüp gelenden sor",
    slug: "kuddusi_2",
    read: true,
  },
  {
    id: 3,
    title: "Arz-ı hal içün sultana geldim",
    slug: "kuddusi_3",
    read: true,
  },
];

export const kuddusi_1 = {
  title: "Ey rahmeti bol padişah",
  slug: "kuddusi_1",
  content: `Ey rahmeti bol padişah 
Cürmüm ile geldim sana 
Ben eyledim hadsiz günah 
Cürmüm ile geldim sana

Hadden tecavüz eyledim 
Deryayı zenbi boyladım 
Ma’lum sana ben neyledim 
Cürmüm ile geldim sana 

Senden utanmadım heman 
Ettim hata gizlü ayan 
Urma yüzüme el aman
Cürmüm ile geldim sana 

Aslım çu bir katra meni
Halk eyledin andan beni 
Aslım deni fer’im deni
Cürmüm ile geldim sana

Gerçi kesel fıku fücür
Aybu zelel çok her kusür
Lakin senin adın gafur
Cürmüm ile geldim sana 

Zenbim ile doldu cihan
Sana ayan zahir nihan
Ey lutfu bi had müste’an
Cürmüm ile geldim sana

Adın senin gaffar iken 
Ayb örtücü settar iken 
Kime gidem sen var iken
Cürmüm ile geldim sana

Hiç sana kulluk etmedim 
Rahi rızana gitmedim
Hem buyruğunu tutmadım 
Cürmüm ile geldim sana 

Bin kerre bin ey padişah
Etsem dahi böyle günah
La taknatü yeter bana 
Cürmüm ile geldim sana

Isyanda Kuddusi şedid
Kullukta bir battal pelid 
Der kesmeyub senden umid 
Cürmüm ile geldim sana`,
  split: 4,
};

export const kuddusi_2 = {
  title: "Sülük ahvalini salik yola gidüp gelenden sor",
  slug: "kuddusi_2",
  content: `Sülük ahvalini salik yola gidüp gelenden sor
Eğer gavvas olam dersen bu deryaya dalandan sor

Tarikat sırrını sorma mühaddisten müderristen
Hakikat ilmini dersin Huda’sından alandan sor

Bilemez ehli zahir ehli batin bildiğin zinhar
Sorar isen anı aynel yakin hakkı bilenden sor

Bu bir ilmi ledünni kim bilen dimez diyen bilmez
Billur arif bu ilmi kim yürü anı menenden sor

Bu Kuddusi’leyin cahil mudda-i çokdurur zira
Visalin tarzını murşid olup vasıl olandan sor`,
  split: 2,
};

export const kuddusi_3 = {
  title: "Arz-ı hal içün sultana geldim",
  slug: "kuddusi_3",
  content: `Arz-ı hal içün sultana geldim
Sailim lutfu ihsana geldim

Derdi firaka derman aradım
Ben ol tabibe dermana geldim

Can kulağı ile hüsnünü duyup 
Şem-i cemale pervane geldim

Işkına oldum anın giriftar
Kalmadı aklım divana geldim

Amade olmuş çün hamri safi
Nuş eyleyuben mestane geldim

Yağmaladı ışk zühdü takvamı
Ilmü amelden bi-gane geldim

Hükmünü icra etti aşk bende
Yanmağa nari süzane geldim

Mahfi fenada buldum safai
Yoklukla rahi merdana geldim

Bildim ki varlık perdedir hakka
Ref’edüp anı canına geldim

Eyledi tevhid hoş beni irşad
Bir katra iken umman geldim

Der ki Kuddusi elhamdulillah 
Kaçtım sivadan yezdana geldim`,
  split: 2,
};

export const esrefoglu_1 = {
  title: "Ey Allahım beni senden ayırma",
  slug: "esrefoglu",
  content: `Ey Allahım beni senden ayırma
Beni senin didarından ayırma 

Seni sevmek benim dinim imanım
İlahi dini imandan ayırma

Sararıben solup döndüm hazana
İlahi hazanımı daldan ayırma

Şeyhim güldür ben anın yaprağıyım
İlahi yaprağı gülden ayırma

Ben ol bahçesin bülbülüyem 
İlahi bülbülü gülden ayırma

Balığın canı suda dediler 
İlahi balığı gölden ayırma

Eşrefoğlu senin kemter kulundur
Ilahi kulun sultandan ayırma
`,
  split: 2,
};

export const niyazi = [
  {
    id: 1,
    title: "Zat-ı Hak’ta mahrem-i irfan olan anlar bizi,",
    slug: "niyazi_1",
    read: true,
  },
  {
    id: 2,
    title: "Derman arardım derdime",
    slug: "niyazi_2",
    read: true,
  },
  {
    id: 3,
    title: "Derdi Hakk’a talip ol dermana erem dersen",
    slug: "niyazi_3",
    read: true,
  },
];

export const niyazi_1 = {
  title: "Zat-ı Hak’ta mahrem-i irfan olan anlar bizi",
  slug: "niyazi_1",
  content: `Zat-ı Hak’ta mahrem-i irfan olan anlar bizi,
İlm-i sırda bahri bipayan olan anlar bizi.

Bu fena gülzarına bülbül olanlar anlamaz,
Vech-i baki hüsnüne hayran olan anlar bizi.

Dünya ve ukbayı tamir eylemekten geçmişiz,
Her taraftan yıkılıp viran olan anlar biz.

Kahr-u lutfu şey-i vahid bilmeyen çekti azap,
Ol azaptan kurtulup Sultan olan anlar bizi.

Arifin her bir sözünü duymaya insan gerek
Bu cihanda sanmayın hayvan olan anlar bizi.

Ey Niyazi katremiz deryaya saldık biz bugün,
Katre nice anlasın umman olan anlar bizi.`,
  split: 2,
};

export const niyazi_2 = {
  title: "Derman arardım derdime",
  slug: "niyazi_2",
  content: `Derman arardım derdime
Derdim bana derman imiş 
Bürhan sorardım aslıma 
Aslım bana bürhan imiş

Sağ ve solun gözler idim 
Dost yüzünü görsem deyu
Ben taşrada arar idim
Ol can içinde can imiş

Savm-ü salatü hac ile 
Sanma biter zahid işin
İnsan-ı kamil olmaya 
Lazım olan irfan imiş

İşit Niyazi’nin sözün
Bir nesne örtmez hak yüzün
Haktan ayan bir nesne yok
Gözsüzlere pinhan imiş`,
  split: 4,
};

export const niyazi_3 = {
  title: "Derdi Hakk’a talip ol dermana erem dersen",
  slug: "niyazi_3",
  content: `Derdi Hakk’a talip ol dermana erem dersen
Mihnetlere nakip ol ihsana erem dersen

Aşk yolu belalıdır her karı cefalıdır
Canından ümidi kes canana erem dersen

Pirinle olan ahdin güt nen varsa koy git
Bildiklerini terk et irfana erem dersen

Bu yolu bil anda gel deryayı bul ona dal
Karına erüp el sal erkana erem dersen

Sabırda Eyyüb gibi ol gam çekmede Yakup ol
Yusuf gibi mahbub ol kenana erem dersen

Terk et kuru davayı hem ücb ile riyayı
Mısri kov bu sevdayı sübhana erem dersen`,
  split: 2,
};

export const ibrahim_hakki = [
  {
    id: 1,
    title: "Canü dilde fani kıldın akibet",
    slug: "ibrahim_hakki_1",
    read: true,
  },
  {
    id: 2,
    title: "Hak şerleri hayr eyler ",
    slug: "ibrahim_hakki_2",
    read: true,
  },
  {
    id: 3,
    title: "Ne devlettir ki dildarım sen oldun",
    slug: "ibrahim_hakki_3",
    read: true,
  },
];

export const ibrahim_hakki_1 = {
  title: "Canü dilde fani kıldın akibet",
  slug: "ibrahim_hakki_1",
  content: `Canü dilde fani kıldın akibet
Gönlümü virane kıldın akibet

Ol cünün zincirini tahrik edüp
Sen beni divane kıldın akibet

Aşkı bi pervaye mahrem eyledin
Akıldan bigane kıldın akibet

Dane-i naciz idim hem ziri Hak
Danemi yüz dane kıldın akibet

Dane iken bağ ve bostan eyledin
Haki pür kaşane kıldın akibet

Cümleden kat eyledin çün gönlümü
Vasili canane kıldın akibet

Hamrı vahdetten içirdin tabıma 
Ruhumu peymane kıldın akibet

Saki i gülzar cansın dembedem
Gönlümü meyhane kıldın akibet

Ey fakirullah bu hakkı bendei
Aşıki ferzane kıldın akibet`,
  split: 2,
};

export const ibrahim_hakki_2 = {
  title: "Hak şerleri hayr eyler",
  slug: "ibrahim_hakki_2",
  content: `Hak şerleri hayr eyler 
Zannetmeki gayreyler 
Arif anı seyreyler
Mevla görelim neyler
Neylerse güzel eyler

Kalbin ana berk eyle
Tedbirini terkeyle
Takdirini derkeyle
Mevla görelim neyler

Naçar kalacak yerde
Nagah açar ol perde
Derman eder ol derde

Sen hakka tevekkül kıl
Tefviz et ve rahat bul
Sabreyle ve razı ol 
Mevla görelim neyler 
Neylerse güzel eyler

Hallaki Rahim oldur
Rezzaki Kerim oldur
Fe’ali Hakim oldur
Mevla görelim neyler
Hakkın olacak işler
Boştur gamü teşvişler
Ol hikmetini işler

Dilden gamı dur eyler
Rabbınla huzur eyler
Tefvizi ümür eyle

Deme şu niçin şöyle
Yerincedir ol öyle 
Bak sonuna sabreyle

Hoş sabrı cemilimdir
Takdiri kefilimdir
Allah ki vekilimdir

Her söyleyeni dinle 
Ol söyleteni anla
Hoş eyle kabul canla

Vallahi güzel etmiş
Billahi güzel etmiş
Tellahi güzel etmiş`,
  split: 4,
};

export const ibrahim_hakki_3 = {
  title: "Ne devlettir ki dildarım sen oldun",
  slug: "ibrahim_hakki_3",
  content: `Ne devlettir ki dildarım sen oldun
Enisü münisü yarim sen oldun

Dili pür derdimin dermanı sensin
Şifayı cami bimarım sen oldun

Bana hasm olsa alem halkı gam yok
Ne korku çün nigahdarım sen oldun

Desem ismi şerifin yadımız bes 
Dilimde cümle güftarım sen oldun

Sefalar ger cefalar bulsa canım 
Ezelden çün nigahtarım sen oldun

Sana tazim eder dillerde Hakkı
Der inkarım yok ikrarım sen oldun`,
  split: 2,
};

export const abdulgani_efendi = [
  {
    id: 1,
    title: "Eyni hidayettir lutfun ezeli ",
    slug: "abdulgani_efendi_1",
    read: true,
  },
  {
    id: 2,
    title: "Alemi eşyaya bakıp olma mükedder",
    slug: "abdulgani_efendi_2",
    read: true,
  },
  {
    id: 3,
    title: "Gönül sana senden şikayetim var",
    slug: "abdulgani_efendi_3",
    read: true,
  },
  {
    id: 4,
    title: "Bugün canan bizi davet eyledi",
    slug: "abdulgani_efendi_4",
    read: true,
  },
  // {
  //     id: 5,
  //     title: 'Ey gönül kılsan tefekkür pendimi alsan nolur',
  //     slug: 'abdulgani_efendi_5',
  //     read: true
  // }, {
  //     id: 6,
  //     title: 'Bekledim babı gülistan nev baharım gelmedi',
  //     slug: 'abdulgani_efendi_6',
  //     read: true
  // }, {
  //     id: 7,
  //     title: 'Ararken seherde gönül levhinde',
  //     slug: 'abdulgani_efendi_7',
  //     read: true
  // }, {
  //     id: 8,
  //     title: 'Dertlerime haktan derman dilerken',
  //     slug: 'abdulgani_efendi_8',
  //     read: true
  // }, {
  //     id: 9,
  //     title: 'İnsan-ı kamile hizmet eyleyen',
  //     slug: 'abdulgani_efendi_9',
  //     read: true
  // },
];

export const abdulgani_efendi_1 = {
  title: "Eyni hidayettir lutfun ezeli",
  slug: "abdulgani_efendi_1",
  content: `Eyni hidayettir lutfun ezeli 
Bildim bu dünyaya gelmeden evvel 
Aradım levhinde olan takdiri 
Buldum bu dünyaya gelmeden evvel

Ervahi ezele ruhlar gelmeden
Elestü hitabın hak buyurmadan 
Kimseler bu sırra vakıf olmadan 
Secde kıldım kimse kılmadan evvel

Alemi vücuda geldim geleli 
Entemut sırrını bildim bileli
Mürşidi kamilden dersim alalı
Öldüm bu dünyada ölmeden evvel

Mihnette bir sefada bir demde bir
Bu dünyada cekticeğim gamda bir
Ölümde bir ecelde bir canda bir
Ağlardım bu hali bilmeden evvel

Yeter olma zikri dillere destan
Gönül bahçesini eyle gülistan
Göz yaşınla sula hoş ola bostan
Feryad ede bülbül güle solmadan evvel`,
  split: 4,
};

export const abdulgani_efendi_2 = {
  title: "Alemi eşyaya bakıp olma mükedder",
  slug: "abdulgani_efendi_2",
  content: `Alemi eşyaya bakıp olma mükedder
Hevayi terk eylede bul sen seni sende 
Ta ezel böyle yazılmış levhi mukadder
Sivayı terk eylede bul sen seni sende

Gafleti terk eyle didem leylü neharı 
Gide şita ol gönlümün gele baharı
Açıla gonca yetişe ayvası narı
Ol bağa bülbül ola gör sen seni sende

Aleme ibret gözü ile bak göresin
Iki çeşmin yaş ile doldur ki silesin
Ebcedin batın hesabın et ki bilesin
Menaref dersin oku bil sen seni sende

Gördüğün alemleri bildin mi ne oldu
Zikrinin bu demde yaş ile doldu 
Arifler bak derde çare sabr ile buldu
Sabreyle gönül bulasın sen seni sende`,
  split: 4,
};

export const abdulgani_efendi_3 = {
  title: "Gönül sana senden şikayetim var",
  slug: "abdulgani_efendi_3",
  content: `Gönül sana senden şikayetim var 
Daima ağlat beni güldürme sakın
Ruhuma bir sürur gelse aşikar
Setr eyle nefsime bildirme sakın

Varlık aleminden et beni üryan
Kıl aşkın narıyla ciğerim büryan
Dünya safa olsa deryayı umman
Bir kadeh benimçun doldurma sakın

Gaflet hicabını keşfeyle her dem
Feryadu figanım artır dem be dem
Hayati hakika yürü bas kadem
Ruhu sultanımı öldürme sakın

Seyyah ol yürü var canan iline 
Bülbül ol gülşende dostun gülüne
Feryadı figan et sağı soluna
Ol gülün nevrakın soldurma sakın

Zikri aşk oduyla ciğerin dağla
Gam hasret kuşağın beline bağla
Seherlerde kanlı yaş ile ağla
Yağlıkla gözlerin sildirme sakın`,
  split: 4,
};

export const abdulgani_efendi_4 = {
  title: "Bugün canan bizi davet eyledi",
  slug: "abdulgani_efendi_4",
  content: `Bugün canan bizi davet eyledi
Buyurun nasibi olanlar gelsin
Gönül mihrabına etmiş esselah 
Iktida eyleyip kılanlar gelsinler

Zümrei uşşaka vasıl olanlar
Menaref sırrından vasıl olanlar
Küntü kenzin esrarına erenler
Dürrile mercanı derenler gelsin

Ol badı seherden alanlar nida
Açılır Rahmetin babı mutlaka
Canını canana kılanlar feda
Necatı sıdkından olanlar gelsin

Zühdü takvalığa kıla niyyeti 
Sabreden kimseye etmez minnet
Tealellah açar sekiz cenneti
Buyurun cennete girenler gelsin

Zikri zikret hakkı her seherde
Seherde açılır nice bin perde
Yağar derya gibi şifa her derde
O rahmet bahrine dalanlar gelsin`,
  split: 4,
};

export const alvarlı_efe = [
  {
    id: 1,
    title: "Bu derd meyhanesinde kimi gördüm şaduman olmuş",
    slug: "alvarlı_efe_1",
    read: true,
  },
  {
    id: 2,
    title: "Ey kerem-kanı vucudun rahmeti rahman değil mi",
    slug: "alvarlı_efe_2",
    read: true,
  },
  {
    id: 3,
    title: "Gülistan-ı risalette gül-i handan Muhammed’dir",
    slug: "alvarlı_efe_3",
    read: true,
  },
  {
    id: 4,
    title: "Ne kadar cevr-u cefa eylesen ey nur-i basar",
    slug: "alvarlı_efe_4",
    read: true,
  },
  {
    id: 5,
    title: "Birgün olur yar perdeyi kaldırır",
    slug: "alvarlı_efe_5",
    read: true,
  },
  {
    id: 6,
    title: "Ol peri verş Dilberi dildarı gördüm ben bugün",
    slug: "alvarlı_efe_6",
    read: true,
  },
];

export const alvarlı_efe_1 = {
  title: "Bu derd meyhanesinde kimi gördüm şaduman olmuş",
  slug: "alvarlı_efe_1",
  content: `Bu derd meyhanesinde kimi gördüm şaduman olmuş
Bu gam-hane-i mihnetde beladan kim eman bulmuş

Bu bir devvar-ı gaddardır gözü gördüğünü hep yer
Ne şahu ne geda bunda ne bir fert payidar olmuş

Nice serv-i revan canlar nice gül yüzlü sultanlar
Nice cemşid gibi hanlar bütün bu deryaya dalmış

Hüner Hakk’a kul olmaktır hüner irfanı bulmaktır
Hüner bir ibret almaktır bu gaflet alemi almış

Muhammet lutfi’ye lutfet eman ey halik-ı alem
Belayı ekber oldur ki özünü gaflete salmış`,
  split: 2,
};

export const alvarlı_efe_2 = {
  title: "Ey kerem-kanı vucudun rahmeti rahman değil mi",
  slug: "alvarlı_efe_2",
  content: `Ey kerem-kanı vucudun rahmeti rahman değil mi
Vücudundaki o cudun umman-ı ihsan değil mi

Kemahi vasfında vassaf Hazret-i Kur’an nur’isaf
Melekütde olan esnaf cemalin hayran değil mi

La’l-i leblin kevser-i can her kelamın durr u mercan
Aşıklar eyler heyecan canlar kurban değil mi

İlm-i hikmettir fi’alin Arş’a şerefdir ni’alin
Keşfolunsa ruh-i alin Hurşid-i rahşan değil mi

Seni vasf edince yasin cemalin şems-i mehasin 
Sırr-ı sure-i taha’sın beyan-ı furkan değil mi

Kaametin kaf-ı se’adet vücudun mihr’i hidayet
Şefkat ü şanın şefaat gün gibi ayan değil mi

Der-i dergahinde cibril derban olmuş ey nur-i dil
Lutfi bir ahkar-ı sail muhtaç perişan değil mi`,
  split: 2,
};

export const alvarlı_efe_3 = {
  title: "Gülistan-ı risalette gül-i handan Muhammed’dir",
  slug: "alvarlı_efe_3",
  content: `Gülistan-ı risalette gül-i handan Muhammed’dir
O bostan-ı hidayette gül-i reyhan Muhammed’dir

Güneşler yüzünün nuri ziyasından nümayişdir
Sudur-i taht-i hikmetde olan sultan Muhammad’dir

Künuz-i sırr-i subhani odur merhamet ummani
Cemal-i zül-celaline eden seyran Muhammed’dir

O bir nur-i mücelladır o bir nur-i mu’alladır
Harem-i kabe kavseyn’de olan mihman Muhammed’dir

Muhammed lutfi musterhim kemal-i merhametinden
Üsatın derdine ruz-i ceza derman Muhammed’dir`,
  split: 2,
};

export const alvarlı_efe_4 = {
  title: "Ne kadar cevr-u cefa eylesen ey nur-i basar",
  slug: "alvarlı_efe_4",
  content: `Ne kadar cevr-u cefa eylesen ey nur-i basar
Mihirde zerre gibi men seninem sen de menim.

Mihr-i veş nur-i ruhun gönlüme pertev salalı
Kubbede zöhre gibi men seninem sen de menim

Ahu gözlüm o kara gözler ile bir bakışın
Gam ere gurre gibi men seninem sen de menim

Bu gönül gül yüzüne bülbül-i nalan olalı
Sadefe dürre gibi men seninem sen de menim

Lütfi ya kesme nazar ruy dilâra görünür
Bahirde katre gibi men seninem sen de menim`,
  split: 2,
};

export const alvarlı_efe_5 = {
  title: "Birgün olur yar perdeyi kaldırır",
  slug: "alvarlı_efe_5",
  content: `Birgün olur yar perdeyi kaldırır
seyr-i cemal ile seni güldürür

Birgün olur nazlı nezaket yapar
Birgün olur cam-ı meyi doldurur

Birgün olur kahr u sitem cevr eder
Birgün olur yar hareme aldırır

Birgün olur katline ferman eder
Birgün olur la'li ile kandırır

Birgün olur darb ile uryan eder
Birgün olur buseden usandırır

Birgün olur kuyine koymaz seni
Birgün olur naz ile uyandırır

Birgün olur dare çeker bend eder
Birgün olur lütfuna dayandırır

Birgün olur serzeniş eyler sana
Birgün olur buyine boyandırır

Birgün olur cahe atar lutfi'yi
sonra mısır şahlığına aldırır`,
  split: 2,
};

export const alvarlı_efe_6 = {
  title: "Ya Rab kerem derdimi dermana yetiştir",
  slug: "alvarlı_efe_6",
  content: `Ya Rab kerem derdimi dermana yetiştir
Bu yolda benim ıtkımı fermana yetiştir

Ya Rab derunum derdini bin dürlüfüzun et
Ey şan-ı kerem katrem-i ummana yetiştir

Ya Rab dil-i viranemi kıl ah-ı eningah
Lutfunla gözüm suret-i Rahman’a yetiştir

Ya Rab bu kadar zat-ı kerim’in kereminden
Ver nur-i aref didemi seyrane yetiştir

Ya Rab ne diyem ben sana ey alim ü dana
Bu lutfi kulun lütf ile ihsana yetiştir`,
  split: 2,
};

export const irfani = [
  {
    id: 1,
    title: "Dervişana esrarı hüdadan haberim var",
    slug: "irfani_1",
    read: true,
  },
  {
    id: 2,
    title: "Vasıl olmaz salik cümle faniden dur olmadan",
    slug: "irfani_2",
    read: true,
  },
  {
    id: 3,
    title: "Tevhid zikrin eftali",
    slug: "irfani_3",
    read: true,
  },
  {
    id: 4,
    title: "Vücudun mazhari nuri hüviyet ya Resullallah",
    slug: "irfani_4",
    read: true,
  },
  {
    id: 5,
    title: "Kendine kul eyle, resule ümmet",
    slug: "irfani_5",
    read: true,
  },
];

export const irfani_1 = {
  title: "Dervişana esrarı hüdadan haberim var",
  slug: "irfani_1",
  content: `Dervişana esrarı hüdadan haberim var
Meczubuna dildarı bekadan haberim var

Men aref sırrına uyupta bağrı köpüğen
Gel gör yarana türlü devadan haberim var

Vuslat arayan sözlerime tut kulağını
Can bahşedici cihadı ekberden haberim var

Gel bu yola sülük eden adap erkan ile
Sana nice bin türlü ihsandan haberim var

Vechinde yedi fatiha ayatı yazılı
Ademdeki ayeti hüdadan haberim var

Rahi alide vasfı ilahiye irfanı
Ol behirde evsafı imandan haberim var`,
  split: 2,
};

export const irfani_2 = {
  title: "Vasıl olmaz salik cümle faniden dur olmadan",
  slug: "irfani_2",
  content: `Vasıl olmaz salik cümle faniden dur olmadan
Sır açılmaz ol gönülde taki pür nur olmadan
At çıkar ağyarı dilden ta tecelli ede hak
O sultan girmez saraya hanen mamur olmadan

Küntü kenzin esrarına eripte mazhar olan
Haşiri neşri görür hiç şekki şüphesi olmadan
Sen müyesser eyle yarab tevhidini yoldaş et
İlmim ile amil eyle vadem tekmil olmadan

Hoş olup mestane geldim kimse bilmeden evvel
Badeyi eşkin için kimseler görür olmadan
Tevhidi mesti olanların dili bilmez kalı
Mansur olup cihanı ekberde eşi olmadan

Bir acep sevdaya düştüm yanıp irfani daim
Cemale kavuşmak ister halka ifşa olmadan
Erkanı Muhammede uyarda gayriden geçer
Feyzi rüfaidir bil arada kimse olmadan`,
  split: 4,
};

export const irfani_3 = {
  title: "Tevhid zikrin eftali",
  slug: "irfani_3",
  content: `Tevhid zikrin eftali
Kalplerden siler pası
Gönüllerin muradı
Lailahe illellah

Cümle esmanın başı
Bahri hakikat tacı
Dört kitabın sıratı
Lailahe illellah

Cebraille mikail
Tevhid eder iyi bil
Rufainin nuru bil
Lailahe illellah

Ayakta dur zikreyle
Tevhid topun gür eyle
Ruhunu sultan eyle
Lailahe illellah

Dertli dermanın bulur
Derviş sultanın bulur
Aşık cananın bulur
Lailahe illellah

Erenlerin yüzleri
Nuru haktır dilleri
Daim budur sözleri
Lailahe illellah

Seyyid Ahmet pirimiz
Zikri haktır yolumuz
Hacı Ahmet şeyhimiz
Lailahe illellah

Ruhuma hem devlet bu
Gönlüme hem irfan bu
İrfaniye vuslat bu
Lailahe illellah`,
  split: 4,
};

export const irfani_4 = {
  title: "Vücudun mazhari nuri hüviyet ya Resullallah",
  slug: "irfani_4",
  content: `Vücudun mazhari nuri hüviyet ya Resullallah
Zuhurun keşf-i esrarı tekdir ya Resullallah
Alemde kamu eşya senin zatınla kaimdir
Bize muhabbetinle yanmak saadet ya Resullallah

Görenler zati hakkı gördüler miratı vechinde
Bu sırra eyledi ayet delalet ya Resullullah
Dil’i viranem aşkınla suzan eyle efendim
Hakayıkta hemen sensin hakikat ya Resullallah

Nigahın ayni ihsandır gönül derdime derman
Benim halim perişandır şefaat ya Rasullallah
Niyaza geldim efendim kusurumu affeyle
Sen ol miracı şahı sultansın ya Resullallah

Okundu minberi eflakte hutbe-i levlakın
Yazıldı arşa ismi celilin ya Resullallah
İrfani’nin dü alemde maksudu hemen sensin
Umar dergah-ı lutfundan inayet ya Resullallah`,
  split: 4,
};

export const irfani_5 = {
  title: "Kendine kul eyle, resule ümmet",
  slug: "irfani_5",
  content: `Kendine kul eyle, resule ümmet
Iki cihan lütfunla bulalım himmet
Kalmasın arada minnet-ü zimmet
Bizleri ağyare düçar eyleme

Sadakat tacını başıma giydir
Gönlümü marifet tahtına değdir
Kapında kul olmak şahlıktan yeğdir
Bizleri ağyare düçar eyleme

Edebi hayadan ayırma bizi
Haramla mekruhla doyurma bizi
Yarabbi rızandan ayırma bizi
Bizleri ağyare düçar eyleme

Gafiller önünde diz çökmeyelim
Fasıka yalvarıp bel bükmeyelim
Bir lokma uğrunda dil dökmeyelim
Bizleri ağyare düçar eyleme

Tevekkül babında kulluk ganimet
Kul olan gayrıya eder mi minnet
Senindir ya rab senindir nimet
Bizleri ağyare düçar eyleme

Giymişem eynime hizmet abası
Neylerim saltanat şöhret libası
Def eyle kalbimden hasmı ihtirası
Bizleri ağyare düçar eyleme

İrfani’yi lütfunla eyledin abad
Gam verdin dert verdin hem iki ahmed
Ahiri ömründe kıl ona medet
Bizleri ağyare düçar eyleme`,
  split: 4,
};

export const habesi_1 = {
  title: "Hayli zaman hasretiyle yandığım",
  slug: "habesi",
  content: `Hayli zaman hasretiyle yandığım
Ey mürşidi emin sen sefa geldin
Güzel cemalini güneş sandığım
Ey sadıkı kelam hoş sefa geldin

Gelince gönüller bahara döndü
Aşkın muhabbetin şulesi yandı
Bizdeki gafletin ateşi söndü
Ey sahibi ihvan sen sefa geldin

Sensin müridanın yari yareni
Seninle dağılır kederi gamı
Mahşerde hatırla ne olur ihvanı
Ey şefkat sultanı hoş sefa geldin

Layık olamadık güzel yoluna
Hazan olamadık esen yeline
Bülbül olamadık açan gülüne
Ey fatih-i kelam sen sefa geldin

İsyanla kalbimiz sırra kapalı
Göremez gözümüz perde çekili
O güzel efe’nin güzel vekili
Muhabbet fatihi hoş sefa geldin

Sevgi muhabbetim izhar edemem
Yoluna ben layık oldum diyemem
Sensiz halim nice olu bilemem
Ahşikarı canan sen sefa geldin

Habeşi bu yolda ben biçareyim
Halden yoldan bilmez bir avareyim
Perişan halimi kime diyeyim
Ey derde dermanım hoş sefa geldin
`,
  split: 4,
};

export const seyfullah_1 = {
  title: "Bu aşk bir bahri ummandır",
  slug: "seyfullah",
  content: `Bu aşk bir bahri ummandır
Buna hatt-ü kenar olmaz
Delilim sırrı Kur’an’dır
Bunu bilene ar olmaz

Sure geldik ezeliden
Pirim Muhammed Ali’den
Şarabiyle yezaliden
Içenlere kanar olmaz

Biz aşıkız biz ölmeyiz
Çürüyüp toprak olmayız
Karanlıklarda kalmayız
Bize leyl-ü nehar olmaz

Eğer aşık isen yare
Sakın aldanma ağyare
Düş ibrahim gibi nare
Bu gülşende yanar olmaz

Kıyamazsan canu başa
Uzak dur girme meydane
Bu meydanda nice başlar 
Kesilir hiç soran olmaz

Bak şu mansur’un işine
Halkı uçurmuş başına
Enel hakkın firaşına
Düşenlere timar olmaz

Seyfullah sözünde mestir
Şeyhinden aldığı destir
Divaneye kalem pestir
Ne söylerse inan olmaz`,
  split: 4,
};

export const semi_1 = {
  title: "Tulumbanal yetiş ey sevdiğim imdade yangın var",
  slug: "semi",
  content: `Tulumbanal yetiş ey sevdiğim imdade yangın var
Dedim zahirdemi aşık dedi ihfada yangın var

Sefine kalbime yağlı paçavra attın ey dilsüz
Bülend avaz ile dilsüz bakın deryada yangın var

İnce şülveside ahım semalardan çıkıp arşa
Melekler zannederki meskeni İsada yangın var

Bu mahi sebile derya yanar derlerse gerçektir
Sade sendemi şem’i bütün alemde yangın var`,
  split: 4,
};

export const seyh_said_1 = {
  title: "Şem’e yanan pervaneler",
  slug: "seyh_said",
  content: `Şem’e yanan pervaneler
Gelsin beraber yanalım

Derde düşen divaneler
Gelsin beraber yanalım

Yanmaktır bizim karımız
Arşa çıkar efkarımız
Cürmü hatadır varımız
Gelsin beraber yanalım

Gidin sorun o bülbüle
Neden aşık olmuş güle
Onun için düşmüş dile
Gelsin beraber yanalım

Ariflerin kıtmırıyam
Arif değil bir ümmiyem
Şeyh said paloli
Gelsin beraber yanalım`,
  split: 4,
};

export const kul_yusuf_1 = {
  title: "Şu benim divane gönlüm",
  slug: "kul_yusuf",
  content: `Şu benim divane gönlüm
Yine hubdan huba düştü
Mah cemalin şulesinden
Çalkalanıp göle düştü

Ah ben nidem şeyhim nidem
Yaralıyam kime gidem
Ya halim kime arz idem

Felek bir gün cana kıyar
Bizi kabdan kaba koyar
Kimi atlas libas giyer
Şükür bize aba düştü

Kiminin meskeni külhan
Kimi derviş kimi sultan
Kim şeyh ile mihman
Benim şeyhim cüda düştü

Kul Yusuf’undur bu demler
Didemden akıyor nemler
Benim çektiğim sitemler
Dosttan bize caba düştü`,
  split: 4,
};

export const esad_erbili_1 = {
  title: "Gönül nur-i cemalinden habibim bir ziya ister",
  slug: "esad_erbili",
  content: `Gönül nur-i cemalinden habibim bir ziya ister
Gözüm hak-ı rehinden ey Tabibim tutiya ister

Safayı sineme zulmet veren fengi günahımdır
Aman ey kan-ı ihsan, zulmet-i kalbim cila ister

Sarıldım damen-i ihsanına ey şafi-i ümmet
Dahilek ya Muhammed hasta canım bir deva ister

Gül-i ruhsarına meftun olanlar şüphesiz sensiz
Ne mülk ü malü cah ister, ne de zevk ü safa ister

Nola bir kerre şad olsun cemal-i  ba kemalinle
Ki kemter bendeniz Es’ad sana olmak feda ister`,
  split: 2,
};

export const seyyid_nizamoğlu_1 = {
  title: "Gece gündüz döne döne",
  slug: "seyyid_nizamoğlu",
  content: `Gece gündüz döne döne
İstediğim Hak’dır benim
Allah deyip yana yana
İstediğim Hak’dır benim

Yoluna terk edip canı
Akıtıp gözümden kanı
Ah eyleyüp dünü günü
İstediğim Hak’dır benim

Münkirler aşk halin bilmez
Münafıklar yola gelmez
Ağlar bu gözlerim gülmez
İstediğim Hak’dır benim

Ko yanayım kül olayım
Taşkın akan sel olayım
Çiğnet beni yol olayım
İstediğim Hak’dır benim

Seyyid Nizamoğlu yürü
Bulagör kendinde yari
İnleyüben zari zari
İstediğim Hak’dır benim`,
  split: 2,
};

export const ali_ulvi_kurucu_1 = {
  title: "Mevlam sana ersem diye",
  slug: "ali_ulvi_kurucu",
  content: `Mevlam sana ersem diye
Aşka düşen pervaneyim
Cemalini görsem diye
Aşka düşen pervaneyim

Göz yaşlarım durmaz akar
Seller gibi çağlar coşar
Vuslat ümidiyle yaşar
Aşka düşen pervaneyim


Derdinle ağlar inlerim
Arşa çıkar eninlerim
Bülbül şakır ben dinlerim
Aşka düşen pervaneyim

Kevni temaşa eylerim
Nevay-ı aşkı söylerim
Sensiz cihanı neylerim
Aşka düşen pervaneyim`,
  split: 4,
};

export const aziz_mahmud_hudai_1 = {
  title: "Neyleyeyim dünyayı bana Allah’ım gerek",
  slug: "aziz_mahmud_hudai",
  content: `Neyleyeyim dünyayı bana Allah’ım gerek
Gerekmez masivayı bana Allah’ım gerek

Ehl-i dünya dünyada ehl-i ukba ukbada
Her biri bir sevdada bana Allah’ım gerek

Dertli dermanın ister, kullar Sultanın ister
Aşık cananın ister, bana Allah’ım gerek

Bülbül güle eder zar, pervaneyi yakmış nar
Her kulun bir derdi var, bana Allah’ım gerek

Beyhude hevayı ko, Hakkı bula göre ya hu
Hüdai’nin sözü bu, bana Allah’ım gerek`,
  split: 2,
};

export const haci_bayram_veli_1 = {
  title: "Neyleyeyim dünyayı bana Allah’ım gerek",
  slug: "haci_bayram_veli",
  content: `N’oldu bu gönlüm, n’oldu bu gönlüm
Derdi gam ile doldu bu gönlüm
Yandı bu gönlüm, yandı bu gönlüm
Yanmada derman, buldu bu gönlüm

Yan ey gönül yan, yan ey gönül yan
Yanmada oldu derdine derman
Pervane gibi, pervane gibi
Şem’ine aşkın yandı bu gönlüm

Gerçi ki yandı, gerçi ki yandı
Rengine aşkın cümle boyandı
Kendinde buldu, kendinde buldu
Matlubunu hoş, buldu bu gönlüm

Bayramım imdi, Bayramım imdi
Bayram edersin yar ile şimdi
Hamdü senalar, hamdü senalar
Yar ile bayram kıldı bu gönlüm`,
  split: 4,
};

export const fuzuli_1 = {
  title: "Beni candan usandırdı",
  slug: "fuzuli",
  content: `Beni candan usandırdı
cefâdan yâr usanmaz mı
Felekler yandı âhımdan
murâdım şem'i yanmaz mı

Kamu bîmârına cânân
deva-yı derd eder ihsan
Niçin kılmaz bana derman
beni bîmare sanmaz mı

Şeb-i hicran yanar cânım
döker kan çeşm-i giryânım
Uyarır halkı efgânım
kara bahtım uyanmaz mı

Gûl-i ruhsârına karşu
gözümden kanlu akar su
Habîbim fasl-ı güldür bu
akar sular bulanmaz mı

Gâmım pinhan tutardım ben
dedîler yâre kıl rûşen
Desem ol bî-vefâ bilmem
inanır mı inanmaz mı

Değildim ben sana mâil
sen ettin aklımı zâil
Beni tan eyleyen gafîl
seni görgeç utanmaz mı

Fuzûlî rind-i şeydâdır
hemîşe halka rüsvâdır
Sorun kim bu ne sevdâdır
bu sevdâdan usanmaz mı`,
  split: 4,
};

export const la_edri = [
  {
    id: 1,
    title: "Seherlerde kalkmaz mısın",
    slug: "la_edri_1",
    read: true,
  },
  {
    id: 2,
    title: "Ey benim sultanım özüm",
    slug: "la_edri_2",
    read: true,
  },
  {
    id: 3,
    title: "Şahidim arzu semadır bütün ecram ile",
    slug: "la_edri_3",
    read: true,
  },
  {
    id: 5,
    title: "Bir leylinin Mecnunuyam",
    slug: "la_edri_4",
    read: true,
  },
];

export const la_edri_1 = {
  title: "Seherlerde kalkmaz mısın",
  slug: "la_edri_1",
  content: `Seherlerde kalkmaz mısın
Nur çıranı yakmaz mısın
Sen Allah’tan korkmaz mısın
Allah de kalbim Allah de

Seherlerde uyku haram
İnan kardeş dünya yalan
Malın mülkün burada kalan
Allah de kalbim Allah de

Seherlerde rahmet yağar
Uyumayan buna doyar
Çok uyuyan şeytana uyar
Allah de kalbim Allah de

Seherlerde kuşlar öter
Hep aşıklar tevhid çeker
Şeyhim pirim himmet eder
Allah de kalbim Allah de

Seherlerde kalkmaz mısın
Hak divana durmaz mısın
Sen teveccühe bakmaz mısın
Allah de kalbim Allah de`,
  split: 4,
};

export const la_edri_2 = {
  title: "Ey benim sultanım özüm",
  slug: "la_edri_2",
  content: `Ey benim sultanım özüm
Hicranım çok gülmez yüzüm
Yakub oldum ağlar gözüm
Çağırırım ey dost seni

Şimdi cismimden cüdayım 
Kurban canım ben fedayım
Yusuf gibi kuyudayım 
Çağırırım ey dost seni

Gezinirim otağında
Ateş yanar bu bağrımda
Musa ile tur dağında 
Çağırırım ey dost seni

Yüzüm gülmez bu dünyada
Kaldım artık ben sılada 
Hüseyin’le Kerbela’da
Çağırırım ey dost seni`,
  split: 4,
};

export const la_edri_3 = {
  title: "Şahidim arzu semadır bütün ecram ile",
  slug: "la_edri_3",
  content: `Şahidim arzu semadır bütün ecram ile
Aşıkım sıdk ile ben Hazreti Şah-ı Rusüle

Yaksada ahu derunum beni bu hasret ile
Takati yok dilimin halimi takrire bile

Ey bad-ı saba uğrarsa yolun semt-i harameyne
Selamımı arz eyle Rasülüs-sekaleyne

Bu günahkar gidişin son demi bilmem n’olacak
Gelecek bir gün ecel kase-i ömrün dolacak

Yevme la yenfe’u de her kişi rahın bulacak
Aman ey kân-ı Kerem yok elimden tutacak

Ey bad-ı saba uğrarsa yolun semt-i harameyne
Selamımı arz eyle Rasülus-sekaleyne

Hâkine sürmek için ne yüzüm ne de imkânım var
Tahsis-i şefaat kebair ehline imanım var

Ancak beni kurtaracak bir ulu sultanım var
Aman ey kan-ı şefaat pek büyük isyanım var

Ey bad-ı saba uğrarsa yolun semt-i harameyne
Selamımı arz eyle Rasülus-sekaleyne`,
  split: 2,
};

export const la_edri_4 = {
  title: "Bir leylinin Mecnunuyam",
  slug: "la_edri_4",
  content: `Bir leylinin Mecnunuyam
Alem O’nun divanesi

Bir Yusuf’un Mefdunuyam
Her hüsnüm olmuş ayinesi

Kim O’na düş oldu bugün
Çıktı gözümden ay ile gün

Yanma olur sab-ı sukun
Buldu fenah Divanesi

Kalmaz baki cihan bize
Arz eyleme afat bize

Bir cami sun saki bize
Ayılmayan mestanesi

Bağ ile bostan istemem
Huri ile gılman istemem

Mülk-i Süleyman istemem
Mest-i gönül viranesi`,
  split: 2,
};
