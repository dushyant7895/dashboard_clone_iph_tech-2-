import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 500, 400],
  ["2014", 570, 460],
  ["2014", 270, 460],
  ["2015", 660, 720],
  ["2016", 830, 540],
  ["2017", 430, 540],
  ["2018", 630, 340],
  ["2019", 330, 440],
  ["2020", 620, 340],
  ["2021", 730, 640],
  ["2022", 430, 640],
  ["2023", 330, 440],
  ["2024", 530, 240],
  ["2025", 230, 340],
  ["2026", 530, 440],
];

export const options = {
  hAxis: {
    title: '',
    titleTextStyle: { color: "#333" },
    gridlines: { color: 'transparent' },
    textPosition: 'none' // Removes labels from the x-axis
  },
  vAxis: {
    title: '',
    minValue: 0,
    gridlines: { color: 'transparent' },
    baselineColor: 'transparent', // Removes the bottom line color
    textPosition: 'none' // Removes labels from the y-axis
  },
  chartArea: { width: "100%", height: "100%" },
  backgroundColor: 'transparent', // Sets background to transparent
  series: {
    0: { areaOpacity: 0.2 }, // Style for the first series (Sales)
    1: { color: 'gray', lineWidth: 2, areaOpacity: 0 } // Style for the second series (Expenses)
  },
};

const LineChart3 = () => {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="80%"
      data={data}
      options={options}
    />
  );
};

export default LineChart3;
