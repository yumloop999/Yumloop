import { motion } from "framer-motion";
import { MessageCircle, ShoppingCart } from "lucide-react";
import { whatsappLink } from "../../lib/whatsapp";
import { useCart } from "../../context/CartContext";

export default function FloatingButtons() {
  const { totalItems, openCart } = useCart();

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <button
        type="button"
        onClick={() => openCart()}
        className="hidden sm:inline-flex relative items-center gap-2 rounded-full bg-cherry-500 text-white px-5 py-3 text-sm font-semibold shadow-lift hover:bg-cherry-600 transition-colors"
      >
        <ShoppingCart size={18} />
        Cart
        {totalItems > 0 && (
          <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center min-w-[20px] h-5 rounded-full bg-coffee-900 text-white text-[11px] font-bold px-1">
            {totalItems}
          </span>
        )}
      </button>
      <motion.a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lift hover:bg-green-600 transition-colors"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <MessageCircle size={26} />
      </motion.a>
    </div>
  );
}
