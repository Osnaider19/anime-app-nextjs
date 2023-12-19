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
import { TrendsNode } from "@/types/stats";

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
      text: "Recent Activity Per Day",
    },
  },
  
};
const ordinalArray = [
  "25th",
  "26th",
  "27th",
  "28th",
  "29th",
  "30th",
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
  "11th",
  "12th",
  "13th",
  "14th",
  "15th",
  "16th",
  "17th",
  "18th",
];

export function ActivityPerDay({ trends }: { trends: TrendsNode[] }) {
  const trendings = trends.flatMap((trending) => trending.trending);

  return (
    <>
      {trendings.length > 1 && (
        <div className="w-full h-[350px] flex justify-start items-start flex-col py-5">
          <p className="font-semibold">Recent Activity Per Day</p>
          <Line
            options={options}
            data={{
              labels: ordinalArray,
              datasets: [
                {
                  //label: "trending",
                  data: trendings,
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
