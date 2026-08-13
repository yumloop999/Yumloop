import { motion } from "framer-motion";
import { Bike, UtensilsCrossed, ArrowUpRight } from "lucide-react";
import { orderPlatforms } from "../../data/siteConfig";

const externalPlatforms = [
  {
    id: "swiggy",
    name: "Swiggy",
    description: "Doorstep delivery in under 40 minutes.",
    href: orderPlatforms.swiggy,
    icon: Bike,
    bg: "bg-[#fc8019]",
  },
  {
    id: "zomato",
    name: "Zomato",
    description: "Order from your nearest Yumloop outlet.",
    href: orderPlatforms.zomato,
    icon: UtensilsCrossed,
    bg: "bg-[#e23744]",
  },
];

export default function OrderPlatforms() {
  return (
    <section className="py-10 md:py-14 bg-cream-100">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center text-center gap-2 mb-8">
          <span className="uppercase tracking-[0.2em] text-xs md:text-sm font-semibold text-cherry-500">
            Order Your Way
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-coffee-900">
            Also Available On
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {externalPlatforms.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group flex items-center gap-4 rounded-3xl bg-white p-5 shadow-soft hover:shadow-lift transition-shadow"
            >
              <span className={`flex items-center justify-center w-14 h-14 rounded-2xl text-white shrink-0 ${p.bg}`}>
                <p.icon size={26} />
              </span>
              <div className="flex-1">
                <p className="font-display text-lg font-semibold text-coffee-900">{p.name}</p>
                <p className="text-sm text-coffee-500">{p.description}</p>
              </div>
              <ArrowUpRight
                size={20}
                className="text-coffee-300 group-hover:text-cherry-500 transition-colors shrink-0"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
