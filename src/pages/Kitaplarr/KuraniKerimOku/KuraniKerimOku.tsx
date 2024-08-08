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
  playCircle,
  pauseCircle,
  stopCircle,
  playSkipForwardCircle,
  playSkipBackCircle,
} from "ionicons/icons";
import { BookProps } from "../../../../utils/types";
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
import ringer from "../../../../assets/sound.mp3";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function KuraniKerimOku({
  startPage,
  pageTitle,
}: {
  startPage: number;
  pageTitle: string;
}) {
  const [swipe, setSwipe] = useState<any>();
  const [title, setTitle] = useState<string>(pageTitle);
  const topRef = useRef<any>(null);

  const audio = new Audio(ringer);
  audio.loop = false;

  // console.log(pageTitle);

  const goFirstPage = () => {
    swipe?.slideTo(0);
  };
  const nextPage = () => {
    swipe?.slidePrev();
  };
  const prevPage = () => {
    swipe?.slideNext();
  };
  const scrollTop = () => {
    console.log("scrollTop");
    topRef.current?.scrollToTop();
    console.log(swipe?.activeIndex);

    setTitle(titleHandler(swipe?.activeIndex));
  };

  const images: JSX.Element[] = imagesHandler();

  return (
    <>
      <IonHeader className={"p-2"}>
        <IonToolbar>
          <IonButtons
            slot="start"
            onClick={() => {
              audio.pause();
              audio.currentTime = 0;
            }}
          >
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
        className="ion-padding bg-white bg-color-white"
      >
        <Swiper
          loop={true}
          initialSlide={startPage}
          onSlideChangeTransitionEnd={scrollTop}
          onBeforeInit={(swipper) => setSwipe(swipper)}
          dir={"rtl"}
          className="mySwiper"
        >
          {images}
        </Swiper>
        {/*<img src={`${currentBook.content}${currentPage}-fs8.png`} alt={""} className={"w-full h-auto"}/>*/}
      </IonContent>

      <IonFooter
        className={"w-full flex justify-evenly items-center p-3 bg-gray-200"}
      >
        <div className="flex justify-center align-center gap-2">
          <>{console.log({ activeSlide: swipe?.activeIndex })}</>
          <button
            onClick={() => {
              audio.pause();
              audio.currentTime = 0;
              prevPage();
            }}
          >
            <IonIcon
              className="text-[#4ac3a4]"
              icon={playSkipBackCircle}
              size="large"
            />
          </button>
          <button
            onClick={() => {
              audio.pause();
            }}
          >
            <IonIcon
              className="text-[#4ac3a4]"
              icon={pauseCircle}
              size="large"
            />
          </button>
          <button
            onClick={() => {
              audio.play();
              console.log({ audio });
            }}
          >
            <IonIcon
              className="text-[#4ac3a4]"
              icon={playCircle}
              size="large"
            />
          </button>
          <button
            onClick={() => {
              audio.pause();
              audio.currentTime = 0;
            }}
          >
            <IonIcon
              className="text-[#4ac3a4]"
              icon={stopCircle}
              size="large"
            />
          </button>
          <button
            onClick={() => {
              audio.pause();
              audio.currentTime = 0;
              nextPage();
            }}
          >
            <IonIcon
              className="text-[#4ac3a4]"
              icon={playSkipForwardCircle}
              size="large"
            />
          </button>
        </div>
        {/* <button onClick={prevPage}>
          <IonIcon
            className={"text-[#4ac3a4]"}
            icon={arrowBackOutline}
            size={"large"}
          ></IonIcon>
        </button>
        <button onClick={nextPage}>
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
        </button> */}
      </IonFooter>
    </>
  );
}

export default KuraniKerimOku;

const imagesHandler = () => {
  /*fatiha,
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
  hatim,*/
  //for above books do this code
  const images: JSX.Element[] = [];
  images.push(pushImages(fatiha));
  images.push(pushImages(bakara));
  images.push(pushImages(yusuf));
  images.push(pushImages(kehf));
  images.push(pushImages(yasin));
  images.push(pushImages(duhan));
  images.push(pushImages(fetih));
  images.push(pushImages(rahman));
  images.push(pushImages(vakia));
  images.push(pushImages(hasr));
  images.push(pushImages(cuma));
  images.push(pushImages(tahrim));
  images.push(pushImages(mulk));
  images.push(pushImages(insan));
  images.push(pushImages(nebe));
  images.push(pushImages(ala));
  images.push(pushImages(hatim));

  return images;
};

const pushImages = (data: any) => {
  const images: any = [];
  for (let i = 0; i < data.page; i++) {
    images.push(
      <SwiperSlide key={data.title + "-" + i}>
        <img
          src={`${data.content}${i + 1}-fs8.png`}
          alt={""}
          className={"w-full h-auto"}
        />
      </SwiperSlide>
    );
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
