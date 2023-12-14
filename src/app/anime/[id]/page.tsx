import { queryId } from "@/querys/query";
import { AnimeId } from "@/types/types";
import { Watch } from "../Watch";
import { Characters } from "../Characters";
import { Recommendation } from "../Recommendations";
import { fetchAnime } from "@/services/fetchAnime";

type Params = {
  params: {
    id: number;
  };
};

export default async function PageAnimeId({ params }: Params) {
  const { query } = queryId;
  const variables = {
    id: params.id,
    type: "ANIME",
    isAdult: false,
  };

  const data: { data: AnimeId } = await fetchAnime(query, variables);
  const anime = data?.data?.Media;

  return (
    <>
    
      <Watch streamingEpisodes={anime?.streamingEpisodes} id={anime.id} />
      <Characters characterPreview={anime?.characterPreview} id={anime.id} />
      <Recommendation recommendations={anime?.recommendations} />
    </>
  );
}
