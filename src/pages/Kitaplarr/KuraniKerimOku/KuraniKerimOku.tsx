import React, { useEffect, useRef, useState } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonModal,
} from "@ionic/react";
import "react-h5-audio-player/lib/styles.css";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
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
  kuran,
} from "../../../../data/books";
import "./Kitaplar.css";
import sound1 from "../../../../assets/fatiha.mp3";
import sound2 from "../../../../assets/sound.mp3";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";

const ModalExample = ({
  dismiss,
}: {
  dismiss: (data?: string | null | undefined | number, role?: string) => void;
}) => {
  const inputRef = useRef<HTMLIonInputElement>(null);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* <IonButtons slot="start">
            <IonButton color="medium" onClick={() => dismiss(null, "cancel")}>
              Cancel
            </IonButton>
          </IonButtons> */}
          <IonTitle>Fatiha - Meal</IonTitle>
          {/* <IonButtons slot="end">
            <IonButton
              onClick={() => dismiss(inputRef.current?.value, "confirm")}
              strong={true}
            >
              Kapat
            </IonButton>
          </IonButtons> */}
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          dolore temporibus aliquid perspiciatis, aut adipisci fugit officia
          consequatur corporis aliquam impedit maxime quos, veniam esse rerum
          doloremque vel quia architecto libero. Itaque fuga corrupti ratione
          accusantium magni nostrum velit modi voluptatum? Est, accusamus ex,
          repellat quaerat architecto iusto atque dolore quidem facere porro
          libero beatae, officiis maxime odit nulla repellendus error id sed
          velit excepturi quos quibusdam cum! Quas, quisquam ab. Commodi vitae,
          cupiditate sunt molestiae quas excepturi optio culpa, iste aliquid
          facere ipsa aut maxime! Aspernatur pariatur illum repudiandae nemo,
          exercitationem nostrum eos architecto error magni necessitatibus
          repellat tempora?
        </p>
        <IonButton
          onClick={() => dismiss(inputRef.current?.value, "confirm")}
          strong={true}
          expand="block"
          fill="outline"
          size="default"
          color="success"
          className="mt-4"
        >
          Kapat
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

function KuraniKerimOku({
  startPage,
  pageTitle,
  sound,
}: {
  startPage: number;
  pageTitle: string;
  sound: string;
}) {
  const [swipe, setSwipe] = useState<any>();
  const [title, setTitle] = useState<string>(pageTitle);
  const [playerSrc, setPlayerSrc] = useState<string>();
  const topRef = useRef<any>(null);
  const player = useRef<any>();

  useEffect(() => {
    setPlayerSrc(`../../../../assets/${sound}`);
  }, [sound]);

  const [present, dismiss] = useIonModal(ModalExample, {
    dismiss: (data: string, role: string) => dismiss(data, role),
  });

  function openModal() {
    present({
      onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => {
        if (ev.detail.role === "confirm") {
          console.log("Modal confirmed");
        } else {
          console.log("Modal dissmised");
        }
      },
    });
  }

  // const audio = new Audio(ringer);
  // audio.loop = false;

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
    setPlayerSrc(`../../../../assets/${soundHandler(swipe?.activeIndex)}`);
  };

  const images: JSX.Element[] = imagesHandler();

  return (
    <>
      {console.log({ sound, pageTitle })}
      <IonHeader className={"p-2"}>
        <IonToolbar>
          <IonButtons
            slot="start"
            // onClick={() => {
            //   audio.pause();
            //   audio.currentTime = 0;
            // }}
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
        <div className="flex flex-column justify-center align-stretch gap-2 w-full">
          <>{console.log({ activeSlide: swipe?.activeIndex })}</>
          <AudioPlayer
            ref={player}
            src={playerSrc}
            layout="stacked"
            showJumpControls={false}
            showSkipControls={true}
            autoPlayAfterSrcChange={false}
            onClickPrevious={() => {
              swipe?.slideNext();
              console.log("audioRef", player.current);
              player?.current.audio.current.pause();
            }}
            onClickNext={() => {
              swipe?.slidePrev();
              player?.current.audio.current.pause();
            }}
            customVolumeControls={[]}
            customAdditionalControls={[]}
            header={
              <div className="flex justify-center items-center gap-4 w-full text-black">
                Fatiha
                <IonButton
                  shape="round"
                  fill="outline"
                  size="small"
                  color="success"
                  onClick={() => openModal()}
                >
                  Meal oku
                </IonButton>
              </div>
            }
            customIcons={{
              play: <IonIcon className="text-[#4ac3a4]" icon={playCircle} />,
              pause: <IonIcon className="text-[#4ac3a4]" icon={pauseCircle} />,
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
          {/* <button
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
          </button> */}
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

const soundHandler = (activePage: number) => {
  const mappedPage = kuran.find(
    (mapping) => activePage < mapping.startPage + 1
  );

  return mappedPage?.sound;
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

  const mappedTitle = kuran.find(
    (mapping) => activePage < mapping.startPage + 1
  );

  if (mappedTitle) {
    return mappedTitle.title;
  } else {
    return "pageTitle";
  }
};
