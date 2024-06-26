"use client";
import { genres } from "@/const/const";
import { Select, SelectItem } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

export const FilterGenres = () => {
  
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const options = e.target.value.split(","); // los genres en arry
    if (!options.includes("")) {
      params.set("genres", options.toString());
    } else {
      params.delete("genres");
    }
    params.delete("page");
    replace(`${pathname}?${params.toString()}`);
  };
  const genresParams = params.get("genres")?.toString().split(",");
  return (
    <div className="w-full min-w-[120px] md:min-w-[170px] md:max-w-[170px] h-full">
      <Select
        label="Genres"
        placeholder="Any"
        selectionMode="multiple"
        selectedKeys={genresParams ? genresParams : []}
        defaultSelectedKeys={genresParams}
        onChange={handleChange}
        className="w-full h-full "
        size="sm"
        radius="lg"
        color="secondary"
        fullWidth={true}
        variant="flat"
      >
        {genres?.map((genre, index) => (
          <SelectItem key={genre} value={genre} color="secondary">
            {genre}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
