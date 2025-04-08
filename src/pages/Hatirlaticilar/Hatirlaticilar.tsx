import React, { useEffect, useState } from 'react';
import {
    IonContent,
    IonItem,
    IonList,
    IonLabel, IonToggle, IonButton,
    IonToast
} from '@ionic/react';
import Header from "../../components/Header";

import {
    addStorageData,
    getNotificationPermissionStatus,
    getStorageData, notificationHandler,
    requestNotificationPermission,
} from "../../../utils/functions";

import { NativeSettings, AndroidSettings, IOSSettings } from 'capacitor-native-settings';

const notifications = [
    // { title: "Dini Günler", checked: false },
    { title: "İmsak", checked: false },
    { title: "Güneş", checked: false },
    { title: "Öğle", checked: false },
    { title: "İkindi", checked: false },
    { title: "Akşam", checked: false },
    { title: "Yatsı", checked: false },
];

function Hatirlaticilar() {
    const [notificationStates, setNotificationStates] = useState(notifications);
    const [permissionStatus, setPermissionStatus] = useState<string>("none");
    const [loading, setLoading] = useState(true);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        getStorageData("notifications").then(data => {
            if (!data) return setLoading(false)
            setLoading(false)
            setNotificationStates(data)
        })
        getNotificationPermissionStatus().then((status) => {
            if (status === "denied") {
                setPermissionStatus("denied")
            } else if (status === "prompt") {
                requestNotificationPermission().then((status) => {
                    setPermissionStatus(status);
                }
                );
            } else {
                //eğer hali hazırda izin alındıysa
                setPermissionStatus("granted")
            }
        }
        );
    }, []);

    const handleToggleAll = (checked: boolean) => {
        const updatedStates = notificationStates.map(state => ({ ...state, checked: true }));
        console.log("updated", updatedStates)
        setNotificationStates(updatedStates);
    };
    const handleToggle = (index: number) => {
        const updatedStates = [...notificationStates];
        updatedStates[index].checked = !updatedStates[index].checked;
        setNotificationStates(updatedStates);
    };
    const openNotificationSettings = () => {
        NativeSettings.openAndroid({
            option: AndroidSettings.AppNotification,
        });
    }
    const checkPermission = () => {
        requestNotificationPermission().then((status) => {
            setPermissionStatus(status);
        }
        );
    }
    const sendNotification = async () => {
        console.log("sending notification", notificationStates);
        
        await addStorageData("notifications", notificationStates);
        notificationHandler(notificationStates);
        //go to home page
        setShowToast(true);
    }
    const isAllChecked = notificationStates.every((state) => state.checked);

    return (
        <>
            <Header pageTitle={'Hatırlatıcılar'} />
            {/* <IonButton onClick={testSendNotification}>Test Notification</IonButton> */}
            <IonToast isOpen={showToast} onDidDismiss={() => setShowToast(false)} message="Bildirimler başarıyla kayıt edildi." duration={5000}></IonToast>
            <IonContent class="ion-padding bg-white bg-color-white">
                {permissionStatus === "none" ? <p>Yükleniyor...</p> : permissionStatus === "denied" ?
                    //access denied
                    <>
                        <p>Bildirim almak için bildirimlere izin vermeniz gerekmekte. Ayarlardan manuel olarak
                            bildirimlere izin vermeniz gerekmekte. (İzin verdikten sonra)</p>
                        <p><IonButton onClick={openNotificationSettings}>İzin Ver</IonButton></p>
                        <p><IonButton onClick={checkPermission}>Kontrol et</IonButton></p>
                    </>
                    :
                    //access granted
                    <>
                        <IonList lines={'none'}>
                            {/*<p><IonButton onClick={sendNotification}>Send Noti</IonButton></p>*/}
                            <IonItem>
                                <IonLabel>
                                    <span className={'font-medium text-lg text-black'}>
                                        Tümü
                                    </span>
                                </IonLabel>
                                <IonToggle
                                    aria-label={'Tümü'}
                                    slot="end"
                                    checked={isAllChecked}
                                    onIonChange={(e) =>
                                        handleToggleAll(e.detail.checked)
                                    }
                                />
                            </IonItem>
                            {notificationStates.map((notification, index) => (
                                <IonItem key={index}>
                                    <IonLabel>
                                        <span className={'font-medium text-lg text-black'}>
                                            {notification.title}
                                        </span>
                                    </IonLabel>
                                    <IonToggle
                                        aria-label={notification.title}
                                        slot="end"
                                        checked={notification.checked}
                                        onIonChange={() => handleToggle(index)}
                                    />
                                </IonItem>
                            ))}
                        </IonList>
                        <IonButton onClick={sendNotification}>Kaydet</IonButton>
                    </>
                }
            </IonContent>
        </>
    )
        ;
}

export default Hatirlaticilar;