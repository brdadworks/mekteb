import React, {useRef, useState} from 'react';
import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import "./Kitaplar.css"
import {arrowBackOutline, arrowForwardOutline, enterOutline} from "ionicons/icons";
import {BookProps} from "../../../utils/types";

function KitapOku({book, title}: { book: BookProps, title: string }) {
    const [currentBook, setCurrentBook] = useState<BookProps>(book);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const backBtnRef = useRef<HTMLButtonElement>(null);
    const backToList = () => {
        backBtnRef.current && backBtnRef.current.click();
    }
    const nextPage = () => {
        if (currentPage + 1 > currentBook.page) return;

        setCurrentPage(currentPage + 1);
    }
    const prevPage = () => {
        if (currentPage - 1 < 1) return;

        setCurrentPage(currentPage - 1)
    }

    return (
        <>
            <IonHeader className={"p-2"}>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text={"Geri"}><button ref={backBtnRef}></button></IonBackButton>
                    </IonButtons>
                    <IonTitle className={"text-xl"}>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding bg-white bg-color-white">
                <img src={`${currentBook.content}${currentPage}-fs8.png`} alt={""} className={"w-full h-auto"}/>
            </IonContent>

            <IonFooter className={"w-full flex justify-evenly items-center p-3 bg-gray-200"}>
                <button onClick={prevPage}><IonIcon className={"text-[#4ac3a4]"} icon={arrowBackOutline}
                                                    size={"large"}></IonIcon></button>
                <button onClick={nextPage}><IonIcon className={"text-[#4ac3a4]"} icon={arrowForwardOutline}
                                                    size={"large"}></IonIcon></button>
                <button onClick={backToList}><IonIcon className={"text-[#4ac3a4]"} icon={enterOutline}
                                                    size={"large"}></IonIcon></button>
            </IonFooter>
        </>
    );
}

export default KitapOku;