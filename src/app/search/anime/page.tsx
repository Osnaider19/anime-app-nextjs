import { Animes } from "@/components/anime/Animes";
import { FiltersAll } from "@/components/filters/FiltersAll";

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
};
export default function PageSearch({ searchParams }: PageParams) {
  return (
    <div className="pt-[70px] relative w-full h-full">
      <div className="w-full px-2 md:w-[80%] m-auto h-full">
        <div className="w-full h-full py-5">
          <h1 className="px-3 text-3xl font-semibold">Search</h1>
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
