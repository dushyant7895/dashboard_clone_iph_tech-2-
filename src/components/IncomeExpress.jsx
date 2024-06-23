import React from 'react'
import { RiChat1Line } from "react-icons/ri";
import { TbBookmarkMinus } from "react-icons/tb";
import { GoArrowSwitch } from "react-icons/go";
import { TbArrowsShuffle } from "react-icons/tb";

const IncomeExpress = () => {
  return (
    <div className="bg-white rounded-sm shadow-sm">
    <p className="px-2 font-bold py-2 flex">
      Income/Express
    </p>
    <hr />
    <div className="px-3">
        <p className="bg-gray-100 p-1 text-gray-500 ">TODAY</p>
        <div className="flex flex-col gap-y-2">
          <div className="flex justify-between">
            <span
              className="bg-blue-600 font-bold rounded-full text-3xl
             text-white p-1 flex items-center"
            >
              <RiChat1Line />
            </span>
            <p>Nick Mark mentioned Sara Smith in a new post</p>
            <p className="text-blue-500 ">View</p>
          </div>
          
          <div className="flex justify-between">
            <span
              className="bg-red-500 font-bold rounded-full text-3xl
             text-white p-1 flex items-center"
            >
              <TbBookmarkMinus />
            </span>
            <p>The post Post Name was removed by Nick Mark</p>
            <p className="text-blue-500 ">View</p>
          </div>
          <div className="flex justify-between">
            <span
              className="bg-green-500  font-bold rounded-full text-3xl
             text-white p-1 flex items-center"
            >
              <GoArrowSwitch />
            </span>
            <p className="">Patrick Sullivan published a new post</p>
            <p className="text-blue-500 ">View</p>
          </div>
        </div>
      </div> 
   </div> 
  )
}

export default IncomeExpress