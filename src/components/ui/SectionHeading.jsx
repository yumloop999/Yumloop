import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col gap-3 max-w-2xl mb-10 md:mb-14 ${alignClass}`}
    >
      {eyebrow && (
        <span
          className={`uppercase tracking-[0.2em] text-xs md:text-sm font-semibold ${
            light ? "text-cherry-300" : "text-cherry-500"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-5xl font-semibold leading-tight ${
          light ? "text-cream-50" : "text-coffee-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg ${light ? "text-cream-200" : "text-coffee-600"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
