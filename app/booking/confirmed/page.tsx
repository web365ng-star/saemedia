import type { Metadata } from "next";
import ConfirmedClient from "./ConfirmedClient";

export const metadata: Metadata = { title: "Booking Confirmation", robots: { index: false } };

export default function Page() {
  return <ConfirmedClient whatsapp={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2349112063837"} />;
}
