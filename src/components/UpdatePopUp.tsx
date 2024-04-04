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
            console.log("App version: -- " ,info.version);
            
            setAppVersion(info.version);
        });
    }, [])
     //check for update
     useEffect(() => {
        // if (appVersion) {
        //     fetch(`https://api.appstoreconnect.apple.com/v1/apps/${appId}/appStoreVersions?limit=1&sort=-version`).then((response) => {
        //     if (response.ok) {
                
        //     }
        // }
    }, [appVersion])

   
    
    if (!isOpen) {
        return null;
    }

    return (
        <IonAlert
            isOpen={isOpen}
            header="Yeni uygulama güncellemesi mevcut!"
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