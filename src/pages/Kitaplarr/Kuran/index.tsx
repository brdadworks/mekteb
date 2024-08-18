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
  return (
    <>
      <Header pageTitle={title} />
      <IonContent class="ion-padding bg-white bg-color-white">
        <IonList lines={"none"}>
          {books.map((book, i) => (
            <IonNavLink
              key={i}
              routerDirection="forward"
              component={() => (
                <KuraniKerimOku startPage={book.startPage as number} />
              )}
            >
              <IonItem className={"mt-[3px] k-ion-item w-full"}>
                <IonLabel className={"text-left"}>
                  <span
                    className={
                      "font-medium text-[1rem] text-white whitespace-pre-wrap"
                    }
                  >
                    {book.title} - {book.sure}
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
