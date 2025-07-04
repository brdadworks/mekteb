import { IonAlert } from "@ionic/react";
import { NativeMarket } from "@capacitor-community/native-market";
import { App } from "@capacitor/app";
import { useEffect, useState } from "react";
import { Capacitor } from "@capacitor/core";

const UpdatePopUp: React.FC = () => {
    const [appVersion, setAppVersion] = useState<string>("");

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const platform = Capacitor.getPlatform();
    let appId = "com.mektebiirfan.app";

    if (platform === "ios") {
        appId = "com.mektebi.app";
    }

    //get app version
    useEffect(() => {
        App.getInfo().then((info) => {
            console.log("App info: --", JSON.stringify(info));

            console.log("App version: -- ", info.version);

            setAppVersion(info.version);
        });
    }, [])
    //check for update
    useEffect(() => {
    const checkVersion = async () => {
        if (!appVersion) return;

        try {
            const response = await fetch(`https://brd.com.tr/mektebi-irfan-version.json`,);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            console.log("Cloud version android: --", data.version.android);
            console.log("Cloud version ios: --", data.version.ios);

            if (platform === "ios" && data.version.ios !== appVersion) {
                setIsOpen(true);
            } else if (platform === "android" && data.version.android !== appVersion) {
                setIsOpen(true);
            }
        } catch (error) {
            console.warn("Sürüm kontrolü başarısız:", error);
        }
    };

    checkVersion();
}, [appVersion]);





    if (!isOpen) {
        return null;
    }

    return (
        <IonAlert
            isOpen={isOpen}
            header="Yeni uygulama sürümü mevcut!"
            message="Lütfen uygulamayı güncelleyin."
            backdropDismiss={false}
            buttons={[{
                text: 'Güncelle', handler: () => {
                    //open app store
                    NativeMarket.openStoreListing({
                        appId: appId,
                    });
                }
            }]}
        ></IonAlert>
    );
};

export default UpdatePopUp;