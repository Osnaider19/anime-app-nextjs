"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Distribution } from "@/types/stats";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: "Score Distribution",
    },
  },
};

export function ScoreDistribution({
  distribution,
}: {
  distribution: Distribution;
}) {
  const scores = distribution?.score.flatMap((sc) => sc.score);
  const amount = distribution?.score.flatMap((sc) => sc.amount);

  return (
    <>
      {scores.length > 1 && (
        <div className="w-full h-full">
          <p className="font-semibold py-1">Score Distribution</p>
          <Bar
            options={options}
            data={{
              labels: amount,
              datasets: [
                {
                  data: scores,
                  backgroundColor: [
                    "#D2482D",
                    "#D2642D",
                    "#D2802D",
                    "#D29B2D",
                    "#D2B72D",
                    "#D2D22D",
                    "#B7D22D",
                    "#9BD22D",
                    "#80D22D",
                    "#64D22D",
                  ],
                  label: "Score",
                },
              ],
            }}
          />
        </div>
      )}
    </>
  );
}
