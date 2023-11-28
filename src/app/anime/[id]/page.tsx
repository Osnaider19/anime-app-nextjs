import { queryId } from "@/querys/query";
import { AnimeId } from "@/types/types";
import BannerImg from "../BannerImg";
import { CardDetails } from "@/components/card/CardDetails";
import { Watch } from "../Watch";
import { Characters } from "../Characters";
import { Recommendation } from "../Recommendations";
import { AllWatch } from "../AllWatch";

type Params = {
  params: {
    id: number;
  };
};

async function getData(id: number) {
  const { query } = queryId;
  try {
    const response = await fetch("https://graphql.anilist.co", {
      cache: "force-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          id,
          type: "ANIME",
          isAdult: false,
        },
      }),
    });
    if (!response.ok) {
      throw new Error("error  al obtener  los datos");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function AnimeId({ params }: Params) {
  const data: { data: AnimeId } = await getData(params.id);
  const anime = data?.data?.Media;

  return (
    <>
      <section className="relative w-full h-full">
        <BannerImg img={anime?.bannerImage} />
        <div className="w-full h-full relative px-11 flex ">
          <CardDetails img={anime?.coverImage.extraLarge} />
          <div className="px-3 py-3 min-h-[270px] w-full h-full">
            <p className="text-2xl font-extrabold ">
              {anime?.title.userPreferred}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: anime?.description,
              }}
            ></div>
          </div>
        </div>
        <div className="w-full  relative  px-10">
          <Watch streamingEpisodes={anime?.streamingEpisodes} id={anime.id} />
          <Characters characterPreview={anime?.characterPreview} />
          <Recommendation recommendations={anime?.recommendations} />
        </div>
      </section>
      <AllWatch id={anime.id} watch={anime.streamingEpisodes}/>
    </>
  );
}
