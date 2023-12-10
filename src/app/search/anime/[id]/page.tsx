import { Suspense } from "react";
import { SkeletonCards } from "@/components/skeleton/SkeletonCards";
import { FiltersAll } from "@/components/filters/FiltersAll";
import { SkeletonFilters } from "@/components/skeleton/SkeletonFilters";
import { AnimeDinamic } from "./AnimeDinamic";
import { redirect } from "next/navigation";
import { Redirect } from "./Redirect";
import { validateTitle } from "@/helpers/validateTitle";

type PageParams = {
  searchParams: {
    genres: string;
    page: number;
    search?: string;
    year?: string;
    season?: string;
    seasonyear?: string;
    format: string;
    sort: string;
  };
  params: {
    id: string;
  };
};

export default function PageDinamic({ searchParams, params }: PageParams) {
  const { page, genres, sort, format, search, year, season } = searchParams;

  return (
    <>
      <Redirect />
      <div className="pt-[70px] relative w-full h-full">
        <div className="w-full px-2 md:w-[80%] m-auto h-full">
          <div className="w-full h-full py-5">
            <h1 className="text-2xl md:text-3xl font-semibold ">
              {validateTitle(params.id)}
            </h1>
          </div>

          <Suspense fallback={<SkeletonFilters />}>
            <FiltersAll />
          </Suspense>

          <Suspense
            key={page + format + genres + sort + search + year + season}
            fallback={<SkeletonCards />}
          >
            <AnimeDinamic searchParams={searchParams} params={params.id} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
