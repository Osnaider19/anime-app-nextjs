"use client";
import { FilterGenres } from "./FilterGenres";
import { FilterSort } from "./FilterSort";
import { FilterYear } from "./FilterYear";
import { FilterSeason } from "./FilterSeason";
import { FilterFormat } from "./FilterFormat";
import { FiltersActive } from "./FiltersActive";
import { Search } from "../search/Search";

export const FiltersAll = () => {
  return (
    <>
      <div className="flex justify-between   md:justify-between gap-x-2 items-center w-full  flex-wrap   overflow-hidden  px-3 md:px-0 md:gap-0 xl:flex-nowrap xl:gap-x-6">
        <Search />
        <div className="flex justify-start items-center gap-x-3 w-full h-full  overflow-x-scroll py-2 md:overflow-auto    md:justify-between">
          <FilterGenres />
          <FilterYear />
          <FilterSeason />
          <FilterFormat />
          <FilterSort />
        </div>
      </div>
      <FiltersActive />
    </>
  );
};
