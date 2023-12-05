import { PaginationComponent } from "@/app/popular/PaginationComponent";
import { validateV } from "@/helpers/validateV";
import { queryAnimePopular } from "@/querys/query";
import { fetchAnime } from "@/services/fetchAnime";
import { Pagination } from "@/types/types";
import { Card } from "@/components/card/Card";

type Props = {
  searchParams: {
    genres?: string;
    page?: number;
    search?: string;
    year?: string;
    season?: string;
    seasonyear?: string;
    format?: string;
    sort?: string;
  };
  params: string;
};
export async function AnimeDinamic({ searchParams, params }: Props) {
  const { page } = searchParams;
  const { query } = queryAnimePopular;
  // @ts-ignore
  const Page = page ? parseInt(page) : 1;
  // @ts-ignore
  const data: Pagination = await fetchAnime(query, validateV(params, Page));

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
        <div className="grid grid-cols-5 py-6 gap-4 justify-center items-center">
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
      </div>
      <PaginationComponent pageInfo={data?.data?.Page?.pageInfo} />
    </>
  );
}
