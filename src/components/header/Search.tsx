import { IconSearch } from "@/icons/Icons";
import Link from "next/link";

export const Search = () => {
  return (
    <div className="flex justify-center items-center py-2 px-3 group  rounded-md hover:bg-black/20">
      <Link
        href={"#"}
        className="w-full h-full flex justify-center items-center gap-x-1"
      >
        <span>
          <IconSearch />
        </span>
        <span>Search</span>
      </Link>
    </div>
  );
};
