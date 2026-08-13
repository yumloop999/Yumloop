import { motion } from "framer-motion";
import { Leaf, Flame, Sofa, ChefHat } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "Sourced daily from trusted local vendors for peak flavor and quality.",
  },
  {
    icon: Flame,
    title: "Bold Fusion Flavors",
    description: "From Korean noodles to loaded burgers, every dish is packed with flavor.",
  },
  {
    icon: Sofa,
    title: "Cozy Café",
    description: "A warm, Instagram-worthy space designed for lingering conversations.",
  },
  {
    icon: ChefHat,
    title: "Made Fresh to Order",
    description: "Every dish is prepared fresh in our kitchen, just for you.",
  },
];

export default function WhyYumloop() {
  return (
    <section className="py-20 md:py-28 bg-coffee-900 text-cream-100">
      <Container>
        <SectionHeading
          light
          eyebrow="Why Yumloop"
          title="Crafted With Care, Every Time"
          subtitle="Four promises that shape everything we bake, brew and serve."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center gap-4 rounded-3xl bg-coffee-800/60 p-8 hover:bg-coffee-800 transition-colors"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-cherry-500 text-white">
                <f.icon size={26} />
              </span>
              <h3 className="font-display text-xl font-semibold">{f.title}</h3>
              <p className="text-sm text-cream-300">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
