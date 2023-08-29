import React from 'react'
import {IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar} from "@ionic/react";

interface PageProps {
    pageTitle: string;
}

export default function Header({pageTitle}: PageProps) {
    return (
        <IonHeader className={"p-2"}>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton text={"Geri"}></IonBackButton>
                </IonButtons>
                <IonTitle className={"text-xl"}>{pageTitle}</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}
