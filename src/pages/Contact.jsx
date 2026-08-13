import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, UtensilsCrossed } from "lucide-react";
import Container from "../components/ui/Container";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import SocialIcon from "../components/ui/SocialIcon";
import ContactForm from "../components/contact/ContactForm";
import { siteConfig, img } from "../data/siteConfig";
import { whatsappLink } from "../lib/whatsapp";

const infoItems = [
  {
    icon: MapPin,
    label: "Address",
    entries: [{ value: siteConfig.address, href: siteConfig.mapLink, external: true }],
  },
  {
    icon: Phone,
    label: "Phone",
    entries: [
      { value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
      { value: siteConfig.phoneSecondary, href: `tel:${siteConfig.phoneSecondary}` },
    ],
  },
  {
    icon: Mail,
    label: "Email",
    entries: [{ value: siteConfig.email, href: `mailto:${siteConfig.email}` }],
  },
];

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Yumloop</title>
        <meta name="description" content="Get in touch with Yumloop — address, phone, email, opening hours and location map." />
      </Helmet>

      <PageHero
        eyebrow="Get In Touch"
        title="Contact Yumloop"
        subtitle="Questions, feedback, or planning a celebration? We'd love to hear from you."
        image={img("1441986300917-64674bd600d8")}
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              <SectionHeading align="left" eyebrow="Visit or Reach Out" title="We're Just a Message Away" />

              <div className="flex flex-col gap-4">
                {infoItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-soft">
                    <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-coffee-900 text-cream-100 shrink-0">
                      <item.icon size={18} />
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-xs uppercase tracking-wide text-coffee-400 font-semibold">{item.label}</p>
                      {item.entries.map((entry) =>
                        entry.href ? (
                          <a
                            key={entry.value}
                            href={entry.href}
                            target={entry.external ? "_blank" : undefined}
                            rel={entry.external ? "noopener noreferrer" : undefined}
                            className="text-coffee-800 font-medium hover:text-cherry-500"
                          >
                            {entry.value}
                          </a>
                        ) : (
                          <p key={entry.value} className="text-coffee-800 font-medium">
                            {entry.value}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                ))}

                <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-soft">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-coffee-900 text-cream-100 shrink-0">
                    <Clock size={18} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-coffee-400 font-semibold">Opening Hours</p>
                    {siteConfig.hours.map((h) => (
                      <p key={h.day} className="text-coffee-800 font-medium text-sm">
                        {h.day}: {h.time}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-soft">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-coffee-900 text-cream-100 shrink-0">
                    <UtensilsCrossed size={18} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-coffee-400 font-semibold">Service Options</p>
                    <p className="text-coffee-800 font-medium text-sm">
                      {siteConfig.serviceOptions.join(" • ")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-coffee-900 text-cream-100 hover:bg-cherry-500 transition-colors" aria-label="Instagram">
                  <SocialIcon name="instagram" size={18} />
                </a>
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-coffee-900 text-cream-100 hover:bg-cherry-500 transition-colors" aria-label="Facebook">
                  <SocialIcon name="facebook" size={18} />
                </a>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors" aria-label="WhatsApp">
                  <SocialIcon name="whatsapp" size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3 rounded-3xl bg-cream-50 border border-coffee-100 shadow-soft p-6 md:p-10"
            >
              <h3 className="font-display text-2xl font-semibold text-coffee-900 mb-6">Send Us a Message</h3>
              <ContactForm />
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="rounded-3xl overflow-hidden shadow-soft">
            <iframe
              title="Yumloop location map"
              src={siteConfig.mapEmbedSrc}
              className="w-full h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
