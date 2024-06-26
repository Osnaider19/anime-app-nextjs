import { queryStats } from "@/querys/query";
import { fetchAnime } from "@/services/fetchAnime";
import { ScoreDistribution } from "./ScoreDistribution";
import { StatsClass } from "@/types/stats";
import { StatusDistribution } from "./StatusDistribution";
import { AiringTrends } from "./AiringTrends";
import { AiringWatchers } from "./AiringWatchers";
import { ActivityPerDay } from "./ActivityPerDay";
import { Rankings } from "./Rankings";

type data = {
  data: {
    Media: StatsClass;
  };
};
type Props = {
  params: {
    id: string;
  };
};
export default async function pageStats({ params }: Props) {
  const variables = {
    id: params.id,
  };
  const { query } = queryStats;
  const data: data = await fetchAnime(query, variables);
  if (!data) return;
  const { distribution, airingTrends, id, rankings, trends } = data?.data.Media;

  return (
    <div className="py-1">
      <Rankings rankings={rankings} />
      {distribution && (
        <div className="py-3 w-full h-full">
          <div className="h-full md:h-[350px] grid grid-cols-1 md:grid-cols-2 w-full place-items-center">
            <ScoreDistribution distribution={distribution.score} />
            <StatusDistribution distribution={distribution} />
          </div>
        </div>
      )}
      <AiringTrends airingTrends={airingTrends.nodes} />
      <AiringWatchers airingTrends={airingTrends.nodes} />
      <ActivityPerDay trends={trends.nodes} />
    </div>
  );
}
