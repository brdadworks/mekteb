import React, { useEffect, useState, useRef } from "react";
import { GoogleMap } from "@capacitor/google-maps";
import { Geolocation } from "@capacitor/geolocation";
import {
  getLocationPermissionStatus,
  requestLocationPermission,
} from "../../../utils/functions";
import { IonButton } from "@ionic/react";
import { AndroidSettings, NativeSettings } from "capacitor-native-settings";

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
  kaabaMarker: MarkerOptions | null;
  userMarker: MarkerOptions | null;
}

const Map = () => {
  const [map, setMap] = useState<MapState | null>(null);
  const [userLocation, setUserLocation] = useState<CoordinatesType>();
  const [permission, setPermission] = useState<string>("prompt");

  const mapRef = useRef<HTMLElement>();
  let newMap: GoogleMap;

  useEffect(() => {
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

    loadMap();
  }, []);

  const loadMap = React.useCallback(async function callback() {
    const userPosition = await getUserPosition();

    if (!mapRef.current) return;

    newMap = await GoogleMap.create({
      id: "my-cool-map",
      element: mapRef.current,
      apiKey: "AIzaSyD4CdlHopKnLqD0P0nvXawdqU7rold2p28",
      config: {
        center: {
          lat: userPosition?.coords.latitude!,
          lng: userPosition?.coords.longitude!,
        },
        zoom: 8,
      },
    });
    //user marker
    newMap.addMarker({
      coordinate: {
        lat: userPosition?.coords.latitude!,
        lng: userPosition?.coords.longitude!,
      },
      title: "You",
      snippet: "You",
    });
    //kaaba marker
    newMap.addMarker({
      coordinate: { lat: 21.42251641101661, lng: 39.826182015499995 },
      title: "Kaaba",
      snippet: "Kaaba",
      iconUrl: "/kaaba2.png",
      iconSize: { width: 50, height: 50 },
    });
    newMap.addPolylines({
      path: [
          { lat: 21.42251641101661, lng: 39.826182015499995 },
          { lat: 25.42251641101661, lng: 59.826182015499995 },
        //   {
        //   lat: userPosition?.coords.latitude!,
        //   lng: userPosition?.coords.longitude!,
        // },
      ],
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
      geodesic: true,
    });
  }, []);

  const getUserPosition = async () => {
    try {
      const position = await Geolocation.getCurrentPosition();
      setUserLocation(position.coords);
      return position;
    } catch (error) {
      console.error("Error getting user position:", error);
      return null;
    }
  };

  const openLocationSettings = () => {
    NativeSettings.openAndroid({
      option: AndroidSettings.Location,
    });
  };

  return (
    <>
      {permission == "granted" && (
        <div style={{ width: "100%", height: "76vh" }}>
          <capacitor-google-map
            ref={mapRef}
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
            }}
          ></capacitor-google-map>
        </div>
        //   <GoogleMap
        //     mapContainerStyle={{
        //       width: "100%",
        //       height: "100%",
        //     }}
        //     zoom={map?.mapOptions?.zoom}
        //     center={map?.mapOptions?.center}
        //     onLoad={loadMap}
        //     onUnmount={onUnmount}
        //   >
        //     {map && map.kaabaMarker && (
        //       <Marker
        //         position={map.kaabaMarker.position}
        //         icon={map.kaabaMarker.icon}
        //       />
        //     )}
        //     {map && map.userMarker && (
        //       <Marker position={map.userMarker.position} />
        //     )}
        //     {map && map.userMarker && map.kaabaMarker && (
        //       <Polyline
        //         path={[map.userMarker.position, map.kaabaMarker.position]}
        //         options={{
        //           strokeColor: "#FF0000",
        //           strokeOpacity: 0.8,
        //           strokeWeight: 2,
        //         }}
        //       />
        //     )}
        //   </GoogleMap>
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
