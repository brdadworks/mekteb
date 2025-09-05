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
  playSkipBackCircle,
  playSkipForwardCircle,
} from "ionicons/icons";
import { BookProps } from "../../../../utils/types";
import AudioPlayer from "react-h5-audio-player";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// ⬇️ Yerel dosya kontrolü için Capacitor FS
import { Filesystem, Directory } from "@capacitor/filesystem";
import { Capacitor } from "@capacitor/core";

/* ---------------- LocalOrRemoteImage: önce local, yoksa remote ---------------- */
const trimEndSlash = (s: string) => (s ? s.replace(/\/+$/, "") : s);
const join = (a: string, b: string) => `${trimEndSlash(a)}/${b}`;

/** contentBase + file → URL (remote) */
const toRemoteUrl = (contentBase: string, file: string) =>
  `${trimEndSlash(contentBase)}/${file}`;

/** contentBase'ten yerel aday path üret: URL path'ini al, baştaki '/' kalksın */
const deriveLocalFromContent = (contentBase: string, file: string) => {
  try {
    const u = new URL(toRemoteUrl(contentBase, file));
    return u.pathname.replace(/^\/+/, ""); // "mekteb_books/..."
  } catch {
    return null;
  }
};

async function tryLocalPath(path: string): Promise<string | null> {
  try {
    await Filesystem.stat({ path, directory: Directory.Data });
    const { uri } = await Filesystem.getUri({
      path,
      directory: Directory.Data,
    });
    return Capacitor.convertFileSrc(uri);
  } catch {
    return null;
  }
}

const LocalOrRemoteImage: React.FC<{
  contentBase: string; // uzak kök
  fileName: string; // "1-fs8.png" / "page-000.png"
  localBase?: string; // Directory.Data içindeki klasör (opsiyonel)
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}> = ({ contentBase, fileName, localBase, alt = "", className, style }) => {
  const [src, setSrc] = useState<string>("");

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      // 1) Aday yerel path'leri topla
      const candidates = new Set<string>();

      if (localBase) {
        candidates.add(join(localBase, fileName));
        // bazı setler /books/ olmadan yazılmış olabilir:
        candidates.add(join(localBase.replace("/books/", "/"), fileName));
      }

      const derived = deriveLocalFromContent(contentBase, fileName);
      if (derived) {
        candidates.add(derived);
        candidates.add(derived.replace("/books/", "/"));
      }

      // 2) sırayla dene
      for (const p of candidates) {
        const local = await tryLocalPath(p);
        if (local) {
          if (!cancelled) setSrc(local);
          return;
        }
      }

      // 3) olmadı → remote
      if (!cancelled) setSrc(toRemoteUrl(contentBase, fileName));
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [contentBase, fileName, localBase]);

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
/* ------------------------------------------------------------------------------ */

function KitapOku({
  book,
  title,
  pageTitle,
}: {
  book: BookProps;
  title: string;
  pageTitle: string;
}) {
  const [swipe, setSwipe] = useState<any>();
  const [content, setContent] = useState<JSX.Element[]>([]);
  const topRef = useRef<any>(null);
  const [headerTitle, setHeaderTitle] = useState<string>(title);

  //ses
  const [currentTitle, setCurrentTitle] = useState<string>(pageTitle);
  const [showPlayer, setShowPlayer] = useState(false);
  const [playerSrc, setPlayerSrc] = useState<string>("");
  const playerRef = useRef<any>(null);

  const goFirstPage = () => {
    swipe?.slideTo(0);
  };

  const nextPage = () => {
    if (book.direction === "ltr") {
      swipe?.slideNext();
    } else {
      swipe?.slidePrev();
    }
  };

  const prevPage = () => {
    if (book.direction === "ltr") {
      swipe?.slidePrev();
    } else {
      swipe?.slideNext();
    }
  };

  const scrollTop = () => {
    topRef.current?.scrollToTop();
    const index = swipe?.activeIndex || 0;
    setCurrentTitle(titleHandler(index));
    setPlayerSrc(getSoundByPage(book, index));
    setHeaderTitle(`${title} • ${titleHandler(index)}`);
  };

  useEffect(() => {
    const slides: JSX.Element[] = [];
    const remoteBase = (book.content ?? "").replace(/\/+$/, "");
    const localBase = book.local ? book.local.replace(/\/+$/, "") : undefined;

    for (let i = 1; i <= (book.page || 0); i++) {
      const file = `${i}-fs8.png`; // bu kitabın isim şablonu
      slides.push(
        <SwiperSlide key={`swiper-slide-${i}`}>
          <LocalOrRemoteImage
            contentBase={remoteBase}
            localBase={localBase}
            fileName={file}
            alt={`Sayfa ${i}`}
            className="w-full h-auto"
            style={{ objectFit: "contain" }}
          />
        </SwiperSlide>
      );
    }
    setContent(slides);
  }, [book]);

  useEffect(() => {
    setCurrentTitle(titleHandler(0));
    setPlayerSrc(getSoundByPage(book, 0));
  }, [book]);

  useEffect(() => {
    setCurrentTitle(titleHandler(0));
    setPlayerSrc(getSoundByPage(book, 0));
    setHeaderTitle(`${title} • ${titleHandler(0)}`);
  }, [book, title]);

  return (
    <>
      <IonHeader className={"p-2"}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text={"Geri"} />
          </IonButtons>
          <IonTitle className="text-xl">{headerTitle}</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Kuranlar haricinde hepsinin frontendi burası */}
      <IonContent
        ref={topRef}
        scrollEvents={true}
        className="ion-padding bg-white bg-color-white"
        onClick={() => {
          setShowPlayer((prev) => !prev);
        }}
      >
        <Swiper
          onSlideChangeTransitionEnd={scrollTop}
          onBeforeInit={(swipper) => setSwipe(swipper)}
          dir={book.direction ? book.direction : "rtl"}
          className="mySwiper"
        >
          {content}
        </Swiper>
      </IonContent>

      <IonFooter
        className={"w-full flex justify-evenly items-center p-3 bg-gray-200"}
      >
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
                  {currentTitle}
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
          </div>
        </div>
      </IonFooter>
    </>
  );
}

/** ✔ Sayfa indexine göre başlık */
const titleHandler = (activePage: number) => {
  const index = activePage + 1; // Sayfa numarası 1'den başlar
  return `Sayfa ${index}`;
};

/** ✔ Ses kaynağı: book.ses tabanı + "<index>.mp3" */
const getSoundByPage = (book: BookProps, activePage: number): string => {
  const base = (book.ses ?? "").replace(/\/+$/, ""); // sondaki / temizle
  if (!base) return "";
  return `${base}/${activePage}.mp3`;
};

export default KitapOku;
