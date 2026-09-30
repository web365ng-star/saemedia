import mediaMap from "./media-map.json";

type Entry = { src: string; w: number; h: number };
const map = mediaMap as Record<string, Entry>;

/** Look up an optimised image by its original WordPress uploads path (e.g. "2025/09/Port-1.png"). */
export function media(rel: string): Entry {
  const key = rel.replace(/\.(png|jpe?g|webp|gif)$/i, "");
  const hit = Object.entries(map).find(([k]) => k.replace(/\.(png|jpe?g|webp|gif)$/i, "") === key);
  if (!hit) throw new Error(`Missing media: ${rel}`);
  return hit[1];
}

const VIDEO_BASE = process.env.NEXT_PUBLIC_VIDEO_BASE ?? "/videos";
export const video = (file: string) => `${VIDEO_BASE}/${file}`;
