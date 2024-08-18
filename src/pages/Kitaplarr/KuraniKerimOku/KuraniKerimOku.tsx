import React, { useEffect, useRef, useState } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonModal,
} from "@ionic/react";
import "react-h5-audio-player/lib/styles.css";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import {
  playCircle,
  pauseCircle,
  playSkipForwardCircle,
  playSkipBackCircle,
} from "ionicons/icons";
import AudioPlayer from "react-h5-audio-player";
import { sayfalar } from "../../../../data/books";
import "./Kitaplar.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const soundHandler = (activePage: number) => {
  const mappedPage = sayfalar.find((mapping) => activePage === mapping.id);

  return mappedPage?.sound;
};

const titleHandler = (activePage: number) => {
  const mappedTitle = sayfalar.find((mapping) => activePage <= mapping.startPage);
  if (mappedTitle) {
    return `${mappedTitle.title} - ${mappedTitle.sure}`;
  } else {
    return "Sayfa bulunamadı";
  }
};

function KuraniKerimOku({ startPage }: { startPage: number }) {
  const [swipe, setSwipe] = useState<any>();
  const [title, setTitle] = useState<string>();
  const [playerSrc, setPlayerSrc] = useState<string>();
  const topRef = useRef<any>(null);
  const player = useRef<any>();

  useEffect(() => {
    setPlayerSrc(`/assets/sounds/${soundHandler(swipe?.activeIndex)}`);
  }, [swipe?.activeIndex]);

  useEffect(() => {
    setTitle(titleHandler(swipe?.activeIndex));
  }, [swipe?.activeIndex]);

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
            <IonTitle>{title} - Meal</IonTitle>
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
            velit excepturi quos quibusdam cum! Quas, quisquam ab. Commodi
            vitae, cupiditate sunt molestiae quas excepturi optio culpa, iste
            aliquid facere ipsa aut maxime! Aspernatur pariatur illum
            repudiandae nemo, exercitationem nostrum eos architecto error magni
            necessitatibus repellat tempora?
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
  const scrollTop = () => {
    topRef.current?.scrollToTop();

    setTitle(titleHandler(swipe?.activeIndex));
    setPlayerSrc(`/assets/sounds/${soundHandler(swipe?.activeIndex)}`);
  };

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
        className="ion-padding bg-white bg-color-white"
      >
        <Swiper
          loop={false}
          initialSlide={startPage}
          onSlideChangeTransitionEnd={scrollTop}
          onBeforeInit={(swipper) => setSwipe(swipper)}
          dir={"rtl"}
          className="mySwiper"
        >
          {sayfalar.map(({ sure, id, title, img }) => (
            <SwiperSlide key={id}>
              <img
                src={`/assets/pages/${img}`}
                alt={`${title} - ${sure}`}
                className={"w-full h-auto"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </IonContent>

      <IonFooter
        className={"w-full flex justify-evenly items-center p-3 bg-gray-200"}
      >
        <div className="flex flex-column justify-center align-stretch gap-2 w-full">
          <AudioPlayer
            ref={player}
            src={playerSrc}
            layout="stacked"
            showJumpControls={false}
            showSkipControls={true}
            autoPlayAfterSrcChange={false}
            onClickPrevious={() => {
              swipe?.slideNext();
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
                {title}
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
        </div>
      </IonFooter>
    </>
  );
}

export default KuraniKerimOku;
