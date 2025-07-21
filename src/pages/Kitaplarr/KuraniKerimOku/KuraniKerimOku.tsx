import React, { useEffect, useRef, useState } from "react";
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

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Virtual } from "swiper/modules"; // Virtual modülü ekleyin

import "swiper/css";

function KuraniKerimOku({
  startPage,
  pageTitle,
}: {
  startPage: number;
  pageTitle: string;
}) {
  const [swipe, setSwipe] = useState<SwiperClass>({} as SwiperClass);
  const [title, setTitle] = useState<string>(pageTitle);
  const topRef = useRef<any>(null);

  const goFirstPage = () => {
    swipe?.slideTo(0);
  };

  const scrollTop = () => {
    topRef.current?.scrollToTop();

    setTitle(titleHandler(swipe?.activeIndex));
  };

  const onSlideChange = () => {
    scrollTop();
  };

  const images: JSX.Element[] = imagesHandler();

  return (
    <>
      <IonHeader className={"p-2"}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text={"Geri"}></IonBackButton>
          </IonButtons>
          <IonTitle className={"text-xl"}>
            {title != "pageTitle" ? title : pageTitle}
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent
        ref={topRef}
        scrollEvents={true}
        class="ion-padding bg-white bg-color-white"
      >
        <Swiper
          modules={[Virtual]}
          virtual
          initialSlide={startPage}
          onSlideChangeTransitionEnd={onSlideChange}
          onBeforeInit={(swipper) => {
            setSwipe(swipper);
          }}
          dir={"rtl"}
          className="mySwiper"
        >
          {images}
        </Swiper>
      </IonContent>

      <IonFooter
        className={"w-full flex justify-evenly items-center p-3 bg-gray-200"}
      >
        <button onClick={() => swipe?.slideNext()}>
          <IonIcon
            className={"text-[#4ac3a4]"}
            icon={arrowBackOutline}
            size={"large"}
          ></IonIcon>
        </button>
        <button onClick={() => swipe.slidePrev()}>
          <IonIcon
            className={"text-[#4ac3a4]"}
            icon={arrowForwardOutline}
            size={"large"}
          ></IonIcon>
        </button>
        <button onClick={goFirstPage}>
          <IonIcon
            className={"text-[#4ac3a4]"}
            icon={enterOutline}
            size={"large"}
          ></IonIcon>
        </button>
      </IonFooter>
    </>
  );
}

export default KuraniKerimOku;

const imagesHandler = () => {
  const images: JSX.Element[] = [];
  let globalIndex = 0;
  const surerler = [
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
  for (const sure of surerler) {
    for (let i = 0; i < sure.page; i++) {
      images.push(
        <SwiperSlide key={sure.title + "-" + i} virtualIndex={globalIndex}>
          <img
            src={`${sure.content}${i + 1}-fs8.png`}
            alt={""}
            className={"w-full h-auto"}
          />
        </SwiperSlide>
      );
      globalIndex++;
    }
  }
  return images;
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

  const mappedTitle = titlesMapping.find(
    (mapping) => activePage < mapping.page
  );

  if (mappedTitle) {
    return mappedTitle.title;
  } else {
    return "pageTitle";
  }
};
