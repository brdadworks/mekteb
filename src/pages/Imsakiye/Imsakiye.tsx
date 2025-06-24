import React, { useEffect, useState } from "react";
import { IonContent } from "@ionic/react";

import "./Imsak.css";
import Header from "../../components/Header";
import { PrayerTimesProps } from "../../../utils/types";
import { getPrayerTimes, getStorageData } from "../../../utils/functions";

function Imsakiye() {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimesProps[] | null>(null);

  useEffect(() => {
    const loadPrayerTimes = async () => {
      const stored = (await getStorageData("prayerTimes")) as { prayerTimes: PrayerTimesProps[] } | null;

      if (
        !stored ||
        !stored.prayerTimes ||
        stored.prayerTimes.length === 0 ||
        new Date(stored.prayerTimes[stored.prayerTimes.length - 1].MiladiTarihUzunIso8601) < new Date()
      ) {
        // Yeni veri çağır
        const settings = await getStorageData("settings");
        if (settings?.district?.IlceID) {
          const response = await getPrayerTimes(settings.district.IlceID);
          if (response?.data && Array.isArray(response.data)) {
            setPrayerTimes(response.data);
          } else {
            console.warn("Vakitler alınamadı");
            setPrayerTimes([]);
          }
        }
      } else {
        setPrayerTimes(stored.prayerTimes);
      }
    };

    loadPrayerTimes();
  }, []);

  return (
    <>
      <Header pageTitle={"İmsakiye"} />
      <IonContent class="ion-padding bg-white bg-color-white">
        {!prayerTimes ? (
          <>Yükleniyor...</>
        ) : (
          <table className={"overflow-x-scroll imsakiye-table"}>
            <thead>
              <tr>
                <th>Tarih</th>
                <th>İmsak</th>
                <th>Güneş</th>
                <th>Öğle</th>
                <th>İkindi</th>
                <th>Akşam</th>
                <th>Yatsı</th>
              </tr>
            </thead>
            <tbody>
              {prayerTimes.map((prayerTime, index) => (
                <tr key={index}>
                  <td>
                    {prayerTime.MiladiTarihUzun.split(" ")[0]}
                    <br />
                    {prayerTime.MiladiTarihUzun.split(" ")[1].substring(0, 3)}
                  </td>
                  <td>{prayerTime.Imsak}</td>
                  <td>{prayerTime.Gunes}</td>
                  <td>{prayerTime.Ogle}</td>
                  <td>{prayerTime.Ikindi}</td>
                  <td>{prayerTime.Aksam}</td>
                  <td>{prayerTime.Yatsi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </IonContent>
    </>
  );
}

export default Imsakiye;
