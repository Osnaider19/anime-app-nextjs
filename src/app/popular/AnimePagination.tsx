import { Card } from "@/components/card/Card";
import { queryAnimePopular } from "@/querys/query";
import { PageParams, Pagination } from "@/types/types";
import { PaginationComponent } from "./PaginationComponent";
import { fetchAnime } from "@/services/fetchAnime";
import { validateVariables } from "@/helpers/validateVariables";


export async function Animes({ searchParams }: PageParams) {
  const { query } = queryAnimePopular;
  const data: Pagination = await fetchAnime(
    query,
    validateVariables(searchParams)
  );

  if (!data || data.data.Page.media.length === 0) {
    return (
      <div className="w-full h-[50vh] flex justify-center items-center flex-grow">
        <h2 className="text-3xl font-bold">No result chekaout filters</h2>
      </div>
    );
  }
  return (
    <>
      <div className="h-full w-full ">
        <div className="grid grid-cols-5 py-6 gap-4 justify-center items-center">
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
