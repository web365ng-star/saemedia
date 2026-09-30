import Link from "next/link";
import { SITE, whatsappLink } from "@/lib/site";

const LINKS = [
  { href: "/", label: "Home" }, { href: "/about-us", label: "About Us" }, { href: "/trainings", label: "Training" },
  { href: "/bookings", label: "Contact Us" }, { href: "/photography", label: "Photography" },
  { href: "/videography", label: "Videography" }, { href: "/animation", label: "Animation" },
];

const icons = {
  instagram: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.5A4.5 4.5 0 1 0 12 16.5 4.5 4.5 0 0 0 12 7.5Zm0 2A2.5 2.5 0 1 1 12 14.5 2.5 2.5 0 0 1 12 9.5ZM17.5 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
  facebook: "M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.6V4.4C16.4 4.3 15.4 4.2 14.3 4.2c-2.4 0-4 1.4-4 4.1v2.5H7.6V14h2.7v8h3.2Z",
  x: "M17.8 3h3.1l-6.7 7.7L22 21h-6.2l-4.8-6.3L5.4 21H2.3l7.2-8.2L2 3h6.3l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z",
  linkedin: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm6.5 0h3.8v1.6h.1c.5-1 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V21h-4V9.5Z",
  youtube: "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z",
};

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white px-6 py-12 text-center">
      <nav className="mx-auto flex max-w-4xl flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] font-medium">
        {LINKS.map((l) => <Link key={l.label} href={l.href} className="hover:text-brand">{l.label}</Link>)}
        <a href={whatsappLink("Hello SAE Media, I'd like to enquire about web development.")} target="_blank" rel="noreferrer" className="hover:text-brand">Web Development</a>
      </nav>
      <div className="mt-6 flex justify-center gap-6">
        {(Object.keys(icons) as (keyof typeof icons)[]).map((k) => (
          <a key={k} href={SITE.socials[k]} target="_blank" rel="noreferrer" aria-label={k} className="hover:text-brand">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d={icons[k]} /></svg>
          </a>
        ))}
      </div>
      <p className="mt-6 text-xs text-neutral-600">© {new Date().getFullYear()} Saemedia Solution</p>
    </footer>
  );
}
