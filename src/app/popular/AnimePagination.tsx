import { Card } from "@/components/card/Card";
import { queryAnimePopular } from "@/querys/query";
import { Pagination } from "@/types/types";
import { ButtonVermas } from "./ButtonVermas";
import { fetchAnime } from "@/services/fetchAnime";
type PageParams = {
  searchParams: {
    genres?: string;
    page?: number;
  };
};
export async function Animes({ searchParams }: PageParams) {
  const { genres, page } = searchParams;
  const { query } = queryAnimePopular;
  const variables = {
    page: Number(page) || 1,
    type: "ANIME",
    sort: "POPULARITY_DESC",
    genres: genres?.split(","), //comvertir en arry
  };
  const data: Pagination = await fetchAnime(query, variables);
  if (data.data.Page.media.length === 0) {
    return (
      <div>
        <h2>No result</h2>
      </div>
    );
  }
  return (
    <div className="h-full w-full ">
      <div className="flex  gap-x-2 gap-y-4 items-center flex-wrap  justify-between py-6">
        {data?.data.Page.media.map((anime) => (
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
      <ButtonVermas />
    </div>
  );
}
