import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["year", "Sales", "Refund"],
  ["Dec 20", 100, 200],
  ["", 180, 200],
  ["Feb 21", 170, 200],
  ["", 150, 180],
  ["Apr 21", 110, 180],
];

export const options = {
  title: "",
  chartArea: { width: "70%" },
  isStacked: true,
  vAxis: {
    title: "",
    minValue: 0,
    ticks: [0,100, 200, 300,400], // Set custom ticks for vertical axis
    format: "currency", 
  },
  hAxis: {
    title: "",
  },
  legend: { position: "none" },
};

export default function SalesVsRefundChart() {
  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
}
