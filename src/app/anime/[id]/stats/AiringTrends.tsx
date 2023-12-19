"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { AiringTrendsNode } from "@/types/stats";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Airing Score Progression",
    },
  },
};

export function AiringTrends({
  airingTrends,
}: {
  airingTrends: AiringTrendsNode[];
}) {
  const episodes = airingTrends.flatMap((episode) => episode.episode);
  const averageScore = airingTrends.flatMap((episode) => episode.averageScore);
  const inProgress = airingTrends.flatMap((episode) => episode.inProgress);
  return (
    <>
      {episodes.length > 2 && (
        <div className="w-full h-[320px] flex justify-start items-start flex-col py-5">
          <p className="font-semibold  py-2 pt-7 md:pt-0">Airing Score Progression</p>
          <Line
            options={options}
            data={{
              labels: episodes,
              datasets: [
                {
                  label: "Score Episode",
                  data: averageScore,           
                  borderColor: "rgb(255, 99, 132)",
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                  pointStyle: 'circle',
                  pointRadius: 5,
                  pointHoverRadius: 5,
                },
              ],
              //yLabels : inProgress,
            }}
          />
        </div>
      )}
    </>
  );
}

// "use client";
// import React from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";
// import { AiringTrendsNode } from "@/types/stats";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top" as const,
//     },
//     title: {
//       display: true,
//       text: "Score Distribution",
//     },
//   },
// };

// export function AiringTrends({
//   airingTrends,
// }: {
//   airingTrends: AiringTrendsNode[];
// }) {
//   const epidodes = airingTrends.flatMap((episode) => episode.episode);
//   const averageScore = airingTrends.flatMap((episode) => episode.averageScore);

//   return (
//     <Bar
//       options={options}
//       data={{
//         labels: epidodes,
//         datasets: [
//           {
//             data: averageScore,
//             backgroundColor: ["#1E112A"],
//             label: "Score",
//           },
//         ],
//       }}
//     />
//   );
// }
