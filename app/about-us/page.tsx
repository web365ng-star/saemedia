import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SocialCta from "@/components/SocialCta";
import { media } from "@/lib/media";
import { CLIENT_LOGOS, TEAM } from "@/lib/site";

export const metadata: Metadata = { title: "About Us", description: "Founded in 2021, SAE Media Solution is a full-service creative hub in Lagos." };

const SERVICES = ["Photography", "Videography", "Animation", "Live Streaming for Events & Conferences", "Training & Tutorials", "Web Design & Development", "Studio Space & Equipment Rentals"];

export default function Page() {
  return (
    <>
      <Hero image="2025/09/About-Us-Page.png" cta={false} />
      <div className="mx-auto max-w-4xl space-y-12 px-6 py-14">
        <section>
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="mt-4 leading-relaxed text-neutral-700">Founded in 2021 out of a deep passion for storytelling and creativity, SAE Media Solution is a dynamic media company committed to transforming moments into timeless memories. What began as a love for photography and videography has evolved into a full-service creative hub offering a wide range of media solutions designed to capture, create, and communicate stories that matter.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Our Vision</h2>
          <p className="mt-4 leading-relaxed text-neutral-700">At SAE Media Solution, our vision is simple yet powerful: to be a key part of people’s success stories by crafting memorable experiences through visual storytelling.</p>
          <p className="mt-4 leading-relaxed text-neutral-700">We specialise in capturing genuine emotions, real-time reactions, and authentic moments—whether it’s the joy of a wedding, the energy of a corporate event, or the excitement of a brand launch. From portraits, weddings, birthdays, bridal showers, and product shoots to corporate events, our work is always tailored to meet the unique needs of each client.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Our Services</h2>
          <p className="mt-4 text-neutral-700">Our services extend beyond traditional photography and videography. SAE Media Solution offers a comprehensive suite of creative solutions, including:</p>
          <ul className="mt-4 list-disc space-y-1 pl-6 text-neutral-700">{SERVICES.map((s) => <li key={s}>{s}</li>)}</ul>
          <p className="mt-4 leading-relaxed text-neutral-700">Whether you’re looking to capture a moment, build a brand, tell a story, or teach others, we provide end-to-end media services powered by creativity, professionalism, and attention to detail.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Who We&apos;ve Worked With</h2>
          <p className="mt-4 leading-relaxed text-neutral-700">We are proud to have collaborated with a diverse range of clients including Sofresh, Astract9, Systemspecs, Whogohost, Rock City Ministry, Remita, Lofty Height Conference, African Business Radio, and countless individuals who trusted us with their most important memories and projects.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Training &amp; Empowerment</h2>
          <p className="mt-4 leading-relaxed text-neutral-700">SAE Media Solution is also deeply committed to empowering the next generation of creatives. Through our training programs, internships, and mentorship sessions, we provide aspiring photographers, videographers, editors, and content creators with the knowledge and hands-on experience they need to thrive in the fast-evolving media industry.</p>
          <p className="mt-4 leading-relaxed text-neutral-700">We don’t just teach skills—we help shape futures. At SAE Media Solution, we don’t just create visual art; we craft experiences, inspire creativity, and empower success. Join us on this journey—where every frame tells a story, and every story matters.</p>
        </section>
      </div>

      <section className="bg-neutral-50 px-6 py-14">
        <h2 className="mb-8 text-center text-2xl font-bold">Meet The Team</h2>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
          {TEAM.map((p) => { const m = media(p.img); return (
            <div key={p.name} className="text-center">
              <Image src={m.src} alt={p.name} width={m.w} height={m.h} sizes="(min-width:768px) 25vw, 50vw" className="aspect-square w-full rounded-2xl bg-neutral-200 object-cover object-top" />
              <h3 className="mt-3 text-sm font-semibold">{p.name}</h3>
              <p className="text-xs text-neutral-600">{p.role}</p>
            </div>
          ); })}
        </div>
      </section>

      <section className="px-6 py-14">
        <h2 className="mb-8 text-center text-2xl font-bold">Our Clients</h2>
        <div className="mx-auto grid max-w-5xl grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-6">
          {CLIENT_LOGOS.map((l) => { const m = media(l); return <Image key={l} src={m.src} alt="Client logo" width={m.w} height={m.h} sizes="160px" className="mx-auto h-16 w-auto object-contain" />; })}
        </div>
      </section>
      <SocialCta />
    </>
  );
}
