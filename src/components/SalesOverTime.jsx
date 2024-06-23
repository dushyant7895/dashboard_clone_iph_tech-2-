import React from "react";
import SalesOverTimeChart from "../chart/SalesOverTimeChart";

const SalesOverTime = () => {
  return (
    <div className="bg-white rounded-sm shadow-sm">
      <p className="px-2 py-2 font-bold ">Sales Over Time (all stores)</p>
      <hr />
      <div className="flex justify-between px-3">
        <span className="text-3xl font-bold relative">
          $1,482
          <sup className="absolute bg-[#F59E0B] px-1 text-xs text-white rounded-lg ">
            -22%
          </sup>
        </span>

        <div className="flex gap-x-2">
          <label>
            <input type="radio" name="" id="" /> Current
          </label>
          <label>
            <input type="radio" name="" id="" />
            Previous
          </label>
        </div>
      </div>
      <SalesOverTimeChart />
       
    </div>
  );
};

export default SalesOverTime;
