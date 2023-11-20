import { Slider } from "./Slider";
import { Suspense } from "react";
import { SliderR } from "../slider/SliderR";
import { getDataHome } from "@/services/getDataHome";


export async function Hero() {
  const data = await getDataHome();
  if (!data) return;
  return (
    <div className="w-full relative h-full">
      <Suspense fallback={<div>loanding</div>}>
        <Slider animesPopular={data?.data.trending.media} />
        <div className="relative w-full h-full -mt-20">
          <SliderR
            animes={data?.data.popular.media}
            titleComponents="All time popular"
          />
        </div>
        <SliderR
          animes={data?.data.nextSeason.media}
          titleComponents="Upcoming next season"
        />
        <SliderR
          animes={data?.data.top.media}
          titleComponents="Top 100 anime"
        />
        <SliderR
          animes={data?.data.season.media}
          titleComponents="Popular this season"
        />
      </Suspense>
    </div>
  );
}
