import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Month", "Value 1", "Value 2"],
  ["Dec20", 1650, 5140.6],
  ["Jun21", 1350, 4820],
  ["Feb21", 1570, 5230],
  ["Mar21", 1390, 3090.4],
  ["Apr21", 1360, 4690.6],
];

const options = {
  seriesType: "bars",
  series: {
    0: { color: '#60A5FA' }, // Color for the first series (Value 1)
    1: { color: '#6366F1' } // Color for the second series (Value 2)
  },
  legend: { position: "none" }, // Remove the legend
  vAxis: { 
    ticks: [0, 2000, 4000, 6000], // Set custom ticks for vertical axis
    format: "currency", // Format ticks as currency
  }, 
  chartArea: { width: "80%", height: "85%" },
};

const ColumnChart = () => {
  return (
    <Chart
      chartType="ComboChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
};

export default ColumnChart;
