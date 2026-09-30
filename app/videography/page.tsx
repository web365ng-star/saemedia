import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import VideoGrid from "@/components/VideoGrid";
import { VIDEO_SECTIONS } from "@/lib/site";

export const metadata: Metadata = { title: "Videography", description: "Interviews, weddings and events, documentaries, podcasts and YouTube reels." };

export default function Page() {
  return (
    <>
      <Hero image="2025/09/Videography-Main.png" />
      {VIDEO_SECTIONS.map((s) => <VideoGrid key={s.title} title={s.title} videos={s.videos} />)}
      <div className="px-6 pb-16 text-center"><Link href="/bookings" className="inline-block rounded-lg bg-brand px-8 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-brand-dark">Book Now</Link></div>
    </>
  );
}
