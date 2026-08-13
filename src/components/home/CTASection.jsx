import { motion } from "framer-motion";
import { ArrowRight, Cake } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { img } from "../../data/siteConfig";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-coffee-950">
      <img
        src={img("1554118811-1e0d58224f24")}
        alt="Yumloop café"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-coffee-950 via-coffee-950/85 to-cherry-700/40" />
      <Container className="relative text-center flex flex-col items-center gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-bold text-cream-50 max-w-2xl"
        >
          Craving something delicious? Let's loop you in.
        </motion.h2>
        <p className="max-w-lg text-cream-200">
          Order online, book a table, or design your dream celebration cake — Yumloop is ready
          whenever you are.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button to="/menu" size="lg" icon={ArrowRight}>
            Order Now
          </Button>
          <Button to="/custom-cakes" variant="white" size="lg" icon={Cake} iconPosition="left">
            Design a Cake
          </Button>
        </div>
      </Container>
    </section>
  );
}
