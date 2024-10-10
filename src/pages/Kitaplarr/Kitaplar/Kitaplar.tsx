import React from "react";
import {
  IonContent,
  IonItem,
  IonList,
  IonLabel,
  IonNavLink,
} from "@ionic/react";
import Header from "../../../components/Header";
import "./Kitaplar.css";
import KitapOku from "../KitapOku/KitapOku";
import { BooksProps } from "../../../../utils/types";
import { currentBook, bookHandler } from "../../../../utils/bookHandler";
import Ilahiler from "../Ilahiler/Ilahiler";
import KuraniKerim from "../KuraniKerim/KuraniKerim";
import KuraniKerimMeal from "../KuraniKerimMeal/KuraniKerimMeal";
import Kuran from "../Kuran";

function Kitaplar({ books, title }: { books: BooksProps[]; title: string }) {
  return (
    <>
      <Header pageTitle={title} />
      <IonContent class="ion-padding bg-white bg-color-white">
        <IonList lines={"none"}>
          {books.map((book) => (
            <IonNavLink
              key={`${book.id}`}
              routerDirection="forward"
              component={() =>
                book.slug.includes("ilahi") ? (
                  <Ilahiler title={book.title} books={bookHandler(book.slug)} />
                ) : book.slug == "kurani_kerim_mecmua" ? (
                  <KuraniKerim
                    title={book.title}
                    books={bookHandler(book.slug)}
                  />
                ) : book.slug == "kuran" ? (
                  <Kuran title={book.title} books={bookHandler(book.slug)} />
                ) : book.slug == "kurani_kerim_meal" ? (
                  <KuraniKerimMeal
                    title={book.title}
                    books={bookHandler(book.slug)}
                  />
                ) : book.read ? (
                  <KitapOku title={book.title} book={currentBook(book.slug)} />
                ) : (
                  <Kitaplar title={book.title} books={bookHandler(book.slug)} />
                )
              }
            >
              <IonItem className={"mt-[3px] k-ion-item w-full"}>
                <IonLabel className={"text-center"}>
                  <span className={"font-medium text-[1rem] text-white"}>
                    {book.title}
                  </span>
                </IonLabel>
              </IonItem>
            </IonNavLink>
          ))}
        </IonList>
      </IonContent>
    </>
  );
}

export default Kitaplar;
