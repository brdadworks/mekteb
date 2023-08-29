import React from 'react';
import {
    IonContent,
} from '@ionic/react';

import "./Imsak.css"
import Header from "../../components/Header";

function Imsak() {

    return (
        <>
            <Header pageTitle={"İmsakiye"} />
            <IonContent class="ion-padding bg-white bg-color-white">
                <table>
                    <thead>
                    <td>Tarih</td>
                    <td>İmsak</td>
                    <td>Güneş</td>
                    <td>Öğle</td>
                    <td>İkindi</td>
                    <td>Akşam</td>
                    <td>Yatsı</td>
                    </thead>
                    <tbody>
                    <tr>
                        <td>07 Ağu</td>
                        <td>04:16</td>
                        <td>04:16</td>
                        <td>04:16</td>
                        <td>04:16</td>
                        <td>04:16</td>
                        <td>04:16</td>
                    </tr>
                    <tr>
                        <td>08 Ağu</td>
                        <td>04:16</td>
                        <td>04:16</td>
                        <td>04:16</td>
                        <td>04:16</td>
                        <td>04:16</td>
                        <td>04:16</td>
                    </tr>
                    </tbody>
                </table>
            </IonContent>
        </>
    );
}

export default Imsak;