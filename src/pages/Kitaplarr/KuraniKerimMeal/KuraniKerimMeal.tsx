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
import KuraniKerimMealOku from "../KuraniKerimMealOku/KuraniKerimMealOku";

function KuraniKerimMeal({ books, title }: { books: BooksProps[]; title: string }) {
  return (
    <>
      <Header pageTitle={title} />
      <IonContent class="ion-padding bg-white bg-color-white">
        <IonList lines={"none"}>
          {books.map((book) => (
            <IonNavLink
              key={`${book.id}`}
              routerDirection="forward"
              component={() => <KuraniKerimMealOku pageTitle={book.title} startPage={book.startPage as number} />}>
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

export default KuraniKerimMeal;
