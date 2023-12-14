import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchAnime } from "@/services/fetchAnime";

export function useInfinityQ(query: string, variables: {}) {
  const { data, fetchNextPage , isLoading, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["characters"],
      queryFn: ({ pageParam = 1 }) =>
        fetchAnime(query, { ...variables, page: pageParam }),
      getNextPageParam: (lastPage) =>
        lastPage.data.Media.characters.pageInfo.currentPage + 1,
      initialPageParam: 1,
    });

  return {
    characters: data?.pages?.flatMap(
      (page: any) => page.data.Media.characters.edges ?? []
    ),
    hasNextPage:
      data?.pages[data.pages.length - 1].data.Media.characters.pageInfo
        .hasNextPage, //ver si hay una siguiente page
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
  };
}
