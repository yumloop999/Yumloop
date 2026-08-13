import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Target, Eye, HeartHandshake } from "lucide-react";
import Container from "../components/ui/Container";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import aboutPhoto from "../assets/About.png";
import cafePhoto from "../assets/Cafe.png";

const values = [
  { icon: Target, title: "Our Mission", text: "To serve exceptional, handcrafted food and drinks in a space that feels like home." },
  { icon: Eye, title: "Our Vision", text: "To become the neighborhood's most loved café — where flavor and community loop together." },
  { icon: HeartHandshake, title: "Our Values", text: "Freshness, honesty, warmth and craftsmanship in everything we bake and brew." },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Yumloop</title>
        <meta name="description" content="The Yumloop story — our founder, mission, vision and values." />
      </Helmet>

      <PageHero
        eyebrow="Our Story"
        title="About Yumloop"
        subtitle="From a home kitchen to a café loved by the neighborhood."
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
              className="relative rounded-3xl overflow-hidden shadow-lift aspect-[4/5] order-2 lg:order-1"
            >
              <img src={aboutPhoto} alt="Yumloop founder" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4 order-1 lg:order-2"
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-coffee-900">
                Why We Started Yumloop
              </h2>
              <p className="text-coffee-600 leading-relaxed">
                Yumloop began with a simple love for baking birthday cakes for friends and family.
                What started as late-night kitchen experiments turned into a full-blown obsession with
                flavor, texture and presentation.
              </p>
              <p className="text-coffee-600 leading-relaxed">
                Today, YumLoop is a café built on that same obsession—every creation is made with
                intention, every cake is designed around a story, and every guest is treated like
                family. We wanted to create a place people would love to loop back to, again and again.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-coffee-900 text-cream-100">
        <Container>
          <SectionHeading light eyebrow="What Drives Us" title="Mission, Vision & Values" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-4 rounded-3xl bg-coffee-800/60 p-8"
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-cherry-500 text-white">
                  <v.icon size={26} />
                </span>
                <h3 className="font-display text-xl font-semibold">{v.title}</h3>
                <p className="text-sm text-cream-300">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
