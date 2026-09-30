import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import { PHOTO_GALLERIES } from "@/lib/site";

export const metadata: Metadata = { title: "Photography", description: "Beauty, portrait, corporate, kiddies, maternity, family, event and product photography in Lagos." };

export default function Page() {
  return (
    <>
      <Hero image="2025/09/Port-1.png" />
      {PHOTO_GALLERIES.map((g) => <Gallery key={g.title} {...g} />)}
      <div className="px-6 pb-16 text-center"><Link href="/bookings" className="inline-block rounded-lg bg-brand px-8 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-brand-dark">Book Now</Link></div>
    </>
  );
}
