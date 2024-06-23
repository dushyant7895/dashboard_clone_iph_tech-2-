import React from "react";
import { PiHandWavingFill } from "react-icons/pi";
import { IoAddOutline } from "react-icons/io5";
import { IoFilterOutline } from "react-icons/io5";
import DatePicker from "../components/DatePicker";
import { BsThreeDots } from "react-icons/bs";
import LineChart1 from "../chart/LineChart1";
import LineChart2 from "../chart/LineChart2";
import LineChart3 from "../chart/LineChart3";
import ColumnChart from "../chart/ColumnChart";
import AVGOrderValue from "../components/AVGOrderValue";
import TopCountry from "../components/TopCountry";
import TopChannel from "../components/TopChannel";
import SalesOverTime from "../components/SalesOverTime";
import SalesVsRefund from "../components/SalesVsRefund";
import RecentActivity from "../components/RecentActivity";
import IncomeExpress from "../components/IncomeExpress";

const Main = () => {
  return (
    <div className="w-[95%] mx-auto gap-y-4">
      <div className="w-full bg-[#C7D2FE] my-4 py-3 px-3 rounded-sm ">
        <h4 className="font-bold flex">
          Good afternoon, AcmeInc.
          <span>
            <PiHandWavingFill className="text-[#FFC83D]  " />
          </span>
        </h4>
        <p className="">Here is what’s happening with your projects today:</p>
      </div>
      {/**for image and calender container */}
      <div className="flex justify-between ">
        <div className="flex gap-[-5px]">
          <img
            className="w-10 h-10 rounded-full relative z-10"
            src="https://preview.cruip.com/mosaic/images/user-36-01.jpg"
            alt=""
          />
          <img
            className="w-10 h-10 rounded-full -ml-3 relative z-20"
            src="https://preview.cruip.com/mosaic/images/user-36-02.jpg"
            alt=""
          />
          <img
            className="w-10 h-10 rounded-full -ml-3 relative z-30"
            src="https://preview.cruip.com/mosaic/images/user-36-03.jpg"
            alt=""
          />
          <img
            className="w-10 h-10 rounded-full -ml-3 relative z-40"
            src="https://preview.cruip.com/mosaic/images/user-36-04.jpg"
            alt=""
          />
          <IoAddOutline className="w-10 h-10 relative -ml-3 z-50 bg-white rounded-full text-blue-800 " />
        </div>
        <div className="flex gap-x-3 mx-2">
          <button className="bg-white py-1 px-1 shadow-sm rounded-sm">
            <IoFilterOutline className="w-8 h-8" />
          </button>
          <DatePicker />
          <button className="flex px-2 py-2 items-center bg-[#4F46E5] text-white rounded-md">
            <IoAddOutline className="w-5 h-5" />
            Add View
          </button>
        </div>
      </div>
      {/**For graph chart container */}
      <div className="grid grid-cols-3  gap-x-3 my-4">
        {/**First graph */}
        <div className="flex flex-col shadow-sm rounded-sm bg-white px-3 py-2">
          <div className="flex justify-between py-2">
            <img
              src="https://preview.cruip.com/mosaic/images/icon-01.svg"
              alt=""
            />
            <BsThreeDots />
          </div>
          <div className="flex flex-col">
            <span className="text-md font-bold">Acme Plus</span>
            <span className="text-sm text-gray-500">SALES</span>
            <span className="text-2xl font-bold relative">
              $24,780
              <sup className="absolute bg-[#10B981]  px-1 text-xs text-white rounded-lg ">
                +49%
              </sup>
            </span>
            <div>
              <LineChart1 />
            </div>
          </div>
        </div>
        {/**Second Graph */}
        <div className="flex flex-col rounded-sm shadow-sm  px-3 bg-white py-2">
          <div className="flex justify-between py-2">
            <img
              src="https://preview.cruip.com/mosaic/images/icon-02.svg"
              alt=""
            />
            <BsThreeDots />
          </div>
          <div className="flex flex-col">
            <span className="text-md font-bold">Acme Advance</span>
            <span className="text-sm text-gray-500">SALES</span>
            <span className="text-2xl font-bold relative">
              $14,489
              <sup className="absolute bg-[#F59E0B] px-1 text-xs text-white rounded-lg ">
                +14%
              </sup>
            </span>
            <div>
              <LineChart2 />
            </div>
          </div>
        </div>
        {/**Third Graph */}
        <div className="flex flex-col rounded-sm shadow-sm px-3 bg-white py-2">
          <div className="flex justify-between py-2">
            <img
              src="https://preview.cruip.com/mosaic/images/icon-03.svg"
              alt=""
            />
            <BsThreeDots />
          </div>
          <div className="flex flex-col">
            <span className="text-md font-bold">Acme Professional</span>
            <span className="text-sm text-gray-500">SALES</span>
            <span className="relative  text-2xl font-bold">
              $9,962
              <sup className="absolute  bg-[#10B981] text-xs px-1 text-white rounded-lg ">
                +29%
              </sup>
            </span>
            <div>
              <LineChart3 />
            </div>
          </div>
        </div>
      </div>
      {/**Second chart component */}
      <div className="grid grid-cols-2 gap-x-3 my-4">
        {/**Column Chart */}
        <div className="bg-white rounded-sm shadow-sm py-2 ">
          <p className="px-2 font-bold text-gray-500">Direct VS Indirect</p>
          <hr />
          <div className="px-2 flex gap-x-4">
            <label><input type="radio" name="" id="" /><span className="text-2xl font-bold ">$8.25K</span> Direct</label>
            <label><input type="radio" name="" id="" /><span className="text-2xl font-bold ">$27.7K</span> Indirect</label>
          </div>
          <div>

            <ColumnChart />
          </div>
        </div>
        {/**Line chart */}
        <div className="bg-white rounded-sm shadow-sm py-2 ">
          <AVGOrderValue />
        </div>
      </div>
      {/**Third chart components */}
      <div className="grid grid-cols-3 gap-x-3 my-4">
        <div className="col-span-1 bg-white rounded-sm shadow-sm">
          <TopCountry />
        </div>
        <div className="col-span-2 bg-white rounded-sm shadow-sm">
          <TopChannel />
        </div> 
      </div>
      {/**Fourth Chart components */}
      <div className="grid grid-cols-2 gap-x-3 my-4">
        <div>
          <SalesOverTime />
        </div>
        <div>
          <SalesVsRefund />
        </div>
      </div>
      {/**Recently Activity and Income/Express */}
      <div className="grid grid-cols-2 gap-x-3">
        {/**Recently Activity */}
        <div>
          <RecentActivity />
        </div>
        {/**Income Express */}
        <div>
          <IncomeExpress />
        </div>
      </div>
    </div>
  );
};

export default Main;
