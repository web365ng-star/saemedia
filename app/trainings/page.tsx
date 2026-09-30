import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { media } from "@/lib/media";
import { TRAININGS } from "@/lib/site";
import { naira } from "@/lib/services";
import SocialCta from "@/components/SocialCta";

export const metadata: Metadata = { title: "Trainings", description: "Hands-on photography and videography classes in Lagos by SAE Media Solution." };
export const revalidate = 86400;

export default function Page() {
  const today = new Date().toISOString().slice(0, 10);
  return (
    <>
      <section className="bg-ink px-6 py-14 text-center text-white">
        <h1 className="text-3xl font-semibold">Creating Success Stories</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/70">Hands-on classes taught in our Lagos studio.</p>
      </section>
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-2">
        {TRAININGS.map((t) => {
          const m = media(t.image);
          const upcoming = t.batches.filter((b) => b.end >= today).length;
          return (
            <article key={t.slug} className="overflow-hidden rounded-2xl border border-black/10">
              <Link href={`/training/${t.slug}`}><Image src={m.src} alt={t.title} width={m.w} height={m.h} sizes="(min-width:768px) 50vw, 100vw" className="h-80 w-full object-cover object-top" /></Link>
              <div className="p-6">
                <h2 className="text-xl font-semibold"><Link href={`/training/${t.slug}`}>{t.title}</Link></h2>
                <p className="mt-2 text-sm text-neutral-600">{t.description}</p>
                <p className="mt-3 text-sm">📍 {t.venue}</p>
                <p className="mt-1 text-sm">📅 {t.days}-day class · {upcoming ? `${upcoming} upcoming batch${upcoming > 1 ? "es" : ""}` : "Next batch: to be announced"}</p>
                <p className="mt-3"><span className="text-xl font-bold">{naira(t.price)}</span> <s className="ml-2 text-sm text-neutral-500">{naira(t.originalPrice)}</s></p>
                <Link href={`/training/${t.slug}`} className="mt-5 inline-block rounded-lg bg-brand px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-brand-dark">{upcoming ? "Get Ticket →" : "View details →"}</Link>
              </div>
            </article>
          );
        })}
      </div>
      <SocialCta />
    </>
  );
}
