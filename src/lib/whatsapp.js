import { siteConfig } from "../data/siteConfig";

export function whatsappLink(message = "Hi Yumloop! I'd like to place an order.") {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encoded}`;
}
