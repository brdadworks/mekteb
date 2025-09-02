import React from "react";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { Capacitor } from "@capacitor/core";

// küçük yardımcılar
const trimSlashEnd = (s: string) => s.replace(/\/+$/, "");
const joinPath = (a: string, b: string) => `${trimSlashEnd(a)}/${b}`;

/** local + file var mı? varsa webview src döndür, yoksa null */
async function tryLocalSrc(localBase: string, file: string): Promise<string | null> {
  const localPath = joinPath(localBase, file); // Directory.Data göreli
  try {
    await Filesystem.stat({ path: localPath, directory: Directory.Data });
    const { uri } = await Filesystem.getUri({ path: localPath, directory: Directory.Data });
    return Capacitor.convertFileSrc(uri);
  } catch {
    return null;
  }
}

/** content (remote) + file → tam uzaktan URL */
function remoteUrl(contentBase: string, file: string) {
  return `${trimSlashEnd(contentBase)}/${file}`;
}

/** En düşük seviyeli API: local varsa onu, yoksa remote URL'yi döndür */
export async function getSrcFromBases(
  contentBase: string,
  file: string,
  localBase?: string
): Promise<string> {
  if (localBase) {
    const local = await tryLocalSrc(localBase, file);
    if (local) return local;
  }
  return remoteUrl(contentBase, file);
}

/** Re-usable React bileşeni: content + optional local */
export const ContentImageFromBases: React.FC<{
  contentBase: string;
  file: string;            // "1-fs8.png", "page-000.png" gibi
  localBase?: string;      // books.ts'teki local alanı
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}> = ({ contentBase, file, localBase, alt = "", className, style }) => {
  const [src, setSrc] = React.useState<string>("");

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      const s = await getSrcFromBases(contentBase, file, localBase);
      if (!cancelled) setSrc(s);
    })();
    return () => { cancelled = true; };
  }, [contentBase, file, localBase]);

  return <img src={src} alt={alt} className={className} style={style} loading="lazy" />;
};
