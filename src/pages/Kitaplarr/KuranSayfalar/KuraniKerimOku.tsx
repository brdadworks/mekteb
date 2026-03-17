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
  arrowDownOutline,
} from "ionicons/icons";
import AudioPlayer from "react-h5-audio-player";
import { kuran } from "../../../../data/books";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import mammoth from "mammoth";
import { Virtual } from "swiper/modules";
import storageService from "../../../../utils/storageService";
import { LastPageContext } from "../../../context/LastPageContext";
import "./Kitaplar.css";

import { Filesystem, Directory } from "@capacitor/filesystem";
import { Capacitor } from "@capacitor/core";
import { getStorageData } from "../../../../utils/functions";

/** =========================
 *  DEBUG HELPERS (PATH CHECK)
 *  ========================= */

function normalizeReaddirFiles(files: any[]): string[] {
  // Capacitor Filesystem.readdir bazen string[], bazen {name}[] döndürür
  return (files ?? [])
    .map((f: any) => (typeof f === "string" ? f : f?.name))
    .filter(Boolean);
}

async function dbgListDir(dirPath: string) {
  try {
    const r = await Filesystem.readdir({
      path: dirPath,
      directory: Directory.Data,
    });

    const names = normalizeReaddirFiles((r as any).files ?? []);
    console.log(
      "[DBG] READDIR OK",
      dirPath,
      "count=",
      names.length,
      "names(sample)=",
      names.slice(0, 30)
    );
    return names;
  } catch (e) {
    console.log("[DBG] READDIR FAIL", dirPath, e);
    return [];
  }
}

async function dbgFile(path: string) {
  try {
    const st = await Filesystem.stat({ path, directory: Directory.Data });
    console.log("[DBG] STAT OK", path, "size=", st.size, "uri=", st.uri);

    const { uri } = await Filesystem.getUri({
      path,
      directory: Directory.Data,
    });
    const webSrc = Capacitor.convertFileSrc(uri);

    console.log("[DBG] getUri uri=", uri);
    console.log("[DBG] webSrc=", webSrc);

    return { ok: true, size: st.size, uri, webSrc };
  } catch (e) {
    console.log("[DBG] STAT FAIL", path, e);
    return { ok: false };
  }
}

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

  console.log("[DBG] findLocalPagePath", {
    fileName,
    remoteUrl,
    assetsCount: assets.length,
    imagesCount: images.length,
    hit,
  });

  if (hit?.path) {
    const p = hit.path.replace(/^\/+/, "");
    try {
      await Filesystem.stat({ path: p, directory: Directory.Data });
      return p;
    } catch (e) {
      console.log("[DBG] index hit var ama stat fail", p, e);
      // fallthrough
    }
  }

  const guess = `mekteb/pages/${fileName}`;
  try {
    console.log("[DBG] guess stat try", guess);
    await Filesystem.stat({ path: guess, directory: Directory.Data });
    return guess;
  } catch (e) {
    console.log("[DBG] guess stat fail", guess, e);
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
  const remote = `https://brd.com.tr/mekteb/pages/${fileName}`;
  const [src, setSrc] = React.useState<string>(remote);

  React.useEffect(() => {
    let cancelled = false;
    setSrc(remote);

    (async () => {
      try {
        const localPath = await findLocalPagePath(fileName);
        console.log("[UIIMG] fileName=", fileName, "localPath=", localPath);

        if (localPath) {
          const { uri } = await Filesystem.getUri({
            path: localPath,
            directory: Directory.Data,
          });
          const webSrc = Capacitor.convertFileSrc(uri);

          console.log("[UIIMG] uri=", uri);
          console.log("[UIIMG] webSrc=", webSrc);

          if (!cancelled) {
            setSrc(webSrc);
            return;
          }
        }
      } catch (e) {
        console.log("[UIIMG] local resolve error", fileName, e);
      }

      if (!cancelled) setSrc(remote);
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
      onError={() => {
        console.log("[UIIMG] ERROR fileName=", fileName, "src=", src);
        if (src.includes("_capacitor_file_")) setSrc(remote);
      }}
    />
  );
};

// DOCX'i yerelden bulmak için (indeks + tahmini yol)
const findLocalDocxPath = async (mealPath: string): Promise<string | null> => {
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

  console.log("[DBG] findLocalDocxPath", {
    mealPath,
    remoteUrl,
    assetsCount: assets.length,
    imagesCount: images.length,
    hit,
  });

  if (hit?.path) {
    const p = hit.path.replace(/^\/+/, "");
    try {
      await Filesystem.stat({ path: p, directory: Directory.Data });
      return p;
    } catch (e) {
      console.log("[DBG] docx index hit var ama stat fail", p, e);
    }
  }

  const guess = `mekteb/${mealPath.replace(/^mekteb\//, "")}`;
  try {
    console.log("[DBG] docx guess stat try", guess);
    await Filesystem.stat({ path: guess, directory: Directory.Data });
    return guess;
  } catch (e) {
    console.log("[DBG] docx guess stat fail", guess, e);
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
    const localPath = await findLocalDocxPath(mealPath);
    if (localPath) {
      console.log("[DBG] DOCX localPath", mealPath, "=>", localPath);

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

      console.log("[DBG] DOCX base64len", base64String.length);

      const arrayBuffer = base64ToArrayBuffer(base64String);
      const result = await mammoth.convertToHtml({ arrayBuffer });
      return result.value;
    }

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

  const [showPlayer, setShowPlayer] = useState(true);
  const [playerCollapsed, setPlayerCollapsed] = useState(false);
  const isCollapsed = !showPlayer || playerCollapsed;

  const topRef = useRef<any>(null);
  const player = useRef<any>();

  const lastPageContext = useContext(LastPageContext);

  /** ===== PATH DEBUG: app açılınca 1 kez ===== */
  useEffect(() => {
    (async () => {
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

      console.log("[DBG] index counts", {
        downloadedAssets: assets.length,
        downloadedImages: images.length,
      });

      const mektebItems = await dbgListDir("mekteb");
      const pageItems = await dbgListDir("mekteb/pages");
      await dbgListDir("mekteb/kuran-meal");

      // Bilinen bir sayfayı dene
      await dbgFile("mekteb/pages/page-075.png");

      // Klasörde ilk PNG'yi bulup dene
      const firstPng = pageItems.find((n) =>
        String(n).toLowerCase().endsWith(".png")
      );
      if (firstPng) {
        await dbgFile(`mekteb/pages/${firstPng}`);
      } else {
        console.log("[DBG] mekteb/pages içinde png yok veya klasör boş");
      }

      console.log("[DBG] mekteb items(sample)", mektebItems.slice(0, 20));
      console.log("[DBG] pages items(sample)", pageItems.slice(0, 20));
    })();
  }, []);

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

  /* useEffect(() => {
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
  }, []); */

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
        className="ion-padding bg-white bg-color-white"
        onClick={() => {
          if (!showPlayer) {
            setShowPlayer(true);
            setPlayerCollapsed(false);
          } else if (playerCollapsed) {
            setPlayerCollapsed(false);
          } else {
            setShowPlayer(false);
          }
        }}
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
              <LocalOrRemoteImage
                fileName={img}
                alt={`${title} - ${sure}`}
                className="w-full h-auto"
                style={{ objectFit: "contain" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </IonContent>

      <IonFooter
        className={"bg-gray-200"}
        style={
          isCollapsed
            ? { height: "0", padding: "20px" }
            : { height: "auto", padding: "0.75rem" }
        }
      >
        {showPlayer && (
          <>
            <button
              type="button"
              className="player-toggle-btn"
              onClick={(e) => {
                e.stopPropagation();
                setPlayerCollapsed((prev) => !prev);
              }}
            >
              <IonIcon
                icon={arrowDownOutline}
                size="large"
                className={`player-toggle-icon ${
                  playerCollapsed ? "rotated" : ""
                }`}
              />
            </button>
            <div
              onClick={(e) => e.stopPropagation()}
              className={`player-shell ${playerCollapsed ? "collapsed" : ""}`}
            >
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
                  play: (
                    <IonIcon className="text-[#4ac3a4]" icon={playCircle} />
                  ),
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
          </>
        )}
      </IonFooter>
    </>
  );
}

export default KuraniKerimOku;
