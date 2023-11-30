"use client";
import { AnimeObject } from "@/types/types";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Card } from "../card/Card";
import Link from "next/link";
import { IconsArrow } from "@/icons/Icons";

type Props = {
  titleComponents: string;
  animes: AnimeObject[];
  link?: string;
};
export const SliderR = ({ animes, titleComponents, link }: Props) => {
  return (
    <div className="w-full relative z-10 px-8 pb-5">
      <div className="text-xl  pt-3 flex  items-center ">
        <Link
          href={ link ? `/${link}` : "#"}
          className="flex  gap-x-2  items-center group"
        >
          <h2>{titleComponents}</h2>
          <span className="group-hover:opacity-100 group-hover:-translate-x-0 opacity-0 -translate-x-2 transition-all duration-300 ">
            <IconsArrow />
          </span>
        </Link>
      </div>
      <div className="w-full h-full  flex flex-wrap justify-between py-3">
        <Swiper
          slidesPerView={6}
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
              slidesPerView: 6,
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
