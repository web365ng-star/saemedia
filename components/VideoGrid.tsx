"use client";
import { useState } from "react";
import { Play } from "lucide-react";
import { media, video } from "@/lib/media";
import type { VideoItem } from "@/lib/site";

function VideoCard({ v }: { v: VideoItem }) {
  const [play, setPlay] = useState(false);
  const poster = v.poster ? media(v.poster).src : undefined;
  return (
    <figure className="overflow-hidden rounded-lg bg-black">
      <div className="relative aspect-video">
        {play ? (
          <video src={video(v.file)} poster={poster} controls autoPlay playsInline className="absolute inset-0 h-full w-full" />
        ) : (
          <button onClick={() => setPlay(true)} className="group absolute inset-0 w-full" aria-label={`Play ${v.title}`}>
            {poster ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={poster} alt="" className="h-full w-full object-cover" loading="lazy" />
            ) : (
              <video src={`${video(v.file)}#t=0.5`} preload="metadata" muted playsInline className="h-full w-full object-cover" />
            )}
            <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition group-hover:bg-black/10">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black"><Play size={22} fill="currentColor" className="ml-0.5" aria-hidden /></span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="bg-ink px-4 py-3 text-sm text-white">{v.title}</figcaption>
    </figure>
  );
}

export default function VideoGrid({ title, videos }: { title?: string; videos: VideoItem[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      {title && <h2 className="mb-6 text-center text-2xl font-bold">{title}</h2>}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v) => <VideoCard key={v.file} v={v} />)}
      </div>
    </section>
  );
}
