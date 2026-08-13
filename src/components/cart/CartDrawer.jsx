import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { whatsappLink } from "../../lib/whatsapp";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, removeFromCart, clearCart, totalPrice } = useCart();

  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { errors },
  } = useForm({ shouldUnregister: true });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const onCheckout = (formData) => {
    const lines = items.map(
      (item, i) => `${i + 1}. ${item.name} x${item.qty} - ₹${item.qty * item.price}`
    );
    const message = [
      "Hi Yumloop! I'd like to place an order:",
      "",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Table No: ${formData.table}`,
      "",
      ...lines,
      "",
      `Total: ₹${totalPrice}`,
    ].join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    clearCart();
    closeCart();
    resetForm();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-coffee-950/60"
          onClick={closeCart}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-cream-50 shadow-lift flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-coffee-100 shrink-0">
              <h2 className="font-display text-xl font-semibold text-coffee-900 flex items-center gap-2">
                <ShoppingCart size={20} />
                Your Cart
              </h2>
              <button
                type="button"
                onClick={closeCart}
                className="p-2 rounded-full hover:bg-coffee-100"
                aria-label="Close cart"
              >
                <X size={22} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-coffee-100 text-coffee-400">
                  <ShoppingBag size={28} />
                </span>
                <p className="text-coffee-700 font-medium">Your cart is empty.</p>
                <p className="text-sm text-coffee-500">Add items from the menu to get started.</p>
                <Link
                  to="/menu"
                  onClick={closeCart}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-coffee-900 text-cream-100 px-6 py-3 text-sm font-semibold hover:bg-cherry-500 transition-colors"
                >
                  Browse Menu
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-soft">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-coffee-900 text-sm truncate">{item.name}</p>
                        <p className="text-cherry-500 font-semibold text-sm">₹{item.price}</p>
                        <div className="flex items-center gap-2 mt-1.5">
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="flex items-center justify-center w-7 h-7 rounded-full bg-coffee-100 text-coffee-800 hover:bg-coffee-200"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-6 text-center text-sm font-semibold text-coffee-900">
                            {item.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="flex items-center justify-center w-7 h-7 rounded-full bg-coffee-100 text-coffee-800 hover:bg-coffee-200"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 rounded-full text-coffee-300 hover:text-cherry-500 hover:bg-coffee-50 shrink-0"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>

                <form
                  onSubmit={handleSubmit(onCheckout)}
                  className="border-t border-coffee-100 px-6 py-5 flex flex-col gap-3 overflow-y-auto shrink-0 max-h-[70vh]"
                >
                  <Field label="Your Name" error={errors.name}>
                    <input
                      {...register("name", { required: "Name is required" })}
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </Field>

                  <Field label="Phone Number" error={errors.phone}>
                    <input
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: { value: /^[0-9]{10}$/, message: "Enter a 10-digit phone number" },
                      })}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
                      }}
                      inputMode="numeric"
                      maxLength={10}
                      className={inputClass}
                      placeholder="9876543210"
                    />
                  </Field>

                  <Field label="Table Number" error={errors.table}>
                    <input
                      {...register("table", { required: "Table number is required" })}
                      className={inputClass}
                      placeholder="e.g. 12"
                    />
                  </Field>

                  <div className="flex items-center justify-between text-coffee-900 pt-1">
                    <span className="font-semibold">Total</span>
                    <span className="font-display text-xl font-semibold">₹{totalPrice}</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-cherry-500 text-white py-3.5 font-semibold hover:bg-cherry-600 transition-colors"
                  >
                    Order via WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-xs text-coffee-400 hover:text-cherry-500 self-center"
                  >
                    Clear cart
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const inputClass =
  "w-full rounded-2xl border border-coffee-200 bg-white px-4 py-2.5 text-sm text-coffee-900 outline-none focus:ring-2 focus:ring-cherry-500 placeholder:text-coffee-300";

function Field({ label, children, error }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-coffee-800">{label}</label>
      {children}
      {error && <span className="text-xs text-cherry-600">{error.message}</span>}
    </div>
  );
}
