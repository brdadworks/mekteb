import React, { useEffect } from "react";
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

function KuraniKerim({ books, title }: { books: BooksProps[]; title: string }) {
  return (
    <>
      <Header pageTitle={"Kuran-ı Kerim"} />
      <IonContent class="ion-padding bg-white bg-color-white">
        <IonList lines={"none"}>

          {books.map((book) => (
            <IonNavLink
              key={`${book.id}`}
              routerDirection="forward"
              component={() => (
                <KuraniKerimOku
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

export default KuraniKerim;
