import { FiltersAll } from "@/components/filters/FiltersAll";
import { Search } from "@/components/search/Search";
import { Suspense } from "react";
import { Animes } from "./AnimePagination";
import { SkeletonCards } from "@/components/skeleton/SkeletonCards";

type PageParams = {
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
export default async function PopularPage({ searchParams }: PageParams) {
  const page = searchParams.page;
  const genres = searchParams.genres;
  const search = searchParams.search;
  const sort = searchParams.sort;
  return (
    <div className="pt-[70px] relative w-full h-full">
      <div className="w-[80%] m-auto h-full">
        <div className="w-full h-full flex items-center justify-between py-5">
          <h1 className="text-3xl font-semibold">Most Popular Anime</h1>
          <Search />
        </div>
        <div>
          <Suspense fallback={<div>loader</div>}>
            <FiltersAll />
          </Suspense>
        </div>
        <Suspense
          key={page + genres + search + sort}
          fallback={<SkeletonCards />}
        >
          <Animes searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
