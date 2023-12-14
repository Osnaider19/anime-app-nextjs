"use client";
import { useInView } from "react-intersection-observer";
import { queryCharacters } from "@/querys/query";
import { useInfinityQ } from "@/hooks/useInfitityQ";
import { Characters } from "./Characters";
import { useEffect } from "react";
import { SkeletonCharacters } from "@/components/skeleton/SkeletonCharacters";

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
  } = useInfinityQ(query, variables);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (!characters || characters.length < 1) {
    return;
  }

  return (
    <>
      <div>
        {isLoading && <SkeletonCharacters />}
        <Characters characters={characters} />
        {hasNextPage && <button ref={ref}></button>}
        {isFetchingNextPage && <SkeletonCharacters />}
        {!characters && <div>sin result</div>}
        {hasNextPage === false && <div className="w-full text-center">No hay mas resultados</div>}
      </div>
    </>
  );
}
