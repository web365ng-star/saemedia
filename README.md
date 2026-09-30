# SAE Media Solution (Next.js frontend)

Static-first rebuild of saemedia.com.ng (WordPress/Elementor frontend only).

- `npm run dev` / `npm run build` / `npm start`
- Copy `.env.example` to `.env.local` and fill it in.
- Booking: `/bookings` -> Paystack (70% upfront, amount computed server-side in `app/api/paystack/initialize`) -> `/booking/confirmed` verifies the payment -> WhatsApp.
- Content lives in `lib/site.ts` and `lib/services.ts`.
- Images: `node scripts/optimize.mjs` regenerates `public/media` from the WP uploads (needs the original server).
- Videos (~690 MB) are NOT in git. Upload `public/videos/*` to Vercel Blob or R2 and set `NEXT_PUBLIC_VIDEO_BASE`.
