"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AnimeObject } from "@/types/types";
import { EffectFade, Navigation, Pagination , Autoplay} from "swiper/modules";

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
                      anime.coverImage.color + `90`
                    }, ${anime.coverImage.color}   , #000 )`,
                  }}
                ></div>

                <div className="w-full relative h-full  rounded-lg overflow-hidden border border-[#ffffff20] shadow-xl ">
                  <div
                    className="w-full h-full absolute top-0 left-0  -z-[1s]"
                    style={{
                      backgroundImage: `url(${anime.bannerImage})`,
                      backgroundPosition: "top",
                    }}
                  ></div>
                  <div className="w-full h-full absolute top-0 left-0 bg-black/20 "></div>
                  <div className="relative w-full h-full px-6 py-9">
                    <p className="text-3xl font-bold">
                      {anime.title.userPreferred}
                    </p>
                    <div className="flex  items-center gap-x-3 py-3">
                      {anime.genres.map((genre) => (
                        <p>{genre}</p>
                      ))}
                    </div>
                  </div>
                </div>
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
