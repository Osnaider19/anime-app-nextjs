import { FiltersAll } from "@/components/filters/FiltersAll";
import { Redirect } from "./Redirect";
import { validateTitle } from "@/helpers/validateTitle";
import { Animes } from "@/components/anime/Animes";

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
  return (
    <>
      <Redirect />
      <div className="pt-[70px] relative w-full h-full">
        <div className="w-full px-2 md:w-[80%] m-auto h-full">
          <div className="px-3 w-full h-full py-5">
            <h1 className="text-2xl md:text-3xl font-semibold ">
              {validateTitle(params.id)}
            </h1>
          </div>
          <FiltersAll />
          <div className="relative w-full h-full px-3 md:px-0">
            <Animes searchParams={searchParams} />
          </div>
        </div>
      </div>
    </>
  );
}
