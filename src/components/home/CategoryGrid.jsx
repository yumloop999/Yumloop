import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { categories } from "../../data/siteConfig";

export default function CategoryGrid() {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <Container>
        <SectionHeading
          eyebrow="Explore"
          title="Find Your Flavor"
          subtitle="Twenty delicious categories, one seamless loop. Tap a category to jump straight to the menu."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.id}
              type="button"
              onClick={() => navigate(`/menu?category=${cat.id}`)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col items-center gap-3 rounded-3xl bg-white p-5 shadow-soft hover:shadow-lift transition-shadow text-center"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-coffee-950/25" />
                <span className="absolute top-2 left-2 text-xl">{cat.emoji}</span>
              </div>
              <span className="font-semibold text-coffee-900 text-sm md:text-base">{cat.label}</span>
            </motion.button>
          ))}
        </div>
      </Container>
    </section>
  );
}
