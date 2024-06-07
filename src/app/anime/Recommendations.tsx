"use client";
import { Recommendations } from "@/types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CardSlider } from "@/components/card/CardSlider";

export const Recommendation = ({
  recommendations,
}: {
  recommendations: Recommendations;
}) => {
  return (
    <>
      {recommendations.nodes.length > 1 && (
        <div className="w-full h-full">
          <h2 className="font-semibold py-2">Recommendations</h2>
          <div className="flex justify-center w-full items-center">
            <Swiper
              slidesPerView={6}
              spaceBetween={0}
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
                  slidesPerView: 5.5,
                  spaceBetween: 40,
                },
              }}
              modules={[Pagination, Navigation]}
              className="w-full h-full"
            >
              {recommendations.nodes.map((anime) => (
                <SwiperSlide key={anime.mediaRecommendation.id}>
                  <CardSlider
                    color={anime.mediaRecommendation.coverImage.color}
                    genres={anime.mediaRecommendation.genres}
                    id={anime.mediaRecommendation.id}
                    imagen={anime.mediaRecommendation.coverImage.large}
                    title={anime.mediaRecommendation.title.userPreferred}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};
