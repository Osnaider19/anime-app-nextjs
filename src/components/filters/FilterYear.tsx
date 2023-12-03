"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { yearsArray } from "@/const/const";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export const FilterYear = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const handleChange = (year: string) => {
    if (year) {
      params.set("year", year);
    } else {
      params.delete("year");
    }
    params.delete("page");
    replace(`${pathname}?${params.toString()}`);
  };
  const defaultKey = params.get("year")?.toString();
  if (defaultKey) {
    return (
      <div className="max-w-[140px] w-full min-w-[140px] h-full">
        <Select
          label="Select Year"
          placeholder="Any"
          onChange={(e) => handleChange(e.target.value)}
          className="w-full h-full "
          size="sm"
          radius="lg"
          color="secondary"
          fullWidth={true}
          variant="bordered"
          defaultSelectedKeys={[defaultKey]}
          selectionMode="single"
        >
          {yearsArray.map(({ year }) => (
            <SelectItem key={year} value={year} color="secondary">
              {year.toString()}
            </SelectItem>
          ))}
        </Select>
      </div>
    );
  } else {
    return (
      <div className="max-w-[140px] w-full min-w-[140px] h-full">
        <Select
          label="Select Year"
          placeholder="Any"
          onChange={(e) => handleChange(e.target.value)}
          className="w-full h-full "
          size="sm"
          radius="lg"
          color="secondary"
          fullWidth={true}
          variant="bordered"
          selectionMode="single"
        >
          {yearsArray.map(({ year }) => (
            <SelectItem key={year} value={year} color="secondary">
              {year.toString()}
            </SelectItem>
          ))}
        </Select>
      </div>
    );
  }
};
