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
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);
    const options = e.target.value.split(","); // los genres en arry
    if (!options.includes("")) {
      params.set("genres", options.toString());
    } else {
      params.delete("genres");
    }
    params.delete("page");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="max-w-[200px] w-full min-w-[200px] h-full">
      <Select
        label="Select Genres"
        placeholder="Any"
        selectionMode="multiple"
        defaultSelectedKeys={searchParams.get("genres")?.toString().split(",")}
        onChange={handleChange}
        className="w-full h-full "
        size="sm"
        radius="lg"
        color="secondary"
        fullWidth={true}
        variant="bordered"
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
