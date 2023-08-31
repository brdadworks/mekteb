import React from 'react';
import {
    IonContent,
} from '@ionic/react';

import "./Imsak.css"
import Header from "../../components/Header";

function Imsakiye() {

    return (
        <>
            <Header pageTitle={"İmsakiye"} />
            <IonContent class="ion-padding bg-white bg-color-white">
                <table>
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

export default Imsakiye;