import React from "react";
import LineChart4 from "../chart/LineChart4";

const AVGOrderValue = () => {
  return (
    <div>
      <p className="px-2 font-bold text-gray-500">AVG Order Value</p>
      <hr />
      <div className="px-2 flex justify-between">
        <span className="relative  text-2xl font-bold">
          $72
          <sup className="absolute  bg-[#10B981] text-xs px-1 text-white rounded-lg ">
            +34%
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
      <div className="">

            <LineChart4 />
      </div>
    </div>
  );
};

export default AVGOrderValue;
