export type Service = {
  id: string;
  category: "Promo Packages" | "Podcast" | "Family Promo Shoot" | "Normal Services" | "Studio Space Rental";
  name: string;
  duration: string;
  price: number;
  details: string;
};

export const CATEGORIES = ["Promo Packages", "Podcast", "Family Promo Shoot", "Normal Services", "Studio Space Rental"] as const;
export const UPFRONT_PERCENT = 70;

// Order follows the original booking page.
export const SERVICES: Service[] = [
  { id: "promo-1", category: "Promo Packages", name: "1 Outfit Promo Shoot", duration: "30 mins", price: 25000, details: "1 Outfits | 3 Edited | Free Make-Up | All unedited images" },
  { id: "promo-2", category: "Promo Packages", name: "2 Outfits Promo Shoot", duration: "1 hr", price: 50000, details: "2 Outfits | 5 Edited | Free Make-Up | All unedited images" },
  { id: "promo-3", category: "Promo Packages", name: "3 Outfits Promo Shoot", duration: "1.5 hrs", price: 75000, details: "3 Outfits | 8 Edited | Free Make-Up | All unedited images" },
  { id: "promo-4", category: "Promo Packages", name: "4 Outfits Promo Shoot", duration: "2 hrs", price: 100000, details: "4 Outfits | 10 Edited | Free Make-Up | All unedited images" },
  { id: "normal-single", category: "Normal Services", name: "Single Package", duration: "30 mins", price: 25000, details: "1 Outfits | 3 Edited | All Unedited Image" },
  { id: "normal-pocket", category: "Normal Services", name: "Pocket Fit", duration: "1 hr", price: 45000, details: "2 Outfits | 6 Edited | All Unedited Images" },
  { id: "normal-double", category: "Normal Services", name: "Double Pack", duration: "1.5 hrs", price: 70000, details: "3 Outfits | 9 Edited | All unedited Images" },
  { id: "normal-premium", category: "Normal Services", name: "Premium Pack", duration: "2 hrs", price: 100000, details: "4 Outfits | 12 Edited | All Unedited Images" },
  { id: "family-1", category: "Family Promo Shoot", name: "1 Outfit Promo Family", duration: "30 mins", price: 40000, details: "1 Outfits | 3 Edited | Free Make-Up | All unedited images" },
  { id: "family-2", category: "Family Promo Shoot", name: "2 Outfits Promo Shoot Family", duration: "1 hr", price: 65000, details: "2 Outfits | 5 Edited | Free Make-Up | All unedited images" },
  { id: "family-3", category: "Family Promo Shoot", name: "3 Outfits Promo Shoot Family", duration: "1.5 hrs", price: 90000, details: "3 Outfits | 8 Edited | Free Make-Up | All unedited images" },
  { id: "family-4", category: "Family Promo Shoot", name: "4 Outfits Promo Shoot Family", duration: "2 hrs", price: 115000, details: "4 Outfits | 10 Edited | Free Make-Up | All unedited images" },
  { id: "podcast-youtube", category: "Podcast", name: "YouTube Package", duration: "30 mins", price: 30000, details: "1 Person | 1 Camera | 1 Microphone | Shooting & Editing" },
  { id: "podcast-bronze", category: "Podcast", name: "Bronze TalkShow", duration: "1 hr", price: 100000, details: "2 Person | 2 Cameras | 2 Microphones | Shooting & Editing" },
  { id: "podcast-silver", category: "Podcast", name: "Silver TalkShow", duration: "1.5 hrs", price: 150000, details: "3 Person | 3 Cameras | 3 Microphones | Shooting & Editing" },
  { id: "podcast-gold", category: "Podcast", name: "Gold TalkShow", duration: "2 hrs", price: 200000, details: "4 Person | 4 Cameras | 4 Microphones | Shooting & Editing" },
  { id: "space-1", category: "Studio Space Rental", name: "1 Hour Space Rental", duration: "1 hr", price: 15000, details: "1 Hour Space Rental | Camera | Studio Lights" },
  { id: "space-2", category: "Studio Space Rental", name: "2 Hours Space Rental", duration: "2 hrs", price: 30000, details: "2 Hours Space Rental | Camera | Studio Lights" },
  { id: "space-3", category: "Studio Space Rental", name: "3 Hours Space Rental", duration: "3 hrs", price: 50000, details: "3 Hours Space Rental | Camera | Studio Lights" },
];

export const TIME_SLOTS = [
  "09:00 AM","09:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM",
  "02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","05:00 PM","05:30 PM",
];

export const naira = (n: number) => "₦" + n.toLocaleString("en-NG", { minimumFractionDigits: 0 });
export const serviceById = (id: string) => SERVICES.find((s) => s.id === id);
