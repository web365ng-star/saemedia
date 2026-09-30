import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

const noto = Noto_Sans({ variable: "--font-noto", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: `${SITE.name} — Photography, Videography & Animation in Lagos`, template: `%s – ${SITE.name}` },
  description: "SAE Media Solution is a Lagos creative studio offering photography, videography, animation, training, studio rentals and web development.",
  icons: { icon: "/media/2026/04/cropped-Logo-icon-Updated.webp" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${noto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
