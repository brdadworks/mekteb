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
  fatiha_meal,
  bakara_meal,
  yusuf_meal,
  kehf_meal,
  yasin_meal,
  duhan_meal,
  fetih_meal,
  rahman_meal,
  vakia_meal,
  hasr_meal,
  cuma_meal,
  tahrim_meal,
  mulk_meal,
  insan_meal,
  nebe_meal,
  ala_meal,
  hatim_meal,
} from "../../../../data/books";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Virtual } from "swiper/modules"; // Virtual modülü ekleyin

import "swiper/css";

function KuraniKerimMealOku({
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

export default KuraniKerimMealOku;

const imagesHandler = () => {
  const images: JSX.Element[] = [];
  let globalIndex = 0;
  const sureler = [
    fatiha_meal,
    bakara_meal,
    yusuf_meal,
    kehf_meal,
    yasin_meal,
    duhan_meal,
    fetih_meal,
    rahman_meal,
    vakia_meal,
    hasr_meal,
    cuma_meal,
    tahrim_meal,
    mulk_meal,
    insan_meal,
    nebe_meal,
    ala_meal,
    hatim_meal,
  ];
  for (const sure of sureler) {
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
    { page: 2, title: "Fatiha Suresi" },
    { page: 4, title: "Bakara Suresi" },
    { page: 6, title: "Yusuf Suresi" },
    { page: 10, title: "Kehf Suresi" },
    { page: 22, title: "Yasin Suresi" },
    { page: 28, title: "Duhan Suresi" },
    { page: 38, title: "Fetih Suresi" },
    { page: 46, title: "Rahman Suresi" },
    { page: 54, title: "Vakia Suresi" },
    { page: 58, title: "Hasr Suresi" },
    { page: 62, title: "Cuma Suresi" },
    { page: 64, title: "Tahrim Suresi" },
    { page: 70, title: "Mulk Suresi" },
    { page: 76, title: "Insan Suresi" },
    { page: 82, title: "Nebe Suresi" },
    { page: 84, title: "Ala Suresi" },
    { page: 100, title: "Hatim Suresi" },
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
