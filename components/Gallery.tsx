"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { media } from "@/lib/media";

export default function Gallery({ title, images }: { title: string; images: string[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const items = images.map((i) => media(i));

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o === null ? o : (o + 1) % items.length));
      if (e.key === "ArrowLeft") setOpen((o) => (o === null ? o : (o - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, items.length]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <h2 className="mb-6 text-center text-2xl font-bold">{title}</h2>
      <div className="columns-2 gap-3 sm:columns-3 lg:columns-4 [&>*]:mb-3">
        {items.map((m, i) => (
          <button key={m.src} onClick={() => setOpen(i)} className="block w-full overflow-hidden rounded-md bg-neutral-100" aria-label={`Open image ${i + 1} of ${title}`}>
            <Image src={m.src} alt={`${title} ${i + 1}`} width={m.w} height={m.h} sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw" className="h-auto w-full transition hover:scale-[1.02]" loading="lazy" />
          </button>
        ))}
      </div>
      {open !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <button className="absolute right-5 top-4 text-white" aria-label="Close" onClick={() => setOpen(null)}><X size={28} aria-hidden /></button>
          <button className="absolute left-3 text-white" aria-label="Previous" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + items.length) % items.length); }}><ChevronLeft size={40} aria-hidden /></button>
          <Image src={items[open].src} alt="" width={items[open].w} height={items[open].h} sizes="100vw" className="max-h-[90vh] w-auto object-contain" onClick={(e) => e.stopPropagation()} />
          <button className="absolute right-3 text-white" aria-label="Next" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % items.length); }}><ChevronRight size={40} aria-hidden /></button>
        </div>
      )}
    </section>
  );
}
