import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Minus, Plus } from "lucide-react";
import Badge from "../ui/Badge";
import { useCart } from "../../context/CartContext";

export default function MenuCard({ item, index = 0 }) {
  const { addToCart, updateQty, getQty } = useCart();
  const hasTiers = Array.isArray(item.priceTiers) && item.priceTiers.length > 0;
  const [tierIndex, setTierIndex] = useState(0);
  const activeTier = hasTiers ? item.priceTiers[tierIndex] : null;
  const cartId = activeTier ? `${item.id}::${activeTier.label}` : item.id;
  const qty = getQty(cartId);

  const handleAdd = () => addToCart(item, activeTier || undefined);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
      className="group flex h-full flex-col rounded-3xl bg-white overflow-hidden shadow-soft hover:shadow-lift transition-shadow duration-300"
    >
      <div className="relative h-52 overflow-hidden bg-coffee-50">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {item.bestseller && <Badge type="bestseller">Bestseller</Badge>}
          {item.isNew && <Badge type="new">New</Badge>}
        </div>
        <div className="absolute top-3 right-3 flex gap-1">
          {item.veg === "both" ? (
            <>
              <Badge type="veg" />
              <Badge type="non-veg" />
            </>
          ) : (
            <Badge type={item.veg ? "veg" : "non-veg"} />
          )}
        </div>
      </div>

      <div className="flex flex-col p-5 gap-2">
        <div className="flex items-start justify-between gap-2 min-h-[3.25rem]">
          <h3 className="font-display text-lg font-semibold text-coffee-900 leading-snug line-clamp-2">
            {item.name}
          </h3>
          {!hasTiers && <span className="shrink-0 font-semibold text-cherry-500">₹{item.price}</span>}
        </div>

        <div className="min-h-[5.25rem]">
          {hasTiers ? (
            <div className="flex flex-col gap-1.5">
              {item.priceTiers.map((tier, i) => (
                <button
                  key={tier.label}
                  type="button"
                  onClick={() => setTierIndex(i)}
                  className={`flex items-center justify-between rounded-xl px-3 py-1.5 text-sm border transition-colors ${
                    tierIndex === i
                      ? "border-cherry-500 bg-cherry-50 text-coffee-900"
                      : "border-coffee-100 text-coffee-600 hover:border-coffee-200"
                  }`}
                >
                  <span>{tier.label}</span>
                  <span className="font-semibold text-cherry-500">₹{tier.price}</span>
                </button>
              ))}
            </div>
          ) : (
            item.description && <p className="text-sm text-coffee-500 line-clamp-3">{item.description}</p>
          )}
        </div>

        {qty === 0 ? (
          <button
            type="button"
            onClick={handleAdd}
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-coffee-900 text-cream-100 py-2.5 text-sm font-semibold hover:bg-cherry-500 transition-colors"
          >
            <ShoppingBag size={16} />
            Add to Cart
          </button>
        ) : (
          <div className="mt-auto flex items-center justify-between rounded-full bg-coffee-900 text-cream-100 py-1.5 px-2">
            <button
              type="button"
              onClick={() => updateQty(cartId, qty - 1)}
              className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-coffee-800"
              aria-label={`Decrease quantity of ${item.name}`}
            >
              <Minus size={16} />
            </button>
            <span className="text-sm font-semibold">{qty} in cart</span>
            <button
              type="button"
              onClick={handleAdd}
              className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-coffee-800"
              aria-label={`Increase quantity of ${item.name}`}
            >
              <Plus size={16} />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
