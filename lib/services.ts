export type Category = "Combo Packages" | "Normal Package" | "Kiddies" | "Home Services";

export type Service = {
  id: string;
  category: Category;
  name: string;
  duration: string;
  price: number;
  details: string;
};

export const CATEGORIES: Category[] = ["Combo Packages", "Normal Package", "Kiddies", "Home Services"];
export const UPFRONT_PERCENT = 70;

// Prices and packages mirror https://app.kindlybook.com/book-business/Saemedia
const INCLUDES = "1 Month Cloud Storage";
export const SERVICES: Service[] = [
  { id: "combo-1", category: "Combo Packages", name: "1 Outfit", duration: "30 mins", price: 35000, details: `1 Outfit | Make-up | 3 Edited Images | All Unedited | ${INCLUDES}` },
  { id: "combo-2", category: "Combo Packages", name: "2 Outfits", duration: "90 mins", price: 60000, details: `2 Outfits | Make-up | 6 Edited Images | All Unedited | ${INCLUDES}` },
  { id: "combo-3", category: "Combo Packages", name: "3 Outfits", duration: "120 mins", price: 85000, details: `3 Outfits | Make-up | 9 Edited Images | All Unedited | ${INCLUDES}` },
  { id: "normal-single", category: "Normal Package", name: "Single Package", duration: "60 mins", price: 25000, details: `1 Outfit | 3 Edited Images | All Unedited | ${INCLUDES}` },
  { id: "normal-pocket", category: "Normal Package", name: "Pocket Fit", duration: "30 mins", price: 50000, details: `2 Outfits | Make-up | 6 Edited Images | All Unedited | ${INCLUDES}` },
  { id: "normal-double", category: "Normal Package", name: "Double Pack", duration: "120 mins", price: 70000, details: `3 Outfit | 9 Edited Images | All Unedited | ${INCLUDES}` },
  { id: "kids-pocket", category: "Kiddies", name: "Kids Pocket Fit", duration: "60 mins", price: 25000, details: `1 Outfit | 3 Edited Images | All Unedited | ${INCLUDES}` },
  { id: "kids-double", category: "Kiddies", name: "Kids Double Fit", duration: "90 mins", price: 50000, details: `2 Outfits | 6 Edited Images | All Unedited | ${INCLUDES}` },
  { id: "kids-premium", category: "Kiddies", name: "Kids Premium Pack", duration: "150 mins", price: 70000, details: `3 Outfits | 9 Edited Images | All Unedited | ${INCLUDES}` },
  { id: "home-1", category: "Home Services", name: "1 Outfit Home Service", duration: "60 mins", price: 75000, details: `1 Outfit | 3 Edited Images | All Unedited | ${INCLUDES}` },
  { id: "home-2", category: "Home Services", name: "2 Outfits Home Service", duration: "120 mins", price: 100000, details: `2 Outfits | 6 Edited Images | All Unedited | ${INCLUDES}` },
  { id: "home-3", category: "Home Services", name: "3 Outfits Home Service", duration: "180 mins", price: 125000, details: `3 Outfit | 9 Edited Images | All Unedited | ${INCLUDES}` },
];

const MON_SAT_SLOTS = [
  "09:00 AM","09:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM",
  "02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","05:00 PM","05:30 PM",
];
const SUNDAY_SLOTS = ["01:00 PM","01:30 PM","02:00 PM","02:30 PM","03:00 PM","03:30 PM"];

/** Bookable start times for a YYYY-MM-DD date: Mon–Sat 9am–6pm, Sun 1pm–4pm. */
export function slotsFor(date: string): string[] {
  const d = new Date(`${date}T12:00:00`);
  if (Number.isNaN(d.getTime())) return [];
  return d.getDay() === 0 ? SUNDAY_SLOTS : MON_SAT_SLOTS;
}

export const naira = (n: number) => "₦" + n.toLocaleString("en-NG", { minimumFractionDigits: 0 });
export const serviceById = (id: string) => SERVICES.find((s) => s.id === id);
