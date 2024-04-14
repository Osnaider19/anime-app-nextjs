import { Slider } from "@/components/Hero/Slider";
import { SliderR } from "@/components/slider/SliderR";
import { getDataHome } from "@/services/getDataHome";

export async function FetchingHome() {
  const data = await getDataHome();

  if (!data?.data) return;

  return (
    <div className="w-full relative h-full">
      <Slider animesPopular={data?.data.trending.media} />
      <div className="relative w-full h-full -mt-28">
        <SliderR
          animes={data?.data.trending.media}
          titleComponents="Trending Now"
          link="search/anime/trending"
        />
      </div>

      <SliderR
        animes={data?.data.season.media}
        titleComponents="Popular this season"
        link="search/anime/this-season"
      />
      <SliderR
        animes={data?.data.nextSeason.media}
        titleComponents="Upcoming next season"
        link="search/anime/next-season"
      />
      <SliderR
        animes={data?.data.popular.media}
        titleComponents="All Time Popular"
        link="search/anime/popular"
      />
      <SliderR
        animes={data?.data.top.media}
        titleComponents="Top 100 anime"
        link="search/anime/top-100"
      />
    </div>
  );
}
