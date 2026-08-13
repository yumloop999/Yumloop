import { motion } from "framer-motion";
import Container from "./Container";

export default function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <section className="relative flex items-center justify-center h-[45vh] min-h-[340px] overflow-hidden bg-coffee-900">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/70 via-coffee-900/50 to-coffee-900" />
      <Container className="relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center gap-4"
        >
          {eyebrow && (
            <span className="uppercase tracking-[0.25em] text-xs md:text-sm font-semibold text-cherry-300">
              {eyebrow}
            </span>
          )}
          <h1 className="font-display text-4xl md:text-6xl font-bold text-cream-50">{title}</h1>
          {subtitle && <p className="max-w-xl text-cream-200 text-base md:text-lg">{subtitle}</p>}
        </motion.div>
      </Container>
    </section>
  );
}
