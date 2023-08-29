import axios from "axios";
import {Storage} from "@ionic/storage";

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

function getCurrentDate() {
    const currentDate = new Date();

    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = currentDate.getFullYear();

    return `${day}.${month}.${year}`;
}