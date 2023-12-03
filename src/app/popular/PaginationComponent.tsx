"use client";
import { Pagination } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";

type PageInfo = {
  pageInfo: {
    currentPage: number;
    hasNextPage: boolean;
    lastPage: number;
    perPage: number;
    total: number;
  };
};
export const PaginationComponent = ({ pageInfo }: PageInfo) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const initialPage = Number(params.get("page"));
  const handelClick = (number: number) => {
    const page = params.get("page");
    if (Number(page)) {
      params.set("page", number.toString());
    } else {
      params.set("page", (2).toString());
    }
    router.replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="w-full h-full flex justify-center items-center flex-grow py-5">
      <Pagination
      showControls
      total={pageInfo?.lastPage}
      initialPage={initialPage ? initialPage : 1}
      onChange={handelClick}
    />
    </div>
  );
};
