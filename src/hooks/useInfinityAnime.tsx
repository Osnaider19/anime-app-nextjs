import { validateV } from "@/helpers/validateV";
import { queryAnimePopular } from "@/querys/query";
import { fetchAnime } from "@/services/fetchAnime";
import { Pagination } from "@/types/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

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

export function useInfinityAnime(searchParams: searchParams) {
  const params = useParams();
  const { query } = queryAnimePopular; //query de los animes
  const keys = params?.id?.toString(); //key si es otra page como next season o popular etc..

  const variables = validateV(keys, searchParams); // validar las variables dependiendo de los searchParams

  //crear un arry de querykey para identificar cada query y poder hacer cache de la informacion
  const validParams = Object.entries(searchParams)
    .filter(([key, value]) => value !== undefined)
    .flat()
    .filter(Boolean); // Elimina los valores undefined

  const queryKey = [`${keys ? keys : "animes"}`, ...validParams]; // Construye el queryKey dinámicamente

  const {
    data,
    error,
    fetchNextPage,
    isError,
    isLoading,
    isFetchingNextPage,
    refetch,
    isSuccess,
    status,
  } = useInfiniteQuery({
    queryKey: queryKey,
    queryFn: ({ pageParam = 1 }) =>
      fetchAnime(query, { ...variables, page: pageParam }),
    getNextPageParam: (lastPage: Pagination) =>
      lastPage?.data?.Page.pageInfo.currentPage + 1, //la siguiente pagína
    initialPageParam: 1,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    gcTime: 1000 * 60 * 5, //tiempo en que se elimina la cache
    retry: 5,
  });

  // si la siguiente pagina es true
  const hasNextPage =
    data?.pages?.[data.pages.length - 1]?.data?.Page?.pageInfo?.hasNextPage ??
    false;

  return {
    animes: data?.pages.flatMap((page) => page?.data?.Page.media) ?? [],
    fetchNextPage,
    error,
    isFetchingNextPage,
    isLoading,
    isError,
    hasNextPage,
    refetch,
    isSuccess,
    status,
  };
}
