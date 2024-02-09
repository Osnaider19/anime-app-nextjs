import { Animes } from "@/components/anime/Animes";
import { FiltersAll } from "@/components/filters/FiltersAll";
import { Metadata } from "next";

type PageParams = {
  searchParams: {
    genres?: string;
    search?: string;
    year?: string;
    season?: string;
    seasonyear?: string;
    format?: string;
    sort: string;
  };
  params: {
    id: string;
  };
};

export const metadata: Metadata = {
  title: "Search | NexAnime ",
  description: `Search tens of thousands of anime on NexAnime,
  The most complete anime database.
  Find the exact anime you are looking for.`,
};
export default function PageSearch({ searchParams }: PageParams) {
  return (
    <div className="pt-[70px] relative w-full h-full">
      <div className="w-full px-2 md:w-[80%] m-auto h-full">
        <div className="w-full h-full py-5">
          <h1 className="px-3 md:px-0 text-3xl font-semibold">Search</h1>
        </div>
        <div>
          <FiltersAll />
        </div>
        <div className="relative w-full h-full px-3 md:px-0">
          <Animes searchParams={searchParams} />
        </div>
      </div>
    </div>
  );
}
