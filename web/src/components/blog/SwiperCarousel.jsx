import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperCarousel = ({ articles }) => {
  console.log("Articles in SwiperCarousel:", articles); // Log the articles to debug

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {articles.map((article) => (
        <SwiperSlide key={article.title}>
          <a
            href={article.href}
            className="w-full p-4 flex flex-col md:flex-row gap-4 bg-slate-100/40 shadow-xl backdrop-blur-sm rounded-xl"
          >
            {article.src && (
              <img
                className="w-full h-32 md:h-full object-cover object-center md:w-80 rounded-xl"
                src={article.src}
                alt={article.title}
              />
            )}
            <div className="w-full flex-col flex gap-2">
              <p className="text-2xl text-primary font-display font-bold">
                {article.title}
              </p>
              <p className="text-md">
                {new Date(article.date).toLocaleDateString()}
              </p>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel;
