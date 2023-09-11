import React, { useEffect, useState } from "react";
import { Motion } from "@capacitor/motion";
import { Geolocation } from "@capacitor/geolocation";
import {
  getLocationPermissionStatus,
  requestLocationPermission,
  getLocation,
  calculateQiblaDirection,
} from "../../../utils/functions";
import { AndroidSettings, NativeSettings } from "capacitor-native-settings";
import { IonButton } from "@ionic/react";

const Pusula: React.FC = () => {
  const [compassHeading, setCompassHeading] = useState<number>(0);
  const [qiblaDirection, setQiblaDirection] = useState<number>(0);
  const [permission, setPermission] = useState<string>("prompt");

  useEffect(() => {
    const getQiblaDirection = async () => {
      try {
        const location = await getLocation();
        const { latitude, longitude } = location;

        const qiblaDirection = calculateQiblaDirection(latitude, longitude);
        setQiblaDirection(qiblaDirection);
      } catch (error) {
        console.error("Error getting user location:", error);
      }
    };

    Geolocation.watchPosition({}, (position, err) => {
      if (err) {
        console.error("Error getting user location:", err);
        return;
      }
      const { latitude, longitude, heading } = position!.coords;
      console.log("lan long", latitude, longitude);
      console.log("heading", heading);
      
    //   setCompassHeading(heading!);

      const qiblaDirection = calculateQiblaDirection(latitude, longitude);
      setQiblaDirection(qiblaDirection);
    });

    Motion.addListener("orientation", (event) => {
        console.log("event alpha",event.alpha);
        console.log("event beta",event.beta);
        console.log("event gamma",event.gamma);
        
        setCompassHeading(event.alpha);
    });
    getQiblaDirection();

    const locationPermission = async () => {
      const perm = await getLocationPermissionStatus();
      console.log("perm", perm);

      if (perm == "denied") {
        setPermission("denied");
      } else if (perm == "prompt") {
        requestLocationPermission().then((res) => {
          console.log("res", res);

          if (res == "granted") {
            setPermission("granted");
          } else {
            setPermission("denied");
          }
        });
      } else {
        setPermission("granted");
      }
    };
    locationPermission();

    return () => {
    //   Motion.removeAllListeners();
    };
  }, [permission]);

  return (
    <>
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
