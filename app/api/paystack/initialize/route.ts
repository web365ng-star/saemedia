import { NextResponse } from "next/server";
import { paystack } from "@/lib/paystack";
import { serviceById, UPFRONT_PERCENT, TIME_SLOTS } from "@/lib/services";

type Body = {
  serviceIds: string[]; date: string; time: string;
  name: string; email: string; phone: string; notes?: string;
};

export async function POST(req: Request) {
  const b = (await req.json()) as Body;

  const services = (b.serviceIds ?? []).map(serviceById);
  if (!services.length || services.some((s) => !s)) return NextResponse.json({ error: "Select at least one service." }, { status: 400 });
  if (!/^\d{4}-\d{2}-\d{2}$/.test(b.date ?? "") || new Date(b.date) < new Date(new Date().toDateString()))
    return NextResponse.json({ error: "Choose a valid future date." }, { status: 400 });
  if (!TIME_SLOTS.includes(b.time)) return NextResponse.json({ error: "Choose a valid time." }, { status: 400 });
  if (!b.name?.trim() || !/^\S+@\S+\.\S+$/.test(b.email ?? "") || (b.phone ?? "").replace(/\D/g, "").length < 10)
    return NextResponse.json({ error: "Enter your name, a valid email and phone number." }, { status: 400 });

  // Amount is always computed here from the catalog, never taken from the client.
  const total = services.reduce((sum, s) => sum + s!.price, 0);
  const upfront = Math.round((total * UPFRONT_PERCENT) / 100);
  const origin = process.env.NEXT_PUBLIC_SITE_URL ?? new URL(req.url).origin;

  try {
    const data = await paystack<{ authorization_url: string; reference: string }>("/transaction/initialize", {
      method: "POST",
      body: JSON.stringify({
        email: b.email.trim(),
        amount: upfront * 100,
        currency: "NGN",
        callback_url: `${origin}/booking/confirmed`,
        metadata: {
          custom_fields: [
            { display_name: "Customer", variable_name: "customer", value: b.name.trim() },
            { display_name: "Phone", variable_name: "phone", value: b.phone.trim() },
            { display_name: "Session", variable_name: "session", value: `${b.date} ${b.time}` },
            { display_name: "Services", variable_name: "services", value: services.map((s) => s!.name).join(", ") },
            { display_name: "Notes", variable_name: "notes", value: (b.notes ?? "").slice(0, 300) },
          ],
          total, upfront, balance: total - upfront,
        },
      }),
    });
    return NextResponse.json({ url: data.authorization_url, reference: data.reference });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 502 });
  }
}
