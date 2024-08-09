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
import { BooksProps } from "../../../../utils/types";
import KuraniKerimOku from "../KuraniKerimOku/KuraniKerimOku";

export default function Kuran({
  books,
  title,
}: {
  books: BooksProps[];
  title: string;
}) {
  console.log({ books, title });
  return (
    <>
      <Header pageTitle={title} />
      <IonContent class="ion-padding bg-white bg-color-white">
        Kuran Sayfası
        <IonList lines={"none"}>
          {books.map((book, i) => (
            <IonNavLink
              key={i}
              routerDirection="forward"
              component={() => (
                <KuraniKerimOku
                  sound={book.sound}
                  pageTitle={book.title}
                  startPage={book.startPage as number}
                />
              )}
            >
              <IonItem className={"mt-[3px] k-ion-item w-full"}>
                <IonLabel className={"text-center"}>
                  <span
                    className={
                      "font-medium text-[1rem] text-white whitespace-pre-wrap"
                    }
                  >
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
