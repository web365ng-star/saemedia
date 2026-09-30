"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { naira } from "@/lib/services";

type Result = { paid: boolean; reference: string; customer: string; phone: string; session: string; services: string; notes?: string; total?: number; upfront?: number; balance?: number; error?: string };

function Inner({ whatsapp }: { whatsapp: string }) {
  const params = useSearchParams();
  const reference = params.get("reference") ?? params.get("trxref");
  const [r, setR] = useState<Result | null>(null);
  const [failed, setFailed] = useState(!reference);

  useEffect(() => {
    if (!reference) return;
    fetch(`/api/paystack/verify?reference=${encodeURIComponent(reference)}`)
      .then((x) => x.json())
      .then((d: Result) => (d.error ? setFailed(true) : setR(d)))
      .catch(() => setFailed(true));
  }, [reference]);

  const wa = r?.paid
    ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(
        `Hello SAE Media, I just paid ${naira(r.upfront ?? 0)} to book.\nName: ${r.customer}\nPhone: ${r.phone}\nSession: ${r.session}\nServices: ${r.services}\n${r.notes ? `Notes: ${r.notes}\n` : ""}Payment ref: ${r.reference}`,
      )}`
    : "";

  // Take the customer to WhatsApp automatically once payment is verified.
  const [seconds, setSeconds] = useState(6);
  useEffect(() => {
    if (!wa) return;
    if (seconds <= 0) { window.location.href = wa; return; }
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [wa, seconds]);

  if (failed) return <Box title="We couldn't verify your payment"><p>If you were charged, please message us on WhatsApp with your payment reference and we&apos;ll confirm your booking.</p><Link href="/bookings" className="mt-6 inline-block font-semibold text-brand">← Back to booking</Link></Box>;
  if (!r) return <Box title="Confirming your payment…"><p>Please don&apos;t close this page.</p></Box>;
  if (!r.paid) return <Box title="Payment not completed"><p>Your payment was not successful, so no slot has been reserved.</p><Link href="/bookings" className="mt-6 inline-block font-semibold text-brand">← Try again</Link></Box>;

  return (
    <Box title="Booking Confirmed! 🎉">
      <dl className="mx-auto mt-4 grid max-w-md grid-cols-[110px_1fr] gap-y-2 text-left text-sm">
        <dt className="text-neutral-500">Reference</dt><dd>{r.reference}</dd>
        <dt className="text-neutral-500">Name</dt><dd>{r.customer}</dd>
        <dt className="text-neutral-500">Session</dt><dd>{r.session}</dd>
        <dt className="text-neutral-500">Services</dt><dd>{r.services}</dd>
        <dt className="text-neutral-500">Paid</dt><dd>{naira(r.upfront ?? 0)}</dd>
        <dt className="text-neutral-500">Balance due</dt><dd>{naira(r.balance ?? 0)} on the day</dd>
      </dl>
      <p className="mt-6 text-sm text-neutral-600">Opening WhatsApp to confirm your slot{seconds > 0 ? ` in ${seconds}s` : "…"}</p>
      <a href={wa} className="mt-4 inline-block rounded-lg bg-[#25D366] px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white">Continue to WhatsApp now</a>
    </Box>
  );
}

function Box({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="mx-auto max-w-xl px-6 py-20 text-center"><h1 className="text-2xl font-bold">{title}</h1><div className="mt-3 text-neutral-600">{children}</div></div>;
}

export default function ConfirmedClient({ whatsapp }: { whatsapp: string }) {
  return <Suspense fallback={null}><Inner whatsapp={whatsapp} /></Suspense>;
}
