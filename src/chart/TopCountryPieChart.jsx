import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Value"],
  ["United States", 11],
  ["Italy", 12],
  ["Other", 20],
];

export const options = {
  title: "",
  pieHole: 0.8,
  is3D: false,
  legend: {
    position: 'bottom', 
    alignment: 'center',
    textStyle: { color: 'black', fontSize: 11 },
    shape: 'square', // Set legend color in square form
  },
  slices: {
    0: { color: '#4F46E5' }, // United States
    1: { color: '#60A5FA' }, // Italy
    2: { color: '#312E81' }, // Other
  },
  pieSliceText: 'none', // Remove labels from the pie chart
};

export function TopCountryPieChart() {
  return (
    <div className=" ">
      <Chart
        chartType="PieChart"
        width="100%"
        height="350px"
        data={data}
        options={options}
      />
    </div>
  );
}
