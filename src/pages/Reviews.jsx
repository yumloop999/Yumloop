import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import RatingStars from "../components/ui/RatingStars";
import Button from "../components/ui/Button";
import { testimonials } from "../data/testimonials";
import { siteConfig, img } from "../data/siteConfig";

export default function Reviews() {
  return (
    <>
      <Helmet>
        <title>Reviews | Yumloop</title>
        <meta name="description" content="See what guests are saying about Yumloop's coffee, cakes and café experience." />
      </Helmet>

      <PageHero
        eyebrow="Guest Love"
        title="Reviews & Ratings"
        subtitle="Honest words from the Yumloop community."
        image={img("1517705008128-361805f42e86")}
      />

      <section className="py-16 md:py-20">
        <Container>
          <div className="flex flex-col items-center gap-4 text-center mb-16 rounded-3xl bg-coffee-900 text-cream-100 p-10 md:p-14">
            <span className="uppercase tracking-[0.2em] text-xs md:text-sm font-semibold text-cherry-300">
              Google Rating
            </span>
            <div className="flex items-center gap-3">
              <span className="font-display text-5xl md:text-6xl font-bold">{siteConfig.googleRating}</span>
              <div className="flex flex-col items-start gap-1">
                <RatingStars rating={Math.round(siteConfig.googleRating)} size={20} />
                <span className="text-sm text-cream-300">
                  Based on {siteConfig.googleReviewCount}+ Google reviews
                </span>
              </div>
            </div>
            <Button href="https://www.google.com/search?q=yumloop+cafe+reviews" variant="white">
              Leave a Review
            </Button>
          </div>

          <SectionHeading eyebrow="Testimonials" title="Straight From Our Guests" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="flex flex-col gap-4 rounded-3xl bg-white p-7 shadow-soft hover:shadow-lift transition-shadow"
              >
                <div>
                  <p className="font-semibold text-coffee-900 text-sm">{t.name}</p>
                  <p className="text-xs text-coffee-500">{t.role}</p>
                </div>
                <RatingStars rating={t.rating} />
                <p className="text-sm text-coffee-600 leading-relaxed">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
