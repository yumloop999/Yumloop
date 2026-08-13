import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";
import ScrollToTop from "./ScrollToTop";
import CartDrawer from "../cart/CartDrawer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-cream-100">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
      <CartDrawer />
    </div>
  );
}
