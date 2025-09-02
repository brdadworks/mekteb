import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  IonContent,
  IonList,
  IonSelectOption,
  IonItem,
  IonSelect,
  IonButton,
  IonToast,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonHeader,
  IonProgressBar,
} from "@ionic/react";

// import ulkeler from '../../../data/ulkeler';
import {
  addStorageData,
  getCities,
  getCountries,
  getDistrict,
  getPrayerTimes,
  getStorageData,
  removeStorageData,
} from "../../../utils/functions";
import { App } from "@capacitor/app";
import { Capacitor } from "@capacitor/core";
import {
  createMektebDownloader,
  DEFAULT_JOBS,
} from "../../../utils/downloader";

//types
import {
  CountryProps,
  CityProps,
  DistrictProps,
  SettingsProps,
} from "../../../utils/types";
import { get } from "cheerio/dist/commonjs/api/traversing";

function Ayarlar() {
  const [ulkeler, setUlkeler] = useState<CountryProps[]>([]);
  const [appVersion, setAppVersion] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState<CityProps[]>([]);
  const [district, setDistrict] = useState<DistrictProps[]>([]);
  const [selectBoxStatus, setSelectBoxStatus] = useState<{
    city: boolean;
    district: boolean;
  }>({
    city: true,
    district: true,
  });
  const [settings, setSettings] = useState<SettingsProps>({
    country: null,
    city: null,
    district: null,
  });
  const [toastHandle, setToastHandle] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  //! İNDİRME //
  const [downloading, setDownloading] = useState(false);
  const [downloadDone, setDownloadDone] = useState(0);
  const [downloadTotal, setDownloadTotal] = useState(0);
  const dl = useMemo(() => createMektebDownloader(), []);

  const handleStart = async () => {
    setDownloading(true);
    setDownloadDone(0);
    setDownloadTotal(0);

    const res = await dl.start({
      jobs: DEFAULT_JOBS, // burada istersen kendi dinamik listeni verebilirsin
      concurrency: 3,
      onProgress: ({ done, total }) => {
        setDownloadDone(done);
        setDownloadTotal(total);
      },
    });

    setDownloading(false);
    setToastHandle(true);
    setToastMessage(
      `Tamamlandı: ${res.successCount} ✔ | Hata: ${res.failCount} ✖`
    );
  };

  const handleCancel = () => {
    dl.cancel();
    setDownloading(false);
    setToastHandle(true);
    setToastMessage("İndirme iptal edildi.");
  };

  //! İNDİRME //

  //refs
  const countryRef = useRef<HTMLIonSelectElement | null>(null);
  const cityRef = useRef<HTMLIonSelectElement | null>(null);
  const districtRef = useRef<HTMLIonSelectElement | null>(null);

  const getUlkeler = async () => {
    try {
      const { status, data } = await getCountries();

      if (status === 200 && Array.isArray(data)) {
        setUlkeler(data);
      } else {
        setToastHandle(true);
        setToastMessage(
          "Ülke bilgisi alınırken hata oluştu. Lütfen tekrar deneyin."
        );
        console.error("Geçersiz response:", { status, data });
      }
    } catch (error) {
      setToastHandle(true);
      setToastMessage(
        "Sunucuya ulaşılamıyor. İnternet bağlantınızı kontrol ediniz."
      );
      console.error("API Hatası:", JSON.stringify(error, null, 2));
    }
  };

  // Ülkeleri getir
  useEffect(() => {
    getUlkeler();
  }, []);

  // Uygulama versiyonu
  useEffect(() => {
    const getAppVersion = async () => {
      if (Capacitor.isNativePlatform()) {
        try {
          const info = await App.getInfo();
          setAppVersion(info.version);
        } catch (error) {
          console.error("App.getInfo() error:", error);
        }
      } else {
        console.warn("App.getInfo() is not supported on web.");
        setAppVersion("Web"); // Web için varsayılan gösterim
      }
    };

    getAppVersion();
  }, []);

  // Ayarları ve şehir/ilçe listesini getir
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const getSettings = (await getStorageData(
          "settings"
        )) as SettingsProps | null;

        if (!getSettings || !getSettings.country) {
          setSettings({ country: null, city: null, district: null });
          setSelectBoxStatus({ city: true, district: true });
          setLoading(false);
          return;
        }

        setSettings(getSettings);
        setSelectBoxStatus({
          city: !getSettings.city,
          district: !getSettings.district,
        });

        // Şehirleri getir
        const cityRes = await getCities(getSettings.country.UlkeID);
        if (cityRes.status === 200 && Array.isArray(cityRes.data)) {
          setCities(cityRes.data);
        } else {
          setToastHandle(true);
          setToastMessage("Şehir bilgisi alınamadı.");
        }

        // İlçeleri getir
        if (getSettings.city?.SehirID) {
          const distRes = await getDistrict(getSettings.city.SehirID);
          if (distRes.status === 200 && Array.isArray(distRes.data)) {
            setDistrict(distRes.data);
          } else {
            setToastHandle(true);
            setToastMessage("İlçe bilgisi alınamadı.");
          }
        }

        setLoading(false);
      } catch (error) {
        console.error("loadSettings error:", error);
        setToastHandle(true);
        setToastMessage("Ayarlar yüklenirken bir hata oluştu.");
        setLoading(false);
      }
    };

    // Zaman aşımı ile yükleme durumunu sonlandır
    const timeout = setTimeout(() => {
      setLoading(false);
      setToastHandle(true);
      setToastMessage(
        "Bağlantı zaman aşımına uğradı. Lütfen internetinizi kontrol edin."
      );
    }, 10000); // 10 saniye

    loadSettings().finally(() => clearTimeout(timeout));
  }, []);

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const countryHandler = async (country: CountryProps) => {
    setSettings({
      country: country,
      city: null,
      district: null,
    });

    setToastHandle(true);
    setToastMessage("Şehirler yükleniyor...");

    try {
      const response = await getCities(country.UlkeID);
      if (
        response.status === 200 &&
        Array.isArray(response.data) &&
        response.data.length > 0 &&
        response.data[0].SehirID
      ) {
        setCities(response.data);
        setSelectBoxStatus({
          city: false,
          district: true,
        });
      } else {
        setCities([]);
        setToastHandle(true);
        setToastMessage("Şehir bilgisi alınamadı.");
      }
    } catch (err) {
      setCities([]);
      setToastHandle(true);
      setToastMessage("Şehirler yüklenirken bir hata oluştu.");
    }
    setDistrict([]);
  };

  const cityHandler = async (city: CityProps) => {
    setSettings({
      country: settings.country,
      city: city,
      district: null,
    });

    setToastHandle(true);
    setToastMessage("İlçeler yükleniyor...");

    try {
      const response = await getDistrict(city.SehirID);
      if (
        response.status === 200 &&
        Array.isArray(response.data) &&
        response.data.length > 0 &&
        response.data[0].IlceID
      ) {
        setDistrict(response.data);
        setSelectBoxStatus({
          city: false,
          district: false,
        });
      } else {
        setDistrict([]);
        setToastHandle(true);
        setToastMessage("İlçe bilgisi alınamadı.");
      }
    } catch (err) {
      setDistrict([]);
      setToastHandle(true);
      setToastMessage("İlçeler yüklenirken bir hata oluştu.");
    }
  };

  const districtHandler = async (district: DistrictProps) => {
    setSettings({
      country: settings.country,
      city: settings.city,
      district: district,
    });

    setToastHandle(true);
    setToastMessage("İlçe seçildi.");
  };

  const saveSetting = async () => {
    setToastHandle(true);
    setToastMessage("Ayarlar kayıt ediliyor.");

    await addStorageData("settings", settings);
    await addStorageData(
      "prayerTimes",
      await getPrayerTimes(settings.district?.IlceID!)
    );

    window.location.reload(); // reload page for new settings
  };

  return (
    <>
      <IonToast
        isOpen={toastHandle}
        message={toastMessage}
        onDidDismiss={() => setToastHandle(false)}
        duration={2000}
      ></IonToast>

      <IonHeader className={"p-2"}>
        <IonToolbar>
          {settings.district && (
            <IonButtons slot="start">
              <IonBackButton text={"Geri"}></IonBackButton>
            </IonButtons>
          )}
          <IonTitle className={"text-xl"}>Ayarlar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding bg-white bg-color-white">
        <p className={"text-green-800"}>
          Konum bilgisini aşağıdan manuel olarak seçebilirsiniz. Uygulamanın
          doğru çalışması için konum bilgilerine izin vermeniz gerekmektedir.
        </p>
        {loading ? (
          <p className={"text-black"}>Yükleniyor...</p>
        ) : (
          <form onSubmit={formHandler}>
            <IonList>
              <IonItem>
                <IonSelect
                  ref={countryRef}
                  value={settings.country?.UlkeID || ""}
                  onIonChange={(choice) =>
                    countryHandler(
                      ulkeler?.find(
                        (ulke) => ulke.UlkeID === choice.detail.value
                      )!
                    )
                  }
                  label="Bir ülke seçiniz"
                  labelPlacement="floating"
                >
                  {ulkeler?.map((ulke) => (
                    <IonSelectOption key={ulke.UlkeID} value={ulke.UlkeID}>
                      {ulke.UlkeAdi}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonSelect
                  value={settings.city?.SehirID || ""}
                  onIonChange={(choice) =>
                    cityHandler(
                      cities.find(
                        (city) => city.SehirID === choice.detail.value
                      )!
                    )
                  }
                  ref={cityRef}
                  label="Bir şehir seçiniz"
                  labelPlacement="floating"
                  disabled={selectBoxStatus.city}
                >
                  {cities.map((city) => (
                    <IonSelectOption key={city.SehirID} value={city.SehirID}>
                      {city.SehirAdi}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonSelect
                  value={settings.district?.IlceID || ""}
                  onIonChange={(choice) =>
                    districtHandler(
                      district.find(
                        (dist) => dist.IlceID === choice.detail.value
                      )!
                    )
                  }
                  ref={districtRef}
                  label="Bir ilçe seçiniz"
                  labelPlacement="floating"
                  disabled={selectBoxStatus.district}
                >
                  {district.map((dist) => (
                    <IonSelectOption key={dist.IlceID} value={dist.IlceID}>
                      {dist.IlceAdi}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>
              <IonButton
                onClick={saveSetting}
                className={"mt-6 w-full green-btn"}
              >
                Kaydet
              </IonButton>

              <IonItem lines="none" className="ion-margin-vertical">
                <IonButton
                  onClick={handleStart}
                  disabled={downloading}
                  className="w-full"
                  color="medium"
                >
                  {downloading ? "İndiriliyor..." : "Tüm İçerikleri İndir"}
                </IonButton>
                {downloading && (
                  <IonButton
                    onClick={handleCancel}
                    fill="clear"
                    color="danger"
                    className="ml-2"
                  >
                    İptal
                  </IonButton>
                )}
              </IonItem>

              {downloading && (
                <>
                  <div className="text-sm ion-text-center">
                    {downloadDone} / {downloadTotal}
                  </div>
                  <IonProgressBar
                    value={downloadTotal ? downloadDone / downloadTotal : 0}
                  />
                </>
              )}
            </IonList>
          </form>
        )}
        <p className={"text-center text-sm mt-4"}>
          Uygulama Versiyonu: {appVersion}
        </p>
      </IonContent>
    </>
  );
}

export default Ayarlar;
