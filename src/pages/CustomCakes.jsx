import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import CakeOrderForm from "../components/cake/CakeOrderForm";
import { cakeGallery } from "../data/galleryData";
import { img } from "../data/siteConfig";

export default function CustomCakes() {
  return (
    <>
      <Helmet>
        <title>Custom Cake Ordering | Yumloop</title>
        <meta
          name="description"
          content="Design your dream celebration cake with Yumloop — pick the flavor, size, shape and theme."
        />
      </Helmet>

      <PageHero
        eyebrow="Celebration Cakes"
        title="Design Your Dream Cake"
        subtitle="Handcrafted, personalized, and made to make your moment unforgettable."
        image={img("1621303837174-89787a7d4729")}
      />

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Cake Request"
            title="Tell Us What You're Celebrating"
            subtitle="Fill in the details below and we'll confirm your order over WhatsApp."
          />
          <div className="rounded-3xl bg-cream-50 border border-coffee-100 shadow-soft p-6 md:p-10">
            <CakeOrderForm />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-beige-100">
        <Container>
          <SectionHeading eyebrow="Inspiration" title="Cakes We've Loved Making" align="center" />
          <div className="columns-2 md:columns-3 gap-4 [&>*]:mb-4">
            {cakeGallery.map((cake, i) => (
              <motion.div
                key={cake.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
                className="break-inside-avoid overflow-hidden rounded-2xl shadow-soft"
              >
                <img src={cake.src} alt={cake.alt} loading="lazy" className="w-full h-auto object-cover" />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
