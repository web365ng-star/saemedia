"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LEFT, NAV_RIGHT } from "@/lib/site";
import { media } from "@/lib/media";

type NavItem = { href: string; label: string; external?: boolean };

function NavLink({ item, active, onClick }: { item: NavItem; active: boolean; onClick?: () => void }) {
  const cls = `text-[13px] font-medium transition-colors hover:text-orange-300 ${active ? "text-orange-300" : "text-white"}`;
  return item.external ? (
    <a href={item.href} target="_blank" rel="noreferrer" className={cls} onClick={onClick}>{item.label}</a>
  ) : (
    <Link href={item.href} className={cls} onClick={onClick}>{item.label}</Link>
  );
}

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const logo = media("2025/07/Logo-with-Text-WT.png");
  const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <header className="sticky top-0 z-50 bg-ink">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <nav className="hidden flex-1 items-center gap-8 md:flex">
          {NAV_LEFT.map((i) => <NavLink key={i.label} item={i} active={isActive(i.href)} />)}
        </nav>
        <Link href="/" aria-label="SAE Media Solution home" className="shrink-0">
          <Image src={logo.src} alt="SAE Media Solution" width={logo.w} height={logo.h} className="h-8 w-auto" priority />
        </Link>
        <nav className="hidden flex-1 items-center justify-end gap-8 md:flex">
          {NAV_RIGHT.map((i) => <NavLink key={i.label} item={i} active={isActive(i.href)} />)}
        </nav>
        <button className="text-white md:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} /></svg>
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-white/10 px-6 py-5 md:hidden">
          {[...NAV_LEFT, ...NAV_RIGHT].map((i) => <NavLink key={i.label} item={i} active={isActive(i.href)} onClick={() => setOpen(false)} />)}
        </nav>
      )}
    </header>
  );
}
