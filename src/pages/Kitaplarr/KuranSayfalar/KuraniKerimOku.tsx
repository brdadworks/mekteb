import React, { useContext, useEffect, useRef, useState } from "react";
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
import { kuran } from "../../../../data/books";
import "./Kitaplar.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import mammoth from "mammoth";
import { Virtual } from "swiper/modules"; // Virtual modülü ekleyin
import storageService from "../../../../utils/storageService";
import { LastPageContext } from "../../../context/LastPageContext";

import { Filesystem, Directory } from "@capacitor/filesystem";
import { Capacitor } from "@capacitor/core";
import { getStorageData } from "../../../../utils/functions";

const findLocalPagePath = async (fileName: string): Promise<string | null> => {
  const remoteUrl = `https://brd.com.tr/mekteb/pages/${fileName}`;

  const assets =
    ((await getStorageData("downloadedAssets")) as {
      url: string;
      path: string;
    }[]) || [];
  const images =
    ((await getStorageData("downloadedImages")) as {
      url: string;
      path: string;
    }[]) || [];

  const hit = [...assets, ...images].find((r) => r.url === remoteUrl);
  if (hit?.path) return hit.path;

  // indeks yoksa: indiricinin yazdığı varsayılan konumu dene
  const guess = `mekteb/pages/${fileName}`;
  try {
    await Filesystem.stat({ path: guess, directory: Directory.Data });
    return guess;
  } catch {
    return null;
  }
};

// Görseli yerelden çöz; yoksa uzak URL'yi kullan
const LocalOrRemoteImage: React.FC<{
  fileName: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}> = ({ fileName, alt, className, style }) => {
  const [src, setSrc] = React.useState<string>("");

  React.useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const localPath = await findLocalPagePath(fileName);
        if (localPath) {
          const { uri } = await Filesystem.getUri({
            path: localPath,
            directory: Directory.Data,
          });
          const webSrc = Capacitor.convertFileSrc(uri);
          if (!cancelled) {
            setSrc(webSrc);
            return;
          }
        }
      } catch {
        // yerel okunamazsa uzak'a düşeceğiz
      }
      if (!cancelled) {
        setSrc(`https://brd.com.tr/mekteb/pages/${fileName}`);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [fileName]);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
    />
  );
};

// DOCX'i yerelden bulmak için (indeks + tahmini yol)
const findLocalDocxPath = async (mealPath: string): Promise<string | null> => {
  // mealPath ör: "kuran-meal/5.docx"
  const remoteUrl = `https://brd.com.tr/mekteb/${mealPath.replace(/^\/+/, "")}`;

  const assets =
    ((await getStorageData("downloadedAssets")) as {
      url: string;
      path: string;
    }[]) || [];
  const images =
    ((await getStorageData("downloadedImages")) as {
      url: string;
      path: string;
    }[]) || [];

  const hit = [...assets, ...images].find((r) => r.url === remoteUrl);
  if (hit?.path) return hit.path;

  // indiricinin yazdığı varsayılan konum: "mekteb/kuran-meal/5.docx"
  const guess = `mekteb/${mealPath.replace(/^mekteb\//, "")}`;
  try {
    await Filesystem.stat({ path: guess, directory: Directory.Data });
    return guess;
  } catch {
    return null;
  }
};

// base64 -> ArrayBuffer (mammoth için)
const base64ToArrayBuffer = (base64: string): ArrayBuffer => {
  const bin = atob(base64);
  const len = bin.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) bytes[i] = bin.charCodeAt(i);
  return bytes.buffer;
};

const fetchMeal = async (mealPath: string): Promise<string> => {
  try {
    // 1) Önce yerelde var mı?
    const localPath = await findLocalDocxPath(mealPath);
    if (localPath) {
      const read = await Filesystem.readFile({
        path: localPath,
        directory: Directory.Data,
      });
      let base64String: string;
      if (typeof read.data === "string") {
        base64String = read.data;
      } else if (read.data instanceof Blob) {
        base64String = await read.data.text();
      } else {
        throw new Error("Dosya verisi tanınmıyor.");
      }
      const arrayBuffer = base64ToArrayBuffer(base64String);
      const result = await mammoth.convertToHtml({ arrayBuffer });
      return result.value;
    }

    // 2) Yoksa uzaktan çek
    const response = await fetch(`https://brd.com.tr/mekteb/${mealPath}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const arrayBuffer = await response.arrayBuffer();
    const result = await mammoth.convertToHtml({ arrayBuffer });
    return result.value;
  } catch (error) {
    console.error("Dosya okunurken hata oluştu:", error);
    return "<p>Meali yüklerken bir hata oluştu.</p>";
  }
};

const soundHandler = (activePage: number) => {
  const mappedPage = kuran.find((mapping) => activePage === mapping.id);
  return mappedPage?.sound;
};

const titleHandler = (activePage: number) => {
  const mappedTitle = kuran.find((mapping) => activePage <= mapping.startPage);
  if (mappedTitle) {
    return `${mappedTitle.title} - ${mappedTitle.sure}`;
  } else {
    return "Sayfa bulunamadı";
  }
};

const mealHandler = (activePage: number) => {
  const mappedMeal = kuran.find((mapping) => activePage <= mapping.startPage);
  if (mappedMeal) {
    return `${mappedMeal.meal} - ${mappedMeal.sure}`;
  } else {
    return "Sayfa bulunamadı";
  }
};

/* kitaplar > Kuranı kerim */
function KuraniKerimOku({
  startPage,
  bookTitle,
}: {
  startPage: number;
  bookTitle: string;
}) {
  const [swipe, setSwipe] = useState<any>();
  const [title, setTitle] = useState<string>();
  const [meal, setMeal] = useState<string>("");
  const [playerSrc, setPlayerSrc] = useState<string>();
  const [isFooterVisible, setIsFooterVisible] = useState(true);
  const topRef = useRef<any>(null);
  const player = useRef<any>();

  const lastPageContext = useContext(LastPageContext);

  useEffect(() => {
    setPlayerSrc(
      `https://brd.com.tr/mekteb/sounds/${soundHandler(swipe?.activeIndex)}`
    );
  }, [swipe?.activeIndex]);

  useEffect(() => {
    setTitle(titleHandler(swipe?.activeIndex));
    const currentPage = kuran.find(
      (mapping) => swipe?.activeIndex === mapping.id
    );
    if (currentPage?.meal) {
      fetchMeal(currentPage.meal).then((htmlContent) => setMeal(htmlContent));
    }
  }, [swipe?.activeIndex]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("ion-footer")) {
        setIsFooterVisible((prev) => !prev);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
          <p dangerouslySetInnerHTML={{ __html: meal }} />
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
          console.log("Modal dismissed");
        }
      },
    });
  }

  const scrollTop = () => {
    topRef.current?.scrollToTop();
    setTitle(titleHandler(swipe?.activeIndex));
    setPlayerSrc(
      `https://brd.com.tr/mekteb/sounds/${soundHandler(swipe?.activeIndex)}`
    );
  };

  const onSlideChange = () => {
    lastPageContext.setLastPage(swipe?.activeIndex);
    scrollTop();
  };

  const [currentPage, setCurrentPage] = useState(startPage);

  // Her sayfa değişiminde localStorage'a yaz
  useEffect(() => {
    lastPageContext.setLastPage(currentPage);
  }, [currentPage]);

  return (
    <>
      <IonHeader className="px-2 py-0 mt-n1">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Geri"></IonBackButton>
          </IonButtons>
          <IonTitle className="text-xl">{title}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent
        ref={topRef}
        scrollEvents={true}
        className="ion-padding bg-white bg-color-white p-0"
      >
        <Swiper
          loop={false}
          initialSlide={startPage}
          onSlideChangeTransitionEnd={onSlideChange}
          onBeforeInit={(swipper) => {
            setSwipe(swipper);
          }}
          dir={"rtl"}
          className="mySwiper"
          modules={[Virtual]}
          virtual
        >
          {kuran.map(({ sure, id, title, img }, index) => (
            <SwiperSlide key={id} virtualIndex={index}>
              {/* ESKİ <img .../> YERİNE: */}
              <LocalOrRemoteImage
                fileName={img} // ör: "page-000.png"
                alt={`${title} - ${sure}`}
                className="w-full h-auto"
                style={{ objectFit: "contain" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </IonContent>

      {isFooterVisible && (
        <IonFooter className="w-full flex justify-evenly items-center p-3 bg-gray-200">
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
                lastPageContext.setLastPage(swipe?.activeIndex);
              }}
              onClickNext={() => {
                swipe?.slidePrev();
                player?.current.audio.current.pause();
                lastPageContext.setLastPage(swipe?.activeIndex);
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
          </div>
        </IonFooter>
      )}
    </>
  );
}

export default KuraniKerimOku;
