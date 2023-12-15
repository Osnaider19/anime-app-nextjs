import { queryId } from "@/querys/query";
import { fetchAnime } from "@/services/fetchAnime";
import { AnimeId } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

type UseAnimeIdResult = {
  data: {
    data: AnimeId;
  };
  error: any; // Replace 'any' with the actual type of your error
  isError: boolean;
  isLoading: boolean;
  isPending: boolean;
};
export function useAnimeId(id: string | number): UseAnimeIdResult {
  const { query } = queryId;
  const variables = {
    id: id,
    type: "ANIME",
    isAdult: false,
  };
  const { data, isError, error, isLoading, isPending } = useQuery({
    queryKey: ["animeId", `${id}`],
    queryFn: () => fetchAnime(query, variables),
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
  });
  return {
    data,
    error,
    isError,
    isLoading,
    isPending,
  };
}
