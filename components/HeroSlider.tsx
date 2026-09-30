"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { media } from "@/lib/media";

const SLIDES = ["2025/07/DSC_6603-df705593-2500.jpg", "2025/07/SAE_7297-af431908-2500.png"];
const INTERVAL_MS = 5000;

export default function HeroSlider({ title = "MAKING MEMORIES THAT LAST A LIFE TIMES" }: { title?: string }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % SLIDES.length), INTERVAL_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex h-[450px] items-center justify-center overflow-hidden bg-neutral-800 md:h-[750px]" aria-roledescription="carousel" aria-label="Featured work">
      {SLIDES.map((s, idx) => (
        <Image key={s} src={media(s).src} alt="" fill priority={idx === 0} sizes="100vw"
          className={`object-cover object-[50%_25%] transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`} aria-hidden={idx !== i} />
      ))}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 px-6 text-center text-white">
        <h1 className="mx-auto max-w-2xl text-3xl font-normal leading-snug tracking-wide sm:text-4xl md:text-5xl">{title}</h1>
        <Link href="/bookings" className="mt-10 inline-block rounded-lg bg-brand px-10 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-brand-dark">Book Now</Link>
      </div>
      <div className="absolute bottom-6 z-10 flex gap-2">
        {SLIDES.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} aria-label={`Show slide ${idx + 1}`} aria-current={idx === i}
            className={`h-2.5 rounded-full transition-all ${idx === i ? "w-7 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"}`} />
        ))}
      </div>
    </section>
  );
}
