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
import styles from "./Dashboard.module.css";

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
  maintainAspectRatio: false,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
    },
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Count of Orders",
      data: [0, 2, 6, 7],
      borderColor: "#d7d8f2",
      backgroundColor: "#d7d8f2",
      yAxisID: "y",
    },
    {
      label: "Sum of Cost of Orders",
      data: [0, 484, 1286, 1502],
      borderColor: "#b5bdff",
      backgroundColor: "#b5bdff",
      yAxisID: "y1",
    },
  ],
};

export default function OrderChart() {
  return (
    <div className={`card ${styles.chartContainer}`}>
      <Line options={options} data={data} />
    </div>
  );
}
