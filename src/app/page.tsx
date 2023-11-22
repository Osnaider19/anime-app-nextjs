import { Slider } from "@/components/Hero/Slider";
import SkeletonHome from "@/components/skeleton/SkeletonHome";
import { SliderR } from "@/components/slider/SliderR";
import { getDataHome } from "@/services/getDataHome";
import { Suspense } from "react";

export default async function Home() {
  const data  = await getDataHome();
  if (!data) return;
  return (
    <main className="relative w-full h-full">
      <Suspense fallback={<SkeletonHome />}>
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
          <SliderR
            animes={data?.data.top.media}
            titleComponents="Top 100 anime"
          />
          <SliderR
            animes={data?.data.season.media}
            titleComponents="Popular this season"
          />
        </div>
      </Suspense>
    </main>
  );
}
