import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonItem,
  IonList,
  IonLabel,
  IonToggle,
  IonButton,
  IonToast,
} from "@ionic/react";
import Header from "../../components/Header";

import {
  addStorageData,
  getNotificationPermissionStatus,
  getStorageData,
  requestNotificationPermission,
  getPrayerTimes,
} from "../../../utils/functions";

import {
  NativeSettings,
  AndroidSettings,
  IOSSettings,
} from "capacitor-native-settings";
import { Capacitor } from "@capacitor/core";
import { LocalNotifications } from "@capacitor/local-notifications";

type NotificationState = {
  title: string;
  checked: boolean;
};

const notifications: NotificationState[] = [
  { title: "İmsak", checked: false },
  { title: "Sabah", checked: false },
  { title: "Öğle", checked: false },
  { title: "İkindi", checked: false },
  { title: "Akşam", checked: false },
  { title: "Yatsı", checked: false },
];

// Başlık -> index eşlemesi
const TITLE_TO_INDEX: Record<string, number> = {
  İmsak: 0,
  Sabah: 1,
  Öğle: 2,
  İkindi: 3,
  Akşam: 4,
  Yatsı: 5,
};

// === ANDROID KANAL SABİTLERİ ===
const ANDROID_CHANNEL_ID = "prayer-times-azan"; // Android: özel sesli kanal
const ANDROID_CHANNEL_NAME = "Namaz Vakitleri";
const ANDROID_SOUND_FILE = "azan.wav"; // res/raw/azan.wav

// === iOS SES SABİTİ ===
const IOS_SOUND_FILE = "azan.wav"; // Xcode bundle içine eklendi

const EXTRA_MARKER = { type: "prayer-time", version: 3 };

function Hatirlaticilar() {
  const [notificationStates, setNotificationStates] =
    useState<NotificationState[]>(notifications);
  const [permissionStatus, setPermissionStatus] = useState<
    "none" | "denied" | "granted" | "prompt"
  >("none");
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState(
    "Bildirimler başarıyla planlandı."
  );

  useEffect(() => {
    (async () => {
      try {
        const data = await getStorageData("notifications");
        if (data && Array.isArray(data)) setNotificationStates(data);
      } finally {
        setLoading(false);
      }

      try {
        const status = await getNotificationPermissionStatus();
        if (status === "denied") setPermissionStatus("denied");
        else if (status === "prompt") {
          const req = await requestNotificationPermission();
          setPermissionStatus(
            req === "granted" || req === "denied" || req === "prompt"
              ? req
              : "prompt"
          );
        } else setPermissionStatus("granted");
      } catch {
        setPermissionStatus("denied");
      }

      // ANDROID: kanal kur (idempotent)
      await ensureAndroidPrayerChannel();
    })();
  }, []);

  const persistNotifications = async (states: NotificationState[]) => {
    try {
      await addStorageData("notifications", states);
    } catch (e) {
      console.warn("notifications persist error:", e);
    }
  };

  const handleToggleAll = (checked: boolean) => {
    const updatedStates = notificationStates.map((state) => ({
      ...state,
      checked,
    }));
    setNotificationStates(updatedStates);
    persistNotifications(updatedStates);
  };

  const handleToggle = (index: number) => {
    setNotificationStates((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], checked: !updated[index].checked };
      persistNotifications(updated);
      return updated;
    });
  };

  const openNotificationSettings = () => {
    const platform = Capacitor.getPlatform();
    if (platform === "ios") {
      try {
        (NativeSettings as any).openIOS?.({ option: IOSSettings.App });
      } catch (e) {
        console.warn("iOS settings open failed:", e);
      }
    } else if (platform === "android") {
      try {
        NativeSettings.openAndroid({ option: AndroidSettings.AppNotification });
      } catch (e) {
        console.warn("Android settings open failed:", e);
      }
    } else {
      setToastMessage("Bu cihazda bildirim ayarları açılamıyor (web).");
      setShowToast(true);
    }
  };

  const checkPermission = async () => {
    try {
      const status = await requestNotificationPermission();
      setPermissionStatus(
        status === "granted" || status === "denied" || status === "prompt"
          ? status
          : "prompt"
      );
    } catch {
      setPermissionStatus("denied");
    }
  };

  const sendNotification = async () => {
    try {
      const anySelected = notificationStates.some((s) => s.checked);
      if (!anySelected) {
        setToastMessage("En az bir vakit seçmelisiniz.");
        setShowToast(true);
        return;
      }

      // İlçe ayarı
      const settings = await getStorageData("settings");
      if (!settings || !settings.district?.IlceID) {
        setToastMessage("Lütfen önce ayarlardan ilçe seçiniz.");
        setShowToast(true);
        return;
      }

      // API: vakitler
      const prayerTimesData = await getPrayerTimes(settings.district.IlceID);
      const raw = prayerTimesData?.data;
      if (!raw) {
        setToastMessage("Namaz vakitleri alınamadı.");
        setShowToast(true);
        return;
      }

      await addStorageData("prayerTimes", raw);
      await schedulePrayerNotificationsFromRaw(notificationStates, raw);
      await addStorageData("notifications", notificationStates);

      setToastMessage("Bildirimler başarıyla planlandı.");
      setShowToast(true);
    } catch (e) {
      console.error("sendNotification error:", e);
      setToastMessage("Bir hata oluştu. Lütfen tekrar deneyin.");
      setShowToast(true);
    }
  };

  const sendTestNotification = async () => {
    try {
      const perm = await LocalNotifications.checkPermissions();
      if (perm.display !== "granted") {
        const req = await LocalNotifications.requestPermissions();
        if (req.display !== "granted") {
          setToastMessage("Bildirim izni verilmedi.");
          setShowToast(true);
          return;
        }
      }

      // Android: kanalı garanti et
      await ensureAndroidPrayerChannel();

      const id = Math.floor(Date.now() % 2147483647);
      const isIOS = Capacitor.getPlatform() === "ios";

      await LocalNotifications.schedule({
        notifications: [
          {
            id,
            title: "Test bildirimi",
            body: "Bu bir test bildirimidir.",
            schedule: { at: new Date(Date.now() + 1000), allowWhileIdle: true },
            ...(isIOS
              ? { sound: IOS_SOUND_FILE }
              : { channelId: ANDROID_CHANNEL_ID }),
            extra: { type: "test" },
          },
        ],
      });

      setToastMessage("Test bildirimi planlandı (1 sn).");
      setShowToast(true);
    } catch (e) {
      console.error("sendTestNotification error:", e);
      setToastMessage("Test bildirimi planlanamadı.");
      setShowToast(true);
    }
  };

  const isAllChecked =
    notificationStates.length > 0 &&
    notificationStates.every((state) => state.checked);
  const isAnyChecked = notificationStates.some((s) => s.checked);

  return (
    <>
      <Header pageTitle={"Hatırlatıcılar"} />

      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={toastMessage}
        duration={4000}
      />

      <IonContent className="ion-padding bg-white bg-color-white">
        {permissionStatus === "none" || loading ? (
          <p>Yükleniyor...</p>
        ) : permissionStatus === "denied" ? (
          <>
            <p>
              Bildirim almak için bildirimlere izin vermeniz gerekmekte.
              Ayarlardan manuel olarak bildirimlere izin veriniz.
            </p>
            <p>
              <IonButton onClick={openNotificationSettings}>İzin Ver</IonButton>
            </p>
            <p>
              <IonButton onClick={checkPermission}>Kontrol et</IonButton>
            </p>
            <p>
              <IonButton onClick={sendTestNotification} color="medium">
                Test Bildirimi
              </IonButton>
            </p>
          </>
        ) : (
          <>
            <IonList lines="none">
              <IonItem>
                <IonLabel>
                  <span className="font-medium text-lg text-black">Tümü</span>
                </IonLabel>
                <IonToggle
                  aria-label="Tümü"
                  slot="end"
                  checked={isAllChecked}
                  onIonChange={(e) => handleToggleAll(e.detail.checked)}
                />
              </IonItem>

              {notificationStates.map((notification, index) => (
                <IonItem key={notification.title}>
                  <IonLabel>
                    <span className="font-medium text-lg text-black">
                      {notification.title}
                    </span>
                  </IonLabel>
                  <IonToggle
                    aria-label={notification.title}
                    slot="end"
                    checked={notification.checked}
                    onIonChange={() => handleToggle(index)}
                  />
                </IonItem>
              ))}
            </IonList>

            <div className="ion-margin-top" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <IonButton onClick={sendNotification} disabled={!isAnyChecked}>Kaydet</IonButton>
              <IonButton onClick={sendTestNotification} color="tertiary">Test Bildirimi</IonButton>
            </div>
          </>
        )}
      </IonContent>
    </>
  );
}

export default Hatirlaticilar;

/** === Yardımcılar === **/

// ANDROID: kanalı tek noktadan ve sesle oluştur (idempotent)
async function ensureAndroidPrayerChannel() {
  if (Capacitor.getPlatform() !== "android") return;
  try {
    await LocalNotifications.createChannel({
      id: ANDROID_CHANNEL_ID,
      name: ANDROID_CHANNEL_NAME,
      description: "Namaz vakitleri bildirim kanalı (özel ses)",
      importance: 5,
      visibility: 1,
      sound: ANDROID_SOUND_FILE, // res/raw/azan.wav
      lights: true,
      vibration: true,
    });
  } catch (e) {
    console.warn("Android createChannel failed:", e);
  }
}

/** === API verisinden planlama yardımcıları === **/

async function schedulePrayerNotificationsFromRaw(
  states: NotificationState[],
  rawTimes: any
) {
  if (Capacitor.getPlatform() === "web") return;

  // İzin
  const perm = await LocalNotifications.checkPermissions();
  if (perm.display !== "granted") {
    const req = await LocalNotifications.requestPermissions();
    if (req.display !== "granted") throw new Error("Bildirim izni verilmedi.");
  }

  // ANDROID: kanal hazır mı? (idempotent)
  await ensureAndroidPrayerChannel();

  // Normalize -> ['HH:mm', ...] x6 (bugünün kaydı)
  const times = normalizeTimes(rawTimes);
  if (!times || times.length !== 6) {
    console.error("[notifications] normalizeTimes başarısız, gelen:", rawTimes);
    throw new Error("Namaz vakitleri formatı hatalı.");
  }

  // Seçili vakitler
  const selected = states.filter((s) => s.checked);
  if (selected.length === 0) {
    await cancelPrayerNotifications();
    return;
  }

  // Eski planları temizle (boşsa cancel çağırma)
  await cancelPrayerNotifications();

  const now = Date.now();
  const notifications = selected
    .map((s) => {
      const idx = TITLE_TO_INDEX[s.title];
      if (idx == null) return null;
      const hhmm = times[idx];
      if (!hhmm) return null;

      const at = nextOccurrence(hhmm);
      if (!at || at.getTime() < now) return null;

      const isIOS = Capacitor.getPlatform() === "ios";

      return {
        id: makeId(s.title, at),
        title: `⏰ ${s.title}`,
        body: `${s.title} vakti geldi (${formatHHMM(at)})`,
        schedule: { at, allowWhileIdle: true },
        extra: { ...EXTRA_MARKER, title: s.title, hhmm },
        ...(isIOS
          ? { sound: IOS_SOUND_FILE } // iOS: ses dosyası bundle'dan
          : { channelId: ANDROID_CHANNEL_ID }), // Android: kanal üzerinden ses
        // smallIcon: "ic_stat_notification",
      };
    })
    .filter(Boolean) as any[];

  if (notifications.length === 0) return;

  await LocalNotifications.schedule({ notifications });

  await addStorageData(
    "lastScheduledPrayerNotifications",
    notifications.map((n) => ({
      id: n.id,
      title: n.title,
      body: n.body,
      at: n.schedule?.at?.toISOString?.() ?? null,
      extra: n.extra,
    }))
  );
}

async function cancelPrayerNotifications() {
  if (Capacitor.getPlatform() === "web") return;
  const pending = await LocalNotifications.getPending();
  const ours = pending.notifications.filter(
    (n: any) => n?.extra?.type === EXTRA_MARKER.type
  );
  if (!ours || ours.length === 0) return;
  await LocalNotifications.cancel({
    notifications: ours.map((n: any) => ({ id: n.id })),
  });
}

function normalizeTimes(raw: any): string[] | null {
  if (Array.isArray(raw) && raw.length > 0 && typeof raw[0] === "string") {
    return toHHMMArray(raw as string[]);
  }
  if (raw && Array.isArray(raw.prayerTimes))
    return normalizeTimes(raw.prayerTimes);
  if (raw && Array.isArray(raw.data)) return normalizeTimes(raw.data);
  if (Array.isArray(raw) && raw.length > 0 && typeof raw[0] === "object") {
    const today = pickTodayEntry(raw as any[]);
    if (!today) return null;
    return extractSixTimes(today);
  }
  return null;
}

function toHHMMArray(arr: string[]): string[] {
  const six = arr
    .slice(0, 6)
    .map((s) => toHHMM(s))
    .filter(Boolean) as string[];
  return six.length === 6 ? six : six;
}
function toHHMM(s: string): string | null {
  if (!s) return null;
  const m = String(s).match(/(\d{1,2}):(\d{2})/);
  if (!m) return null;
  const hh = m[1].padStart(2, "0");
  const mm = m[2];
  return `${hh}:${mm}`;
}

function pickTodayEntry(list: any[]): any | null {
  const key = getTodayKey();
  let found = list.find((it) => it?.MiladiTarihKisa === key);
  if (found) return found;
  const nowTs = Date.now();
  found = list.find((it) => {
    const iso = it?.MiladiTarihUzunIso8601;
    if (!iso) return false;
    const t = new Date(iso).getTime();
    return !Number.isNaN(t) && t >= nowTs;
  });
  return found ?? list[0] ?? null;
}

function extractSixTimes(entry: any): string[] | null {
  const keys = {
    imsak: ["Imsak", "İmsak", "imsak", "Fajr", "fajr"],
    sabah: ["Sabah", "Sabah", "sabah", "Sunrise", "sunrise"],
    ogle: ["Ogle", "Öğle", "ogle", "Dhuhr", "Zuhr", "dhuhr", "zuhr"],
    ikindi: ["Ikindi", "İkindi", "ikindi", "Asr", "asr"],
    aksam: ["Aksam", "Akşam", "aksam", "Maghrib", "maghrib"],
    yatsi: ["Yatsi", "Yatsı", "yatsi", "Isha", "isha"],
  };
  const imsak = toHHMM(getFlex(entry, keys.imsak) ?? "");
  const sabah = toHHMM(getFlex(entry, keys.sabah) ?? "");
  const ogle = toHHMM(getFlex(entry, keys.ogle) ?? "");
  const ikindi = toHHMM(getFlex(entry, keys.ikindi) ?? "");
  const aksam = toHHMM(getFlex(entry, keys.aksam) ?? "");
  const yatsi = toHHMM(getFlex(entry, keys.yatsi) ?? "");
  const arr = [imsak, sabah, ogle, ikindi, aksam, yatsi].filter(
    Boolean
  ) as string[];
  return arr.length === 6 ? arr : null;
}

function getFlex(obj: any, names: string[]): string | undefined {
  if (!obj) return undefined;
  for (const n of names) if (obj[n] != null) return String(obj[n]);
  const map: Record<string, any> = {};
  for (const k of Object.keys(obj)) map[normKey(k)] = obj[k];
  for (const n of names) {
    const v = map[normKey(n)];
    if (v != null) return String(v);
  }
  return undefined;
}

function normKey(s: string): string {
  return s
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/â/g, "a")
    .replace(/î/g, "i")
    .replace(/û/g, "u");
}

function getTodayKey(): string {
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, "0");
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const yyyy = String(now.getFullYear());
  return `${dd}.${mm}.${yyyy}`;
}

function nextOccurrence(hhmm: string): Date | null {
  const [hhStr, mmStr] = (hhmm || "").split(":");
  const hh = parseInt(hhStr, 10);
  const mm = parseInt(mmStr, 10);
  if (Number.isNaN(hh) || Number.isNaN(mm)) return null;

  const now = new Date();
  const at = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hh,
    mm,
    0,
    0
  );
  if (at.getTime() < now.getTime()) at.setDate(at.getDate() + 1);
  return at;
}

function makeId(title: string, at: Date): number {
  const key = `${title}|${at.getFullYear()}-${
    at.getMonth() + 1
  }-${at.getDate()} ${at.getHours()}:${at.getMinutes()}`;
  let hash = 0;
  for (let i = 0; i < key.length; i++)
    hash = (hash * 31 + key.charCodeAt(i)) | 0;
  return Math.abs(hash);
}

function formatHHMM(d: Date) {
  const h = String(d.getHours()).padStart(2, "0");
  const m = String(d.getMinutes()).padStart(2, "0");
  return `${h}:${m}`;
}
