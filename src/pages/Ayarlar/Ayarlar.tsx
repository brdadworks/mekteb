import React, {useState, useRef, useEffect} from 'react';
import {
    IonContent,
    IonList,
    IonSelectOption,
    IonItem,
    IonSelect,
    IonButton,
    IonToast, IonToolbar, IonButtons, IonBackButton, IonTitle, IonHeader,
} from '@ionic/react';

import ulkeler from '../../../data/ulkeler';
import Header from '../../components/Header';
import {
    getCities,
    getDistrict, getNearestPrayerTime,
    getPrayerTimes, prayerTimesHandler,
} from '../../../utils/functions';
import {Storage} from '@ionic/storage';

//types
import {CountryProps, CityProps, DistrictProps, SettingsProps} from '../../../utils/types'

function Ayarlar() {
    //states
    const [loading, setLoading] = useState(true);
    const [cities, setCities] = useState<CityProps[]>([
        {
            SehirAdi: '',
            SehirAdiEn: '',
            SehirID: '',
        },
    ]);
    const [district, setDistrict] = useState<DistrictProps[]>([]);
    const [selectBoxStatus, setSelectBoxStatus] = useState<{
        city: boolean;
        district: boolean;
    }>({
        city: true,
        district: true,
    });
    const [settings, setSettings] = useState<SettingsProps>({
        country: null,
        city: null,
        district: null,
    });
    const [toastHandle, setToastHandle] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    //refs
    const countryRef = useRef<HTMLIonSelectElement | null>(null);
    const cityRef = useRef<HTMLIonSelectElement | null>(null);
    const districtRef = useRef<HTMLIonSelectElement | null>(null);

    useEffect(() => {
        const store = new Storage();
        const loadSettings = async () => {
            await store.create();
            // await store.clear();
            console.log('District in store', await store.get('district'));
            const getSettings = (await store.get('settings')) as SettingsProps;
            console.log('getSettings', getSettings);
            if (getSettings) {
                setSelectBoxStatus({
                    city: false,
                    district: false,
                });
                setSettings(getSettings);
                try {
                    await store.set(
                        'prayerTimes',
                        await getPrayerTimes(getSettings.district?.IlceID!)
                    );
                    const city = await getCities(getSettings.country!.UlkeID);
                    console.log("city status", city.status)
                    if (city.status === 200) setCities(city.cities);
                    else {

                        console.log("Şehir bilgisi alınırken hata oluştu. İnternet bağlantınızı kontrol ediniz")
                        setToastHandle(true)
                        setToastMessage("Şehir bilgisi alınırken hata oluştu. İnternet bağlantınızı kontrol ediniz.")
                    }

                    const dist = await getDistrict(getSettings.city!.SehirID);
                    if (dist.status === 200) setDistrict(dist.district);
                    else {
                        setToastHandle(true)
                        setToastMessage("İlçe bilgisi alınırken hata oluştu. İnternet bağlantınızı kontrol ediniz.")
                    }

                    setLoading(false);
                } catch (e) {
                    console.log("error")
                    setToastHandle(true)
                    setToastMessage("Bilgiler alınırken hata oluştu. İnternet bağlantınızı kontrol ediniz.")
                    setLoading(true);
                }
            } else {
                setLoading(false)
            }

        }
        loadSettings();
    }, []);

    const formHandler = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const countryHandler = async (country: CountryProps) => {
        const selectedCountry = country as CountryProps;

        // set settings country to value
        setSettings({
            country: selectedCountry,
            city: null,
            district: null,
        });
        setToastHandle(true);
        setToastMessage('Şehirler yükleniyor...');

        const data = await getCities(selectedCountry.UlkeID);
        if (data.status === 200) {
            setCities(data.cities);
            console.log('cityRef.current', cityRef.current?.disabled);
            setSelectBoxStatus({
                city: false,
                district: true,
            });
        }
    };

    const cityHandler = async (city: CityProps) => {
        setSettings({
            country: settings.country,
            city: city,
            district: null,
        });
        setToastHandle(true);
        setToastMessage('İlçeler yükleniyor...');

        const data = await getDistrict(city.SehirID);
        if (data.status === 200) {
            setDistrict(data.district);
            console.log('cityRef.current', cityRef.current?.disabled);
            setSelectBoxStatus({
                city: false,
                district: false,
            });
        }
    };

    const districtHandler = async (district: DistrictProps) => {
        setSettings({
            country: settings.country,
            city: settings.city,
            district: district,
        });
    };

    const saveSetting = async () => {
        const store = new Storage();
        await store.create();
        await store.set('settings', settings);
        window.location.reload(); // reload page for new settings
    };

    console.log('district', district);
    return (
        <>
            <IonToast
                isOpen={toastHandle}
                message={toastMessage}
                onDidDismiss={() => setToastHandle(false)}
                duration={2000}
            ></IonToast>

            <IonHeader className={"p-2"}>
                <IonToolbar>
                    {settings.district &&
                        <IonButtons slot="start">
                            <IonBackButton text={"Geri"}></IonBackButton>
                        </IonButtons>}
                    <IonTitle className={"text-xl"}>Ayarlar</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding bg-white bg-color-white">
                <p className={'text-green-800'}>
                    Konum bilgisini aşağıdan manuel olarak seçebilirsiniz. Uygulamanın
                    doğru çalışması için konum bilgilerine izin vermeniz gerekmektedir.
                </p>
                {loading ? (
                    <p className={"text-black"}>Yükleniyor...</p>
                ) : (
                    <form onSubmit={formHandler}>
                        <IonList>
                            <IonItem>
                                <IonSelect
                                    ref={countryRef}
                                    value={settings.country?.UlkeID || ''}
                                    onIonChange={(choice) =>
                                        countryHandler(ulkeler.find((ulke) => ulke.UlkeID === choice.detail.value)!)
                                    }
                                    label="Bir ülke seçiniz"
                                    labelPlacement="floating"
                                >
                                    {ulkeler.map((ulke) => (
                                        <IonSelectOption key={ulke.UlkeID} value={ulke.UlkeID}>
                                            {ulke.UlkeAdi}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                            </IonItem>
                            <IonItem>
                                <IonSelect
                                    value={settings.city?.SehirID || ''}
                                    onIonChange={(choice) =>
                                        cityHandler(cities.find((city) => city.SehirID === choice.detail.value)!)
                                    }
                                    ref={cityRef}
                                    label="Bir şehir seçiniz"
                                    labelPlacement="floating"
                                    disabled={selectBoxStatus.city}
                                >
                                    {cities.map((city) => (
                                        <IonSelectOption key={city.SehirID} value={city.SehirID}>
                                            {city.SehirAdi}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                            </IonItem>
                            <IonItem>
                                <IonSelect
                                    value={settings.district?.IlceID || ''}
                                    onIonChange={(choice) =>
                                        districtHandler(district.find((dist) => dist.IlceID === choice.detail.value)!)
                                    }
                                    ref={districtRef}
                                    label="Bir ilçe seçiniz"
                                    labelPlacement="floating"
                                    disabled={selectBoxStatus.district}
                                >
                                    {district.map((dist) => (
                                        <IonSelectOption key={dist.IlceID} value={dist.IlceID}>
                                            {dist.IlceAdi}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                            </IonItem>
                            <IonButton onClick={saveSetting} className={'mt-6 w-full green-btn'}>
                                Kaydet
                            </IonButton>
                        </IonList>
                    </form>
                )}
            </IonContent>
        </>
    );
}

export default Ayarlar;
