import axios from "axios";
import {Storage} from "@ionic/storage";
import {LocalNotificationRequest, LocalNotifications, LocalNotificationSchema} from "@capacitor/local-notifications";
import {val} from "cheerio/lib/api/attributes";
import {key} from "ionicons/icons";
import {Simulate} from "react-dom/test-utils";
import cancel = Simulate.cancel;

export const addStorageData = async (key: string, value: any) => {
    const store = new Storage();
    await store.create();
    await store.set(key, value)
}
export const getStorageData = async (key: string) => {
    const store = new Storage();
    await store.create();
    return await store.get(key)
}

export const removeStorageData = async (key: string) => {
    const store = new Storage();
    await store.create();
    await store.remove(key)
}

export const requestLocationPermission = async () => {
    const status = await LocalNotifications.requestPermissions();
    return status.display;
}
export const getLocationPermissionStatus = async () => {
    const status = await LocalNotifications.checkPermissions();
    return status.display;
}

export const requestNotificationPermission = async () => {
    const status = await LocalNotifications.requestPermissions();
    return status.display;
}
export const getNotificationPermissionStatus = async () => {
    const status = await LocalNotifications.checkPermissions();
    return status.display
}
export const getCities = async (id: string) => {
    const cities = await axios.get('https://ezanvakti.herokuapp.com/sehirler/' + id);
    const res = await cities.data;
    console.log('citiesJson:', res);
    return {status: cities.status, cities: res}
}

export const getDistrict = async (id: string) => {
    const district = await axios.get('https://ezanvakti.herokuapp.com/ilceler/' + id);
    const res = await district.data;
    console.log('getDistrict:', res);
    return {status: district.status, district: res}
}

export const getPrayerTimes = async (id: string) => {
    const prayerTimes = await axios.get('https://ezanvakti.herokuapp.com/vakitler/' + id);
    const res = await prayerTimes.data;
    console.log('prayerTimes:', res);
    return {status: prayerTimes.status, prayerTimes: res}
}

export const prayerTimesHandler = async (id: string) => {
    const formattedDate = getCurrentDate();
    const store = new Storage();
    await store.create();
    const storedPrayerTimes = await store.get('prayerTimes');
    if (storedPrayerTimes) {
        return storedPrayerTimes.prayerTimes.find((item: any) => {
                if (item.MiladiTarihKisa === formattedDate) {
                    return item;
                }
            }
        )
    }
    const {status, prayerTimes} = await getPrayerTimes(id);
    if (status !== 200) {
        return false;
    }
    await store.set('prayerTimes', prayerTimes);

    return prayerTimes.find((item: any) => {
            if (item.MiladiTarihKisa === formattedDate) {
                return item;
            }
        }
    )
}

export function getNearestPrayerTime(data: any) {
    function getPrayTimeName(value: any) {
        return Object.keys(data).find(key => data[key] === value);
    }

    let prayerTimes = [data.Imsak, data.Gunes, data.Ogle, data.Ikindi, data.Aksam, data.Yatsi];
    let time = getCurrentClock()
    let nearestPrayerTime = ""
    prayerTimes.sort();
    console.log('prayerTimes:', prayerTimes)
    for (let i = 0; i < prayerTimes.length; i++) {
        if (time < prayerTimes[i]) {
            nearestPrayerTime = prayerTimes[i];
            break;
        }
    }
    const prayTimeName = getPrayTimeName(nearestPrayerTime)
    return {time: nearestPrayerTime, name: prayTimeName};
}


function getCurrentClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
}

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

export function getCurrentDate() {
    const currentDate = new Date();

    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = currentDate.getFullYear();

    return `${day}.${month}.${year}`;
}

export const notificationHandler = async (noti: { title: string, checked: boolean }[]) => {
    const pendingNotifications = await LocalNotifications.getPending()
    await LocalNotifications.cancel({notifications: pendingNotifications.notifications})

    function parseTimeToMilliseconds(time: string): number {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 * 60 * 1000 + minutes * 60 * 1000;
    }

    try {
        const {prayerTimes: prayerTimesData} = await getStorageData("prayerTimes");
        const currentDate = getCurrentDate();
        const clock = getCurrentClock()

        console.log("prayerTimesData", prayerTimesData);

        for (const prayerTimes of prayerTimesData) {
            const {Ogle, Yatsi, Imsak, Gunes, Ikindi, Aksam, MiladiTarihKisaIso8601, MiladiTarihUzunIso8601} = prayerTimes;
            const date = new Date(MiladiTarihUzunIso8601);

            const ogleTime = new Date(date.getTime() + parseTimeToMilliseconds(Ogle)).getTime();
            const yatsiTime = new Date(date.getTime() + parseTimeToMilliseconds(Yatsi)).getTime();
            const imsakTime = new Date(date.getTime() + parseTimeToMilliseconds(Imsak)).getTime();
            const gunesTime = new Date(date.getTime() + parseTimeToMilliseconds(Gunes)).getTime();
            const ikindiTime = new Date(date.getTime() + parseTimeToMilliseconds(Ikindi)).getTime();
            const aksamTime = new Date(date.getTime() + parseTimeToMilliseconds(Aksam)).getTime();

            const notificationTimeOgle = new Date(ogleTime - 10 * 60 * 1000); // 10 minutes before
            const notificationTimeYatsi = new Date(yatsiTime - 10 * 60 * 1000); // 10 minutes before
            const notificationTimeImsak = new Date(imsakTime - 10 * 60 * 1000); // 10 minutes before
            const notificationTimeGunes = new Date(gunesTime - 10 * 60 * 1000); // 10 minutes before
            const notificationTimeIkindi = new Date(ikindiTime - 10 * 60 * 1000); // 10 minutes before
            const notificationTimeAksam = new Date(aksamTime - 10 * 60 * 1000); // 10 minutes before


            console.log("notificationTimeOgle", notificationTimeOgle)

            if (MiladiTarihKisaIso8601 <= currentDate) {
                // Schedule notifications for specific prayer times
                const notifications: LocalNotificationSchema[] = [];

                noti.map(n => {
                    if (n.checked) {
                        console.log("Ogle > clock", Ogle > clock)
                        console.log("Ogle , clock", Ogle, clock)
                        switch (n.title) {
                            case "İmsak":
                                if (Imsak > clock) {
                                    notifications.push({
                                        title: 'Namaz Vakti Hatırlatma',
                                        body: `${n.title} namazı vakti`,
                                        id: Math.floor(Math.random() * 10000),
                                        schedule: {at: new Date(notificationTimeImsak)},
                                    });
                                }
                                break;
                            case "Güneş":
                                if (Gunes > clock) {
                                    notifications.push({
                                        title: 'Namaz Vakti Hatırlatma',
                                        body: `${n.title} namazı vakti`,
                                        id: Math.floor(Math.random() * 10000),
                                        schedule: {at: new Date(notificationTimeGunes)},
                                    });
                                }
                                break;
                            case "Öğle":
                                if (Ogle > clock) {
                                    notifications.push({
                                        title: 'Namaz Vakti Hatırlatma',
                                        body: `${n.title} namazı vakti`,
                                        id: Math.floor(Math.random() * 10000),
                                        schedule: {at: new Date(notificationTimeOgle)},
                                    });
                                }
                                break;
                            case "İkindi":
                                notifications.push({
                                    title: 'Namaz Vakti Hatırlatma',
                                    body: `${n.title} namazı vakti`,
                                    id: Math.floor(Math.random() * 10000),
                                    schedule: {at: new Date(notificationTimeIkindi)},
                                });
                                break;
                            case "Akşam":
                                notifications.push({
                                    title: 'Namaz Vakti Hatırlatma',
                                    body: `${n.title} namazı vakti`,
                                    id: Math.floor(Math.random() * 10000),
                                    schedule: {at: new Date(notificationTimeAksam)},
                                });
                                break;
                            case "Yatsı":
                                notifications.push({
                                    title: 'Namaz Vakti Hatırlatma',
                                    body: `${n.title} namazı vakti`,
                                    id: Math.floor(Math.random() * 10000),
                                    schedule: {at: new Date(notificationTimeYatsi)},
                                });
                                break;
                        }
                    }
                });

                console.log("schehueled notifications", notifications)

                const schedule = await LocalNotifications.schedule({
                    notifications: notifications,
                });
                console.log("schedule", schedule)
            }
        }

        console.log('Notifications scheduled successfully.');
    } catch (error) {
        console.error('Error scheduling notifications:', error);
    }
};

function convertTurkishToEnglish(input: string) {
    return input
        .replace(/ğ/g, 'g')
        .replace(/Ğ/g, 'G')
        .replace(/ü/g, 'u')
        .replace(/Ü/g, 'U')
        .replace(/ş/g, 's')
        .replace(/Ş/g, 'S')
        .replace(/ı/g, 'i')
        .replace(/İ/g, 'I')
        .replace(/ö/g, 'o')
        .replace(/Ö/g, 'O')
        .replace(/ç/g, 'c')
        .replace(/Ç/g, 'C');
}