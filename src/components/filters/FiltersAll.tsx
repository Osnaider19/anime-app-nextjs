import { FilterGenres } from "./FilterGenres";
import { FilterSort } from "./FilterSort";
import { FilterYear } from "./FilterYear";

export const FiltersAll = () => {
  return (
    <div className="flex justify-end gap-x-2 items-center w-full   py-2">
      <FilterGenres />
      <FilterYear />
      <FilterSort />
    </div>
  );
};
