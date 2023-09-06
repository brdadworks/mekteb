import React from 'react';
import {
    IonContent,
    IonItem,
    IonList,
    IonLabel, IonNavLink
} from '@ionic/react';
import Header from "../../../components/Header";
import "./Ilahiler.css"
import {BooksProps} from "../../../../utils/types";
import {bookHandler, IlahiHandler} from "../../../../utils/bookHandler";
import IlahiOku from "../IlahiOku/IlahiOku";


function Ilahiler({books, title}: { books: BooksProps[], title: string }) {
    return (
        <>
            <Header pageTitle={title}/>
            <IonContent class="ion-padding bg-white bg-color-white">
                <IonList lines={"none"}>
                    {books.map((book) => (
                        <IonNavLink key={`${book.id}`} routerDirection="forward" component={() =>
                            book.read ?
                                <IlahiOku title={book.title} book={IlahiHandler(book.slug)}/> :
                                <Ilahiler title={book.title} books={bookHandler(book.slug)}/>}>

                            <IonItem className={"mt-[3px] k-ion-item w-full"}>
                                <IonLabel className={"text-center"}>
                            <span className={"font-medium text-[1rem] text-white whitespace-pre-wrap"}>
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

export default Ilahiler;