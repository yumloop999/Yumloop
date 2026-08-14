import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ShoppingBag, ShoppingCart } from "lucide-react";
import Logo from "./Logo";
import Button from "../ui/Button";
import Container from "../ui/Container";
import SocialIcon from "../ui/SocialIcon";
import { navLinks, siteConfig } from "../../data/siteConfig";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-[#570219]/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "shadow-soft py-2" : "py-4"
      }`}
    >
      <Container className="flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-cream-50 text-coffee-900"
                    : "text-cream-100 hover:bg-white/10"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <CartButton totalItems={totalItems} onClick={() => openCart()} />
          <Button to="/menu" size="sm" icon={ShoppingBag}>
            Order Now
          </Button>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full text-cream-50 hover:bg-white/10 transition-colors"
            aria-label="Instagram"
          >
            <SocialIcon name="instagram" size={20} />
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <CartButton totalItems={totalItems} onClick={() => openCart()} />
          <button
            type="button"
            className="p-2 rounded-full text-cream-50 hover:bg-white/10"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </Container>
    </header>

    {createPortal(
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-coffee-950/60 lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-cream-50 shadow-lift flex flex-col p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-full hover:bg-coffee-100"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? "bg-coffee-800 text-cream-100"
                          : "text-coffee-800 hover:bg-coffee-100"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
              <div className="mt-auto pt-6">
                <Button to="/menu" className="w-full" onClick={() => setOpen(false)}>
                  Order Now
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )}
    </>
  );
}

function CartButton({ totalItems, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative p-2.5 rounded-full text-cream-50 hover:bg-white/10"
      aria-label="Open cart"
    >
      <ShoppingCart size={22} />
      {totalItems > 0 && (
        <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[18px] h-[18px] rounded-full bg-cherry-500 text-white text-[10px] font-bold px-1">
          {totalItems}
        </span>
      )}
    </button>
  );
}
