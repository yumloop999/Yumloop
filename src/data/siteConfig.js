export const siteConfig = {
  name: "Yumloop",
  tagline: "Loop into Flavor.",
  description:
    "Yumloop is a premium café serving soups, salads, starters, momos, burgers, fried chicken, sandwiches, pizza, Korean noodles, main course, pasta, moktails, shakes, desserts, falooda, bubble tea, smoothies and fresh juice.",
  phone: "+91 79024 62999",
  phoneSecondary: "+91 80190 14299",
  whatsapp: "917902462999",
  email: "yumloop999@gmail.com",
  address: "HYD Road, Near Vivekananda Statue, Nalgonda - 508001",
  mapEmbedSrc:
    "https://maps.google.com/maps?q=Yum+Loop%2C+HYD+Road%2C+Near+Vivekananda+Statue%2C+Nalgonda+-+508001&t=&z=16&ie=UTF8&iwloc=&output=embed",
  mapLink: "https://maps.app.goo.gl/31Z6f61GaegErZSB9?g_st=ic",
  hours: [{ day: "Monday - Sunday", time: "11:00 AM - 11:00 PM" }],
  serviceOptions: ["Dine In", "Takeaway", "Delivery"],
  policyNotes: [
    "Once an order is placed, cancellation is not available.",
    "Good food takes time — your order will be ready in 10–15 minutes.",
  ],
  social: {
    instagram:
      "https://www.instagram.com/yumloop_nalgonda?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw==",
    instagramHandle: "@yumloop_nalgonda",
    facebook: "https://www.facebook.com/profile.php?id=61590203559460&sk=owner_reels",
  },
  googleRating: 4.8,
  googleReviewCount: 612,
};

export const orderPlatforms = {
  swiggy: "https://www.swiggy.com/menu/1394695?source=sharing",
  zomato: "https://zomato.onelink.me/xqzv/ya4efksw",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "Cakes", to: "/custom-cakes" },
  { label: "Café", to: "/cafe-experience" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

export const categories = [
  { id: "soups", label: "Soups", emoji: "🍲", image: img("1547592166-23ac45744acd") },
  { id: "salad-box", label: "Salad Box", emoji: "🥗", image: img("1512621776951-a57141f2eefd") },
  { id: "starters", label: "Starters", emoji: "🍢", image: img("1600891964599-f61ba0e24092") },
  { id: "momos", label: "Momos", emoji: "🥟", image: img("1496116218417-1a781b1c416c") },
  { id: "burger", label: "Burgers", emoji: "🍔", image: img("1550547660-d9450f859349") },
  { id: "fried-chicken", label: "Fried Chicken", emoji: "🍗", image: img("1626082927389-6cd097cdc6ec") },
  { id: "sandwich", label: "Sandwich", emoji: "🥪", image: img("1553909489-cd47e0907980") },
  { id: "pizza", label: "Pizza", emoji: "🍕", image: img("1513104890138-7c749659a591") },
  { id: "poutine", label: "Poutine", emoji: "🍟", image: img("1585109649139-366815a0d713") },
  { id: "wrap-fillings", label: "Wrap & Fillings", emoji: "🌯", image: img("1618040996337-56904b7850b9") },
  { id: "korean-noodles", label: "Korean Noodles", emoji: "🍜", image: img("1552611052-33e04de081de") },
  { id: "main-course", label: "Main Course", emoji: "🍛", image: img("1544025162-d76694265947") },
  { id: "pasta", label: "Pasta", emoji: "🍝", image: img("1608219992759-8d74ed8d76eb") },
  { id: "moktails", label: "Moktails", emoji: "🍹", image: img("1551538827-9c037cb4f32a") },
  { id: "shakes", label: "Shakes", emoji: "🥤", image: img("1572490122747-3968b75cc699") },
  { id: "dessert", label: "Dessert", emoji: "🍨", image: img("1551024506-0bccd828d307") },
  { id: "falooda", label: "Falooda", emoji: "🍧", image: img("1572490122747-3968b75cc699") },
  { id: "bubble-tea", label: "Bubble Tea", emoji: "🧋", image: img("1558857563-b371033873b8") },
  { id: "smoothie", label: "Smoothie", emoji: "🥭", image: img("1600718374662-0483d2b9da44") },
  { id: "seasonal-juice", label: "Seasonal Fresh Juice", emoji: "🧃", image: img("1600271886742-f049cd451bba") },
];

export function img(id) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`;
}
