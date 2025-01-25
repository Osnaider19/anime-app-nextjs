"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { IconsPoint } from "@/icons/Icons";
import Link from "next/link";
import { AnimeObject } from "@/types/types";

export const MobileHero = ({ animes }: { animes: AnimeObject[] }) => {
  //
  const validAnimes = animes.filter((anime) => anime.bannerImage);
  // validar los animes 
  if (!validAnimes.length) return;

  return (
    <div className="w-full h-[600px] flex justify-center items-center ">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        slidesPerView={1} // Asegura que solo muestra una diapositiva a la vez
        slidesPerGroup={1}
        slidesPerGroupSkip={0}
        
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="w-full h-full "
      >
        {validAnimes.map((anime, index) => {
          return (
            <SwiperSlide key={`anime-${anime.id}-${index}`}>
              <div
                className="w-full h-full flex justify-center items-center pt-[80px] pb-[80px]"
                style={{
                  background: `linear-gradient(${anime.coverImage.color}, ${anime.coverImage.color}  , #000 )`,
                }}
              >
                <div className="w-[350px]  relative h-full  overflow-hidden  rounded-2xl border border-[#ffffff30] shadow-2xl ">
                  <Link href={`/anime/${anime.id}`}>
                    <img
                      src={anime.coverImage.extraLarge}
                      alt={anime.title.userPreferred}
                      loading="lazy"
                      className="absolute left-0 top-0 w-full h-full object-cover"
                    />
                    <div
                      className="w-full h-full absolute top-0 left-0"
                      style={{
                        background: `linear-gradient(transparent ,
                          rgba(0,0,0 , .7)`,
                      }}
                    ></div>
                    {/* */}
                    <div className="w-full h-full relative flex justify-center items-end ">
                      <div className="relative w-full h-full px-6 pt-9 pb-2  flex justify-start items-end ">
                        <div className="flex justify-start items-start flex-col w-full ">
                          <div className="w-full h-full ">
                            <p className="font-extrabold  drop-shadow-2xl  line-clamp-2  text-2xl  text-center">
                              {anime.title.userPreferred}
                            </p>
                          </div>
                          <div className="flex  items-center  gap-x-1 py-2 w-full justify-center flex-wrap">
                            {anime?.genres.map((genre, index) => (
                              <div
                                className="flex justify-center items-center "
                                key={index}
                              >
                                <div className=" flex justify-center items-center gap-x-1 ">
                                  <p>{genre}</p>
                                  <span className="block min-h-full ">
                                    {index < anime.genres.length - 1 && (
                                      <IconsPoint
                                        fill={anime.coverImage.color}
                                      />
                                    )}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* buttons */}
                          <div className="flex justify-cente  w-full items-center gap-x-2 py-2  ">
                            <div className="bg-[#ffffff] text-[#000]  flex justify-center items-center py-1  rounded-[4px] overflow-hidden w-[50%]">
                              <span className="block font-semibold">Ver</span>
                            </div>

                            <button className="bg-[#ffffff30] w-[50%] rounded-[4px] flex justify-center items-center py-1">
                              <span className="block">+</span>
                              <span className="block font-semibold">
                                Mi lista
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
