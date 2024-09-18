import React, { useState } from "react";
import {
  IonContent,
  IonItem,
  IonList,
  IonLabel,
  IonGrid,
  IonCol,
  IonRow,
} from "@ionic/react";
import "./DiniGunler.css";
import Header from "../../components/Header";
import {
  ozelGunler_2024,
  ozelGunler_2025,
  ozelGunler_2026,
  ozelGunler_2027,
  ozelGunler_2028,
} from "../../../data/dini-gunler";

function DiniGunler() {
  const [activeTab, setActiveTab] = useState("2024");
  return (
    <>
      <Header pageTitle={"Dini Günler"} />
      <IonContent class="ion-padding bg-white bg-color-white">
        <IonGrid>
          <IonRow>
            <IonCol
              onClick={() => setActiveTab("2024")}
              className={`py-3 ${
                activeTab == "2024" ? "bg-[#4ac3a4]" : "bg-[#2c7663] "
              }`}
            >
              <span className={"text-white mx-auto"}>2024</span>
            </IonCol>
            <IonCol
              onClick={() => setActiveTab("2025")}
              className={`py-3 ${
                activeTab == "2025" ? "bg-[#4ac3a4]" : "bg-[#2c7663] "
              }`}
            >
              <span className={"text-white mx-auto"}>2025</span>
            </IonCol>
            <IonCol
              onClick={() => setActiveTab("2026")}
              className={`py-3 ${
                activeTab == "2026" ? "bg-[#4ac3a4]" : "bg-[#2c7663] "
              }`}
            >
              <span className={"text-white mx-auto"}>2026</span>
            </IonCol>
            <IonCol
              onClick={() => setActiveTab("2027")}
              className={`py-3 ${
                activeTab == "2027" ? "bg-[#4ac3a4]" : "bg-[#2c7663] "
              }`}
            >
              <span className={"text-white mx-auto"}>2027</span>
            </IonCol>
            <IonCol
              onClick={() => setActiveTab("2028")}
              className={`py-3 ${
                activeTab == "2028" ? "bg-[#4ac3a4]" : "bg-[#2c7663] "
              }`}
            >
              <span className={"text-white mx-auto"}>2028</span>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonList lines={"none"}>
          {activeTab == "2024" &&
            ozelGunler_2024.map((gun, index) => (
              <IonItem key={`2024-${index}`} className={"mt-3 dg-ion-item"}>
                <IonLabel>
                  <span
                    className={
                      "font-medium text-sm text-green-800 whitespace-pre-wrap"
                    }
                  >
                    {gun.title}
                  </span>
                </IonLabel>
                <IonLabel slot={"end"}>
                  <span
                    className={
                      "font-medium text-sm float-right text-green-800 whitespace-pre-wrap"
                    }
                  >
                    {gun.date}
                  </span>
                </IonLabel>
              </IonItem>
            ))}
          {activeTab == "2025" &&
            ozelGunler_2025.map((gun, index) => (
              <IonItem key={`2025-${index}`} className={"mt-3 dg-ion-item"}>
                <IonLabel>
                  <span
                    className={
                      "font-medium text-sm text-green-800 whitespace-pre-wrap"
                    }
                  >
                    {gun.title}
                  </span>
                </IonLabel>
                <IonLabel slot={"end"}>
                  <span
                    className={
                      "font-medium text-sm float-right text-green-800 whitespace-pre-wrap"
                    }
                  >
                    {gun.date}
                  </span>
                </IonLabel>
              </IonItem>
            ))}
          {activeTab == "2026" &&
            ozelGunler_2026.map((gun, index) => (
              <IonItem key={`2026-${index}`} className={"mt-3 dg-ion-item"}>
                <IonLabel>
                  <span
                    className={
                      "font-medium text-sm text-green-800 whitespace-pre-wrap"
                    }
                  >
                    {gun.title}
                  </span>
                </IonLabel>
                <IonLabel slot={"end"}>
                  <span
                    className={
                      "font-medium text-sm float-right text-green-800 whitespace-pre-wrap"
                    }
                  >
                    {gun.date}
                  </span>
                </IonLabel>
              </IonItem>
            ))}
          {activeTab == "2027" &&
            ozelGunler_2027.map((gun, index) => (
              <IonItem key={`2027-${index}`} className={"mt-3 dg-ion-item"}>
                <IonLabel>
                  <span
                    className={
                      "font-medium text-sm text-green-800 whitespace-pre-wrap"
                    }
                  >
                    {gun.title.toLocaleUpperCase("tr")}
                  </span>
                </IonLabel>
                <IonLabel slot={"end"}>
                  <span
                    className={
                      "font-medium text-sm float-right text-green-800 whitespace-pre-wrap"
                    }
                  >
                    {gun.date}
                  </span>
                </IonLabel>
              </IonItem>
            ))}
          {activeTab == "2028" &&
            ozelGunler_2028.map((gun, index) => (
              <IonItem key={`2028-${index}`} className={"mt-3 dg-ion-item"}>
                <IonLabel>
                  <span
                    className={
                      "font-medium text-sm text-green-800 whitespace-pre-wrap"
                    }
                  >
                    {gun.title.toLocaleUpperCase("tr")}
                  </span>
                </IonLabel>
                <IonLabel slot={"end"}>
                  <span
                    className={
                      "font-medium text-sm float-right text-green-800 whitespace-pre-wrap"
                    }
                  >
                    {gun.date}
                  </span>
                </IonLabel>
              </IonItem>
            ))}
        </IonList>
      </IonContent>
    </>
  );
}

export default DiniGunler;
