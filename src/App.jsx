import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import CustomCakes from "./pages/CustomCakes";
import CafeExperience from "./pages/CafeExperience";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/custom-cakes" element={<CustomCakes />} />
        <Route path="/cafe-experience" element={<CafeExperience />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
