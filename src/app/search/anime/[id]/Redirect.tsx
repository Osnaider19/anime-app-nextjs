"use client";

import { useSearchParams, useRouter } from "next/navigation";
type searchParams = {
  genres: string;
  page: number;
  search?: string;
  year?: string;
  season?: string;
  seasonyear?: string;
  format?: string;
  sort: string;
};
export const Redirect = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();
  const genres = params.get("genres");
  const format = params.get("format");
  const sort = params.get("sort");
  const year = params.get("year");
  const search = params.get("search");
  const season = params.get("season");
  if (search || season || year || sort || format || genres) {
    replace(`/search/anime?${params}`);
  }
  return null;
};
