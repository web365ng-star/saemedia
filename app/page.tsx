import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import SocialCta from "@/components/SocialCta";
import { media } from "@/lib/media";
import { PHOTO_GALLERIES, TESTIMONIALS, TRAININGS, whatsappLink } from "@/lib/site";

const SERVICES = [
  { label: "Photography", href: "/photography", img: "2025/08/SAE_6940-1-rz1.png" },
  { label: "Videography", href: "/videography", img: "2025/09/Videography.png" },
  { label: "Animation", href: "/animation", img: "2025/09/Animation.png" },
  { label: "Training", href: "/trainings", img: "2025/09/Tranings.png" },
  { label: "Rentals", href: "/bookings", img: "2025/09/Rental.png" },
  { label: "Web Development", href: whatsappLink("Hello SAE Media, I'd like to enquire about web development."), img: "2025/09/Untitled-1.png", external: true },
];

export default function Home() {
  const gallery = PHOTO_GALLERIES.flatMap((g) => g.images.slice(0, 2)).slice(0, 12);
  const t = TRAININGS[0];
  return (
    <>
      <HeroSlider />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="mb-8 text-center text-2xl font-bold">Our Services</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const m = media(s.img);
            const inner = (
              <>
                <Image src={m.src} alt="" fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40" />
                <span className="relative z-10 text-2xl font-semibold text-white">{s.label}</span>
              </>
            );
            const cls = "group relative flex h-52 items-center justify-center overflow-hidden rounded-2xl";
            return s.external ? <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={cls}>{inner}</a> : <Link key={s.label} href={s.href} className={cls}>{inner}</Link>;
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <h2 className="mb-8 text-center text-2xl font-bold">Gallery &amp; Portfolio</h2>
        <div className="columns-2 gap-3 sm:columns-3 lg:columns-4 [&>*]:mb-3">
          {gallery.map((g) => { const m = media(g); return <Image key={g} src={m.src} alt="SAE Media portfolio" width={m.w} height={m.h} sizes="(min-width:1024px) 25vw, 50vw" className="h-auto w-full rounded-md" loading="lazy" />; })}
        </div>
        <div className="mt-8 text-center"><Link href="/photography" className="text-sm font-semibold text-brand hover:underline">See the full photography portfolio →</Link></div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <h2 className="mb-8 text-center text-2xl font-bold">Latest <span className="text-red-600">News</span></h2>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-black/10">
            <Image src={media(t.image).src} alt={t.title} width={media(t.image).w} height={media(t.image).h} className="h-64 w-full object-cover" sizes="(min-width:768px) 33vw, 100vw" />
            <div className="p-5">
              <h3 className="text-lg font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{t.description}</p>
              <Link href={`/training/${t.slug}`} className="mt-4 inline-block rounded-lg bg-brand px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-brand-dark">Learn more</Link>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-black/10">
            <Image src={media("2025/09/Videography-Main.png").src} alt="Podcast studio" width={media("2025/09/Videography-Main.png").w} height={media("2025/09/Videography-Main.png").h} className="h-64 w-full object-cover" sizes="(min-width:768px) 33vw, 100vw" />
            <div className="p-5">
              <h3 className="text-lg font-semibold">Podcast Session</h3>
              <p className="mt-2 text-sm text-neutral-600">Our studio is fully ready and available for podcast sessions. Up to 3 persons per podcast session.</p>
              <Link href="/bookings" className="mt-4 inline-block rounded-lg bg-brand px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-brand-dark">Book now</Link>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-black/10">
            <Image src={media("2026/04/Artboard-1-copy-2.png").src} alt="Free makeup promo package" width={media("2026/04/Artboard-1-copy-2.png").w} height={media("2026/04/Artboard-1-copy-2.png").h} className="h-64 w-full object-cover object-top" sizes="(min-width:768px) 33vw, 100vw" />
            <div className="p-5">
              <h3 className="text-lg font-semibold">Free Makeup Promo Package</h3>
              <p className="mt-2 text-sm text-neutral-600">Promo packages include free professional makeup and all unedited images. Family portrait attracts an extra ₦15,000.</p>
              <Link href="/bookings" className="mt-4 inline-block rounded-lg bg-brand px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-brand-dark">Book now</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-neutral-50 px-6 py-14">
        <h2 className="mb-8 text-center text-2xl font-bold">What People Are Saying</h2>
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((x) => { const m = media(x.img); return (
            <figure key={x.name} className="rounded-2xl bg-white p-6 shadow-sm">
              <Image src={m.src} alt={x.name} width={72} height={72} className="h-16 w-16 rounded-full object-cover" />
              <h3 className="mt-4 font-semibold">{x.title}</h3>
              <blockquote className="mt-2 text-sm leading-relaxed text-neutral-600">{x.text}</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">{x.name}</figcaption>
            </figure>
          ); })}
        </div>
      </section>
      <SocialCta />
    </>
  );
}
