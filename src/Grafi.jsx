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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);
export function Grafi(props) {
  const prebivalstvo = props.prebivalstvo;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Podatki o starosti prebivalstva",
      },
    },
  };

  const labels = prebivalstvo[0];

  const data = {
    labels,
    datasets: [
      {
        label: "Slovenija",
        data: prebivalstvo[1],
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
