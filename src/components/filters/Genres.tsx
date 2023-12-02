"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

export const Genres = ({ genres }: { genres: string[] }) => {
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
    <div className="max-w-[250px] w-full min-w-[250px] h-full">
      <Select
        label="Favorite Animal"
        placeholder="Select Genres"
        selectionMode="multiple"
        className="w-full h-full "
        defaultSelectedKeys={searchParams.get("genres")?.toString().split(",")}
        onChange={handleChange}
        size="sm"
      >
        {genres.map((genre, index) => (
          <SelectItem key={genre} value={genre}>
            {genre}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
