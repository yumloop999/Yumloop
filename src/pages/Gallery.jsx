import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import Container from "../components/ui/Container";
import PageHero from "../components/ui/PageHero";
import Lightbox from "../components/gallery/Lightbox";
import { galleryImages, galleryCategories } from "../data/galleryData";
import { img } from "../data/siteConfig";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? galleryImages
        : galleryImages.filter((g) => g.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <Helmet>
        <title>Gallery | Yumloop</title>
        <meta name="description" content="Browse the Yumloop gallery — cakes, coffee, drinks, pizza, waffles and café interiors." />
      </Helmet>

      <PageHero
        eyebrow="Visual Menu"
        title="The Yumloop Gallery"
        subtitle="A feast for the eyes before it's a feast for the tastebuds."
        image={img("1495521821757-a1efb6729352")}
      />

      <section className="py-14 md:py-20">
        <Container>
          <div className="flex gap-2 overflow-x-auto pb-2 mb-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  activeCategory === cat.id
                    ? "bg-coffee-900 text-cream-100"
                    : "bg-white text-coffee-700 shadow-soft hover:bg-coffee-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 [&>*]:mb-4">
            {filtered.map((image, i) => (
              <motion.button
                key={image.id}
                type="button"
                onClick={() => setLightboxIndex(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
                className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl shadow-soft"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-coffee-950/0 group-hover:bg-coffee-950/40 transition-colors">
                  <Expand className="text-cream-50 opacity-0 group-hover:opacity-100 transition-opacity" size={22} />
                </div>
              </motion.button>
            ))}
          </div>
        </Container>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
