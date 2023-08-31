import './HomeContainer.css';
import {IonCol, IonGrid, IonRow, IonIcon, IonNavLink} from '@ionic/react';
import {compassOutline, calendarOutline, bookOutline, moonOutline, alarmOutline, settingsOutline} from "ionicons/icons";
import LiveClock from "./Home/LiveClock";
import Hatirlaticilar from "../pages/Hatirlaticilar/Hatirlaticilar";
import DiniGunler from "../pages/DiniGunler/DiniGunler";
import Ayarlar from "../pages/Ayarlar/Ayarlar";
import Imsakiye from "../pages/Imsakiye/Imsakiye";
import Kible from "../pages/Kible/Kible";
import {useEffect, useRef, useState} from "react";
import {Storage} from "@ionic/storage";
import {getNearestPrayerTime, prayerTimesHandler} from "../../utils/functions";

import {SettingsProps, PrayerTimesProps, ContainerProps} from "../../utils/types";

const HomeContainer: React.FC<ContainerProps> = () => {
    const [prayerTimes, setPrayerTimes] = useState<PrayerTimesProps>();
    const [nearestPrayerTime, setNearestPrayerTime] = useState<any>();
    const [settings, setSettings] = useState<SettingsProps>();
    const formattedClock = getFormattedClock();
    const settingsRef = useRef<any>(null);

    useEffect(() => {
        const store = new Storage();
        (async () => {
            await store.create();
            const getSettings = await store.get('settings');
            setSettings(getSettings)
            if (getSettings) {
                const times = await prayerTimesHandler(getSettings.district.IlceID)
                console.log("times", times)
                setPrayerTimes(times)
                setNearestPrayerTime(getNearestPrayerTime(times))
            } else settingsRef.current.click();
        })()

    }, []);


    return (
        <>
            {/*top*/}
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <span className={"opacity-80"}>{settings?.district?.IlceAdi}</span>
                        <span><img src="/home/mosque.svg" alt="" className={"w-[72px] h-auto"}/></span>
                    </IonCol>
                    <IonCol>
                        {nearestPrayerTime?.time ? (
                            <>
                                <span className={"font-medium text-lg text-center"}>Sonraki Vakit:</span>
                                <span>{nearestPrayerTime.name}</span>
                                <span className={"text-4xl font-medium"}>{nearestPrayerTime.time}</span>
                                <span className={"opacity-95"}><LiveClock/></span>
                            </>
                        ) : <span className={"opacity-95 text-xl"}><LiveClock/></span>}

                    </IonCol>
                    <IonCol><img src={"/moon/" + prayerTimes?.AyinSekliURL.split("images/")[1]} alt="ayinsekli"
                                 className={"w-[100px] h-[100px] z-10 "}/></IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <span className={"opacity-80"}>{formattedClock}</span>
                    </IonCol>
                    <IonCol><span className={"opacity-80"}>{prayerTimes?.HicriTarihUzun}</span></IonCol>
                </IonRow>
            </IonGrid>
            <div className={"divider"}></div>

            {/*middle*/}
            <IonGrid className={"mt-6"}>
                <IonRow>
                    <IonCol className={"border-b-[1px] border-[#fdfdfd4f]"}><img src="/home/imsak.png"
                                                                                 alt="imsak"/><span
                        className={"my-[1px] font-medium text-lg text-center"}>İmsak</span></IonCol>
                    <IonCol className={"border-b-[1px] border-[#fdfdfd4f]"}><img src="/home/gunes.png"
                                                                                 alt="gunes"/><span
                        className={"my-[1px] font-medium text-lg text-center"}>Güneş</span></IonCol>
                    <IonCol className={"border-b-[1px] border-[#fdfdfd4f]"}><img src="/home/ogle.png" alt="ogle"/><span
                        className={"my-[1px] font-medium text-lg text-center"}>Öğle</span></IonCol>
                </IonRow>
                <IonRow>
                    <IonCol><span
                        className={"my-[1px] font-medium text-lg text-center"}>{prayerTimes?.Imsak}</span></IonCol>
                    <IonCol><span
                        className={"my-[1px] font-medium text-lg text-center"}>{prayerTimes?.Gunes}</span></IonCol>
                    <IonCol><span
                        className={"my-[1px] font-medium text-lg text-center"}>{prayerTimes?.Ogle}</span></IonCol>
                </IonRow>
                <IonRow className={"mt-8"}>
                    <IonCol className={"border-b-[1px] border-[#fdfdfd4f]"}><img src="/home/ikindi.png"
                                                                                 alt="İkindi"/><span
                        className={"my-[1px] font-medium text-lg text-center"}>İkindi</span></IonCol>
                    <IonCol className={"border-b-[1px] border-[#fdfdfd4f]"}><img src="/home/aksam.png"
                                                                                 alt="Aksam"/><span
                        className={"my-[1px] font-medium text-lg text-center"}>Akşam</span></IonCol>
                    <IonCol className={"border-b-[1px] border-[#fdfdfd4f]"}><img src="/home/yatsi.png"
                                                                                 alt="Yatsi"/><span
                        className={"my-[1px] font-medium text-lg text-center"}>Yatsı</span></IonCol>
                </IonRow>
                <IonRow>
                    <IonCol><span
                        className={"my-[1px] font-medium text-lg text-center"}>{prayerTimes?.Ikindi}</span></IonCol>
                    <IonCol><span
                        className={"my-[1px] font-medium text-lg text-center"}>{prayerTimes?.Aksam}</span></IonCol>
                    <IonCol><span
                        className={"my-[1px] font-medium text-lg text-center"}>{prayerTimes?.Yatsi}</span></IonCol>
                </IonRow>
            </IonGrid>
            {/*end*/}
            <IonGrid>
                <IonRow>
                    <IonCol className={"m-3 aspect-square bg-opacity-60 shadow-xl bg-[#438e6f] w-fit"}>
                        <IonNavLink routerDirection="forward" component={() => <Kible/>}>
                            <IonIcon icon={compassOutline} size={"large"}></IonIcon>
                            <span className={"my-[1px] font-medium text-lg text-center"}>Kıble</span>
                        </IonNavLink>
                    </IonCol>
                    <IonCol className={"m-3 aspect-square bg-opacity-60 shadow-xl bg-[#438e6f] w-fit"}>
                        <IonNavLink routerDirection="forward" component={() => <DiniGunler/>}>
                            <IonIcon icon={calendarOutline} size={"large"}></IonIcon>
                            <span className={"my-[1px] font-medium text-lg text-center"}>Dini Günler</span>
                        </IonNavLink>
                    </IonCol>
                    <IonCol className={"m-3 aspect-square bg-opacity-60 shadow-xl bg-[#438e6f] w-fit"}>
                        <IonNavLink routerDirection="forward" component={() => <Hatirlaticilar/>}>
                            <IonIcon icon={bookOutline} size={"large"}></IonIcon>
                            <span className={"my-[1px] font-medium text-lg text-center"}>Kitaplar</span>
                        </IonNavLink>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className={"m-3 aspect-square bg-opacity-60 shadow-xl bg-[#438e6f] w-fit"}>
                        <IonNavLink routerDirection="forward" component={() => <Imsakiye/>}>
                            <IonIcon icon={moonOutline} size={"large"}></IonIcon>
                            <span className={"my-[1px] font-medium text-lg text-center"}>İmsakiye</span>
                        </IonNavLink>
                    </IonCol>
                    <IonCol className={"m-3 aspect-square bg-opacity-60 shadow-xl bg-[#438e6f] w-fit"}>
                        <IonNavLink routerDirection="forward" component={() => <Hatirlaticilar/>}>
                            <IonIcon icon={alarmOutline} size={"large"}></IonIcon>
                            <span className={"my-[1px] font-medium text-lg text-center"}>Hatırlatıcılar</span>
                        </IonNavLink>
                    </IonCol>
                    <IonCol className={"m-3 aspect-square bg-opacity-60 shadow-xl bg-[#438e6f] w-fit"}>
                        <IonNavLink ref={settingsRef} routerDirection="forward" component={() => <Ayarlar/>}>
                            <IonIcon icon={settingsOutline} size={"large"}></IonIcon>
                            <span className={"my-[1px] font-medium text-lg text-center"}>Ayarlar</span>
                        </IonNavLink>
                    </IonCol>
                </IonRow>
            </IonGrid>
            {/*logo*/
            }
            <div className={"w-full"}>
                <img src="/logo.png" alt="logo" className={"max-w-[50%] mx-auto mt-9"}/>
            </div>
        </>
    )
        ;
};

function getFormattedClock() {
    const daysOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const months = [
        "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
        "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
    ];

    const now = new Date();

    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const dayOfWeek = daysOfWeek[now.getDay()];

    return `${day} ${month} ${year} ${dayOfWeek}`;
}

export default HomeContainer;
