import React, {useRef, useState} from 'react';
import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import "./Kitaplar.css"
import {arrowBackOutline, arrowForwardOutline, enterOutline} from "ionicons/icons";
import {BookProps} from "../../../../utils/types";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

function KitapOku({book, title}: { book: BookProps, title: string }) {
    const [swipe, setSwipe] = useState<any>();
    const topRef = useRef<any>(null);

    const goFirstPage = () => {
        swipe?.slideTo(0);
    }
    const nextPage = () => {
        if (book.direction == "ltr") {
            swipe?.slideNext()
        } else {
            swipe?.slidePrev()
        }
    }
    const prevPage = () => {
        if (book.direction == "ltr") {
            swipe?.slidePrev()
        } else {
            swipe?.slideNext()
        }
    }
    const scrollTop = () => {
        console.log("scrollTop");
        topRef.current?.scrollToTop()
        
    }

    const images = [];

    for (let i = 1; i < book.page + 1; i++) {
        images.push(
            <SwiperSlide key={i}><img src={`${book.content}${i}-fs8.png`} alt={`${i}-fs8.png`}
                              className={"w-full h-auto"}/>
            </SwiperSlide>
        );
    }

    return (
      <>
        <IonHeader className={"p-2"}>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton text={"Geri"}></IonBackButton>
            </IonButtons>
            <IonTitle className={"text-xl"}>{title}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent
          ref={topRef}
          scrollEvents={true}
          class="ion-padding bg-white bg-color-white"
        >
          <Swiper
            onSlideChangeTransitionEnd={scrollTop}
            onBeforeInit={(swipper) => setSwipe(swipper)}
            dir={book.direction ? book.direction : "rtl"}
            className="mySwiper"
          >
            {images}
          </Swiper>
          {/*<img src={`${currentBook.content}${currentPage}-fs8.png`} alt={""} className={"w-full h-auto"}/>*/}
        </IonContent>

        <IonFooter
          className={"w-full flex justify-evenly items-center p-3 bg-gray-200"}
        >
          <button onClick={prevPage}>
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
          </button>
        </IonFooter>
      </>
    );
}

export default KitapOku;