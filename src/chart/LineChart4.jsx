import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 20, 10],
  ["2014", 50, 36],
  ["2014", 27, 46],
  ["2015", 46, 12],
  ["2016", 43, 14],
  ["2017", 23, 54],
  ["2018", 23, 34],
  ["2019", 33, 14],
  ["2020", 22, 34],
  ["2021", 63, 40],
  ["2022", 43, 34],
  ["2023", 33, 64],
  ["2024", 53, 24],
  ["2025", 23, 34],
  ["2026", 53, 44],
];

export const options = {
  hAxis: {
    title: '',
    titleTextStyle: { color: "#333" },
    gridlines: { color: 'transparent' },
    
  },
  vAxis: { 
    ticks: [0,20, 40, 60,80], // Set custom ticks for vertical axis
    format: "currency", // Format ticks as currency
  },
  chartArea: { width: "80%", height: "80%" },
  backgroundColor: 'transparent', // Sets background to transparent
  series: {
    0: { areaOpacity: 0.2 }, // Style for the first series (Sales)
    1: { color: 'gray', lineWidth: 2, areaOpacity: 0 } // Style for the second series (Expenses)
  },
  legend: { position: "none" }, // Remove the legend
  
};

const LineChart4 = () => {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
};

export default LineChart4;
