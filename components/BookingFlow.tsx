"use client";
import { useMemo, useState } from "react";
import { CATEGORIES, SERVICES, TIME_SLOTS, UPFRONT_PERCENT, naira } from "@/lib/services";

type Step = 1 | 2 | 3 | 4;

export default function BookingFlow() {
  const [step, setStep] = useState<Step>(1);
  const [cat, setCat] = useState<string>("All");
  const [q, setQ] = useState("");
  const [picked, setPicked] = useState<string[]>([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", notes: "" });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const today = new Date().toISOString().slice(0, 10);
  const selected = SERVICES.filter((s) => picked.includes(s.id));
  const total = selected.reduce((n, s) => n + s.price, 0);
  const upfront = Math.round((total * UPFRONT_PERCENT) / 100);
  const visible = useMemo(
    () => SERVICES.filter((s) => (cat === "All" || s.category === cat) && s.name.toLowerCase().includes(q.toLowerCase())),
    [cat, q],
  );
  const toggle = (id: string) => setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const infoOk = form.name.trim() && /^\S+@\S+\.\S+$/.test(form.email) && form.phone.replace(/\D/g, "").length >= 10;

  async function pay() {
    setBusy(true); setError("");
    try {
      const res = await fetch("/api/paystack/initialize", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceIds: picked, date, time, ...form }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Could not start payment.");
      window.location.href = data.url;
    } catch (e) {
      setError((e as Error).message); setBusy(false);
    }
  }

  const input = "w-full rounded-lg border border-black/15 px-3 py-2.5 text-sm outline-none focus:border-brand";
  const primary = "rounded-lg bg-brand px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-40";
  const ghost = "rounded-lg border border-black/15 px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-50";

  return (
    <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
      <div>
        <ol className="mb-6 flex gap-2 text-xs font-medium">
          {["Select Service", "Date & Time", "Your Information", "Review & Pay"].map((l, i) => (
            <li key={l} className={`flex-1 border-b-2 pb-2 ${step === i + 1 ? "border-brand text-brand" : step > i + 1 ? "border-neutral-400" : "border-black/10 text-neutral-400"}`}>{i + 1}. {l}</li>
          ))}
        </ol>

        {step === 1 && (
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {["All", ...CATEGORIES].map((c) => (
                <button key={c} onClick={() => setCat(c)} className={`rounded-full border px-4 py-1.5 text-xs font-medium ${cat === c ? "border-brand bg-brand text-white" : "border-black/15 hover:bg-neutral-50"}`}>{c}</button>
              ))}
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="🔍 Search" className="ml-auto w-40 rounded-full border border-black/15 px-4 py-1.5 text-xs outline-none focus:border-brand" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {visible.map((s) => {
                const on = picked.includes(s.id);
                return (
                  <button key={s.id} onClick={() => toggle(s.id)} aria-pressed={on} className={`rounded-xl border p-4 text-left transition ${on ? "border-brand bg-red-50" : "border-black/10 hover:border-black/30"}`}>
                    <div className="flex items-start justify-between gap-2"><h3 className="font-semibold">{s.name}</h3><span className={`mt-0.5 h-5 w-5 shrink-0 rounded-full border text-center text-xs leading-5 ${on ? "border-brand bg-brand text-white" : "border-black/20"}`}>{on ? "✓" : ""}</span></div>
                    <p className="mt-1 text-xs text-neutral-500">{s.duration} | {naira(s.price)}</p>
                    <p className="mt-2 text-xs text-neutral-700">{s.details}</p>
                  </button>
                );
              })}
            </div>
            <div className="mt-6 flex justify-end"><button className={primary} disabled={!picked.length} onClick={() => setStep(2)}>Choose Date &amp; Time →</button></div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <label className="block text-sm font-medium">Booking Date *<input type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)} className={`${input} mt-1`} /></label>
            <label className="block text-sm font-medium">Preferred Time *
              <select value={time} onChange={(e) => setTime(e.target.value)} className={`${input} mt-1`}><option value="">— Select Time —</option>{TIME_SLOTS.map((t) => <option key={t}>{t}</option>)}</select>
            </label>
            <p className="text-xs text-neutral-500">Studio hours: Mon – Sat 9am – 6pm, Sun 2pm – 5pm. We&apos;ll confirm your slot on WhatsApp after payment.</p>
            <div className="flex justify-between pt-2"><button className={ghost} onClick={() => setStep(1)}>← Back</button><button className={primary} disabled={!date || !time} onClick={() => setStep(3)}>Continue →</button></div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <label className="block text-sm font-medium">Full Name *<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={`${input} mt-1`} autoComplete="name" /></label>
            <label className="block text-sm font-medium">Email Address *<input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={`${input} mt-1`} autoComplete="email" /></label>
            <label className="block text-sm font-medium">Phone Number *<input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={`${input} mt-1`} autoComplete="tel" /></label>
            <label className="block text-sm font-medium">Special Notes / Requests<textarea rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className={`${input} mt-1`} /></label>
            <div className="flex justify-between pt-2"><button className={ghost} onClick={() => setStep(2)}>← Back</button><button className={primary} disabled={!infoOk} onClick={() => setStep(4)}>Review &amp; Pay →</button></div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <div className="rounded-xl border border-black/10 p-5 text-sm">
              <h3 className="mb-3 font-semibold">Review Your Booking</h3>
              <dl className="grid grid-cols-[110px_1fr] gap-y-2">
                <dt className="text-neutral-500">Name</dt><dd>{form.name}</dd>
                <dt className="text-neutral-500">Email</dt><dd>{form.email}</dd>
                <dt className="text-neutral-500">Phone</dt><dd>{form.phone}</dd>
                <dt className="text-neutral-500">Session</dt><dd>{date} at {time}</dd>
                <dt className="text-neutral-500">Services</dt><dd>{selected.map((s) => s.name).join(", ")}</dd>
                {form.notes && (<><dt className="text-neutral-500">Notes</dt><dd>{form.notes}</dd></>)}
              </dl>
            </div>
            <p className="text-xs text-neutral-600">🔒 Secure payment via Paystack. You will be charged {UPFRONT_PERCENT}% upfront to confirm your booking; the balance is due on the day.</p>
            {error && <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
            <div className="flex justify-between pt-2"><button className={ghost} onClick={() => setStep(3)} disabled={busy}>← Back</button><button className={primary} onClick={pay} disabled={busy}>{busy ? "Redirecting to Paystack…" : `💳 Pay ${naira(upfront)} Now`}</button></div>
          </div>
        )}
      </div>

      <aside className="h-fit rounded-xl border border-black/10 p-5 lg:sticky lg:top-20">
        <h3 className="font-semibold">Summary</h3>
        {selected.length === 0 ? <p className="mt-3 text-sm text-neutral-500">No services selected yet.</p> : (
          <ul className="mt-3 space-y-2 text-sm">{selected.map((s) => <li key={s.id} className="flex justify-between gap-3"><span>{s.name}</span><span className="shrink-0">{naira(s.price)}</span></li>)}</ul>
        )}
        <div className="mt-4 space-y-1 border-t border-black/10 pt-3 text-sm">
          <p className="flex justify-between font-semibold"><span>Total</span><span>{naira(total)}</span></p>
          <p className="flex justify-between text-neutral-600"><span>Upfront ({UPFRONT_PERCENT}%)</span><span>{naira(upfront)}</span></p>
          <p className="flex justify-between text-neutral-600"><span>Balance on the day</span><span>{naira(total - upfront)}</span></p>
        </div>
      </aside>
    </div>
  );
}
