"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AnimeObject } from "@/types/types";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { IconFavorite, IconPlayHome, IconsPoint } from "@/icons/Icons";
import Link from "next/link";
import { Button, Tooltip } from "@nextui-org/react";

export const DestopHero = ({ animes }: { animes: AnimeObject[] }) => {
  const validAnimes = animes.filter((anime) => anime.bannerImage);
  if (!validAnimes.length) {
    return <div>No hay animes disponibles</div>;
  }
  return (
    <div className="w-full h-[600px] flex justify-center items-center ">
      <Swiper
        spaceBetween={30}
        navigation={true}
        effect={"fade"}
        loop={true}
        slidesPerView={1} // Asegura que solo muestra una diapositiva a la vez
        slidesPerGroup={1}
        slidesPerGroupSkip={0}
        autoplay={{
          delay: 5000,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="w-full h-full "
      >
        {validAnimes.map((anime, index) => {
          return (
            <SwiperSlide key={`anime-${anime.id}-${index}`}>
              <div className=" w-full h-[530px] relative pt-[60px] pb-2 bg-gradient-to-b flex flex-col justify-center items-center">
                <div className="w-full relative h-full   overflow-hidden m-auto px-5">
                  <img
                    className="w-full h-full absolute top-0 left-0  object-cover object-top"
                    src={anime.bannerImage}
                    loading="lazy"
                    alt={`image the ${anime.title.userPreferred}`}
                  />

                  <div
                    className="w-full h-full absolute top-0 left-0"
                    style={{
                      background: `linear-gradient(to right, rgb(0, 0 ,0.5) , transparent, transparent`,
                    }}
                  ></div>

                  <div
                    className="w-full h-full absolute top-0 left-0"
                    style={{
                      background: `linear-gradient(to top, rgb(0, 0, 0.5), transparent, transparent `,
                    }}
                  ></div>

                  <div className="relative w-full h-full px-8 pt-9 pb-2 ">
                    <div className="flex flex-col w-full ">
                      <div className="w-full h-full ">
                        <p className="font-extrabold py-2  drop-shadow-2xl  line-clamp-2 sm:line-clamp-1 text-2xl sm:text-4xl">
                          {anime.title.userPreferred}
                        </p>
                      </div>
                      <div className="flex    gap-x-1 py-1 w-full flex-wrap">
                        {anime?.genres.map((genre, index) => (
                          <Link
                            href={`/search/anime?genres=${genre}`}
                            key={`genre-${anime.id}-${index}`}
                          >
                            <div className="flex justify-center items-center ">
                              <div className=" flex justify-center items-center gap-x-1 ">
                                <p className="text-xs">{genre}</p>
                                <span className="block min-h-full ">
                                  {index < anime.genres.length - 1 && (
                                    <IconsPoint fill={anime.coverImage.color} />
                                  )}
                                </span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <div className="flex justify-center items-center flex-col w-[40%] ">
                        <div
                          className="line-clamp-2 w-full pt-2 text-base sm:text-base sm:line-clamp-6 hidden"
                          dangerouslySetInnerHTML={{
                            __html: anime.description,
                          }}
                        ></div>
                      </div>
                      <div className="flex justify-start items-center  py-2 gap-x-2">
                        {anime.averageScore && (
                          <Tooltip content="AverageScore" delay={200}>
                            <Button className="rounded-full overflow-hidden border p-0  flex justify-center items-center font-semibold underline-offset-1 bg-transparent border-danger-500">
                              {anime.averageScore}%
                            </Button>
                          </Tooltip>
                        )}

                        {anime.seasonYear && (
                          <Tooltip content="Season Year" delay={200}>
                            <Button className="rounded-full overflow-hidden border p-0  flex justify-center items-center font-semibold underline-offset-1 bg-transparent border-danger-500">
                              <Link
                                href={`/search/anime?season=${anime.season}`}
                              >
                                {anime.seasonYear}
                              </Link>
                            </Button>
                          </Tooltip>
                        )}

                        {anime.season && (
                          <Tooltip content="Season Year" delay={200}>
                            <Button className="rounded-full overflow-hidden border p-0  flex justify-center items-center font-semibold underline-offset-1 bg-transparent border-danger-500">
                              {anime.season}
                            </Button>
                          </Tooltip>
                        )}
                      </div>
                      <div className="py-2   flex justify-start items-center gap-x-2">
                        <Link href={`/anime/${anime.id}`}>
                          <div className="py-2 px-4 flex justify-center items-center  bg-[#F31260] gap-x-2">
                            <span>
                              <IconPlayHome fill="currentColor" size={24} />
                            </span>
                            <span className=" uppercase ">start to see</span>
                          </div>
                        </Link>

                        <div className=" py-2 px-4 bg-[#F31260] h-full flex justify-center items-center">
                          <span className="block cursor-pointer">
                            <IconFavorite size={24} fill="currentColor" />
                          </span>
                        </div>
                      </div>
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
