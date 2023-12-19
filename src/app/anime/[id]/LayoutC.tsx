"use client";
import BannerImg from "../BannerImg";
import { CardDetails } from "@/components/card/CardDetails";
import { Details } from "../Details";
import { NavegationDetails } from "../NavegationDetails";
import { useAnimeId } from "@/hooks/useAnimeId";
import { SkeletonLayout } from "@/components/skeleton/SkeletonLayout";
import { ErrorFetch } from "@/components/errors/ErrorFetch";

export const LayoutC = ({ id }: { id: number }) => {
  const { data, isError, isLoading, error } = useAnimeId(id);
  const anime = data?.data?.Media;
  if (isError) return <ErrorFetch />;
  if (isLoading) return <SkeletonLayout />;
  if (!anime) return;

  return (
    <>
      <BannerImg img={anime?.bannerImage} name={anime.title.userPreferred} />
      <div className=" w-full px-3 lg:w-[85%] lg:px-0 mx-auto  h-full relative  flex flex-col">
        <div className="flex flex-col  md:flex-row md:gap-x-4">
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
