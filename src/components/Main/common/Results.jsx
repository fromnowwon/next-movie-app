import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./SwiperCustom.css";
import MovieCard from "./MovieCard";

export default function Results({ movies }) {
  return (
    <div className="mt-3 min-h-[294px]">
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          390: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        navigation
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {movies &&
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
