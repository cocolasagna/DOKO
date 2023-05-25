import React from "react";
import classes from "./barchart.module.css";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function BarChart(props) {
  console.log("aaa", props.analysis);
  const categorySales = props.analysis.map((item) => item.categorySales);
  const labels = props.analysis.map((item) => item._id);

  const state = {
    labels: labels,
    datasets: [
      {
        label: "Categories",
        data: categorySales,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {};

  return (
    <div>
      <Bar width={300} height={300} data={state} options={options} />
      <p style={{ textAlign: "center" }}>Orders</p>
    </div>
  );
}

export default BarChart;
