"use client";
import { AnimeObject } from "@/types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Card } from "../card/Card";

type Props = {
  animesPopular: AnimeObject[];
};
export const Popular = ({ animesPopular }: Props) => {
  console.log(animesPopular)
  return (
    <div className="w-full relative   z-10 px-8">
      <h2 className="text-2xl font-semibold py-3">Popular</h2>
      <div className="w-full h-full  flex flex-wrap justify-between py-3">
        {/* <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="w-full h-full"
        >
          {animesPopular?.map((anime) => (
            <SwiperSlide key={anime.id}>
              <Card
                color={anime.coverImage.color}
                genres={anime.genres}
                id={anime.id}
                imagen={anime.coverImage.large}
                title={anime.title.userPreferred}
              />
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </div>
  );
};
