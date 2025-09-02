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

// ⬇️ Yerel dosya kontrolü için Capacitor FS
import { Filesystem, Directory } from "@capacitor/filesystem";
import { Capacitor } from "@capacitor/core";

/* ---------------- LocalOrRemoteImage: önce local, yoksa content (remote) ---------------- */
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
      const candidates = new Set<string>();

      // 1) books.ts’ten gelen localBase
      if (localBase) {
        candidates.add(join(localBase, fileName));
        // bazı paketlerde /books/ olmadan yazılmış olabilir:
        candidates.add(join(localBase.replace("/books/", "/"), fileName));
      }

      // 2) contentBase’ten türeyen yol
      const derived = deriveLocalFromContent(contentBase, fileName);
      if (derived) {
        candidates.add(derived);
        candidates.add(derived.replace("/books/", "/"));
      }

      // 3) sırayla dene
      for (const p of candidates) {
        const local = await tryLocalPath(p);
        if (local) {
          if (!cancelled) setSrc(local);
          return;
        }
      }

      // 4) olmadı → remote
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
/* --------------------------------------------------------------------------------------- */

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
        className="ion-padding bg-white bg-color-white"
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

/** Bu sayfada kullanılacak sure seti */
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

/** ✔ Sayfa sayısına göre slide üret (local varsa local, yoksa remote) */
const imagesHandler = () => {
  const images: JSX.Element[] = [];
  let globalIndex = 0;

  for (const sure of surerler) {
    const remoteBase = trimEndSlash(sure.content || "");
    const localBase = sure.local ? trimEndSlash(sure.local) : undefined;

    for (let i = 0; i < sure.page; i++) {
      const file = `${i + 1}-fs8.png`;
      images.push(
        <SwiperSlide key={`${sure.slug}-${i}`} virtualIndex={globalIndex}>
          <LocalOrRemoteImage
            contentBase={remoteBase}
            localBase={localBase}
            fileName={file}
            alt={sure.title}
            className="w-full h-auto"
            style={{ objectFit: "contain" }}
          />
        </SwiperSlide>
      );
      globalIndex++;
    }
  }
  return images;
};

/** ✔ Sayfa indexine göre başlık */
const titleHandler = (activePage: number) => {
  let index = 0;
  for (const sure of surerler) {
    const end = index + sure.page;
    if (activePage < end) return `${sure.title} Suresi`;
    index = end;
  }
  return "pageTitle";
};

/** ✔ Ses kaynağı (şimdilik hep remote). */
const getSoundByPage = (activePage: number): string => {
  const paddedIndex = activePage.toString().padStart(3, "0");
  return `https://brd.com.tr/mekteb_books/sounds/page-${paddedIndex}.mp3`;
};
