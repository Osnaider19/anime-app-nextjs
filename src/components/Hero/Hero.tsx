import { AnimeObject } from "@/types/types";
import { Slider } from "./Slider";
import { Popular } from "./Popular";
import { Suspense } from "react";
import { SliderR } from "../slider/SliderR";

async function getData() {
  try {
    const response = await fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
            query($season:MediaSeason,$seasonYear:Int $nextSeason:MediaSeason,$nextYear:Int){trending:Page(page:1,perPage:6){media(sort:TRENDING_DESC,type:ANIME,isAdult:false){...media}}season:Page(page:1,perPage:6){media(season:$season,seasonYear:$seasonYear,sort:POPULARITY_DESC,type:ANIME,isAdult:false){...media}}nextSeason:Page(page:1,perPage:6){media(season:$nextSeason,seasonYear:$nextYear,sort:POPULARITY_DESC,type:ANIME,isAdult:false){...media}}popular:Page(page:1,perPage:6){media(sort:POPULARITY_DESC,type:ANIME,isAdult:false){...media}}top:Page(page:1,perPage:10){media(sort:SCORE_DESC,type:ANIME,isAdult:false){...media}}}fragment media on Media{id title{userPreferred}coverImage{extraLarge large color}startDate{year month day}endDate{year month day}bannerImage season seasonYear description type format status(version:2)episodes duration chapters volumes genres isAdult averageScore popularity mediaListEntry{id status}nextAiringEpisode{airingAt timeUntilAiring episode}studios(isMain:true){edges{isMain node{id name}}}}
            `,
        variables: {},
      }),
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
type Data = {
  data: {
    nextSesion: {
      media: Array<AnimeObject>;
    };
    popular: {
      media: Array<AnimeObject>;
    };
    sesion: {
      media: Array<AnimeObject>;
    };
    top: {
      media: Array<AnimeObject>;
    };
    trending: {
      media: Array<AnimeObject>;
    };
  };
};
export async function Hero() {
  const data: Data = await getData();
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
        <SliderR animes={data?.data.top.media} titleComponents="Top 100 anime" />
      </Suspense>
    </div>
  );
}
