"use client";
import { Watch } from "../Watch";
import { Characters } from "../Characters";
import { Recommendation } from "../Recommendations";
import { RelationsC } from "./Relations";
import { useAnimeId } from "@/hooks/useAnimeId";
import Trailer from "../Trailer";
import { Staffs } from "./Staffs";
import { Tags } from "@/components/tags/Tags";
import { ScoreDistribution } from "./stats/ScoreDistribution";
import { ExtraLink } from "@/components/extralink/ExtraLink";

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
      <Staffs staffs={anime?.staffPreview.edges} id={anime.id} />
      <Recommendation recommendations={anime?.recommendations} />
      <Trailer idVideo={anime?.trailer?.id} />
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2">
        <ScoreDistribution distribution={anime.stats.scoreDistribution} />
      </div>
      <ExtraLink extraLink={anime.externalLinks} />
      <Tags tags={anime.tags} />
    </>
  );
}
