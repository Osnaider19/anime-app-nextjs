"use client";
import { useInView } from "react-intersection-observer";
import { queryCharacters } from "@/querys/query";
import { useInfinityCharacters } from "@/hooks/useInfitityCharacters";
import { Characters } from "./Characters";
import { useEffect } from "react";
import { SkeletonCharacters } from "@/components/skeleton/SkeletonCharacters";
import { SkeletonCardCharacters } from "@/components/skeleton/SkeletonCardCharacters";


type Props = {
  params: {
    id: string;
  };
};

export default function pageCharacters({ params }: Props) {
  const { query } = queryCharacters;
  const variables = {
    id: params.id,
    type: "ANIME",
  };
  const {
    characters,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfinityCharacters(query, variables);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (isLoading) {
    return <SkeletonCharacters />;
  }
  if (!characters || characters.length < 1) {
    return;
  }

  return (
    <>
      <div>
        <Characters characters={characters} />
        {hasNextPage && <button ref={ref}></button>}
        {isFetchingNextPage && (
          <div className="grid_characters">
            <SkeletonCardCharacters />
            <SkeletonCardCharacters />
            <SkeletonCardCharacters />
            <SkeletonCardCharacters />
            <SkeletonCardCharacters />
            <SkeletonCardCharacters />
          </div>
        )}
        {!characters && <div>sin result</div>}
        {hasNextPage === false && (
          <div className="w-full text-center">No hay mas resultados</div>
        )}
      </div>
    </>
  );
}
