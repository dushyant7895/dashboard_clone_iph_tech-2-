import React from "react";
import { IoAlertSharp } from "react-icons/io5";
import SalesVsRefundChart from "../chart/SalesVsRefundChart";

const SalesVsRefund = () => {
  return (
    <div className="bg-white rounded-sm shadow-sm">
      <p className="px-2 font-bold py-2 flex">
        Sales vs Refund
        <span className="ml-2 p-1 text-white rounded-full bg-gray-400 ">
          <IoAlertSharp />
        </span>
      </p>
      <hr />
      <div>
        <span className="text-3xl font-bold relative px-2">
          +$6,796
          <sup className="absolute bg-[#F59E0B] px-1 text-xs text-white rounded-lg ">
            -34%
          </sup>
        </span>
      </div>
      <SalesVsRefundChart />
    </div>
  );
};

export default SalesVsRefund;
