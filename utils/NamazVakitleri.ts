import axios from 'axios';
import { JSDOM } from 'jsdom';

async function scrapePrayerTimes() {
    const url = 'https://namazvakitleri.diyanet.gov.tr/tr-TR';

    try {
        const response = await axios.get(url);
        const html = response.data;
        const dom = new JSDOM(html);
        const document = dom.window.document;

        const todayPrayerTimes = document.querySelectorAll('.today-pray-times .w3-col');

        todayPrayerTimes.forEach((element: any) => {
            const title = element.querySelector('.tpt-title').textContent;
            const time = element.querySelector('.tpt-time').textContent;
            console.log(`${title}: ${time}`);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

scrapePrayerTimes();
