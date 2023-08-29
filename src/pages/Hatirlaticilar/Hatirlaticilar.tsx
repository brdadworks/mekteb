import React from 'react';
import {
    IonContent,
    IonItem,
    IonList,
    IonLabel, IonToggle
} from '@ionic/react';
import Header from "../../components/Header";

const notifications = [
    {title: "Tümü"},
    {title: "Dini Günler"},
    {title: "İmksak"},
    {title: "Güneş"},
    {title: "Öğle"},
    {title: "İkindi"},
    {title: "Akşam"},
    {title: "Yatsı"},
];
function Hatirlaticilar() {
    return (
        <>
            <Header pageTitle={"Hatırlatıcılar"} />
            <IonContent class="ion-padding bg-white bg-color-white">
                <IonList lines={"none"}>
                    {notifications.map((notification, index) => (
                        <IonItem key={index}>
                            <IonLabel><span className={"font-medium text-lg text-black"}>{notification.title}</span></IonLabel>
                            <IonToggle slot="end"/>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </>
    );
}

export default Hatirlaticilar;