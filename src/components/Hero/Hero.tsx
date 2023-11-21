import { Slider } from "./Slider";
import { Suspense } from "react";
import { SliderR } from "../slider/SliderR";
import { getDataHome } from "@/services/getDataHome";
import { Popular } from "./Popular";


export async function Hero() {
  const data = await getDataHome();
  if (!data) return;
  return (
    <div className="w-full relative h-full">
      <Slider animesPopular={data?.data.trending.media} />
      {/* <Popular animesPopular={data?.data}/> */}
      <div className="relative w-full h-full -mt-24">
        <SliderR
          animes={data?.data.popular.media}
          titleComponents="All time popular"
        />
      </div>
      <SliderR
        animes={data?.data.nextSeason.media}
        titleComponents="Upcoming next season"
      />
      <SliderR animes={data?.data.top.media} titleComponents="Top 100 anime" />
      <SliderR
        animes={data?.data.season.media}
        titleComponents="Popular this season"
      />
    </div>
  );
}
