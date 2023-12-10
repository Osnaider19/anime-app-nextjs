import { queryId } from "@/querys/query";
import { AnimeId, Media } from "@/types/types";
import BannerImg from "../BannerImg";
import { Watch } from "../Watch";
import { Characters } from "../Characters";
import { Recommendation } from "../Recommendations";
import "../styles.css";
import { CardDetails } from "@/components/card/CardDetails";
import { fetchAnime } from "@/services/fetchAnime";
import { Details } from "../Details";
import { Popular } from "@/components/Hero/Popular";

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
      <section className="relative w-full h-full">
        <BannerImg img={anime?.bannerImage} name={anime.title.userPreferred} />
        <div className="w-[85%] mx-auto  h-full relative  flex ">
          <div className="grid_decription">
            <CardDetails
              img={anime.coverImage.large}
              name={anime.title.userPreferred}
            />
            <Details anime={anime} />
          </div>
        </div>
        <div className="w-[85%] mx-auto  relative">
          <Watch streamingEpisodes={anime?.streamingEpisodes} id={anime.id} />
          <Characters characterPreview={anime?.characterPreview} />
          <Recommendation recommendations={anime?.recommendations} />
         <Popular animesPopular={data}/>
        </div>
      </section>
      {/* <AllWatch id={anime?.id} watch={anime?.streamingEpisodes}/> */}
    </>
  );
}
