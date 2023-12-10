import { Suspense } from "react";
import { Animes } from "@/app/popular/AnimePagination";
import { SkeletonCards } from "@/components/skeleton/SkeletonCards";
import { FiltersAll } from "@/components/filters/FiltersAll";

type PageParams = {
  searchParams: {
    genres: string;
    page: number;
    search?: string;
    year?: string;
    season?: string;
    seasonyear?: string;
    format?: string;
    sort: string;
  };
};
export default function PageSearch({ searchParams }: PageParams) {
  const { sort, format, genres, page, search, season, year } = searchParams;
  return (
    <div className="pt-[70px] relative w-full h-full">
      <div className="w-full px-2 md:w-[80%] m-auto h-full">
        <div className="w-full h-full py-5">
          <h1 className="text-3xl font-semibold">Search</h1>
        </div>
        <div>
          <Suspense fallback={<div>loader</div>}>
            <FiltersAll />
          </Suspense>
        </div>
        <Suspense
          key={page + genres + search + sort + format + year + season}
          fallback={<SkeletonCards />}
        >
          <Animes searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
