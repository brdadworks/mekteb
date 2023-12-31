import React, { useEffect, useState } from "react";
import { Motion } from "@capacitor/motion";
import {
  calculateQiblaDirection,
  getLocationPermissionStatus,
  requestLocationPermission,
} from "../../../utils/functions";
import { AndroidSettings, NativeSettings } from "capacitor-native-settings";
import { IonButton, isPlatform } from "@ionic/react";
import { Geolocation } from "@capacitor/geolocation";

const QiblaAngle = 39.8; // Qibla direction angle in degrees clockwise from North

const Pusula: React.FC = () => {
  const [compassHeading, setCompassHeading] = useState<number>(0);
  const [qiblaDirection, setQiblaDirection] = useState<number>(0);
  const [permission, setPermission] = useState<string>("prompt");
  const [motionPermissionStatus, setMotionPermissionStatus] = useState(false);

  useEffect(() => {
    Geolocation.watchPosition({}, (position, err) => {
      if (err) {
        console.error("Error getting user location:", err);
        return;
      }
      const { latitude, longitude, heading } = position!.coords;
      console.log("lan long", latitude, longitude);
      console.log("heading", heading);

      const qiblaDirection = calculateQiblaDirection(latitude, longitude);
      setQiblaDirection(qiblaDirection);
    });
    const watch = Motion.addListener("orientation", (event) => {
      setCompassHeading(event.alpha);
      // setQiblaDirection(event.alpha - QiblaAngle);
    });
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
    };
    locationPermission();

    return () => {
      // watch.remove();
      // Motion.removeAllListeners();
    };
  }, []);

  const motionPermission = async () => {
    (DeviceOrientationEvent as any)
      .requestPermission()
      .then((response: any) => {
        console.log("device motion request response", response);

        if (response === "granted") {
          // window.addEventListener("deviceorientation", handler, true);
          setMotionPermissionStatus(true);
          console.log("Motion Permission granted");

          Motion.addListener("orientation", (event) => {
            console.log("event alpha", event.alpha);
            console.log("event beta", event.beta);
            console.log("event gamma", event.gamma);

            setCompassHeading(event.alpha);
          });
        } else {
          alert("Cihaz hareket sensörüne erişim izni vermeniz gerekmektedir.");
        }
      })
      .catch(() => alert("Desteklenmemektedir."));
  };

  return (
    <>
      {!motionPermissionStatus && isPlatform("ios") && (
        <button onClick={motionPermission}>Telefon hareketlerini algılamak için tıklayınız.</button>
      )}

      {permission == "granted" && (
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
      )}
      {permission == "denied" && <Denied />}
      {permission == "prompt" && <Prompt />}
    </>
  );
};
const Prompt = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="text-center">
        <span className="text-lg text-gray-500">
          Pusulayı kullanabilmek için konumunuza izin vermeniz gerekmektedir.
        </span>
      </div>
    </div>
  );
};

const Denied = () => {
  const openLocationSettings = () => {
    NativeSettings.openAndroid({
      option: AndroidSettings.Location,
    });
  };
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="text-center">
        <span className="text-lg text-gray-500">
          Pusulayı kullanabilmek için konumunuza izin vermeniz gerekmektedir.
        </span>
      </div>
      <IonButton className="mt-5" onClick={openLocationSettings}>
        İzin Ver
      </IonButton>
    </div>
  );
};

export default Pusula;
