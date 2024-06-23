import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses","Earn"],
  ["Dec20", 200, 50,150],
  ["", 0, 360,210],
  ["", 100, 160,200],
  ["Jun21", 360, 0,100],
  ["", 330, 140,200],
  ["", 230, 240,230],
  ["Dec21", 260, 340,280],
  ["", 0, 140,200],
  ["", 220, 340,210],
  ["Jun22", 330, 100,300],
  ["", 230, 340,200],
  ["", 330, 340,210],
  ["Dec22", 230, 240,120],
 
];

export const options = {
  hAxis: {
    title: '',
    titleTextStyle: { color: "#333" },
    gridlines: { color: 'transparent' },
    
  },
  vAxis: { 
    ticks: [0,100, 200, 300,400], // Set custom ticks for vertical axis
    format: "currency", // Format ticks as currency
  },
  chartArea: { width: "80%", height: "80%" },
  backgroundColor: 'transparent', // Sets background to transparent
  series: {
     // Style for the first series (Sales)
    0: { color: '#72efdd', lineWidth: 2, areaOpacity: 0 }, // Style for the second series (Expenses)
    1: { color: '#10B981', lineWidth: 2, areaOpacity: 0 }, // Style for the second series (Expenses)
    2: { color: '#8184F4', lineWidth: 2, areaOpacity: 0 } // Style for the second series (Expenses)
  },
  legend: { position: "none" }, // Remove the legend
  
};

const SalesOverTimeChart = () => {
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

export default SalesOverTimeChart;
