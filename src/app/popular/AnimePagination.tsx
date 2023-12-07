import { Card } from "@/components/card/Card";
import { queryAnimePopular } from "@/querys/query";
import { Pagination } from "@/types/types";
import { PaginationComponent } from "./PaginationComponent";
import { fetchAnime } from "@/services/fetchAnime";
import { validateVariables } from "@/helpers/validateVariables";

type Props = {
  searchParams: {
    genres?: string;
    page?: number;
    search?: string;
    year?: string;
    season?: string;
    seasonyear?: string;
    format?: string;
    sort: string;
  };
};
export async function Animes({ searchParams }: Props) {
  const { query } = queryAnimePopular;
  const data: Pagination = await fetchAnime(
    query,
    validateVariables(searchParams)
  );

  if (!data || data.data.Page.media.length === 0) {
    return (
      <div className="w-full h-[50vh] flex justify-center items-center flex-grow">
        <h2 className="text-3xl font-bold">If results check the filters</h2>
      </div>
    );
  }
  return (
    <>
      <div className="h-full w-full ">
        <div className="flex flex-wrap py-2  md:w-full justify-center gap-y-4 gap-x-2 md:py-6 md:gap-4 md:justify-center items-center mx-auto xl:grid xl:grid-cols-5">
          {data?.data.Page.media.map((anime) => (
            <Card
              key={anime.id}
              id={anime.id}
              color={anime.coverImage.color}
              genres={anime.genres}
              imagen={anime.coverImage.large}
              title={anime.title.userPreferred}
              description={anime.description}
              episodes={anime.episodes}
              averageScore={anime.averageScore}
              yearStart={anime.startDate.year}
              yearEnd={anime.endDate.year}
              hover={true}
            />
          ))}
        </div>
      </div>
      <PaginationComponent pageInfo={data?.data?.Page?.pageInfo} />
    </>
  );
}
