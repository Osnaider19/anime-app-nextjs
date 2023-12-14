import { queryId } from "@/querys/query";
import { fetchAnime } from "@/services/fetchAnime";
import { AnimeId } from "@/types/types";
import BannerImg from "../BannerImg";
import { CardDetails } from "@/components/card/CardDetails";
import { Details } from "../Details";
import { NavegationDetails } from "../NavegationDetails";

export const LayoutC = async ({ id }: { id: number }) => {
  const { query } = queryId;
  const variables = {
    id: id,
    type: "ANIME",
    isAdult: false,
  };
  const data: { data: AnimeId } = await fetchAnime(query, variables);
  const anime = data?.data?.Media;
  return (
    <>
      <BannerImg img={anime?.bannerImage} name={anime.title.userPreferred} />
      <div className="w-[85%] mx-auto  h-full relative  flex flex-col">
        <div className="grid_decription">
          <CardDetails
            img={anime?.coverImage.large}
            name={anime?.title.userPreferred}
          />
          <Details anime={anime} />
        </div>
      <div className="pt-10">
        <NavegationDetails />
      </div>
      </div>
    </>
  );
};
