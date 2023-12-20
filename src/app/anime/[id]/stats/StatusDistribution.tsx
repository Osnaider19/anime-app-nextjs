// "use client"
// import React from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Pie } from "react-chartjs-2";
// import { Distribution } from "@/types/stats";

// ChartJS.register(ArcElement, Tooltip, Legend);

// export function StatusDistribution({
//   distribution,
// }: {
//   distribution: Distribution;
// }) {
//   const status = distribution.status.flatMap((stat) => stat.status);
//   const amount = distribution.status.flatMap((stat) => stat.amount);

//   // Obtener el índice del elemento con la puntuación más alta
//   const maxIndex = amount.findIndex((value) => value === Math.max(...amount));

//   // Colores personalizados para cada rango de puntuación
//   const colors = amount.map((value, index) => {
//     if (index === maxIndex) return "#64D22D"; // Verde para el máximo
//     if (index === maxIndex - 1) return "#02A9FF"; // Azul para el siguiente al máximo
//     if (index === maxIndex - 2) return "#9256F3"; // Morado para el siguiente al siguiente al máximo
//     if (index === maxIndex - 3) return "#E22904"; // Rosa para el siguiente al siguiente al siguiente al máximo
//     return "#F779A4"; // Rojo para otros casos
//   });

//   return (
//     <>
//       {amount.length > 1 && (
//         <div className="w-full h-full ">
//           <p className="font-semibold py-1">Status Distribution</p>
//           <div className="w-full h-full relative">
//             <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center">
//               <Pie
//                 data={{
//                   labels: status,
//                   datasets: [
//                     {
//                       data: amount,
//                       label: "Users",
//                       backgroundColor: colors,
//                       borderColor: colors,
//                       borderWidth: 1,
//                     },
//                   ],
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Distribution } from "@/types/stats";

ChartJS.register(ArcElement, Tooltip, Legend);

export function StatusDistribution({
  distribution,
}: {
  distribution: Distribution;
}) {
  const status = distribution?.status?.flatMap((stat) => stat.status);
  const amount = distribution?.status?.flatMap((stat) => stat.amount);
  if (status === undefined || amount === undefined) return;
  // Obtener el índice del elemento con la puntuación más alta
  const sortedAmountIndices = amount
    .map((_, index) => index)
    .sort((a, b) => amount[b] - amount[a]);

  // Colores personalizados para cada puntuación
  const colors = amount.map((_, index) => {
    if (index === sortedAmountIndices[0]) return "#64D22D"; // Verde para el máximo
    if (index === sortedAmountIndices[1]) return "#02A9FF"; // Azul para el siguiente al máximo
    if (index === sortedAmountIndices[2]) return "#9256F3"; // Morado para el siguiente al siguiente al máximo
    if (index === sortedAmountIndices[3]) return "#F779A4"; // Rosa para el siguiente al siguiente al siguiente al máximo
    return "#E22904"; // Rojo para otros casos
  });

  return (
    <>
      {amount?.length > 1 && (
        <div className="w-full h-[350px] md:h-full ">
          <p className="font-semibold py-2">Status Distribution</p>
          <div className="w-full h-full relative">
            <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center">
              <Pie
                data={{
                  labels: status,
                  datasets: [
                    {
                      data: amount,
                      label: "Users",
                      backgroundColor: colors,
                      borderColor: colors,
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
