import { FiltersAll } from "@/components/filters/FiltersAll";
import { Suspense } from "react";
import { Animes } from "./AnimePagination";
import { SkeletonCards } from "@/components/skeleton/SkeletonCards";

type PageParams = {
  searchParams: {
    genres: string;
    page: number;
    search: string;
    year?: string;
    season?: string;
    seasonyear?: string;
    format?: string;
    sort: string;
  };
};
export default function PopularPage({ searchParams }: PageParams) {
  const { search, genres, page, sort, format, season, year } = searchParams;
  return (
    <div className="pt-[70px] relative w-full h-full">
      <div className="w-[80%] m-auto h-full">
        <div className="w-full h-full py-5">
          <h1 className="text-3xl font-semibold">All-Time Popular Anime</h1>
        </div>
        <div>
          <FiltersAll />
        </div>
        <Suspense
          fallback={<SkeletonCards />}
          key={search + page + year + format + genres + sort + season}
        >
          <Animes searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
