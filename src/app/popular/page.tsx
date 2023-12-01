import { Card } from "@/components/card/Card";
import { FilterGenresTags } from "@/components/filters/FilterGenresTags";
import { FiltersAll } from "@/components/filters/FiltersAll";
import { Search } from "@/components/search/Search";
import { queryAnimePopular } from "@/querys/query";
import { Pagination } from "@/types/types";
import { Suspense } from "react";

async function getAnimePopular() {
  const { query, variables } = queryAnimePopular;
  try {
    const response = await fetch("https://graphql.anilist.co", {
      cache: "force-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    if (!response.ok) {
      throw new Error("error  al obtener  los datos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export default async function PopularPage() {
  const data: Pagination = await getAnimePopular();
  console.log(data);
  return (
    <div className="pt-[70px] relative w-full h-full">
      <div className="w-[80%] m-auto h-full">
        <div className="w-full h-full flex items-center justify-between py-5">
          <h1 className="text-3xl font-semibold">Most Popular Anime</h1>
          <Search/>
        </div>
        <div>
          <Suspense fallback={<div>loader</div>}>
            <FiltersAll />
          </Suspense>
        </div>
        <div className="h-full w-full ">
          <div className="flex  gap-x-2 gap-y-4 items-center flex-wrap  justify-between py-6">
            {data.data.Page.media.map((anime) => (
              <Card
                key={anime.id}
                id={anime.id}
                color={anime.coverImage.color}
                genres={anime.genres}
                imagen={anime.coverImage.large}
                title={anime.title.userPreferred}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
