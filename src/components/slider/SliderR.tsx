"use client";
import { AnimeObject } from "@/types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import { IconsArrow } from "@/icons/Icons";
import { CardSlider } from "../card/CardSlider";

type Props = {
  titleComponents: string;
  animes: AnimeObject[];
  link?: string;
};
export const SliderR = ({ animes, titleComponents, link }: Props) => {
  return (
    <div className="w-full relative z-10 px-3 sm:px-8 pb-5">
      <div className="text-xl  pt-3 flex  items-center justify-between ">
        <Link
          href={link ? `/${link}` : "#"}
          className="flex  gap-x-2  items-center group"
        >
          <h2 className="uppercase text-sm md:text-lg">{titleComponents}</h2>
          <span className="group-hover:opacity-100 group-hover:-translate-x-0 opacity-0 -translate-x-2 transition-all duration-300 pt-[1px] ">
            <IconsArrow />
          </span>
        </Link>
        <Link href={link ? `/${link}` : "#"}>
          <span className="text-[12px] md:text-sm hover:underline hover:opacity-80 transition-all duration-300">
            View All
          </span>
        </Link>
      </div>
      <div className="w-full h-full  flex flex-wrap justify-between py-3">
        <Swiper
          slidesPerView={6}
          spaceBetween={0}
          //navigation={true}
          breakpoints={{
            300: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            350: {
              slidesPerView: 2.5,
              spaceBetween: 5,
            },
            423: {
              slidesPerView: 2.7,
              spaceBetween: 5,
            },
            500: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            550: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            //aca la card son mas grandes y caben mesnos
            640: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4.5,
              spaceBetween: 40,
            },
            1150: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination, Navigation]}
          className="w-full h-full"
        >
          {animes?.map((anime) => (
            <SwiperSlide key={anime.id}>
              <div className="w-full h-full ">
                <CardSlider
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
