import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, SlidersHorizontal } from "lucide-react";
import Container from "../components/ui/Container";
import PageHero from "../components/ui/PageHero";
import MenuCard from "../components/menu/MenuCard";
import OrderPlatforms from "../components/menu/OrderPlatforms";
import { menuItems } from "../data/menuData";
import { categories, img, siteConfig } from "../data/siteConfig";

const tabs = [{ id: "all", label: "All", emoji: "✨" }, ...categories];

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({ veg: false, nonVeg: false, bestseller: false, isNew: false });

  useEffect(() => {
    if (activeCategory !== "all") {
      const el = document.getElementById(`cat-${activeCategory}`);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "center" }), 50);
      }
    }
  }, [activeCategory]);

  const setCategory = (id) => {
    if (id === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", id);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const toggleFilter = (key) => setFilters((prev) => ({ ...prev, [key]: !prev[key] }));

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      if (activeCategory !== "all" && item.category !== activeCategory) return false;
      if (query && !item.name.toLowerCase().includes(query.toLowerCase())) return false;
      if (filters.veg && item.veg !== true && item.veg !== "both") return false;
      if (filters.nonVeg && item.veg !== false && item.veg !== "both") return false;
      if (filters.bestseller && !item.bestseller) return false;
      if (filters.isNew && !item.isNew) return false;
      return true;
    });
  }, [activeCategory, query, filters]);

  const groupedByCategory = useMemo(() => {
    return categories
      .map((cat) => ({
        ...cat,
        items: filteredItems.filter((item) => item.category === cat.id),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [filteredItems]);

  return (
    <>
      <Helmet>
        <title>Menu | Yumloop</title>
        <meta name="description" content="Explore Yumloop's full menu — soups, salads, momos, burgers, fried chicken, pizza, Korean noodles, pasta, moktails, shakes, falooda, bubble tea and more." />
      </Helmet>

      <PageHero
        eyebrow="Our Menu"
        title="Every Flavor, One Loop"
        subtitle="Search, filter, and discover your next favorite order."
        image={img("1461023058943-07fcbe16d735")}
      />

      <OrderPlatforms />

      <section className="sticky top-[64px] z-30 glass shadow-soft py-4">
        <Container>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-coffee-400" size={18} />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for burgers, momos, pasta..."
                  className="w-full rounded-full bg-white pl-11 pr-10 py-3 text-sm text-coffee-900 shadow-soft outline-none focus:ring-2 focus:ring-cherry-500"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-coffee-400 hover:text-coffee-700"
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <FilterPill active={filters.veg} onClick={() => toggleFilter("veg")} label="Veg" />
                <FilterPill active={filters.nonVeg} onClick={() => toggleFilter("nonVeg")} label="Non-Veg" />
                <FilterPill active={filters.bestseller} onClick={() => toggleFilter("bestseller")} label="Bestseller" />
                <FilterPill active={filters.isNew} onClick={() => toggleFilter("isNew")} label="New" />
              </div>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setCategory(tab.id)}
                  className={`shrink-0 flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    activeCategory === tab.id
                      ? "bg-coffee-900 text-cream-100"
                      : "bg-white text-coffee-700 hover:bg-coffee-100"
                  }`}
                >
                  <span>{tab.emoji}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-8 md:pt-10">
        <Container>
          <div className="rounded-2xl bg-beige-100 border border-coffee-100 px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-coffee-700">
            {siteConfig.policyNotes.map((note) => (
              <p key={note} className="flex items-start gap-2">
                <span className="text-cherry-500 mt-0.5">•</span>
                {note}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-16">
        <Container>
          {filteredItems.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-24 text-center text-coffee-500">
              <SlidersHorizontal size={32} />
              <p className="text-lg font-semibold">No items match your search or filters.</p>
              <p className="text-sm">Try clearing filters or searching something else.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-16">
              <AnimatePresence mode="wait">
                {groupedByCategory.map((cat) => (
                  <motion.div
                    key={cat.id}
                    id={`cat-${cat.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="scroll-mt-40"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-2xl">{cat.emoji}</span>
                      <h2 className="font-display text-2xl md:text-3xl font-semibold text-coffee-900">
                        {cat.label}
                      </h2>
                      <span className="text-sm text-coffee-400">({cat.items.length})</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {cat.items.map((item, i) => (
                        <MenuCard key={item.id} item={item} index={i} />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}

function FilterPill({ active, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3.5 py-2 text-xs font-semibold border transition-colors ${
        active
          ? "bg-cherry-500 border-cherry-500 text-white"
          : "bg-white border-coffee-100 text-coffee-600 hover:border-coffee-300"
      }`}
    >
      {label}
    </button>
  );
}
