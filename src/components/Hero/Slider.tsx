"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AnimeObject } from "@/types/types";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { IconsPoint } from "@/icons/Icons";
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
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="w-full h-full"
      >
        {animesPopular.map((anime) => {
          if (!anime.bannerImage) return;
          return (
            <SwiperSlide key={anime.id}>
              <div className=" w-full h-[490px] relative pt-[70px] sm:px-8 pb-5 bg-gradient-to-b flex flex-col justify-center items-center">
                <div
                  className="w-full h-[570px] absolute top-0 left-0 opacity-90"
                  style={{
                    background: `linear-gradient(${anime.coverImage.color}, ${anime.coverImage.color}  , #000 )`,
                  }}
                ></div>

                <Link href={`/anime/${anime.id}`} className="w-full h-full">
                  <div className="w-[350px] sm:w-full relative h-full  rounded-lg overflow-hidden border border-[#ffffff30] shadow-2xl m-auto">
                    <div
                      className="hidden md:block w-full h-full absolute top-0 left-0  "
                      style={{
                        backgroundImage: `url(${anime.bannerImage})`, //aqui
                        backgroundPosition: "top",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>

                    {/* <div 
                      className="md:hidden w-full h-full absolute top-0 left-0  "
                      style={{
                        backgroundImage: `url(${anime.coverImage.extraLarge})`, //aqui
                        backgroundPosition: "top",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100%",
                      }}
                    ></div> */}
                    <img
                      src={anime.coverImage.extraLarge}
                      alt={`image de ${anime.title.userPreferred}`}
                      className="md:hidden w-full h-full absolute top-0 left-0  object-cover"
                      loading="lazy"
                    />
                    <div
                      className="w-full h-full absolute top-0 left-0"
                      style={{
                        background: `linear-gradient(rgba(0,0,0 , .1) , rgba(0,0,0 , .1), ${
                          anime.coverImage.color
                            ? anime.coverImage.color
                            : "rgba(0,0,0 ,.5)"
                        })`,
                      }}
                    ></div>
                    <div
                      className="w-full h-full absolute top-0 left-0"
                      style={{
                        background: `linear-gradient(transparent , 
                          rgba(0,0,0 , .5)`,
                      }}
                    ></div>
                    <div className="relative w-full h-full px-6 pt-9 pb-2  flex justify-center items-end">
                      <div className="flex justify-center items-end flex-col w-full ">
                        <div className="w-full h-full ">
                          <p className="font-extrabold text-center drop-shadow-2xl  line-clamp-2 sm:line-clamp-1 text-2xl sm:text-4xl">
                            {anime.title.userPreferred}
                          </p>
                        </div>
                        <div className="flex  items-center  gap-x-1 py-1 w-full justify-center flex-wrap">
                          {anime?.genres.map((genre, index) => (
                            <div
                              key={index}
                              className="flex justify-center items-center "
                            >
                              <div className=" flex justify-center items-center gap-x-1 ">
                                <p>{genre}</p>
                                <span className="block min-h-full ">
                                  {index < anime.genres.length - 1 && (
                                    <IconsPoint  fill={anime.coverImage.color}/>
                                  )}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex justify-center items-center flex-col w-[80%] m-auto">
                          <div
                            className="line-clamp-2 w-full pt-2 text-center text-sm sm:text-base sm:line-clamp-4 hidden"
                            dangerouslySetInnerHTML={{
                              __html: anime.description,
                            }}
                          ></div>
                        </div>
                        {/* buttons */}
                        <div className="flex justify-cente  w-full items-center gap-x-2 py-2 sm:hidden ">
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
