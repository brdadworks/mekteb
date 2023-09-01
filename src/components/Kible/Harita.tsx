import React, {useEffect, useState} from 'react';
import {Geolocation} from '@capacitor/geolocation';
import {getLocationPermissionStatus, requestLocationPermission} from "../../../utils/functions";
import {IonButton} from "@ionic/react";
import {AndroidSettings, NativeSettings} from "capacitor-native-settings";


interface CoordinatesType {
    latitude: number;
    longitude: number;
    accuracy: number;
    altitudeAccuracy: number | null | undefined;
    altitude: number | null;
    speed: number | null;
    heading: number | null;
}

const Map = () => {
    const [map, setMap] = useState(null);
    const [userLocation, setUserLocation] = useState<CoordinatesType>();
    const [permission, setPermission] = useState<string>("prompt");

    useEffect(() => {
        loadMap();

        const locationPermission = async () => {
            const perm = await getLocationPermissionStatus();
            console.log("perm", perm)
            if (perm == "denied") {
                setPermission("denied");
            } else if (perm == "prompt") {
                await requestLocationPermission();
            } else {
                setPermission("granted");
            }
        }
        locationPermission();
    }, []);

    const loadMap = async () => {
        const userPosition = await getUserPosition();

        const mapOptions = {
            center: {lat: 21.42251641101661, lng: 39.826182015499995}, // Kaaba coordinates
            zoom: 15,
        };

        const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);

        const kaabaMarker = new window.google.maps.Marker({
            position: {lat: 21.42251641101661, lng: 39.826182015499995},
            map: map,
            icon: {
                url: '/kaaba2.png', // Replace with the path to your custom image
                scaledSize: new window.google.maps.Size(50, 50),
            },
        });

        if (userPosition) {
            const userLocation = new window.google.maps.LatLng(
                userPosition.coords.latitude,
                userPosition.coords.longitude
            );

            const userMarker = new window.google.maps.Marker({
                position: userLocation,
                map: map,
            });

            const linePath = [userLocation, kaabaMarker.getPosition()];
            const line = new window.google.maps.Polyline({
                path: linePath,
                geodesic: true,
                strokeColor: '#FF0000', // Red color for the line
                strokeOpacity: 0.8,
                strokeWeight: 2,
            });
            line.setMap(map);
        }

        setMap(map);
    };

    const getUserPosition = async () => {
        try {
            const position = await Geolocation.getCurrentPosition();
            setUserLocation(position.coords);
            return position;
        } catch (error) {
            console.error('Error getting user position:', error);
            return null;
        }
    };

    return (
        <>
            {permission == "granted" && <div id="map" style={{width: '100%', height: '100vh'}}></div>}
            {permission == "denied" && <Denied/>}
            {permission == "prompt" && <Prompt/>}
        </>
    );
};

const Prompt = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-5">
            <div className="text-center">
                <span className="text-lg text-gray-500">Haritaları kullanabilmek için konumunuza izin vermeniz gerekmektedir.</span>
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
                <span className="text-lg text-gray-500">Haritaları kullanabilmek için konumunuza izin vermeniz gerekmektedir.</span>
            </div>
            <IonButton className="mt-5" onClick={openLocationSettings}>İzin Ver</IonButton>
        </div>
    )
}

export default Map;
