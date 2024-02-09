"use client";
import { useAnimeId } from "@/hooks/useAnimeId";
import { RelationsC } from "./Relations";
import { Watch } from "../Watch";
import { Characters } from "../Characters";
import { Staffs } from "./Staffs";
import { Recommendation } from "../Recommendations";
import Trailer from "../Trailer";
import { ScoreDistribution } from "./stats/ScoreDistribution";
import { ExtraLink } from "@/components/extralink/ExtraLink";
import { Tags } from "@/components/tags/Tags";

export const AnimePage = ({ id }: { id: number }) => {
  const { data } = useAnimeId(id);

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
};
