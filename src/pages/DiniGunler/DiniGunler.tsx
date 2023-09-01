import React, {useState} from 'react';
import {
    IonContent,
    IonItem,
    IonList,
    IonLabel, IonGrid, IonCol, IonRow
} from '@ionic/react';
import "./DiniGunler.css"
import Header from "../../components/Header";
import {ozelGunler_2023, ozelGunler_2024} from "../../../data/dini-gunler";

function DiniGunler() {
    const [activeTab, setActiveTab] = useState("2023");
    return (
        <>
            <Header pageTitle={"Dini Günler"}/>
            <IonContent class="ion-padding bg-white bg-color-white">
                <IonGrid>
                    <IonRow>
                        <IonCol onClick={() => setActiveTab("2023")}
                                className={`py-3 ${activeTab == "2023" ? "bg-[#4ac3a4]" : "bg-[#2c7663] "}`}>
                            <span className={"text-white mx-auto"}>2023</span>
                        </IonCol>
                        <IonCol onClick={() => setActiveTab("2024")}
                                className={`py-3 ${activeTab == "2024" ? "bg-[#4ac3a4]" : "bg-[#2c7663] "}`}>
                            <span className={"text-white mx-auto"}>2024</span>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonList lines={"none"}>
                    {activeTab == "2023" && (
                        ozelGunler_2023.map((gun, index) => (
                            <IonItem key={`2023-${index}`} className={"mt-3 ion-item"}>
                                <IonLabel><span className={"font-medium text-sm text-green-800 whitespace-pre-wrap"}>
                            {gun.title}
                        </span></IonLabel>
                                <IonLabel slot={"end"}><span
                                    className={"font-medium text-sm float-right text-green-800 whitespace-pre-wrap"}>
                            {gun.date}
                        </span></IonLabel>
                            </IonItem>
                        ))
                    )}

                    {activeTab == "2024" && (
                        ozelGunler_2024.map((gun, index) => (
                            <IonItem key={`2023-${index}`} className={"mt-3 ion-item"}>
                                <IonLabel><span className={"font-medium text-sm text-green-800 whitespace-pre-wrap"}>
                            {gun.title}
                        </span></IonLabel>
                                <IonLabel slot={"end"}><span
                                    className={"font-medium text-sm float-right text-green-800 whitespace-pre-wrap"}>
                            {gun.date}
                        </span></IonLabel>
                            </IonItem>
                        ))
                    )}
                </IonList>
            </IonContent>
        </>
    );
}

export default DiniGunler;