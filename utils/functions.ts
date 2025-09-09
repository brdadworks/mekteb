import axios from "axios";
import { Storage } from "@ionic/storage";
import {
  LocalNotifications,
  LocalNotificationSchema,
} from "@capacitor/local-notifications";
import { Geolocation } from "@capacitor/geolocation";
import { Http } from "@capacitor-community/http";

export const addStorageData = async (key: string, value: any) => {
  const store = new Storage();
  await store.create();
  await store.set(key, value);
};
export const getStorageData = async (key: string) => {
  const store = new Storage();
  await store.create();
  return await store.get(key);
};

export const removeStorageData = async (key: string) => {
  const store = new Storage();
  await store.create();
  await store.remove(key);
};

export const requestLocationPermission = async () => {
  const status = await Geolocation.requestPermissions();
  return status.location;
};
export const getLocationPermissionStatus = async () => {
  const status = await Geolocation.checkPermissions();
  return status.location;
};

export const getLocation = async () => {
  const status = await Geolocation.getCurrentPosition();
  return status.coords;
};

export const requestNotificationPermission = async () => {
  const status = await LocalNotifications.requestPermissions();
  return status.display;
};
export const getNotificationPermissionStatus = async () => {
  const status = await LocalNotifications.checkPermissions();
  return status.display;
};

// Dev apiBase = /api/
// Production apiBase = https://ezanvakti.emushaf.net/
// For testing purposes, we will use the dev api base
const apiBase = "https://ezanvakti.emushaf.net/";

export const getCountries = async () => {
  const res = await Http.get({
    url: `${apiBase}ulkeler`,
    params: {},
    headers: {},
  });

  console.log("getCountries:", res.status, res.data);
  return { status: res.status, data: res.data };
};

export const getCountry = async (id: string) => {
  const res = await Http.get({ url: `${apiBase}ulkeler/${id}`, params: {}, headers: {} });
  return { status: res.status, data: res.data };
};

export const getCities = async (id: string) => {
  const res = await Http.get({ url: `${apiBase}sehirler/${id}`, params: {}, headers: {} });
  return { status: res.status, data: res.data };
};

export const getDistrict = async (id: string) => {
  const res = await Http.get({ url: `${apiBase}ilceler/${id}`, params: {}, headers: {} });
  return { status: res.status, data: res.data };
};

export const getPrayerTimes = async (id: string) => {
  if (!id || id === 'undefined') {
    console.error('getPrayerTimes: invalid id', id);
    throw new Error('Geçersiz konum kimliği (id). Seçimleri tamamlayın.');
  }
  const res = await Http.get({ url: `${apiBase}vakitler/${id}`, params: {}, headers: {} });
  return { status: res.status, data: res.data };
};

export const prayerTimesHandler = async (id: string) => {
  const formattedDate = getCurrentDate();
  const store = new Storage();
  await store.create();
  const storedPrayerTimes = await store.get("prayerTimes");
  if (storedPrayerTimes) {
    const getSettings = await store.get("settings");
    if (
      storedPrayerTimes.prayerTimes[storedPrayerTimes.prayerTimes.length - 1]
        .MiladiTarihUzunIso8601 < new Date().toISOString()
    ) {
      const { data } = await getPrayerTimes(getSettings.district.IlceID);
      console.log("data:", data);

      return data.prayerTimes.find((item: any) => {
        if (item.MiladiTarihKisa === formattedDate) {
          return item;
        }
      });
    } else {
      console.log("storedPrayerTimes:", storedPrayerTimes);

      return storedPrayerTimes.prayerTimes.find((item: any) => {
        if (item.MiladiTarihKisa === formattedDate) {
          return item;
        }
      });
    }
  }
  const { status, data: prayerTimes } = await getPrayerTimes(id);
  if (status !== 200) {
    return false;
  }
  await store.set("prayerTimes", prayerTimes);

  return prayerTimes.find((item: any) => {
    if (item.MiladiTarihKisa === formattedDate) {
      return item;
    }
  });
};

export function getNearestPrayerTime(data: any) {
  function getPrayTimeName(value: any) {
    return Object.keys(data).find((key) => data[key] === value);
  }

  let prayerTimes = [
    data.Imsak,
    data.Gunes,
    data.Ogle,
    data.Ikindi,
    data.Aksam,
    data.Yatsi,
  ];
  let time = getCurrentClock();
  let nearestPrayerTime = "";
  prayerTimes.sort();
  console.log("prayerTimes:", prayerTimes);
  for (let i = 0; i < prayerTimes.length; i++) {
    if (time < prayerTimes[i]) {
      nearestPrayerTime = prayerTimes[i];
      break;
    }
  }
  const prayTimeName = getPrayTimeName(nearestPrayerTime);
  return { time: nearestPrayerTime, name: prayTimeName };
}

function getCurrentClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

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

export function getCurrentDate() {
  const currentDate = new Date();

  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = currentDate.getFullYear();

  return `${day}.${month}.${year}`;
}

export const testSendNotification = async () => {
  await LocalNotifications.schedule({
    notifications: [
      {
        title: "Title of Your Notification",
        body: "Body of Your Notification",
        id: 1,
        schedule: { at: new Date(Date.now()) }, // Schedule for 1 hour from now
        actionTypeId: "",
        extra: null,
      },
      {
        title: "Title of Your Notification",
        body: "Body of Your Notification",
        id: 2,
        schedule: { at: new Date(Date.now() + 1000 * 10) }, // Schedule for 1 hour from now
        actionTypeId: "",
        extra: null,
      },
    ],
  });
};

export const testNotificationEveryMinute = async () => {
  const pendingNotifications = await LocalNotifications.getPending();
  await LocalNotifications.cancel({
    notifications: pendingNotifications.notifications,
  });

  const notifications: LocalNotificationSchema[] = [];

  for (let i = 0; i < 60; i++) {
    notifications.push({
      title: "Namaz Vakti Hatırlatma",
      body: `Test notification ${i}`,
      id: Math.floor(Math.random() * 10000),
      schedule: { at: new Date(Date.now() + i * 60 * 1000) },
    });
  }

  if (notifications.length > 0) {
    const schedule = await LocalNotifications.schedule({
      notifications: notifications,
    });
    console.log("schedule", schedule);
  } else {
    console.log("No notifications to schedule");
  }
};

export const notificationHandler = async (
  noti: { title: string; checked: boolean }[]
) => {
  const pendingNotifications = await LocalNotifications.getPending();
  await LocalNotifications.cancel({
    notifications: pendingNotifications.notifications,
  });

  const storageData = await getStorageData("prayerTimes");
  console.log("storageData", storageData);

  // prayerTimesData'yı güvenli şekilde al
  let prayerTimesData: any[] = [];
  if (Array.isArray(storageData)) {
    prayerTimesData = storageData;
  } else if (storageData && Array.isArray(storageData.prayerTimes)) {
    prayerTimesData = storageData.prayerTimes;
  } else if (storageData && Array.isArray(storageData.data)) {
    prayerTimesData = storageData.data;
  } else {
    console.error("prayerTimesData bulunamadı veya dizi değil:", storageData);
    return;
  }

  try {
    const currentDate = getCurrentDate();
    const clock = getCurrentClock();

    console.log("prayerTimesData", prayerTimesData);

    for (const prayerTimes of prayerTimesData) {
      const {
        Ogle,
        Yatsi,
        Imsak,
        Gunes,
        Ikindi,
        Aksam,
        MiladiTarihKisaIso8601,
        MiladiTarihUzunIso8601,
      } = prayerTimes;
      const date = new Date(MiladiTarihUzunIso8601);
      const now = new Date();
      now.setHours(0, 0, 0, 0);

      const notificationTimeOgle = new Date(
        `${MiladiTarihUzunIso8601.split("T")[0]}T${Ogle}`
      );
      const notificationTimeYatsi = new Date(
        `${MiladiTarihUzunIso8601.split("T")[0]}T${Yatsi}`
      );
      const notificationTimeImsak = new Date(
        `${MiladiTarihUzunIso8601.split("T")[0]}T${Imsak}`
      );
      const notificationTimeGunes = new Date(
        `${MiladiTarihUzunIso8601.split("T")[0]}T${Gunes}`
      );
      const notificationTimeIkindi = new Date(
        `${MiladiTarihUzunIso8601.split("T")[0]}T${Ikindi}`
      );
      const notificationTimeAksam = new Date(
        `${MiladiTarihUzunIso8601.split("T")[0]}T${Aksam}`
      );

      if (now <= new Date(MiladiTarihUzunIso8601)) {
        // Schedule notifications for specific prayer times
        const notifications: LocalNotificationSchema[] = [];
        console.log("Imsak", Imsak);

        noti.map(async (n) => {
          if (n.checked) {
            switch (n.title) {
              case "İmsak":
                await LocalNotifications.schedule({
                  notifications: [
                    {
                      body: `${n.title} namazı vakti`,
                      title: "Namaz Vakti Hatırlatma",
                      id: Math.floor(Math.random() * 10000),
                      schedule: {
                        at: notificationTimeImsak,
                      },
                      actionTypeId: "",
                      extra: null,
                    },
                  ],
                });
                break;
              case "Güneş":
                await LocalNotifications.schedule({
                  notifications: [
                    {
                      title: "Namaz Vakti Hatırlatma",
                      body: `${n.title} namazı vakti`,
                      id: Math.floor(Math.random() * 10000),
                      schedule: {
                        at: new Date(notificationTimeGunes),
                      },
                      actionTypeId: "",
                      extra: null,
                    },
                  ],
                });
                break;
              case "Öğle":
                await LocalNotifications.schedule({
                  notifications: [
                    {
                      title: "Namaz Vakti Hatırlatma",
                      body: `${n.title} namazı vakti`,
                      id: Math.floor(Math.random() * 10000),
                      schedule: {
                        at: new Date(notificationTimeOgle),
                      },
                      actionTypeId: "",
                      extra: null,
                    },
                  ],
                });
                break;
              case "İkindi":
                await LocalNotifications.schedule({
                  notifications: [
                    {
                      title: "Namaz Vakti Hatırlatma",
                      body: `${n.title} namazı vakti`,
                      id: Math.floor(Math.random() * 10000),
                      schedule: {
                        at: new Date(notificationTimeIkindi),
                      },
                      actionTypeId: "",
                      extra: null,
                    },
                  ],
                });
                break;
              case "Akşam":
                await LocalNotifications.schedule({
                  notifications: [
                    {
                      title: "Namaz Vakti Hatırlatma",
                      body: `${n.title} namazı vakti`,
                      id: Math.floor(Math.random() * 10000),
                      schedule: {
                        at: new Date(notificationTimeAksam),
                      },
                      actionTypeId: "",
                      extra: null,
                    },
                  ],
                });
                break;
              case "Yatsı":
                await LocalNotifications.schedule({
                  notifications: [
                    {
                      title: "Namaz Vakti Hatırlatma",
                      body: `${n.title} namazı vakti`,
                      id: Math.floor(Math.random() * 10000),
                      schedule: {
                        at: new Date(notificationTimeYatsi),
                      },
                      actionTypeId: "",
                      extra: null,
                    },
                  ],
                });
                break;
            }
          }
        });
      }
    }

    console.log("Notifications scheduled successfully.");
  } catch (error) {
    console.error("Error scheduling notifications:", error);
  }
};

function convertTurkishToEnglish(input: string) {
  return input
    .replace(/ğ/g, "g")
    .replace(/Ğ/g, "G")
    .replace(/ü/g, "u")
    .replace(/Ü/g, "U")
    .replace(/ş/g, "s")
    .replace(/Ş/g, "S")
    .replace(/ı/g, "i")
    .replace(/İ/g, "I")
    .replace(/ö/g, "o")
    .replace(/Ö/g, "O")
    .replace(/ç/g, "c")
    .replace(/Ç/g, "C");
}

export const calculateQiblaDirection = (lat: number, lon: number) => {
  var PI = Math.PI;
  const latk = (21.4225 * PI) / 180.0;
  const longk = (39.8264 * PI) / 180.0;
  const phi = (lat * PI) / 180.0;
  const lambda = (lon * PI) / 180.0;
  const qiblad =
    (180.0 / PI) *
    Math.atan2(
      Math.sin(longk - lambda),
      Math.cos(phi) * Math.tan(latk) - Math.sin(phi) * Math.cos(longk - lambda)
    );
  console.log(qiblad);
  return qiblad;
};
