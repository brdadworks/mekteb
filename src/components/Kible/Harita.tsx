import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  Marker,
  Polyline,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Geolocation } from "@capacitor/geolocation";
import {
  getLocationPermissionStatus,
  requestLocationPermission,
} from "../../../utils/functions";
import { IonButton, isPlatform } from "@ionic/react";
import {
  AndroidSettings,
  IOSSettings,
  NativeSettings,
} from "capacitor-native-settings";

interface CoordinatesType {
  latitude: number;
  longitude: number;
  accuracy: number;
  altitudeAccuracy: number | null | undefined;
  altitude: number | null;
  speed: number | null;
  heading: number | null;
}

interface MapOptions {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

interface MarkerOptions {
  position: {
    lat: number;
    lng: number;
  };
  icon?: {
    url: string;
    scaledSize: google.maps.Size;
  };
}

interface MapState {
  mapOptions: MapOptions | null;
  kaabaMarker: any | null;
  userMarker: MarkerOptions | null;
}

const Map = () => {
  const [map, setMap] = useState<MapState | null>(null);
  const [userLocation, setUserLocation] = useState<CoordinatesType>();
  const [permission, setPermission] = useState<string>("prompt");

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDq-ng90yBn7Bo0Sq8l6gA6reT1pHEDayY",
  });

  useEffect(() => {
    console.log("isPlatform(android) &&", isPlatform("android"));
    loadMap();

    const locationPermission = async () => {
      const perm = await getLocationPermissionStatus();
      console.log("perm", perm);
      if (perm == "denied") {
        setPermission("denied");
      } else if (perm == "prompt") {
        await requestLocationPermission();
      } else {
        setPermission("granted");
      }
    };
    locationPermission();
  }, []);

  const loadMap = async () => {
    const userPosition = await getUserPosition();

    const mapOptions = {
      // center: { lat: 21.42251641101661, lng: 39.826182015499995 }, // Kaaba coordinates
      center: {
        lat: userPosition?.coords.latitude!,
        lng: userPosition?.coords.longitude!,
      },
      zoom: 15,
    };
    const kaabaMarker = {
      position: { lat: 21.42251641101661, lng: 39.826182015499995 },
      icon: {
        url: "/kaaba2.png",
        scaledSize: { height: 50, width: 50 },
      },
    };

    const userMarker = userPosition &&
      userPosition.coords && {
        position: {
          lat: userPosition.coords.latitude,
          lng: userPosition.coords.longitude,
        },
      };

    setMap({ mapOptions, kaabaMarker, userMarker });
  };

  const getUserPosition = async () => {
    try {
      const position = await Geolocation.getCurrentPosition();
      setUserLocation(position.coords);
      console.log("user position, lat", position.coords.latitude);
      console.log("user position, lon", position.coords.longitude);
      return position;
    } catch (error) {
      console.error("Error getting user position:", error);
      return null;
    }
  };

  const openLocationSettings = () => {
    console.log("isPlatform(android) &&", isPlatform("android"));

    if (isPlatform("android")) {
      NativeSettings.openAndroid({
        option: AndroidSettings.ApplicationDetails,
      });
    } else {
      NativeSettings.openIOS({
        option: IOSSettings.App,
      });
    }
  };

  return (
    <>
      {permission == "granted" && isLoaded && (
        <div style={{ width: "100%", height: "76vh" }}>
          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "100%",
            }}
            zoom={map?.mapOptions?.zoom}
            center={map?.mapOptions?.center}
          >
            {map && map.kaabaMarker && (
              <Marker
                position={map.kaabaMarker.position}
                icon={map.kaabaMarker.icon}
              />
            )}
            {map && map.userMarker && (
              <Marker position={map.userMarker.position} />
            )}
            {map && map.userMarker && map.kaabaMarker && (
              <Polyline
                path={[map.userMarker.position, map.kaabaMarker.position]}
                options={{
                  strokeColor: "#FF0000",
                  strokeOpacity: 0.8,
                  strokeWeight: 2,
                }}
              />
            )}
          </GoogleMap>
        </div>
      )}
      {permission == "denied" && (
        <Denied openLocationSettings={openLocationSettings} />
      )}
      {permission == "prompt" && <Prompt />}
    </>
  );
};

const Prompt = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="text-center">
        <span className="text-lg text-gray-500">
          Haritaları kullanabilmek için konumunuza izin vermeniz gerekmektedir.
        </span>
      </div>
    </div>
  );
};

const Denied = ({
  openLocationSettings,
}: {
  openLocationSettings: () => void;
}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="text-center">
        <span className="text-lg text-gray-500">
          Haritaları kullanabilmek için konumunuza izin vermeniz gerekmektedir.
        </span>
      </div>
      <IonButton className="mt-5" onClick={openLocationSettings}>
        İzin Ver
      </IonButton>
    </div>
  );
};

export default Map;
