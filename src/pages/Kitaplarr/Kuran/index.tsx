import React, { useState } from "react";
import {
  IonContent,
  IonItem,
  IonList,
  IonLabel,
  IonNavLink,
  IonSearchbar,
  IonButton,
  IonTitle,
} from "@ionic/react";
import Header from "../../../components/Header";
import "./Kitaplar.css";
import { BooksProps } from "../../../../utils/types";
import KuraniKerimOku from "../KuranSayfalar/KuraniKerimOku";
import { sureler } from "../../../../data/books";
import slugify from "slugify";

export default function Kuran({
  books,
  title,
}: {
  books: BooksProps[];
  title: string;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResultPage, setSearchResultPage] = useState([]);
  const [searchResultSure, setSearchResultSure] = useState([]);
  const [searchResultCuz, setSearchResultCuz] = useState([]);

  const handleSearch = (event: any) => {
    const value = event.detail.value;
    setSearchTerm(value);

    const filteredBooksPages =
      value !== ""
        ? books.filter((book) => book.startPage == Number(value))
        : [];
    setSearchResultPage(filteredBooksPages);

    const filteredBooksSure =
      value !== ""
        ? books.filter((book) =>
            slugify(book.sure.toLocaleLowerCase()).includes(
              slugify(value.toLocaleLowerCase())
            )
          )
        : [];
    setSearchResultSure(filteredBooksSure);

    const filteredBooksCuz =
      value !== "" ? books.filter((book) => book.cuz == Number(value)) : [];
    setSearchResultCuz(filteredBooksCuz);
  };
  return (
    <>
      <Header pageTitle={title} />
      <IonContent class="ion-padding bg-white bg-color-white">
        <IonSearchbar
          animated={true}
          placeholder="Sayfa, Sure veya Cüz ara.."
          showClearButton="focus"
          value={searchTerm}
          onIonChange={handleSearch}
        />
        {searchResultPage?.length > 0 ||
        searchResultSure?.length > 0 ||
        searchResultCuz.length > 0 ? (
          <>
            <IonButton
              expand="block"
              fill="outline"
              onClick={() => {
                setSearchTerm("");
                setSearchResultPage([]);
                setSearchResultCuz([]);
              }}
            >
              Aramayı temizle
            </IonButton>
            {searchResultPage?.length > 0 && (
              <>
                <>Sayfalar</>
                <IonList lines={"none"}>
                  {searchResultPage.map((sayfa, i) => (
                    <IonNavLink
                      key={i}
                      routerDirection="forward"
                      component={KuraniKerimOku}
                      componentProps={{ startPage: sayfa.startPage as number }}
                    >
                      <IonItem className="mt-[3px] k-ion-item w-full">
                        <IonLabel className="text-left font-medium text-[1rem] text-white whitespace-pre-wrap">
                          {sayfa.title} - {sayfa.sure}
                        </IonLabel>
                      </IonItem>
                    </IonNavLink>
                  ))}
                </IonList>
              </>
            )}
            {searchResultSure?.length > 0 && (
              <>
                <>Sureler</>
                <IonList lines={"none"}>
                  {searchResultSure.map((sayfa, i) => (
                    <IonNavLink
                      key={i}
                      routerDirection="forward"
                      component={() => (
                        <KuraniKerimOku startPage={sayfa.startPage as number} />
                      )}
                    >
                      <IonItem className="mt-[3px] k-ion-item w-full">
                        <IonLabel className="text-left font-medium text-[1rem] text-white whitespace-pre-wrap">
                          {sayfa.title} - {sayfa.sure}
                        </IonLabel>
                      </IonItem>
                    </IonNavLink>
                  ))}
                </IonList>
              </>
            )}
            {searchResultCuz.length > 0 && (
              <>
                <>Cüzler</>
                <IonList lines={"none"}>
                  {searchResultCuz.map((sayfa, i) => (
                    <IonNavLink
                      key={i}
                      routerDirection="forward"
                      component={() => (
                        <KuraniKerimOku startPage={sayfa.startPage as number} />
                      )}
                    >
                      <IonItem className="mt-[3px] k-ion-item w-full">
                        <IonLabel className="text-left">
                          <span className="font-medium text-[1rem] text-white whitespace-pre-wrap">
                            Cüz {sayfa.cuz} - {sayfa.sure}
                            {console.log({ sayfa })}
                          </span>
                        </IonLabel>
                      </IonItem>
                    </IonNavLink>
                  ))}
                </IonList>
              </>
            )}
          </>
        ) : (
          <IonList lines={"none"}>
            {sureler.map((sure, i) => (
              <IonNavLink
                key={i}
                routerDirection="forward"
                component={() => (
                  <KuraniKerimOku startPage={sure.startPage as number} />
                )}
              >
                <IonItem className="mt-[3px] k-ion-item w-full">
                  <IonLabel className="text-left">
                    <span className="font-medium text-[1rem] text-white whitespace-pre-wrap">
                      {sure.title}
                    </span>
                  </IonLabel>
                </IonItem>
              </IonNavLink>
            ))}
          </IonList>
        )}

        {/* Sayfa listesi */}
        {/* <IonList lines={"none"}>
          {books.map((book, i) => (
            <IonNavLink
              key={i}
              routerDirection="forward"
              component={() => (
                <KuraniKerimOku startPage={book.startPage as number} />
              )}
            >
              <IonItem className="mt-[3px] k-ion-item w-full">
                <IonLabel className="text-left">
                  <span className="font-medium text-[1rem] text-white whitespace-pre-wrap">
                    {book.title} - {getPageData(book.title)?.sure}
                  </span>
                </IonLabel>
              </IonItem>
            </IonNavLink>
          ))}
        </IonList> */}
      </IonContent>
    </>
  );
}
