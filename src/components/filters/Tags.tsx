"use client";
import { Tag } from "@/types/types";
import { Select, SelectItem } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

export const Tags = ({ tags }: { tags: Tag[] }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);
    const options = e.target.value.split(","); // los genres en arry
    if (options) {
      params.set("genres", options.toString());
    } else {
      params.delete("genres");
    }
    console.log(params.toString());
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
      >
        {tags.map((tag) => (
          <SelectItem key={tag.id} value={tag.name}>
            {tag.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
