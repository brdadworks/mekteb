import { FC } from 'react';
import {IonContent, IonGrid, IonCol, IonRow, IonIcon} from '@ionic/react';
import Header from "../../components/Header";
import {mapOutline} from "ionicons/icons";
import Harita from "../../components/Kible/Harita";

const Kible: FC = () => {
    return (
        <>
            <Header pageTitle={"Kıble"}/>
            <IonContent class="bg-white bg-color-white">
                <IonGrid>
                    <IonRow>
                        <IonCol className={`py-2 bg-[#2c7663]`}>
                            <div className={"text-white mx-auto flex flex-col justify-center items-center"}>
                                <IonIcon className={"text-center"} icon={mapOutline} size={"large"}></IonIcon>
                                <span className={"text-center"}>Harita</span>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <div>
                    <Harita />
                </div>
            </IonContent>
        </>
    );
};

export default Kible;