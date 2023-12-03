"use client";
import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
export const Search = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const handelChange = useDebouncedCallback((query: string) => {
    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }
    params.delete("page");
    router.replace(`${pathname}?${params}`);
  }, 500);
  return (
    <div className="flex w-[200px]">
      <Input
        type="text"
        placeholder="search"
        size="sm"
        onChange={(e) => handelChange(e.target.value)}
        defaultValue={params.get("search")?.toString()}
        variant="bordered"
        radius="full"
      />
    </div>
  );
};
