import type { MetadataRoute } from "next";
import { TRAININGS } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const pages = ["", "/about-us", "/photography", "/videography", "/animation", "/trainings", "/bookings", ...TRAININGS.map((t) => `/training/${t.slug}`)];
  return pages.map((p) => ({ url: base + p }));
}
