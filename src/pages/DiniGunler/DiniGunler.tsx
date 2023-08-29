import React, {useState} from 'react';
import {
    IonContent,
    IonItem,
    IonList,
    IonLabel, IonGrid, IonCol, IonRow
} from '@ionic/react';
import "./DiniGunler.css"
import Header from "../../components/Header";
function DiniGunler() {
    const [activeTab, setActiveTab] = useState("2023");
    return (
        <>
            <Header pageTitle={"Dini Günler"} />
            <IonContent class="ion-padding bg-white bg-color-white">
                <IonGrid>
                    <IonRow>
                        <IonCol onClick={()=>setActiveTab("2023")} className={`py-3 ${activeTab == "2023" ? "bg-[#4ac3a4]" : "bg-[#2c7663] "}`}>
                            <span className={"text-white mx-auto"}>2023</span>
                        </IonCol>
                        <IonCol onClick={()=>setActiveTab("2024")} className={`py-3 ${activeTab == "2024" ? "bg-[#4ac3a4]" : "bg-[#2c7663] "}`}>
                            <span className={"text-white mx-auto"}>2024</span>
                        </IonCol>
                        <IonCol onClick={()=>setActiveTab("2025")} className={`py-3 ${activeTab == "2025" ? "bg-[#4ac3a4]" : "bg-[#2c7663] "}`}>
                            <span className={"text-white mx-auto"}>2025</span>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonList lines={"none"}>
                    <IonItem className={"mt-3 ion-item"}>
                        <IonLabel><span className={"font-medium text-lg text-green-800"}>
                            Miraç Kandili
                        </span></IonLabel>
                        <IonLabel slot={"end"}><span className={"font-medium text-lg float-right text-green-800"}>
                            27 Şubat Çarşamba
                        </span></IonLabel>
                    </IonItem>
                    <IonItem className={"mt-3 ion-item"}>
                        <IonLabel><span className={"font-medium text-lg text-green-800"}>
                            Miraç Kandili
                        </span></IonLabel>
                        <IonLabel slot={"end"}><span className={"font-medium text-lg float-right text-green-800"}>
                            27 Şubat Çarşamba
                        </span></IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </>
    );
}

export default DiniGunler;