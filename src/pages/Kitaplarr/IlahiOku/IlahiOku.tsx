import React, {useRef, useState} from 'react';
import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import "./Kitaplar.css"
import {IlahiProps} from "../../../../utils/types";
import Header from "../../../components/Header";

function IlahiOku({book, title}: { book: IlahiProps, title: string }) {
    const lines = book.content.split('\n');

    const renderedLines = [];

    for (let i = 0; i < lines.length; i++) {
        if (i % book.split + 1 === 0) {
            renderedLines.push(<p key={i}>{lines[i]}</p>);
        } else {
            renderedLines.push(<br key={i}/>);
            renderedLines.push(lines[i]);
        }
    }

    return (
        <>
            <IonHeader className={"p-2"}>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text={"Geri"}></IonBackButton>
                    </IonButtons>
                    <IonTitle className={"text-lg whitespace-pre-wrap"}>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding bg-white bg-color-white">
                <p className={"text-center text-lg font-semibold"}>{book.title}</p>
                <p className={"text-center text-sm mt-2"}>{renderedLines}</p>
            </IonContent>
        </>
    );
}

export default IlahiOku;