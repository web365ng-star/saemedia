export const SITE = {
  name: "SAE Media Solution",
  tagline: "Making memories that last a life times",
  address: "16 Oduola Ogunrinde Ave, Governor's Rd, off Adewale Bus-stop, Ikotun, Lagos",
  hours: "Mon – Sat: 9am – 6pm | Sun: 1pm – 4pm",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2349112063837",
  socials: {
    instagram: "https://www.instagram.com/saestudios_/",
    facebook: "https://facebook.com/111947291937241",
    x: "https://x.com/saestudios_",
    linkedin: "https://www.linkedin.com/company/saemedia/",
    youtube: "https://www.youtube.com/@samsonaetim",
  },
};

export const whatsappLink = (text: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const NAV_LEFT = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/bookings", label: "Book Us" },
  { href: "/trainings", label: "Trainings" },
];
export const NAV_RIGHT = [
  { href: "/photography", label: "Photography" },
  { href: "/videography", label: "Videography" },
  { href: "/animation", label: "Animation" },
  { href: whatsappLink("Hello SAE Media, I'd like to enquire about web development."), label: "Web Dev", external: true },
];

export const PHOTO_GALLERIES: { title: string; images: string[] }[] = [
  { title: "Beauty shoot", images: ["SAE_8811-8","SAE_88115-1","SAE_8811ee","SAE_8812-1","SAE_88110-2","SAE_8814-2","SAE_88116-3","SAE_88118-1","SAE_88117-2","SAE_88119-1","SAE_8811por"].map((n) => `2025/09/${n}.png`) },
  { title: "Portrait shoot", images: ["2026/04/sdfgg","2025/11/dgdjk","2025/09/SAE_881440","2026/04/ghhyy","2025/09/SAE_881187","2025/09/SAE_88170","2025/09/SAE_8811ty","2025/09/SAE_8811566","2025/09/SAE_885666","2026/05/Hmonne","2026/04/ffhgrts","2025/09/SAE_8830","2025/09/SAE_8506","2025/09/SAE_8811-2","2025/09/SAE_8814-1-scaled","2026/04/tujbvjj","2025/09/SAE_8811hg","2025/09/SAE_88tij","2025/09/SAE_88110-1","2025/09/SAE_88tt","2025/09/SAE_881180","2026/04/WebSite-Image-Size","2026/04/dgfjjjk","2026/05/shdbsdhdfv"].map((n) => `${n}.png`) },
  { title: "Corporate Head Shoot", images: ["SAE_8811-3","SAE_87811","SAE_82811","SAE_81811","SAE_83811","SAE_88114","SAE_88116-2","SAE_88191","SAE_881661","SAE_88511","SAE_88611","SAE_88115666"].map((n) => `2025/09/${n}.png`) },
  { title: "Kiddies", images: ["2025/11/shhdb","2025/09/34-1","2025/09/88","2025/09/SAE_8811-4","2025/09/8","2025/09/4","2025/09/234","2025/11/fnsdk","2025/09/9","2025/09/7SAE_8811","2025/09/6","2025/09/5","2025/11/skfjsfbbfb","2025/09/1","2025/09/2","2025/09/SAE_881134"].map((n) => `${n}.png`) },
  { title: "Maternity shoot", images: ["706-1","4-1","5-1","664","25","5858","97","80","rt","59","SAE_8811-5-scaled","rty"].map((n) => `2025/09/${n}.png`).concat(["2026/04/adfgjkll.png"]) },
  { title: "Family & Couple shoot", images: ["34","50","45","566","809","902","8090","302","80-1","70","60","SAE_8811-6"].map((n) => `2025/09/${n}.png`).concat(["2026/05/vdhbdsjbfdf.png"]) },
  { title: "Event & Weddings", images: ["2025/09/SAE_881440-1","2026/05/unnamed-file","2025/09/alsjsjd","2026/05/xajhdxjhfudsxbgvujxcvb","2026/05/vnjscnkdcjscndkvji","2026/05/asbhfbufbla","2026/05/asdcjmcndkas","2025/09/etw","2025/09/SAE_","2025/09/akjshd","2025/09/ajdhhd","2025/09/ajjdjd","2025/09/ajddas","2025/09/ajjdhdsd","2025/09/ksks","2025/09/SAE_881","2025/09/SAE_8814-3","2025/09/shs","2025/09/ajdd","2025/09/ajds","2025/09/ahdld","2025/09/ajssa","2025/09/dhdb","2025/09/dhsgs","2025/09/HHD","2026/05/adffvhvnisodjvkoxcv","2026/05/sfovjspjvdoiadsvjfibh","2026/05/xnbasdkfcvkdwfn"].map((n) => `${n}.png`) },
  { title: "Product shoot", images: ["2025/11/dnndn","2025/09/509","2025/09/2097","2025/09/2397","2025/09/2864","2025/11/sadjhsbd","2025/09/2975","2025/09/3765","2025/09/5079","2025/09/7364","2025/11/7364dhs","2025/09/SAE_8811-7","2025/09/ahsns","2025/09/SAE_881440e","2025/09/Sjds","2025/11/shsg"].map((n) => `${n}.png`) },
];

export type VideoItem = { file: string; title: string; poster?: string };
export const VIDEO_SECTIONS: { title: string; videos: VideoItem[] }[] = [
  { title: "Interview / Testimonial", videos: [
    { file: "META_IWD_ANTHEA.mp4", title: "Meta IWD — Anthea", poster: "2025/09/Meta-01.png" },
    { file: "NIPOST-PostMaster.mp4", title: "NIPOST Postmaster" },
    { file: "Perpclass.mp4", title: "Perpclass" },
    { file: "META_IWD_KUNMI_LOW_02.mp4", title: "Meta IWD — Kunmi", poster: "2025/09/Thumbnill.png" },
  ] },
  { title: "Wedding / Events", videos: [
    { file: "The-Fatanmis-Teaser_Low.mp4", title: "The Fatanmis Teaser", poster: "2025/09/Thumbnill-02.png" },
    { file: "Teaser-video_Low.mp4", title: "Wedding Teaser" },
    { file: "Trailer-HD_Low.mp4", title: "Wedding Trailer", poster: "2025/09/Screenshot-2025-09-16-at-21.42.01-scaled.png" },
    { file: "John-Obaro-Birthday-Highlight_1.mp4", title: "John Obaro Birthday Highlight", poster: "2025/10/Untitled-1.png" },
  ] },
  { title: "Documentaries", videos: [
    { file: "SystemSpecs-60secs-Ads_10_Final_Output_Low.mp4", title: "SystemSpecs 60 secs", poster: "2025/09/Thumbnill-01.png" },
    { file: "Visa-Emotional-Documentry_Low.mp4", title: "Visa Documentary" },
    { file: "NIyi_creators_fc_Low.mp4", title: "Niyi Creators" },
    { file: "WILAN-26th-July-Trailer_Low.mp4", title: "WILAN Trailer", poster: "2025/09/Thumbnill-04-scaled.png" },
  ] },
  { title: "Podcast & YouTube Reel", videos: [
    { file: "3641643975744480391.mp4", title: "Reel 1" },
    { file: "3663480277997822005-1.mp4", title: "Reel 2" },
  ] },
];

export const ANIMATION_VIDEOS: VideoItem[] = [
  { file: "Sanofi-Tesser.mp4", title: "Sanofi Tesser", poster: "2025/09/Thumbnill-08.png" },
  { file: "Visa-Animation.mp4", title: "Visa Animation", poster: "2025/09/Thumbnill-06.png" },
  { file: "DIST-FINAL.mp4", title: "DIST", poster: "2025/09/Thumbnill-07.png" },
  { file: "Sanofi-Animation-Edit-04_LOW.mp4", title: "Sanofi Animation", poster: "2025/09/Thumbnill-09.png" },
  { file: "Introducing-HumanManager-7.0-copy.mp4", title: "Introducing HumanManager 7.0" },
  { file: "NIPOST-Animation-1.mp4", title: "NIPOST Animation", poster: "2025/10/Hskdfk.png" },
  { file: "Sudan-Amaryl-3D-Mechanism-Low.mp4", title: "Amaryl 3D Mechanism" },
  { file: "HumanManager-Payroll-Outsourcing.mp4", title: "HumanManager Payroll Outsourcing" },
];

export const TEAM = [
  { name: "Samson Abasiono Etim", role: "Team Lead", img: "2026/06/Samson-01.png" },
  { name: "Oyediji Motunrayo", role: "Make-Up Artist", img: "2025/09/SAE_1443-1.png" },
  { name: "Angelo Ifeanyichukwu", role: "Photographer / Video Editor", img: "2026/06/Last-BOrn.png" },
  { name: "Moses Brown", role: "Videographer / Editor", img: "2025/09/Team-Lead-4.png" },
  { name: "Pelumi Akinkunmi Blessing", role: "Secretary", img: "2026/06/Pelumi.png" },
  { name: "Precious Ogadie Adarugo", role: "Content Creator Intern", img: "2026/06/Precious.png" },
  { name: "Isaac Osarieme Idahosa", role: "Photographer Intern", img: "2026/06/Isaac.png" },
  { name: "Jennifer Chizoba Angus", role: "Communications Intern", img: "2026/06/Jenifer.png" },
];

export const CLIENT_LOGOS = ["SoFresh", "SHT", "Astract9", "Remita", "GO54", "ABR"].map((n) => `2025/09/${n}.png`);

export const TESTIMONIALS = [
  { name: "Miss Pricilla", title: "Top Notch", img: "2025/09/1757869712507.jpeg", text: "I really enjoyed my photoshoot session with you guys. Your work and professionalism is top notch. Thanks for being a part of making my day memorable" },
  { name: "Favour Chioma Stephen", title: "Simply Amazing", img: "2025/09/favstephen_1757869444231.webp", text: "SAE Media Solution is simply amazing! Their creativity, professionalism, and attention to detail make every shoot unforgettable. From portraits to events, they capture moments beautifully and make you feel completely at ease in front of the camera. Highly recommended for anyone who wants quality pictures with a touch of excellence. Their service is one of the best have seen so far" },
  { name: "Robert Opeyemi", title: "Exceptional Experience", img: "2025/09/1757869975122.webp", text: "I had an exceptional experience with SAE Media Studio! Their team is truly talented, professional, and dedicated to delivering top-notch results. From start to finish, they exceeded my expectations with their exceptional creativity and attention to detail, excellent communication and project management skills, timely delivery and flexibility, and outstanding quality of work. I highly recommend them for any media production needs - you won't be disappointed!" },
];

export type Training = {
  slug: string; title: string; description: string; days: number; venue: string;
  learn: string[]; bonus: string; video: string; image: string; price: number; originalPrice: number;
  batches: { label: string; start: string; end: string }[];
};
export const TRAININGS: Training[] = [
  {
    slug: "master-the-art-of-photography", title: "Master the Art of Photography", days: 2,
    description: "An intensive 2-day hands-on photography class designed to sharpen your skills, build your confidence behind the camera, and grow your brand and audience the right way.",
    venue: SITE.address, price: 25000, originalPrice: 35000, image: "2026/04/WhatsApp-Image-2026-04-08-at-8.38.05-AM.jpeg",
    learn: ["Camera settings & control", "Composition & creative framing", "Studio shooting techniques", "Lighting fundamentals", "One light & multi-light setup", "Capture One and Photoshop editing", "Professional skin retouching", "Exporting for print & social media"],
    bonus: "Certificate of completion", video: "WhatsApp-Video-2026-04-08-at-8.38.09-AM-1.mp4",
    batches: [
      { label: "1st Batch: 1st - 2nd May 2026", start: "2026-05-01", end: "2026-05-02" },
      { label: "2nd Batch: 8th - 9th May 2026", start: "2026-05-08", end: "2026-05-09" },
      { label: "3rd Batch: 15th - 16th May 2026", start: "2026-05-15", end: "2026-05-16" },
    ],
  },
  {
    slug: "master-the-art-of-videography", title: "Master the Art of Videography", days: 3,
    description: "An intensive 3-day hands-on videography class designed to sharpen your skills, build your confidence behind the camera, and grow your brand and audience the right way.",
    venue: SITE.address, price: 35000, originalPrice: 50000, image: "2026/04/Design-02.png",
    learn: ["Camera settings & control", "Composition & creative framing", "Studio shooting techniques", "Podcast setup", "Lighting fundamentals", "One light & multi-light setup", "Premiere Pro editing", "Exporting for YouTube & social media"],
    bonus: "Certificate of completion", video: "WhatsApp-Video-2026-04-08-at-8.38.09-AM-1.mp4",
    batches: [
      { label: "1st Batch: 4th - 6th June 2026", start: "2026-06-04", end: "2026-06-06" },
      { label: "2nd Batch: 11th - 13th June 2026", start: "2026-06-11", end: "2026-06-13" },
      { label: "3rd Batch: 18th - 20th June 2026", start: "2026-06-18", end: "2026-06-20" },
    ],
  },
];

export const TUTORIAL_VIDEOS = [
  { id: "XHOmBV4js_E", title: "Sample Video", duration: "0:16" },
];
