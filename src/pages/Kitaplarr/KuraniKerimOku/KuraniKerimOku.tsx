import { useContext, useRef, useState } from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Kitaplar.css";
import {
  arrowBackOutline,
  arrowForwardOutline,
  enterOutline,
} from "ionicons/icons";
import {
  fatiha,
  bakara,
  yusuf,
  kehf,
  yasin,
  duhan,
  fetih,
  rahman,
  vakia,
  hasr,
  cuma,
  tahrim,
  mulk,
  insan,
  nebe,
  ala,
  hatim,
} from "../../../../data/books";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { LastPageContext } from "../../../context/LastPageContext";

function KuraniKerimOku({
  startPage,
  pageTitle,
}: {
  startPage: number;
  pageTitle: string;
}) {
  console.log("KuraniKerimOku -> startPage", startPage);
  const swipeRef = useRef<any>(null);
  const [title, setTitle] = useState<string>(pageTitle);
  const topRef = useRef<any>(null);

  const lastPageContext = useContext(LastPageContext);

  const goFirstPage = () => {
    swipeRef.current?.slideTo(0);
  };

  const nextPage = () => {
    console.log("nextPage");
    if (swipeRef.current) {
      swipeRef.current.slidePrev();
      lastPageContext.setLastPage(swipeRef.current.activeIndex);
    }
  };

  const prevPage = () => {
    if (swipeRef.current) {
      swipeRef.current.slideNext();
      lastPageContext.setLastPage(swipeRef.current.activeIndex);
    }
  };

  const scrollTop = () => {
    topRef.current?.scrollToTop();
    setTitle(titleHandler(swipeRef.current?.activeIndex || 0));
  };

  return (
    <>
      <IonHeader className={"p-2"}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text={"Geri"}></IonBackButton>
          </IonButtons>
          <IonTitle className={"text-xl"}>
            {title !== "pageTitle" ? title : pageTitle}
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent ref={topRef} scrollEvents={true} class="ion-padding bg-white">
        <Swiper
          initialSlide={startPage}
          onSwiper={(swiper) => (swipeRef.current = swiper)}
          onSlideChangeTransitionEnd={(swiper) => {
            scrollTop();
            lastPageContext.setLastPage(swiper.activeIndex);
          }}
          dir={"ltr"}
          className="mySwiper"
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          
        >
          {imagesHandler()}
        </Swiper>
      </IonContent>

      <IonFooter
        className={"w-full flex justify-evenly items-center p-3 bg-gray-200"}
      >
        <button onClick={prevPage}>
          <IonIcon
            className={"text-[#4ac3a4]"}
            icon={arrowBackOutline}
            size={"large"}
          />
        </button>
        <button onClick={nextPage}>
          <IonIcon
            className={"text-[#4ac3a4]"}
            icon={arrowForwardOutline}
            size={"large"}
          />
        </button>
        <button onClick={goFirstPage}>
          <IonIcon
            className={"text-[#4ac3a4]"}
            icon={enterOutline}
            size={"large"}
          />
        </button>
      </IonFooter>
    </>
  );
}

export default KuraniKerimOku;

const imagesHandler = () => {
  const books = [
    fatiha,
    bakara,
    yusuf,
    kehf,
    yasin,
    duhan,
    fetih,
    rahman,
    vakia,
    hasr,
    cuma,
    tahrim,
    mulk,
    insan,
    nebe,
    ala,
    hatim,
  ];

  return books.flatMap(pushImages);
};

const pushImages = (data: any) => {
  return Array.from({ length: data.page }, (_, i) => (
    <SwiperSlide key={`${data.title}-${i}`}>
      <img
        src={`${data.content}${i + 1}-fs8.png`}
        alt={""}
        className={"w-full h-auto"}
      />
    </SwiperSlide>
  ));
};

const titleHandler = (activePage: number) => {
  const titlesMapping = [
    { page: 1, title: "Fatiha Suresi" },
    { page: 2, title: "Bakara Suresi" },
    { page: 3, title: "Yusuf Suresi" },
    { page: 5, title: "Kehf Suresi" },
    { page: 11, title: "Yasin Suresi" },
    { page: 14, title: "Duhan Suresi" },
    { page: 19, title: "Fetih Suresi" },
    { page: 23, title: "Rahman Suresi" },
    { page: 27, title: "Vakia Suresi" },
    { page: 29, title: "Hasr Suresi" },
    { page: 31, title: "Cuma Suresi" },
    { page: 32, title: "Tahrim Suresi" },
    { page: 35, title: "Mulk Suresi" },
    { page: 38, title: "Insan Suresi" },
    { page: 41, title: "Nebe Suresi" },
    { page: 42, title: "Ala Suresi" },
    { page: 60, title: "Hatim Suresi" },
  ];

  return (
    titlesMapping.find((mapping) => activePage < mapping.page)?.title ||
    "pageTitle"
  );
};
