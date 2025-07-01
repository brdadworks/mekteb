import React, { useContext, useEffect, useState } from "react";
import {
  IonContent,
  IonItem,
  IonList,
  IonLabel,
  IonNavLink,
  IonSearchbar,
  IonButton,
  IonTitle,
  IonIcon,
} from "@ionic/react";
import Header from "../../../components/Header";
import "./Kitaplar.css";
import { BooksProps } from "../../../../utils/types";
import KuraniKerimOku from "../KuranSayfalar/KuraniKerimOku";
import { sureler } from "../../../../data/books";
import slugify from "slugify";
import { bookmark } from "ionicons/icons";
import { useLastPage } from "../../../context/LastPageContext";

export default function Kuran({
  books,
  title,
}: {
  books: BooksProps[];
  title: string;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResultPage, setSearchResultPage] = useState<BooksProps[]>([]);
  const [searchResultSure, setSearchResultSure] = useState<BooksProps[]>([]);
  const [searchResultCuz, setSearchResultCuz] = useState<BooksProps[]>([]);

  const { lastPage, setLastPage, isLoaded } = useLastPage();

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

  // Get current page info for display
  const getCurrentPageInfo = () => {
    if (!isLoaded) {
      return { title: "Yükleniyor...", sure: "" };
    }
    
    console.log("getCurrentPageInfo - lastPage:", lastPage);
    
    if (lastPage === 0) {
      return { title: "Fatiha", sure: "Fâtiha Sûresi" };
    }

    // Try to find by id first (exact match)
    let currentPageData = books.find(book => book.id === lastPage);
    
    // If not found by id, try by startPage
    if (!currentPageData) {
      currentPageData = books.find(book => book.startPage === lastPage);
    }
    
    console.log("getCurrentPageInfo - found page:", currentPageData);
    
    if (currentPageData) {
      return { 
        title: currentPageData.title, 
        sure: currentPageData.sure 
      };
    }
    
    // Fallback to page number
    return { title: `Sayfa ${lastPage + 1}`, sure: "" };
  };

  const currentPageInfo = getCurrentPageInfo();

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
                setSearchResultSure([]);
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
                      componentProps={{
                        startPage: sayfa.startPage as number,
                        bookTitle: sayfa.title,
                      }}
                      onClick={() => {
                        setLastPage(sayfa.startPage || 0);
                      }}
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
                        <KuraniKerimOku
                          startPage={sayfa.startPage as number}
                          bookTitle={sayfa.title}
                        />
                      )}
                      onClick={() => {
                        setLastPage(sayfa.startPage || 0);
                      }}
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
                        <KuraniKerimOku
                          startPage={(Number(sayfa.startPage) + 1) as number}
                          bookTitle={sayfa.title}
                        />
                      )}
                      onClick={() => {
                        setLastPage((sayfa.startPage || 0) + 1);
                      }}
                    >
                      <IonItem className="mt-[3px] k-ion-item w-full">
                        <IonLabel className="text-left">
                          <span className="font-medium text-[1rem] text-white whitespace-pre-wrap">
                            Cüz {sayfa.cuz} - {sayfa.sure}
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
            <IonNavLink
              routerDirection="forward"
              component={() => (
                <KuraniKerimOku
                  startPage={lastPage}
                  bookTitle={"Son Okunan Sayfa"}
                />
              )}
              onClick={() => {
                setLastPage(lastPage);
              }}
            >
              <IonItem className="mt-[3px] k-ion-item w-full">
                <IonLabel className="text-left font-medium text-[1rem] text-white whitespace-pre-wrap">
                  <div>
                    <div className="flex items-center gap-2">
                      Son Okunan Sayfa
                      <IonIcon icon={bookmark} className="ml-2" />
                    </div>
                    {isLoaded && (
                      <div className="text-sm opacity-80 mt-1">
                        {currentPageInfo.title}
                        {currentPageInfo.sure && ` - ${currentPageInfo.sure}`}
                      </div>
                    )}
                  </div>
                </IonLabel>
              </IonItem>
            </IonNavLink>
            {sureler.map((sure, i) => (
              <IonNavLink
                key={i}
                routerDirection="forward"
                component={() => (
                  <KuraniKerimOku
                    startPage={sure.startPage as number}
                    bookTitle={sure.title}
                  />
                )}
                onClick={() => {
                  setLastPage(sure.startPage);
                }}
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
      </IonContent>
    </>
  );
}
