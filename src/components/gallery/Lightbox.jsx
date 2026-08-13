import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useCallback } from "react";

export default function Lightbox({ images, index, onClose, onNavigate }) {
  const current = images[index];

  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    },
    [index, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (!current) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-coffee-950/90 p-4"
        onClick={onClose}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-cream-50 hover:bg-white/20"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index - 1 + images.length) % images.length);
          }}
          className="absolute left-3 sm:left-6 p-2 rounded-full bg-white/10 text-cream-50 hover:bg-white/20"
          aria-label="Previous image"
        >
          <ChevronLeft size={26} />
        </button>

        <motion.img
          key={current.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          src={current.src}
          alt={current.alt}
          className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-lift"
          onClick={(e) => e.stopPropagation()}
        />

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index + 1) % images.length);
          }}
          className="absolute right-3 sm:right-6 p-2 rounded-full bg-white/10 text-cream-50 hover:bg-white/20"
          aria-label="Next image"
        >
          <ChevronRight size={26} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
