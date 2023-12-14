import { validateVariables } from "@/helpers/validateVariables";
import { getAnimeInfinity } from "@/services/getAnimeInfinity";
import { Pagination } from "@/types/types";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useFetchInfinity(searchParams: {}) {
  const variables = validateVariables(searchParams);
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isError,
    isLoading,
    isFetchingNextPage,
    refetch,
    isSuccess,
  } = useInfiniteQuery({
    queryKey: ["animes"],
    queryFn: ({ pageParam = 1 }) =>
      getAnimeInfinity({ ...variables, page: pageParam }),
    getNextPageParam: (lastPage: Pagination) =>
      lastPage.data.Page.pageInfo.currentPage + 1,
    initialPageParam: 1,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });

  return {
    animes: data?.pages.flatMap((page) => page.data.Page.media) ?? [],
    fetchNextPage,
    error,
    isFetchingNextPage,
    isLoading,
    isError,
    hasNextPage,
    refetch,
  };
}
