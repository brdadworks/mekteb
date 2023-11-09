import React, { useEffect, useState } from "react";
import { IonContent, IonInfiniteScroll } from "@ionic/react";

import "./Imsak.css";
import Header from "../../components/Header";
import { PrayerTimesProps } from "../../../utils/types";
import { Storage } from "@ionic/storage";
import { key } from "ionicons/icons";
import { getPrayerTimes, getStorageData } from "../../../utils/functions";

function Imsakiye() {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimesProps[]>();
  useEffect(() => {
    const PrayerTimes = async () => {
      const data = await getStorageData("prayerTimes");
      console.log("data imsakiye", data);

      if (
        data.prayerTimes[data.prayerTimes.length - 1].MiladiTarihUzunIso8601 <
        new Date().toISOString()
      ) {
        const store = new Storage();
        await store.create();
        const getSettings = await store.get("settings");

        const newData = await getPrayerTimes(getSettings.district.IlceID);
        setPrayerTimes(newData.prayerTimes);
      } else {
        setPrayerTimes(data.prayerTimes);
      }
    };
    PrayerTimes();
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
              {prayerTimes?.map((prayerTime, index) => {
                return (
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
                );
              })}
            </tbody>
          </table>
        )}
      </IonContent>
    </>
  );
}

export default Imsakiye;
