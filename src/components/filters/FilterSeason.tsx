"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Seasons } from "@/const/const";
export const FilterSeason = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const handleChange = (season: string) => {
    if (season) {
      params.set("season", season);
    } else {
      params.delete("season");
    }
    params.delete("page");
    replace(`${pathname}?${params.toString()}`);
  };
  const defaultKey = params.get("season")?.toString().split(",");

  return (
    <div className="max-w-[140px] w-full min-w-[140px] h-full">
      <Select
        label="Select Season"
        placeholder="Any"
        onChange={(e) => handleChange(e.target.value)}
        className="w-full h-full "
        size="sm"
        radius="lg"
        color="secondary"
        fullWidth={true}
        variant="bordered"
        defaultSelectedKeys={defaultKey ? defaultKey : []}
        selectedKeys={defaultKey ? defaultKey : []}
        selectionMode="single"
      >
        {Seasons.map(({ name, value }) => (
          <SelectItem key={value} value={value} color="secondary">
            {name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
