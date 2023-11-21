"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AnimeObject } from "@/types/types";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { IconsPoint } from "@/icons/Icons";
import { formatDate } from "@/helpers/formatDate";
import Link from "next/link";

type Props = {
  animesPopular: AnimeObject[];
};
export const Slider = ({ animesPopular }: Props) => {
  return (
    <div className="w-full h-[600px] flex justify-center items-center ">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        modules={[EffectFade, Navigation, Pagination , Autoplay]}
        className="w-full h-full"
      >
        {animesPopular.map((anime, index) => {
          if (!anime.bannerImage) return;
          return (
            <SwiperSlide key={anime.id}>
              <div className="w-full h-[490px] relative pt-[80px] px-8 pb-5 bg-gradient-to-b ">
                <div
                  className="w-full h-[570px] absolute top-0 left-0 opacity-90"
                  style={{
                    background: `linear-gradient(${
                      anime.coverImage.color
                    }, ${anime.coverImage.color}   , #000 )`,
                  }}
                ></div>

                <Link href={`/anime/${anime.id}`} className="w-full h-full">
                  <div className="w-full relative h-full  rounded-lg overflow-hidden border border-[#ffffff20] shadow-xl ">
                    <div
                      className="w-full h-full absolute top-0 left-0  -z-[1s]"
                      style={{
                        backgroundImage: `url(${anime.bannerImage})`,
                        backgroundPosition: "top",
                      }}
                    ></div>
                    <div className="w-full h-full absolute top-0 left-0 bg-black/50 "></div>
                    <div className="relative w-full h-full px-6 py-9">
                      <p className="text-3xl font-bold">
                        {anime.title.userPreferred}
                      </p>
                      <div className="flex  items-center  gap-x-1 py-3">
                        {anime.genres.map((genre, index) => (
                          <div
                            key={index}
                            className="flex justify-center items-center "
                          >
                            <div className=" flex justify-center items-center">
                              <p>{genre}</p>
                              <span>
                                {index < anime.genres.length - 1 && (
                                  <IconsPoint />
                                )}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="py-1  flex  items-center">
                          <p className="font-semibold capitalize">episode : </p>
                          <p>{anime.nextAiringEpisode.episode}</p>
                        </div>
                  
                        <div className="py-1  flex  items-center">
                          <p className="font-semibold capitalize">release date :</p>
                          <p>{formatDate(anime.startDate)}</p>
                        </div>
                        <div
                          className="line-clamp-4 w-[50%] pt-4"
                          dangerouslySetInnerHTML={{
                            __html: anime.description,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

/*

 {animesPopular?.map((anime) => (
          <SwiperSlide>
            <div>
                
            </div>
            <img
              src={anime.bannerImage}
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}

*/
