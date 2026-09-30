const API = "https://api.paystack.co";

export function paystackKey() {
  const key = process.env.PAYSTACK_SECRET_KEY;
  if (!key) throw new Error("PAYSTACK_SECRET_KEY is not set");
  return key;
}

export async function paystack<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(API + path, {
    ...init,
    headers: { Authorization: `Bearer ${paystackKey()}`, "Content-Type": "application/json", ...init?.headers },
    cache: "no-store",
  });
  const json = await res.json();
  if (!res.ok || !json.status) throw new Error(json.message ?? `Paystack error ${res.status}`);
  return json.data as T;
}
