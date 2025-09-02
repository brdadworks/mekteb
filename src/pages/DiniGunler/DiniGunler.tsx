import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonItem,
  IonList,
  IonLabel,
  IonGrid,
  IonCol,
  IonRow,
  IonIcon,
  useIonToast, // alttan çıkan bildirim
} from "@ionic/react";
import { notifications, notificationsOutline } from "ionicons/icons";
import { LocalNotifications } from "@capacitor/local-notifications";
import "./DiniGunler.css";
import Header from "../../components/Header";
import {
  ozelGunler_2025,
  ozelGunler_2026,
  ozelGunler_2027,
  ozelGunler_2028,
  ozelGunler_2029,
  ozelGunler_2030,
} from "../../../data/dini-gunler";

// data item tipi: time ISO olmalı (örn: "2025-01-01T00:00:00")
type Gun = {
  title: string;
  date: string;
  hicri: string;
  time: string;
};

function DiniGunler() {
  const [activeTab, setActiveTab] = useState("2025");
  const [activeAlarmIds, setActiveAlarmIds] = useState<Set<number>>(new Set());
  const [presentToast] = useIonToast();

  const years = ["2025", "2026", "2027", "2028", "2029", "2030"];

  const dataByYear: Record<string, Gun[]> = {
    "2025": ozelGunler_2025 as Gun[],
    "2026": ozelGunler_2026 as Gun[],
    "2027": ozelGunler_2027 as Gun[],
    "2028": ozelGunler_2028 as Gun[],
    "2029": ozelGunler_2029 as Gun[],
    "2030": ozelGunler_2030 as Gun[],
  };

  // izin, android kanal ve bekleyen bildirimleri oku
  useEffect(() => {
    (async () => {
      const perm = await LocalNotifications.checkPermissions();
      if (perm.display !== "granted") {
        await LocalNotifications.requestPermissions();
      }
      try {
        await LocalNotifications.createChannel({
          id: "reminders",
          name: "Hatırlatmalar",
          importance: 4,
          description: "Özel gün hatırlatmaları",
        });
      } catch {}
      try {
        const pending = await LocalNotifications.getPending();
        const ids = new Set<number>(pending.notifications?.map((n) => n.id) || []);
        setActiveAlarmIds(ids);
      } catch {}
    })();
  }, []);

  // toast helper (alttan)
  const showToast = (message: string, color: string = "dark") =>
    presentToast({
      message,
      duration: 1800,
      position: "bottom",
      color,
      animated: true,
    });

  // satır için benzersiz id: yıl*1000 + index
  const makeId = (year: string, idx: number) =>
    (parseInt(year, 10) || 0) * 1000 + idx;

  // 1 gün önceye bildirim kur
  const scheduleReminder = async (gun: Gun, id: number) => {
    const eventDate = new Date(gun.time);
    if (isNaN(eventDate.getTime())) {
      showToast("Tarih okunamadı.", "danger");
      return;
    }
    const triggerDate = new Date(eventDate.getTime() - 24 * 60 * 60 * 1000);
    const now = new Date();
    if (triggerDate <= now) {
      // geçmişteyse 30 sn sonraya çekiyoruz
      triggerDate.setTime(now.getTime() + 30 * 1000);
    }

    await LocalNotifications.schedule({
      notifications: [
        {
          id,
          title: gun.title,
          body: `${gun.date} (${gun.hicri}) için hatırlatma`,
          schedule: { at: triggerDate },
          channelId: "reminders",
        },
      ],
    });

    showToast("Hatırlatma aktif!", "success");
  };

  // iptal et
  const cancelReminder = async (id: number) => {
    await LocalNotifications.cancel({ notifications: [{ id }] });
    showToast("Hatırlatma kapatıldı.", "medium");
  };

  // toggle
  const toggleReminder = async (gun: Gun, year: string, idx: number) => {
    const id = makeId(year, idx);
    const isActive = activeAlarmIds.has(id);

    if (isActive) {
      await cancelReminder(id);
      setActiveAlarmIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    } else {
      await scheduleReminder(gun, id);
      setActiveAlarmIds((prev) => new Set(prev).add(id));
    }
  };

  return (
    <>
      <Header pageTitle={"Dini Günler"} />
      <IonContent class="ion-padding bg-white bg-color-white">
        <IonGrid>
          <IonRow>
            {years.map((y) => (
              <IonCol
                key={y}
                onClick={() => setActiveTab(y)}
                className={`py-3 ${
                  activeTab === y ? "bg-[#4ac3a4]" : "bg-[#2c7663]"
                }`}
              >
                <span className={"text-white mx-auto"}>{y}</span>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        <IonList lines="none">
          {dataByYear[activeTab]?.map((gun, index) => {
            const id = makeId(activeTab, index);
            const isActive = activeAlarmIds.has(id);

            return (
              <IonItem key={`${activeTab}-${index}`} className="mt-3 dg-ion-item">
                <IonLabel>
                  <span
                    className="font-medium text-sm text-green-800 whitespace-pre-wrap"
                    style={{ display: "inline-block", width: 110 }}
                  >
                    {gun.title}
                  </span>
                </IonLabel>

                <IonLabel slot="end">
                  <span
                    className="font-medium text-green-800 whitespace-pre-wrap"
                    style={{ textAlign: "end", display: "block" }}
                  >
                    {gun.date}
                    <hr style={{ background: "#166534", margin: "5px 0" }} />
                    {gun.hicri}
                  </span>
                </IonLabel>

                {/* Zil: aktifse dolu, değilse outline */}
                <IonIcon
                  slot="end"
                  icon={isActive ? notifications : notificationsOutline}
                  className={`dg-bell ${isActive ? "dg-bell--active" : ""}`}
                  aria-label={isActive ? "Hatırlatma aktif" : "Hatırlatma kur"}
                  onClick={() => toggleReminder(gun, activeTab, index)}
                />
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </>
  );
}

export default DiniGunler;
