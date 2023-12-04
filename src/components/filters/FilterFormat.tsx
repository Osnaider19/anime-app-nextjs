"use client";
import { format } from "@/const/const";
import { Select, SelectItem } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

export const FilterFormat = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const options = e.target.value.split(","); // los genres en arry
    if (!options.includes("")) {
      params.set("format", options.toString());
    } else {
      params.delete("format");
    }
    params.delete("page");
    replace(`${pathname}?${params.toString()}`);
  };
  const formats = params.get("format")?.toString().split(",");
  return (
    <div className="max-w-[150px] w-full min-w-[150px] h-full">
      <Select
        label="Select Format"
        placeholder="Any"
        selectionMode="multiple"
        defaultSelectedKeys={formats ? formats : []}
        selectedKeys={formats ? formats : []}
        onChange={handleChange}
        className="w-full h-full "
        size="sm"
        radius="lg"
        color="secondary"
        fullWidth={true}
        variant="bordered"
      >
        {format?.map(({ name, value }) => (
          <SelectItem key={value} value={value} color="secondary">
            {name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
