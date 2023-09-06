export interface ContainerProps {
}

export interface PrayerTimesProps {
    Aksam: string;
    AyinSekliURL: string;
    GreenwichOrtalamaZamani: number;
    Gunes: string;
    GunesBatis: string;
    GunesDogus: string;
    HicriTarihKisa: string;
    HicriTarihKisaIso8601: null | string;
    HicriTarihUzun: string;
    HicriTarihUzunIso8601: null | string;
    Ikindi: string;
    Imsak: string;
    KibleSaati: string;
    MiladiTarihKisa: string;
    MiladiTarihKisaIso8601: string;
    MiladiTarihUzun: string;
    MiladiTarihUzunIso8601: string;
    Ogle: string;
    Yatsi: string;
}

export interface CountryProps {
    UlkeAdi: string;
    UlkeAdiEn: string;
    UlkeID: string;
}

export interface CityProps {
    SehirAdi: string;
    SehirAdiEn: string;
    SehirID: string;
}

export interface DistrictProps {
    IlceAdi: string;
    IlceAdiEn: string;
    IlceID: string;
}

export interface SettingsProps {
    country: CountryProps | null;
    city: CityProps | null;
    district: DistrictProps | null;
}

export interface BooksProps {
    id: number,
    title: string,
    slug: string,
    read: boolean,
}

export interface BookProps {
    title: string;
    slug: string;
    content: string;
    page: number;
    direction?: string;
}

export interface IlahiProps {
    title: string,
    slug: string,
    content: string
    split: number
}