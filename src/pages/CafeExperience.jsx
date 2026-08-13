import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Clock, Sofa, Car, Wifi } from "lucide-react";
import Container from "../components/ui/Container";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import { siteConfig } from "../data/siteConfig";
import { galleryImages } from "../data/galleryData";
import cafePhoto from "../assets/Cafe.png";

const infoCards = [
  {
    icon: Clock,
    title: "Opening Hours",
    lines: siteConfig.hours.map((h) => `${h.day}: ${h.time}`),
  },
  {
    icon: Sofa,
    title: "Seating",
    lines: ["Indoor lounge & booth seating", "Outdoor patio seating", "Private table for 8+ groups"],
  },
  {
    icon: Car,
    title: "Parking",
    lines: ["Complimentary valet on weekends", "Street parking available", "2-wheeler stand at entrance"],
  },
  {
    icon: Wifi,
    title: "WiFi",
    lines: ["High-speed complimentary WiFi", "Ask our staff for the password", "Great for work & study sessions"],
  },
];

const interiorImages = galleryImages.filter((g) => g.category === "cafe-interior");

export default function CafeExperience() {
  return (
    <>
      <Helmet>
        <title>Café Experience | Yumloop</title>
        <meta name="description" content="Discover the Yumloop café experience — ambience, hours, seating, parking, WiFi and location." />
      </Helmet>

      <PageHero
        eyebrow="Visit Us"
        title="The Yumloop Experience"
        subtitle="More than a café — a warm, welcoming space designed for every kind of gathering."
        image={cafePhoto}
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <span className="uppercase tracking-[0.2em] text-xs md:text-sm font-semibold text-cherry-500">
                About The Café
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-coffee-900">
                Where Every Dish Tells a Story
              </h2>
              <p className="text-coffee-600 leading-relaxed">
                Yumloop began as a small neighborhood dream — to build a space where bold flavors,
                honest food and warm company come together. Our café blends rustic wood tones with
                soft ambient lighting, creating a space that feels equal parts cozy and elevated.
              </p>
              <p className="text-coffee-600 leading-relaxed">
                Whether you're catching up with friends, grabbing a quick bite, or celebrating a
                birthday over shared plates, Yumloop is designed to make every visit feel like a loop
                worth repeating.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-lift aspect-[4/5]"
            >
              <img src={cafePhoto} alt="Yumloop café interior" className="h-full w-full object-cover" />
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-beige-100">
        <Container>
          <SectionHeading eyebrow="Good to Know" title="Plan Your Visit" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-soft"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-coffee-900 text-cream-100">
                  <card.icon size={22} />
                </span>
                <h3 className="font-display text-lg font-semibold text-coffee-900">{card.title}</h3>
                <ul className="text-sm text-coffee-600 flex flex-col gap-1">
                  {card.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading eyebrow="Ambience" title="A Glimpse Inside Yumloop" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {interiorImages.map((image, i) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="aspect-square rounded-2xl overflow-hidden"
              >
                <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover hover:scale-110 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden shadow-soft">
            <iframe
              title="Yumloop location map"
              src={siteConfig.mapEmbedSrc}
              className="w-full h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
