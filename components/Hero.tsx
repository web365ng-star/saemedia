import Image from "next/image";
import Link from "next/link";
import { media } from "@/lib/media";

export default function Hero({ image, title = "MAKING MEMORIES THAT LAST A LIFE TIMES", cta = true, tall = false }: { image: string; title?: string; cta?: boolean; tall?: boolean }) {
  const img = media(image);
  return (
    <section className={`relative flex items-center justify-center overflow-hidden bg-neutral-700 ${tall ? "min-h-[520px]" : "min-h-[320px]"}`}>
      <Image src={img.src} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 px-6 py-16 text-center text-white">
        <h1 className="mx-auto max-w-xl text-2xl font-normal leading-snug tracking-wide sm:text-3xl">{title}</h1>
        {cta && (
          <Link href="/bookings" className="mt-8 inline-block rounded-lg bg-brand px-8 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-brand-dark">Book Now</Link>
        )}
      </div>
    </section>
  );
}
