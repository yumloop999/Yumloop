import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import SocialIcon from "../ui/SocialIcon";
import { instagramPosts } from "../../data/galleryData";
import { siteConfig } from "../../data/siteConfig";

export default function InstagramGallery() {
  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <Container>
        <SectionHeading
          eyebrow="Follow Along"
          title={
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cherry-500 transition-colors"
            >
              {siteConfig.social.instagramHandle}
            </a>
          }
          subtitle="Tag us in your favorite Yumloop moments for a chance to be featured."
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
          {instagramPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={post.src}
                alt={post.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-coffee-950/0 group-hover:bg-coffee-950/50 transition-colors">
                <SocialIcon
                  name="instagram"
                  size={28}
                  className="text-cream-50 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
