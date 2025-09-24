import "./HomeContainer.css";
import { IonCol, IonGrid, IonRow, IonIcon, IonNavLink } from "@ionic/react";
import {
  compassOutline,
  calendarOutline,
  bookOutline,
  moonOutline,
  alarmOutline,
  settingsOutline,
} from "ionicons/icons";
import LiveClock from "./Home/LiveClock";
import Hatirlaticilar from "../pages/Hatirlaticilar/Hatirlaticilar";
import DiniGunler from "../pages/DiniGunler/DiniGunler";
import Ayarlar from "../pages/Ayarlar/Ayarlar";
import Imsakiye from "../pages/Imsakiye/Imsakiye";
import Kible from "../pages/Kible/Kible";
import { useEffect, useRef, useState } from "react";
import { Storage } from "@ionic/storage";
import {
  getNearestPrayerTime,
  getPrayerTimes,
  prayerTimesHandler,
} from "../../utils/functions";

import {
  SettingsProps,
  PrayerTimesProps,
  ContainerProps,
} from "../../utils/types";
import Kitaplar from "../pages/Kitaplarr/Kitaplar/Kitaplar";
import { all_books } from "../../data/books";

const HomeContainer: React.FC<ContainerProps> = () => {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimesProps>();
  const [nearestPrayerTime, setNearestPrayerTime] = useState<any>();
  const [settings, setSettings] = useState<SettingsProps>();
  const [countdown, setCountdown] = useState<string>("");
  const formattedClock = getFormattedClock();
  const settingsRef = useRef<any>(null);

  useEffect(() => {
    const store = new Storage();
    (async () => {
      await store.create();
      const getSettings = await store.get("settings");
      setSettings(getSettings);

      if (getSettings?.district?.IlceID) {
        const response = await getPrayerTimes(getSettings.district.IlceID);
        const today = new Date().toISOString().split("T")[0];

        const todayPrayer = response?.data?.find((item: any) =>
          item.MiladiTarihUzunIso8601?.startsWith(today)
        );

        if (todayPrayer) {
          setPrayerTimes(todayPrayer);
          setNearestPrayerTime(getNearestPrayerTime(todayPrayer));
        }
      } else {
        settingsRef.current.click(); // Ayarlar sayfasına yönlendir
      }
    })();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (nearestPrayerTime?.time) {
        const now = new Date();
        const nextPrayerTime = new Date();
        const [hours, minutes] = nearestPrayerTime.time.split(":").map(Number);
        nextPrayerTime.setHours(hours, minutes, 0, 0);

        const timeDiff = nextPrayerTime.getTime() - now.getTime();
        if (timeDiff > 0) {
          const hoursLeft = Math.floor(
            (timeDiff % (1000 * 3600 * 24)) / (1000 * 3600)
          );
          const minutesLeft = Math.floor(
            (timeDiff % (1000 * 3600)) / (1000 * 60)
          );
          const secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);
          setCountdown(`${hoursLeft}s ${minutesLeft}d ${secondsLeft}s`);
        } else {
          setCountdown("Namaz vakti geldi!");
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [nearestPrayerTime]);

  return (
    <>
      {/*logo*/}
      <div className={"w-full my-2 mt-[120px]"}>
        <img
          src="/logo.png"
          alt="logo"
          className={"max-w-[40%] mx-auto mt-9 sm:max-w-[20%]"}
        />
      </div>
      {/*top*/}
      <IonGrid>
        <IonRow>
          <IonCol>
            <span className={"opacity-80 text-sm"}>
              {settings?.district?.IlceAdi}
            </span>
            <span>
              <img
                src="/home/mosque.svg"
                alt=""
                className={"w-[64px] h-auto"}
              />
            </span>
          </IonCol>
          <IonCol>
            {nearestPrayerTime?.time ? (
              <>
                <span className={"font-medium text-[1rem] text-center"}>
                  Sonraki Vakit:
                </span>
                <span>{nearestPrayerTime.name}</span>
                <span className={"text-3xl font-medium "}>
                  {nearestPrayerTime.time}
                </span>
                <span className={"opacity-95"}>
                  <LiveClock />
                </span>
                <span className={"font-medium text-[1rem] text-center mt-5"}>
                  Vaktin Çıkmasına:
                </span>
                <span className={"font-medium"}>{countdown}</span>
              </>
            ) : (
              <span className={"opacity-95 text-xl"}>
                <LiveClock />
              </span>
            )}
          </IonCol>
          <IonCol>
            <IonCol>
              <img
                src={prayerTimes?.AyinSekliURL}
                alt="ayinsekli"
                className="w-[80px] h-[80px] z-10"
              />
            </IonCol>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <span className={"font-semibold text-sm"}>{formattedClock}</span>
          </IonCol>
          <IonCol>
            <span className={"font-semibold text-sm"}>
              {prayerTimes?.HicriTarihUzun}
            </span>
          </IonCol>
        </IonRow>
      </IonGrid>
      <div className={"divider"}></div>

      {/*middle*/}
      <IonGrid className={"mt-2"}>
        <IonRow>
          <IonCol className={"border-b-[1px] border-[#fdfdfd4f]"}>
            <img className={"w-[30px]"} src="/home/imsak.png" alt="imsak" />
            <span
              className={
                "my-[1px] font-medium text-[1rem] text-center  font-semibold text-sm"
              }
            >
              İmsak
            </span>
          </IonCol>
          <IonCol className={"border-b-[1px] border-[#fdfdfd4f]"}>
            <img className={"w-[30px]"} src="/home/gunes.png" alt="gunes" />
            <span
              className={
                "my-[1px] font-medium text-[1rem] text-center  font-semibold text-sm"
              }
            >
              Guneş
            </span>
          </IonCol>
          <IonCol className={"border-b-[1px] border-[#fdfdfd4f]"}>
            <img className={"w-[30px]"} src="/home/ogle.png" alt="ogle" />
            <span
              className={
                "my-[1px] font-medium text-[1rem] text-center  font-semibold text-sm"
              }
            >
              Öğle
            </span>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <span
              className={
                "my-[1px] font-medium text-[1rem] text-center  font-semibold text-sm"
              }
            >
              {prayerTimes?.Imsak}
            </span>
          </IonCol>
          <IonCol>
            <span
              className={
                "my-[1px] font-medium text-[1rem] text-center  font-semibold text-sm"
              }
            >
              {prayerTimes?.Gunes}
            </span>
          </IonCol>
          <IonCol>
            <span
              className={
                "my-[1px] font-medium text-[1rem] text-center  font-semibold text-sm"
              }
            >
              {prayerTimes?.Ogle}
            </span>
          </IonCol>
        </IonRow>
        <IonRow className={"mt-3"}>
          <IonCol className={"border-b-[1px] border-[#fdfdfd4f]"}>
            <img className={"w-[30px]"} src="/home/ikindi.png" alt="İkindi" />
            <span
              className={
                "my-[1px] font-medium text-[1rem] text-center  font-semibold text-sm"
              }
            >
              İkindi
            </span>
          </IonCol>
          <IonCol className={"border-b-[1px] border-[#fdfdfd4f]"}>
            <img className={"w-[30px]"} src="/home/aksam.png" alt="Aksam" />
            <span
              className={
                "my-[1px] font-medium text-[1rem] text-center  font-semibold text-sm"
              }
            >
              Akşam
            </span>
          </IonCol>
          <IonCol className={"border-b-[1px] border-[#fdfdfd4f]"}>
            <img className={"w-[30px]"} src="/home/yatsi.png" alt="Yatsi" />
            <span
              className={
                "my-[1px] font-medium text-[1rem] text-center  font-semibold text-sm"
              }
            >
              Yatsı
            </span>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <span
              className={
                "my-[1px] font-medium text-[1rem] text-center  font-semibold text-sm"
              }
            >
              {prayerTimes?.Ikindi}
            </span>
          </IonCol>
          <IonCol>
            <span
              className={
                "my-[1px] font-medium text-[1rem] text-center  font-semibold text-sm"
              }
            >
              {prayerTimes?.Aksam}
            </span>
          </IonCol>
          <IonCol>
            <span
              className={
                "my-[1px] font-medium text-[1rem] text-center  font-semibold text-sm"
              }
            >
              {prayerTimes?.Yatsi}
            </span>
          </IonCol>
        </IonRow>
      </IonGrid>
      {/*end*/}
      <IonGrid className={"w-full flex justify-center items-center flex-col"}>
        <IonRow className={"w-[80%] flex justify-center items-center"}>
          <IonCol
            className={
              "m-2 aspect-square bg-opacity-60 shadow-xl bg-[#438e6f] w-fit sm:aspect-auto"
            }
          >
            <IonNavLink routerDirection="forward" component={() => <Kible />}>
              <IonIcon
                className={"w-[25px]"}
                icon={compassOutline}
                size={"large"}
              ></IonIcon>
              <span
                className={
                  "my-[1px] font-medium text-[1rem] text-center text-sm"
                }
              >
                Kıble
              </span>
            </IonNavLink>
          </IonCol>
          <IonCol
            className={
              "m-2 aspect-square bg-opacity-60 shadow-xl bg-[#438e6f] w-fit sm:aspect-auto"
            }
          >
            <IonNavLink
              routerDirection="forward"
              component={() => <DiniGunler />}
            >
              <IonIcon
                className={"w-[25px]"}
                icon={calendarOutline}
                size={"large"}
              ></IonIcon>
              <span
                className={
                  "my-[1px] font-medium text-[1rem] text-center text-sm"
                }
              >
                Dini Günler
              </span>
            </IonNavLink>
          </IonCol>
          <IonCol
            className={
              "m-2 aspect-square bg-opacity-60 shadow-xl bg-[#438e6f] w-fit sm:aspect-auto"
            }
          >
            <IonNavLink
              routerDirection="forward"
              component={() => (
                <Kitaplar title={"Kitaplar"} books={all_books} />
              )}
            >
              <IonIcon
                className={"w-[25px]"}
                icon={bookOutline}
                size={"large"}
              ></IonIcon>
              <span
                className={
                  "my-[1px] font-medium text-[1rem] text-center text-sm"
                }
              >
                Kitaplar
              </span>
            </IonNavLink>
          </IonCol>
        </IonRow>
        <IonRow className={"w-[80%] flex justify-center items-center"}>
          <IonCol
            className={
              "m-2 aspect-square bg-opacity-60 shadow-xl bg-[#438e6f] w-fit sm:aspect-auto"
            }
          >
            <IonNavLink
              routerDirection="forward"
              component={() => <Imsakiye />}
            >
              <IonIcon
                className={"w-[25px]"}
                icon={moonOutline}
                size={"large"}
              ></IonIcon>
              <span
                className={
                  "my-[1px] font-medium text-[1rem] text-center text-sm"
                }
              >
                İmsakiye
              </span>
            </IonNavLink>
          </IonCol>
          <IonCol
            className={
              "m-2 aspect-square bg-opacity-60 shadow-xl bg-[#438e6f] w-fit sm:aspect-auto"
            }
          >
            <IonNavLink
              routerDirection="forward"
              component={() => <Hatirlaticilar />}
            >
              <IonIcon
                className={"w-[25px]"}
                icon={alarmOutline}
                size={"large"}
              ></IonIcon>
              <span
                className={
                  "my-[1px] font-medium text-[1rem] text-center text-sm"
                }
              >
                Hatırlatıcılar
              </span>
            </IonNavLink>
          </IonCol>
          <IonCol
            className={
              "m-2 aspect-square bg-opacity-60 shadow-xl bg-[#438e6f] w-fit sm:aspect-auto"
            }
          >
            <IonNavLink
              ref={settingsRef}
              routerDirection="forward"
              component={() => <Ayarlar />}
            >
              <IonIcon
                className={"w-[25px]"}
                icon={settingsOutline}
                size={"large"}
              ></IonIcon>
              <span
                className={
                  "my-[1px] font-medium text-[1rem] text-center text-sm"
                }
              >
                Ayarlar
              </span>
            </IonNavLink>
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
};

function getFormattedClock() {
  const daysOfWeek = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  const now = new Date();

  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const dayOfWeek = daysOfWeek[now.getDay()];
  return `${day} ${month} ${year} ${dayOfWeek}`;
}

export default HomeContainer;
