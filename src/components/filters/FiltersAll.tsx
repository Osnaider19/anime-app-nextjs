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
      <div className="flex justify-between gap-x-2 items-center w-full   py-2">
        <Search/>
        <FilterGenres />
        <FilterYear />
        <FilterSeason />
        <FilterFormat />
        <FilterSort />
      </div>
      <FiltersActive />
    </>
  );
};
