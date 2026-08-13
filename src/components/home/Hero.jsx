import { motion } from "framer-motion";
import { ArrowRight, MapPin, UtensilsCrossed } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import logoImg from "../../assets/logo.png";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#570219]">
      <Container className="relative pt-28 pb-16 flex flex-col items-center text-center gap-8">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0, y: [0, -12, 0] }}
          transition={{
            scale: { duration: 0.8, ease: "backOut" },
            rotate: { duration: 0.8, ease: "backOut" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
          }}
          className="relative flex items-center justify-center"
        >
          <img
            src={logoImg}
            alt="Yumloop logo"
            className="relative w-32 h-32 md:w-44 md:h-44 object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-5xl md:text-7xl font-bold text-cream-50 leading-[1.05]"
        >
          Yumloop
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display italic text-2xl md:text-3xl text-cherry-300"
        >
          Loop into Flavor.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-xl text-cream-200 text-base md:text-lg"
        >
          A premium multi-cuisine café serving momos, burgers, fried chicken, pizza, Korean
          noodles, shakes, bubble tea and more — made fresh, served warm.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <Button to="/menu" size="lg" icon={ArrowRight}>
            Order Now
          </Button>
          <Button to="/menu" variant="white" size="lg" icon={UtensilsCrossed} iconPosition="left">
            View Menu
          </Button>
          <Button to="/cafe-experience" variant="outline" size="lg" icon={MapPin} iconPosition="left" className="border-cream-100 text-cream-50 hover:bg-cream-100 hover:text-coffee-900">
            Visit Café
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
