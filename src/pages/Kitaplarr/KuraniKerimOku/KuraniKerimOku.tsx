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
import {
  arrowBackOutline,
  arrowForwardOutline,
  enterOutline,
  playCircle,
  pauseCircle,
  playSkipBackCircle,
  playSkipForwardCircle,
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
import { Virtual } from "swiper/modules";
import "swiper/css";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";
import "./Kitaplar.css";

/* Kitaplar > mecmua > kuran */
function KuraniKerimOku({
  startPage,
  pageTitle,
}: {
  startPage: number;
  pageTitle: string;
}) {
  const [swipe, setSwipe] = useState<SwiperClass>({} as SwiperClass);
  const [title, setTitle] = useState<string>(pageTitle);
  const [playerSrc, setPlayerSrc] = useState<string>("");
  const playerRef = useRef<any>(null);
  const topRef = useRef<any>(null);
  const [showPlayer, setShowPlayer] = useState(false);

  const goFirstPage = () => {
    swipe?.slideTo(0);
  };

  const scrollTop = () => {
    topRef.current?.scrollToTop();
    const index = swipe?.activeIndex || 0;
    setTitle(titleHandler(index));
    setPlayerSrc(getSoundByPage(index));
  };

  const onSlideChange = () => {
    scrollTop();
  };

  useEffect(() => {
    if (swipe && swipe.activeIndex !== undefined) {
      scrollTop();
    }
  }, [swipe?.activeIndex]);

  const images: JSX.Element[] = imagesHandler();

  return (
    <>
      <IonHeader className={"p-2"}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text={"Geri"} />
          </IonButtons>
          <IonTitle className={"text-xl"}>
            {title !== "pageTitle" ? title : pageTitle}
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent
        ref={topRef}
        scrollEvents={true}
        class="ion-padding bg-white bg-color-white"
        onClick={() => {
          setShowPlayer((prev) => !prev);
        }}
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

      <IonFooter className={"bg-gray-200 p-3"}>
        <div className="flex flex-col gap-2 items-center justify-center w-full">
          {showPlayer && (
            <AudioPlayer
              ref={playerRef}
              src={playerSrc}
              layout="stacked"
              showJumpControls={false}
              showSkipControls={true}
              autoPlayAfterSrcChange={false}
              onClickPrevious={() => {
                swipe?.slideNext();
                playerRef?.current.audio.current.pause();
              }}
              onClickNext={() => {
                swipe?.slidePrev();
                playerRef?.current.audio.current.pause();
              }}
              customVolumeControls={[]}
              customAdditionalControls={[]}
              header={
                <div className="flex justify-center items-center w-full px-2 text-black">
                  {title}
                </div>
              }
              customIcons={{
                play: <IonIcon className="text-[#4ac3a4]" icon={playCircle} />,
                pause: (
                  <IonIcon className="text-[#4ac3a4]" icon={pauseCircle} />
                ),
                previous: (
                  <IonIcon
                    className="text-[#4ac3a4]"
                    icon={playSkipBackCircle}
                    size="large"
                  />
                ),
                next: (
                  <IonIcon
                    className="text-[#4ac3a4]"
                    icon={playSkipForwardCircle}
                    size="large"
                  />
                ),
              }}
            />
          )}

          <div className="flex justify-evenly w-full pt-2">
            <button onClick={() => swipe?.slideNext()}>
              <IonIcon
                className={"text-[#4ac3a4]"}
                icon={arrowBackOutline}
                size={"large"}
              />
            </button>
            <button onClick={() => swipe?.slidePrev()}>
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
          </div>
        </div>
      </IonFooter>
    </>
  );
}

export default KuraniKerimOku;

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

// ✔ Sayfa sayısına göre img slide üret
const imagesHandler = () => {
  const images: JSX.Element[] = [];
  let globalIndex = 0;
  for (const sure of surerler) {
    for (let i = 0; i < sure.page; i++) {
      images.push(
        <SwiperSlide key={sure.title + "-" + i} virtualIndex={globalIndex}>
          <img
            src={`${sure.content}${i + 1}-fs8.png`}
            alt={sure.title}
            className={"w-full h-auto"}
          />
        </SwiperSlide>
      );
      globalIndex++;
    }
  }
  return images;
};

// ✔ Sayfa indexine göre başlık
const titleHandler = (activePage: number) => {
  let index = 0;
  for (const sure of surerler) {
    const end = index + sure.page;
    if (activePage < end) return `${sure.title} Suresi`;
    index = end;
  }
  return "pageTitle";
};

const getSoundByPage = (activePage: number): string => {
  const paddedIndex = activePage.toString().padStart(3, "0");
  return `https://brd.com.tr/mekteb_books/sounds/page-${paddedIndex}.mp3`;
};
