import type { Metadata } from "next";
import Hero from "@/components/Hero";
import BookingFlow from "@/components/BookingFlow";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Book Us", description: "Book a photoshoot, podcast session or studio rental with SAE Media Solution. Pay 70% upfront securely via Paystack." };

export default function Page() {
  return (
    <>
      <Hero image="2025/09/Contact-Us.png" cta={false} />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-bold">{SITE.name}</h2>
        <p className="mt-1 text-sm text-neutral-600">📍 {SITE.address}</p>
        <div className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
          <details className="rounded-lg border border-black/10 p-4"><summary className="cursor-pointer font-medium">🕐 Opening Hours</summary><p className="mt-2 text-neutral-600">{SITE.hours}</p></details>
          <details className="rounded-lg border border-black/10 p-4"><summary className="cursor-pointer font-medium">🛡 Booking Policy</summary><p className="mt-2 text-neutral-600">To secure your booking, a 70% upfront payment is required. Once payment is made, your date and time are reserved exclusively for you. ₦5,000 from the upfront payment is non-refundable in the event of cancellation.</p></details>
        </div>
        <BookingFlow />
      </div>
    </>
  );
}
