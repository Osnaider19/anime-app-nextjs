"use client";
import { Watch } from "../Watch";
import { Characters } from "../Characters";
import { Recommendation } from "../Recommendations";
import { RelationsC } from "./Relations";
import { useAnimeId } from "@/hooks/useAnimeId";
import Trailer from "../Trailer";
import { Staffs } from "./Staffs";

type Params = {
  params: {
    id: number;
  };
};

export default function PageAnimeId({ params }: Params) {
  const { data } = useAnimeId(params.id);

  const anime = data?.data?.Media;

  if (!anime) {
    return;
  }
  return (
    <>
      <RelationsC relations={anime?.relations} />
      <Watch streamingEpisodes={anime?.streamingEpisodes} id={anime.id} />
      <Characters characterPreview={anime?.characterPreview} id={anime.id} />
      <Staffs staffs={anime?.staffPreview.edges} id={anime.id}/>
      <Recommendation recommendations={anime?.recommendations} />
      <Trailer idVideo={anime?.trailer?.id} />
    </>
  );
}
