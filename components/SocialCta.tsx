import { SITE } from "@/lib/site";

export default function SocialCta() {
  return (
    <section className="px-6 py-14 text-center">
      <h2 className="text-2xl font-bold">Follow Our Work</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-neutral-600">New shoots, behind-the-scenes and studio updates on Instagram.</p>
      <a href={SITE.socials.instagram} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-lg bg-ink px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-brand">Follow on Instagram</a>
    </section>
  );
}
