import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { media, video } from "@/lib/media";
import { TRAININGS, whatsappLink } from "@/lib/site";
import { naira } from "@/lib/services";

export const revalidate = 86400;
export const dynamicParams = false;
export function generateStaticParams() { return TRAININGS.map((t) => ({ slug: t.slug })); }

export async function generateMetadata({ params }: PageProps<"/training/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const t = TRAININGS.find((x) => x.slug === slug);
  return t ? { title: t.title, description: t.description } : {};
}

export default async function Page({ params }: PageProps<"/training/[slug]">) {
  const { slug } = await params;
  const t = TRAININGS.find((x) => x.slug === slug);
  if (!t) notFound();
  const m = media(t.image);
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = t.batches.filter((b) => b.end >= today);
  const enquiry = whatsappLink(`Hello SAE Media, I'd like to register for "${t.title}". Please share the next available batch.`);

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2">
      <div>
        <Image src={m.src} alt={t.title} width={m.w} height={m.h} sizes="(min-width:768px) 50vw, 100vw" className="w-full rounded-2xl" priority />
        <video src={video(t.video)} controls preload="metadata" playsInline className="mt-6 w-full rounded-2xl bg-black" />
      </div>
      <div>
        <h1 className="text-3xl font-bold">{t.title}</h1>
        <p className="mt-3 text-neutral-700">{t.description}</p>
        <p className="mt-4 flex items-start gap-2 text-sm"><MapPin size={16} className="mt-0.5 shrink-0" aria-hidden /> {t.venue}</p>
        <p className="mt-4"><span className="text-2xl font-bold">{naira(t.price)}</span> <s className="ml-2 text-neutral-500">{naira(t.originalPrice)}</s></p>

        <h2 className="mt-8 text-lg font-semibold">What you&apos;ll learn</h2>
        <ul className="mt-3 list-disc space-y-1 pl-6 text-neutral-700">{t.learn.map((l) => <li key={l}>{l}</li>)}</ul>
        <p className="mt-4 text-sm"><strong>Bonus:</strong> {t.bonus}</p>

        <h2 className="mt-8 text-lg font-semibold">Batches</h2>
        <ul className="mt-3 space-y-2">
          {t.batches.map((b) => {
            const past = b.end < today;
            return <li key={b.label} className={`flex items-center justify-between rounded-lg border px-4 py-3 text-sm ${past ? "border-black/5 text-neutral-400" : "border-black/10"}`}><span>{b.label}</span><span>{past ? "Completed" : "Open"}</span></li>;
          })}
        </ul>
        <a href={enquiry} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-lg bg-brand px-8 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-brand-dark">
          {upcoming.length ? "Get Ticket on WhatsApp" : "Ask about the next batch"}
        </a>
      </div>
    </div>
  );
}
