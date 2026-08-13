import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero";
import CategoryGrid from "../components/home/CategoryGrid";
import BestSellers from "../components/home/BestSellers";
import WhyYumloop from "../components/home/WhyYumloop";
import InstagramGallery from "../components/home/InstagramGallery";
import Testimonials from "../components/home/Testimonials";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Yumloop | Loop into Flavor</title>
        <meta
          name="description"
          content="Yumloop is a premium café and bakery serving handcrafted coffee, milkshakes, mocktails, waffles, pizza, cakes and desserts."
        />
      </Helmet>
      <Hero />
      <CategoryGrid />
      <BestSellers />
      <WhyYumloop />
      <InstagramGallery />
      <Testimonials />
      <CTASection />
    </>
  );
}
