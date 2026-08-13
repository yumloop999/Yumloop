import { img } from "./siteConfig";
import { menuItems } from "./menuData";
import glimpse1 from "../assets/glimpse1.png";
import glimpse2 from "../assets/glimpse2.png";
import glimpse3 from "../assets/glimpse3.png";
import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";

const item = (id) => menuItems.find((m) => m.id === id);

export const galleryImages = [
  { id: 1, category: "pizza", src: item("pizza-4").image, alt: item("pizza-4").name },
  { id: 2, category: "burgers", src: item("burger-1").image, alt: item("burger-1").name },
  { id: 3, category: "cafe-interior", src: glimpse1, alt: "Guests enjoying Yumloop café" },
  { id: 4, category: "momos", src: item("momo-4").image, alt: item("momo-4").name },
  { id: 5, category: "pizza", src: item("pizza-2").image, alt: item("pizza-2").name },
  { id: 6, category: "drinks", src: item("mok-1").image, alt: item("mok-1").name },
  { id: 7, category: "desserts", src: item("dessert-6").image, alt: item("dessert-6").name },
  { id: 8, category: "desserts", src: item("dessert-10").image, alt: item("dessert-10").name },
  { id: 9, category: "cafe-interior", src: glimpse2, alt: "Cozy corner seating at Yumloop" },
  { id: 10, category: "burgers", src: item("burger-4").image, alt: item("burger-4").name },
  { id: 11, category: "drinks", src: item("shake-1").image, alt: item("shake-1").name },
  { id: 12, category: "pizza", src: item("pizza-3").image, alt: item("pizza-3").name },
  { id: 13, category: "desserts", src: item("dessert-15").image, alt: item("dessert-15").name },
  { id: 14, category: "cafe-interior", src: glimpse3, alt: "Table spread at Yumloop" },
  { id: 15, category: "momos", src: item("momo-1").image, alt: item("momo-1").name },
  { id: 16, category: "drinks", src: item("bt-1").image, alt: item("bt-1").name },
  { id: 17, category: "burgers", src: item("burger-5").image, alt: item("burger-5").name },
  { id: 18, category: "desserts", src: item("dessert-11").image, alt: item("dessert-11").name },
  { id: 19, category: "drinks", src: item("falooda-3").image, alt: item("falooda-3").name },
  { id: 20, category: "cafe-interior", src: gallery1, alt: "Yumloop storefront at night" },
  { id: 21, category: "cafe-interior", src: gallery2, alt: "Yumloop café lighting" },
];

export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "pizza", label: "Pizza" },
  { id: "burgers", label: "Burgers" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
  { id: "momos", label: "Momos" },
  { id: "cafe-interior", label: "Café Interior" },
];

export const instagramPosts = galleryImages.slice(0, 8);

export const cakeGallery = [
  { id: 1, src: img("1578985545062-69928b1d9587"), alt: "Chocolate drip cake" },
  { id: 2, src: img("1578775887804-699de7086ff9"), alt: "Raspberry cheesecake" },
  { id: 3, src: img("1571115177098-24ec42ed204d"), alt: "Vanilla berry layer cake" },
  { id: 4, src: img("1563729784474-d77dbb933a9e"), alt: "Strawberry cupcake tower" },
  { id: 5, src: img("1621303837174-89787a7d4729"), alt: "Birthday celebration drip cake" },
  { id: 6, src: img("1535141192574-5d4897c12636"), alt: "Custom fondant tiered cake" },
];
