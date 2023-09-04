import React, {useRef} from 'react';
import {
    IonContent,
    IonItem,
    IonList,
    IonLabel, IonToggle, IonIcon, IonNavLink, IonFooter, IonToolbar, IonTitle, IonButtons, IonBackButton, IonHeader
} from '@ionic/react';
import Header from "../../components/Header";
import "./Kitaplar.css"
import * as allBooks from "../../../data/books";
import KitapOku from "../KitapOku/KitapOku";
import {BookProps, BooksProps} from "../../../utils/types";
import {
    ala, delilul_irfaniyye,
    evradi_fethiyye, evradi_kadiriyye, evradi_naksibendiyye,
    evradi_rufaiyye,
    evradi_ummul_kuraniyye,
    kebir_cuma, kurani_kerimden_dualar,
    munacati_veysel_karani
} from "../../../data/books";
import {all} from "axios";


const bookHandler = (slug: string): BooksProps[] => {
    switch (slug) {
        case "mecmua":
            return allBooks.mecmua;
        case "mecmua_meal":
            return allBooks.mecmua_meal;
        case "kurani_kerim":
            return allBooks.kurani_kerim;
        case "cevseni_kebir":
            return allBooks.cevseni_kebir;
        case "kurani_kerim_meal":
            return allBooks.kurani_kerim_meal
        default:
            return [];
    }
}

const currentBook = (slug: string): BookProps => {
    switch (slug) {
        case "duayi_mustecab":
            return allBooks.duayi_mustecab;
        case "ala":
            return allBooks.ala;
        case "bakara":
            return allBooks.bakara;
        case "cuma":
            return allBooks.cuma;
        case "duhan":
            return allBooks.duhan;
        case "fatiha":
            return allBooks.fatiha;
        case "fetih":
            return allBooks.fetih;
        case "hasr":
            return allBooks.hasr;
        case "hatim":
            return allBooks.hatim;
        case "insan":
            return allBooks.insan;
        case "kehf":
            return allBooks.kehf;
        case "mulk":
            return allBooks.mulk;
        case "nebe":
            return allBooks.nebe;
        case "rahman":
            return allBooks.rahman;
        case "tahrim":
            return allBooks.tahrim;
        case "vakia":
            return allBooks.vakia;
        case "yasin":
            return allBooks.yasin;
        case "yusuf":
            return allBooks.yusuf;
        case "pazartesi":
            return allBooks.pazartesi;
        case "sali":
            return allBooks.sali;
        case "carsamba":
            return allBooks.carsamba;
        case "persembe":
            return allBooks.persembe;
        case "kebir_cuma":
            return allBooks.kebir_cuma;
        case "cumartesi":
            return allBooks.cumartesi;
        case "pazar":
            return allBooks.pazar;
        case "evradi_ummul_kuraniyye":
            return allBooks.evradi_ummul_kuraniyye;
        case "munacati_veysel_karani":
            return allBooks.munacati_veysel_karani;
        case "evradi_fethiyye":
            return allBooks.evradi_fethiyye;
        case "evradi_rufaiyye":
            return allBooks.evradi_rufaiyye;
        case "evradi_kadiriyye":
            return allBooks.evradi_kadiriyye;
        case "evradi_naksibendiyye":
            return allBooks.evradi_naksibendiyye;
        case "delilul_irfaniyye":
            return allBooks.delilul_irfaniyye;
        case "kurani_kerimden_dualar":
            return allBooks.kurani_kerimden_dualar;
        case "ala_meal":
            return allBooks.ala_meal;
        case "bakara_meal":
            return allBooks.bakara_meal;
        case "cuma_meal":
            return allBooks.cuma_meal;
        case "duhan_meal":
            return allBooks.duhan_meal;
        case "fatiha_meal":
            return allBooks.fatiha_meal;
        case "fetih_meal":
            return allBooks.fetih_meal;
        case "hasr_meal":
            return allBooks.hasr_meal;
        case "hatim_meal":
            return allBooks.hatim_meal;
        case "insan_meal":
            return allBooks.insan_meal;
        case "kehf_meal":
            return allBooks.kehf_meal;
        case "mulk_meal":
            return allBooks.mulk_meal;
        case "nebe_meal":
            return allBooks.nebe_meal;
        case "rahman_meal":
            return allBooks.rahman_meal;
        case "tahrim_meal":
            return allBooks.tahrim_meal;
        case "vakia_meal":
            return allBooks.vakia_meal;
        case "yasin_meal":
            return allBooks.yasin_meal;
        case "yusuf_meal":
            return allBooks.yusuf_meal;
        case "pazartesi_meal":
            return allBooks.pazartesi_meal;
        case "sali_meal":
            return allBooks.sali_meal;
        case "carsamba_meal":
            return allBooks.carsamba_meal;
        case "persembe_meal":
            return allBooks.persembe_meal;
        case "kebir_cuma_meal":
            return allBooks.kebir_cuma_meal;
        case "cumartesi_meal":
            return allBooks.cumartesi_meal;
        case "pazar_meal":
            return allBooks.pazar_meal;
        case "evradi_ummul_kuraniyye_meal":
            return allBooks.evradi_ummul_kuraniyye_meal;
        case "munacati_veysel_karani_meal":
            return allBooks.munacati_veysel_karani_meal;
        case "evradi_fethiyye_meal":
            return allBooks.evradi_fethiyye_meal;
        case "evradi_rufaiyye_meal":
            return allBooks.evradi_rufaiyye_meal;
        case "evradi_kadiriyye_meal":
            return allBooks.evradi_kadiriyye_meal;
        case "evradi_naksibendiyye_meal":
            return allBooks.evradi_naksibendiyye_meal;
        case "delilul_irfaniyye_meal":
            return allBooks.delilul_irfaniyye_meal;
        case "kurani_kerimden_dualar_meal":
            return allBooks.kurani_kerimden_dualar_meal;
        default:
            return [] as unknown as BookProps;
    }
}

function Kitaplar({books, title}: { books: BooksProps[], title: string }) {
    return (
        <>
            <Header pageTitle={title}/>
            <IonContent class="ion-padding bg-white bg-color-white">
                <IonList lines={"none"}>
                    {books.map((book) => (
                        <IonNavLink key={`${book.id}`} routerDirection="forward" component={() => book.read ?
                            <KitapOku title={book.title} book={currentBook(book.slug)}/> :
                            <Kitaplar title={book.title} books={bookHandler(book.slug)}/>}>

                            <IonItem className={"mt-3 k-ion-item w-full"}>
                                <IonLabel className={"text-center"}>
                            <span className={"font-medium text-lg text-white"}>
                                {book.title}
                            </span>
                                </IonLabel>
                            </IonItem>
                        </IonNavLink>
                    ))
                    }
                </IonList>
            </IonContent>
        </>
    );
}

export default Kitaplar;