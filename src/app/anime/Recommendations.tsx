import { Recommendations } from "@/types/types";
import Link from "next/link";

export const Recommendation = ({
  recommendations,
}: {
  recommendations: Recommendations;
}) => {
  return (
    <>
      {recommendations && (
        <div className="w-full h-full">
          <h2 className="font-semibold py-2">Recommendations</h2>
          <div className="flex justify-start items-start gap-x-2 flex-wrap overflow-hidden">
            {recommendations.nodes.map((recommendation) => (
              <div
                className="w-[170px] min-h-full h-full relative rounded-md overflow-hidden border border-[#ffffff20]"
                key={recommendation.mediaRecommendation.id}
              >
                <Link href={`/anime/${recommendation.mediaRecommendation.id}`}>
                  <img
                    src={recommendation.mediaRecommendation.coverImage.large}
                    alt={`imagen the ${recommendation.mediaRecommendation.title.userPreferred}`}
                    loading="lazy"
                    className="w-full h-[230px] object-cover"
                  />
                  <p className="text-sm line-clamp-2 px-1 h-full">
                    {recommendation.mediaRecommendation.title.userPreferred}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
