import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { TUTORIAL_VIDEOS } from "@/lib/site";

export const metadata: Metadata = { title: "Tutorials" };

export default function Page() {
  return (
    <>
      <Hero image="2025/07/saestudios_1711537696185-9c7e71f2-2500.jpeg" cta={false} />
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="mb-6 text-2xl font-bold">Playlist · {TUTORIAL_VIDEOS.length} Video{TUTORIAL_VIDEOS.length > 1 ? "s" : ""}</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {TUTORIAL_VIDEOS.map((v) => (
            <div key={v.id} className="overflow-hidden rounded-lg bg-black">
              <iframe className="aspect-video w-full" src={`https://www.youtube-nocookie.com/embed/${v.id}`} title={v.title} loading="lazy" allowFullScreen />
              <p className="bg-ink px-4 py-3 text-sm text-white">{v.title} · {v.duration}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
