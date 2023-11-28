"use client";
import { AnimeObject } from "@/types/types";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Card } from "../card/Card";

type Props = {
  titleComponents: string;
  animes: AnimeObject[];
};
export const SliderR = ({ animes, titleComponents }: Props) => {
  
  return (
    <div className="w-full relative z-10 px-8 pb-5">
      <h2 className="text-xl  pt-3">{titleComponents}</h2>
      <div className="w-full h-full  flex flex-wrap justify-between py-3">
        <Swiper
          slidesPerView={5.4}
          spaceBetween={0}
          // pagination={{
          //   clickable: true,
          // }}
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
              slidesPerView: 5.4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="w-full h-full"
        >
          {animes?.map((anime) => (
            <SwiperSlide key={anime.id}>
              <div className="w-full h-full ">
                <Card
                  color={anime.coverImage.color}
                  genres={anime.genres}
                  id={anime.id}
                  imagen={anime.coverImage.large}
                  title={anime.title.userPreferred}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
