import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import MenuCard from "../menu/MenuCard";
import { bestsellers } from "../../data/menuData";

export default function BestSellers() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-20 md:py-28 bg-beige-100">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
          <SectionHeading
            align="left"
            eyebrow="Fan Favorites"
            title="Our Best Sellers"
            subtitle="The dishes and drinks our regulars keep coming back for."
          />
          <div className="hidden md:flex items-center gap-3 mb-14">
            <button
              ref={prevRef}
              type="button"
              aria-label="Previous"
              className="p-3 rounded-full bg-white shadow-soft hover:bg-coffee-900 hover:text-cream-100 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              ref={nextRef}
              type="button"
              aria-label="Next"
              className="p-3 rounded-full bg-white shadow-soft hover:bg-coffee-900 hover:text-cream-100 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.15}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 4 },
          }}
          className="!pb-4"
        >
          {bestsellers.map((item, i) => (
            <SwiperSlide key={item.id}>
              <MenuCard item={item} index={i} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
