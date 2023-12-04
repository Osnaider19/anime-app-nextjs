import { Slider } from "@/components/Hero/Slider";
import { SliderR } from "@/components/slider/SliderR";
import { getDataHome } from "@/services/getDataHome";

export async function FetchingHome() {
  const data = await getDataHome();
  if (!data) return;
  return (
    <div className="w-full relative h-full">
      <Slider animesPopular={data?.data.trending.media} />
      <div className="relative w-full h-full -mt-28">
        <SliderR
          animes={data?.data.popular.media}
          titleComponents="All Time Popular"
          link="popular"
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
