import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "yumloop-cart";

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = (item, variant) => {
    const cartId = variant ? `${item.id}::${variant.label}` : item.id;
    const name = variant ? `${item.name} (${variant.label})` : item.name;
    const price = variant ? variant.price : item.price;

    setItems((prev) => {
      const existing = prev.find((i) => i.id === cartId);
      if (existing) {
        return prev.map((i) => (i.id === cartId ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { id: cartId, name, price, image: item.image, qty: 1 }];
    });
  };

  const removeFromCart = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  const updateQty = (id, qty) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  };

  const clearCart = () => setItems([]);

  const getQty = (id) => items.find((i) => i.id === id)?.qty ?? 0;

  const totalItems = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items]);
  const totalPrice = useMemo(() => items.reduce((sum, i) => sum + i.qty * i.price, 0), [items]);

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    getQty,
    totalItems,
    totalPrice,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
