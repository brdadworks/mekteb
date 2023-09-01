import React, {useEffect, useState} from 'react';
import {Motion} from '@capacitor/motion';
import {getLocationPermissionStatus, requestLocationPermission} from "../../../utils/functions";
import {AndroidSettings, NativeSettings} from "capacitor-native-settings";
import {IonButton} from "@ionic/react";

const QiblaAngle = 39.8; // Qibla direction angle in degrees clockwise from North

const Pusula: React.FC = () => {
        const [compassHeading, setCompassHeading] = useState<number>(0);
        const [qiblaDirection, setQiblaDirection] = useState<number>(0);
        const [permission, setPermission] = useState<string>("prompt");

        useEffect(() => {
            const watch = Motion.addListener('orientation', (event) => {
                setCompassHeading(event.alpha);
                setQiblaDirection(event.alpha - QiblaAngle);
            }
            );
            // Motion.addListener('orientation', (eventData) => {
            //     const newHeading = eventData.alpha || 0;
            //     console.log("newHeading", newHeading)
            //     const relativeAngle = (QiblaAngle - newHeading + 360) % 360;
            //     setCompassHeading(newHeading);
            //     setQiblaDirection(relativeAngle);
            // });
            const locationPermission = async () => {
                const perm = await getLocationPermissionStatus();
                if (perm == "denied") {
                    setPermission("denied");
                } else if (perm == "prompt") {
                    await requestLocationPermission();
                } else {
                    setPermission("granted");
                }
            }
            locationPermission();

            return () => {
                watch.remove();
                // Motion.removeAllListeners();
            };
        }, []);

        return (
            <>
                {permission == "granted" &&
                    <div className="ion-padding">
                        <div className="compass-container">
                            <div
                                className="compass-image"
                                style={{
                                    backgroundImage: `url('/compass2.png')`,
                                    transform: `rotate(${compassHeading}deg)`,
                                }}
                            >
                                <img
                                    src="/kaaba2.png"
                                    alt="Qibla"
                                    className="qibla-image"
                                    style={{
                                        transform: `rotate(${qiblaDirection}deg)`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                }
                {permission == "denied" && <Denied/>}
                {permission == "prompt" && <Prompt/>}
            </>
        );
    }
;

const Prompt = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-5">
            <div className="text-center">
                <span className="text-lg text-gray-500">Pusulayı kullanabilmek için konumunuza izin vermeniz gerekmektedir.</span>
            </div>
        </div>
    )
}

const Denied = () => {
    const openLocationSettings = () => {
        NativeSettings.openAndroid({
            option: AndroidSettings.Location,
        });
    }
    return (
        <div className="flex flex-col justify-center items-center mt-5">
            <div className="text-center">
                <span className="text-lg text-gray-500">Pusulayı kullanabilmek için konumunuza izin vermeniz gerekmektedir.</span>
            </div>
            <IonButton className="mt-5" onClick={openLocationSettings}>İzin Ver</IonButton>
        </div>
    )
}


export default Pusula;
