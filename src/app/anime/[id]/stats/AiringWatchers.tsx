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
      text: "Airing Watchers Progression",
    },
  },
};

export function AiringWatchers({
  airingTrends,
}: {
  airingTrends: AiringTrendsNode[];
}) {
  const episodes = airingTrends.flatMap((episode) => episode.episode);
  const inProgress = airingTrends.flatMap((episode) => episode.inProgress);

  return (
    <>
      {episodes.length > 1 && (
        <div className="w-full h-[320px] flex justify-start items-start flex-col py-5">
          <p className="font-semibold">Airing Watchers Progression</p>
          <Line
            options={options}
            data={{
              labels: episodes,
              datasets: [
                {
                  label: "Inprocess",
                  data: inProgress,
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
