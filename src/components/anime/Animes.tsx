"use client";
import { Card } from "@/components/card/Card";
import { SkeletonCards } from "@/components/skeleton/SkeletonCards";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useInfinityAnime } from "@/hooks/useInfinityAnime";
import "./anime.css";
import { ErrorFetch } from "../errors/ErrorFetch";
import { ErrorDataNull } from "../errors/ErrorDataNull";
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
  const { inView, ref } = useInView({
    rootMargin: "10px 20px 600px 40px",
  });

  const {
    animes,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfinityAnime(searchParams);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (isLoading) return <SkeletonCards />;
  if (isError) return <ErrorFetch />;
  if (animes.length < 1) return <ErrorDataNull />;

  return (
    <>
      <div className="h-full w-full py-2 md:py-6">
        <div className="grid_content_card">
          {animes?.map((anime) => (
            <Card
              key={anime.id}
              id={anime.id}
              color={anime.coverImage.color}
              genres={anime.genres}
              imagen={anime.coverImage.large}
              title={anime.title.userPreferred}
            />
          ))}
        </div>
        {isFetchingNextPage && <SkeletonCards />}
        {hasNextPage ? (
          <div ref={ref} role="observer-fetch-next-page"></div>
        ) : (
          <div className="py-3 w-full">
            <p className="text-center">No hay mas resultados</p>
          </div>
        )}
      </div>
    </>
  );
}
