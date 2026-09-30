import { NextResponse } from "next/server";
import { paystack } from "@/lib/paystack";

type Verified = {
  status: string; reference: string; amount: number; customer: { email: string };
  metadata?: { custom_fields?: { variable_name: string; value: string }[]; total?: number; upfront?: number; balance?: number };
};

export async function GET(req: Request) {
  const reference = new URL(req.url).searchParams.get("reference");
  if (!reference) return NextResponse.json({ error: "Missing reference" }, { status: 400 });
  try {
    const d = await paystack<Verified>(`/transaction/verify/${encodeURIComponent(reference)}`);
    const f = Object.fromEntries((d.metadata?.custom_fields ?? []).map((c) => [c.variable_name, c.value]));
    return NextResponse.json({
      paid: d.status === "success", reference: d.reference, email: d.customer.email,
      customer: f.customer, phone: f.phone, session: f.session, services: f.services, notes: f.notes,
      total: d.metadata?.total, upfront: d.metadata?.upfront, balance: d.metadata?.balance,
    });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 502 });
  }
}
