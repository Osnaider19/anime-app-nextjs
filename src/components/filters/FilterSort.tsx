"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { sort, yearsArray } from "@/const/const";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export const FilterSort = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const handleChange = (ordering: string) => {
    if (ordering) {
      params.set("sort", ordering);
    } else {
      params.delete("sort");
    }
    params.delete("page");
    replace(`${pathname}?${params.toString()}`);
  };
  const defaultKey = params.get("sort")?.toString();

  return (
    <div className="max-w-[170px] w-full min-w-[170px] h-full">
      <Select
        label="Ordering"
        placeholder="Any"
        onChange={(e) => handleChange(e.target.value)}
        className="w-full h-full"
        size="sm"
        radius="lg"
        color="secondary"
        fullWidth={true}
        variant="flat"
        defaultSelectedKeys={[defaultKey ? defaultKey : "POPULARITY_DESC"]}
        selectedKeys={[defaultKey ? defaultKey : "POPULARITY_DESC"]}
        selectionMode="single"
      >
        {sort.map(({ name, value }) => (
          <SelectItem key={value} value={value} color="secondary">
            {name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
