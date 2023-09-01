import React, {useState} from 'react';
import {IonContent, IonGrid, IonCol, IonRow, IonIcon} from '@ionic/react';
import Header from "../../components/Header";
import {compassOutline, mapOutline} from "ionicons/icons";
import Pusula from "../../components/Kible/Pusula";
import Harita from "../../components/Kible/Harita";

function Kible() {
    const [activeTab, setActiveTab] = useState("Pusula");

    return (
        <>
            <Header pageTitle={"Kıble"}/>
            <IonContent class="bg-white bg-color-white">
                <IonGrid>
                    <IonRow>
                        <IonCol onClick={()=>setActiveTab("Pusula")} className={`py-2 ${activeTab == "Pusula" ? "bg-[#4ac3a4]" : "bg-[#2c7663] "}`}>
                            <div className={"text-white mx-auto flex flex-col justify-center items-center"}>
                                <IonIcon className={"text-center"} icon={compassOutline} size={"large"}></IonIcon>
                                <span className={"text-center"}>Pusula</span>
                            </div>
                        </IonCol>
                        <IonCol onClick={()=>setActiveTab("Harita")} className={`py-2 ${activeTab == "Harita" ? "bg-[#4ac3a4]" : "bg-[#2c7663] "}`}>
                            <div className={"text-white mx-auto flex flex-col justify-center items-center"}>
                                <IonIcon className={"text-center"} icon={mapOutline} size={"large"}></IonIcon>
                                <span className={"text-center"}>Harita</span>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <div>
                    {activeTab == "Pusula" &&  <Pusula />}
                    {activeTab == "Harita" && <Harita />}
                </div>
            </IonContent>
        </>
    );
}

export default Kible;