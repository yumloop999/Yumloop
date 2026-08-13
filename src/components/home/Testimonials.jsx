import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import RatingStars from "../ui/RatingStars";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-beige-100">
      <Container>
        <SectionHeading
          eyebrow="Loved By Regulars"
          title="What Our Guests Say"
          subtitle="Real reviews from the Yumloop community."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="relative flex flex-col gap-4 rounded-3xl bg-white p-7 shadow-soft hover:shadow-lift transition-shadow"
            >
              <Quote className="text-coffee-100" size={36} />
              <p className="text-coffee-700 text-sm leading-relaxed">{t.text}</p>
              <RatingStars rating={t.rating} />
              <div className="pt-2 mt-auto">
                <p className="font-semibold text-coffee-900 text-sm">{t.name}</p>
                <p className="text-xs text-coffee-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
