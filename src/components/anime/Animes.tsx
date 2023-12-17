"use client";
import { Card } from "@/components/card/Card";
import { SkeletonCards } from "@/components/skeleton/SkeletonCards";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useInfinityAnime } from "@/hooks/useInfinityAnime";
import './anime.css'
type Props = {
  searchParams: {
    genres?: string;
    page?: number;
    search?: string;
    year?: string;
    season?: string;
    seasonyear?: string;
    format?: string;
    sort: string;
  };
};

export function Animes({ searchParams }: Props) {
  const { inView, ref } = useInView();

  const {
    animes,
    isError,
    fetchNextPage,
    hasNextPage,
    error,
    isFetchingNextPage,
    isLoading,
    refetch,
  } = useInfinityAnime(searchParams);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (!animes) {
    return (
      <div className="w-full h-[50vh] flex justify-center items-center flex-grow">
        <h2 className="text-3xl font-bold">If results check the filters</h2>
      </div>
    );
  }

  return (
    <>
      {isLoading && <SkeletonCards />}
      <div className="h-full w-full py-2 md:py-6">
        <div className="grid_content_card">
          {animes.map((anime) => (
            <Card
              key={anime.id}
              id={anime.id}
              color={anime.coverImage.color}
              genres={anime.genres}
              imagen={anime.coverImage.large}
              title={anime.title.userPreferred}
              description={anime.description}
              episodes={anime.episodes}
              averageScore={anime.averageScore}
              yearStart={anime.startDate.year}
              yearEnd={anime.endDate.year}
              hover={true}
            />
          ))}
        </div>
        {isFetchingNextPage && <SkeletonCards />}
        {hasNextPage ? (
          <div ref={ref}></div>
        ) : (
          <div className="py-3 w-full">
            <p className="text-center">No hay mas resultados</p>
          </div>
        )}
      </div>
    </>
  );
}
