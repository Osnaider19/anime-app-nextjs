"use client";
import BannerImg from "../BannerImg";
import { CardDetails } from "@/components/card/CardDetails";
import { Details } from "../Details";
import { NavegationDetails } from "../NavegationDetails";
import { useAnimeId } from "@/hooks/useAnimeId";
import { SkeletonLayout } from "@/components/skeleton/SkeletonLayout";

export const LayoutC = ({ id }: { id: number }) => {
  const { data, isError, isLoading } = useAnimeId(id);
  const anime = data?.data?.Media;

  if (isLoading) {
    return <SkeletonLayout />;
  }
  if (!anime) {
    return;
  }

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
          <NavegationDetails streamingEpisodes={anime.streamingEpisodes} />
        </div>
      </div>
    </>
  );
};
