import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchAnime } from "@/services/fetchAnime";

type variables = {
  id: string;
  type: string;
};
export function useInfinityStaff(query: string, variables: variables) {
  const { data, fetchNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["staff", `${variables.id}`],
      queryFn: ({ pageParam = 1 }) =>
        fetchAnime(query, { ...variables, page: pageParam }),
      getNextPageParam: (lastPage) =>
        lastPage.data.Media.staff.pageInfo.currentPage + 1,
      initialPageParam: 1,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchIntervalInBackground: false,
    });

  return {
    staffs: data?.pages?.flatMap(
      (page: any) => page.data.Media.staff.edges ?? []
    ),
    hasNextPage:
      data?.pages[data.pages.length - 1].data.Media.staff.pageInfo.hasNextPage, //ver si hay una siguiente page
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
  };
}
