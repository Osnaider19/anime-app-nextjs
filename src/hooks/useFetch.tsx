import { AnimeObject, PageInfo, Pagination } from "@/types/types";
import { useState, useEffect } from "react";
import { validateVariables } from "@/helpers/validateVariables";
import { queryAnimePopular } from "@/querys/query";
import { useSearchParams } from "next/navigation";
type searchParams = {
  genres?: string;
  page?: number;
  search?: string;
  year?: string;
  season?: string;
  seasonyear?: string;
  format?: string;
  sort: string;
};
type pageInfo = {
  currentPage: number;
  hasNextPage: boolean;
  lastPage: number;
  perPage: number;
  total: number;
};
export const useFetch = (searchParams: searchParams) => {
  const { query } = queryAnimePopular;
  const [data, setData] = useState<AnimeObject[]>([]);
  const [isPending, setIsPending] = useState(false);
  const [infoPage, setInfoPage] = useState<pageInfo>();
  const params = useSearchParams();
  useEffect(() => {
    async function fetchAnime() {
      setIsPending(true);
      const variables = await validateVariables(searchParams);
      try {
        const response = await fetch("https://graphql.anilist.co", {
          cache: "force-cache",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
            variables,
          }),
        });
        if (response.ok) {
          const newData: Pagination = await response.json();
          setData([...data, ...newData.data.Page.media]);
          setInfoPage(newData.data.Page.pageInfo);
        }
      } catch (error) {
        console.log("error al obtener los datos" + error);
      } finally {
        setIsPending(false);
      }
    }
    fetchAnime();
  }, [params]);

  return { data, isPending, infoPage };
};
