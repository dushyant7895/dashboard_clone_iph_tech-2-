import React from "react";
import { VscGithub } from "react-icons/vsc";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { CgIndieHackers } from "react-icons/cg";

// Sample data
const data = [
  { source: "Github.com", icon: <VscGithub />, visitors: "2.4K", revenues: "$3,877", sales: 267, conversion: "4.7%" },
  { source: "Twitter", icon: <FaTwitter />, visitors: "2.2K", revenues: "$3,426", sales: 249, conversion: "4.4%" },
  { source: "Google(organic)", icon: <FaGoogle />, visitors: "2.0K", revenues: "$2,444", sales: 224, conversion: "4.2%" },
  { source: "Vimeo.com", icon: <FaVimeoV />, visitors: "1.9K", revenues: "$2,236", sales: 220, conversion: "4.2%" },
  { source: "Indiehackers.com", icon: <CgIndieHackers />, visitors: "1.7K", revenues: "$2,034", sales: 204, conversion: "3.9%" },
];

// Function to determine icon background color
const getIconBgColor = (source) => {
  switch (source) {
    case "Github.com":
      return "bg-gray-800";
    case "Twitter":
      return "bg-[#1DA1F2]";
    case "Google(organic)":
      return "bg-[#EA4335]";
    case "Vimeo.com":
      return "bg-[#4BC9FF]";
    case "Indiehackers.com":
      return "bg-gray-800";
    default:
      return "bg-green-400";
  }
};

const TopChannelTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
            <th className="bg-gray-50  p-2 text-gray-400 md:border-none text-left block md:table-cell">
              SOURCE
            </th>
            <th className="bg-gray-100 p-2 text-gray-400  md:border-none text-left block md:table-cell">
              VISITORS
            </th>
            <th className="bg-gray-100 p-2 text-gray-400 md:border-none text-left block md:table-cell">
              REVENUES
            </th>
            <th className="bg-gray-100 p-2 text-gray-400  md:border-none text-left block md:table-cell">
              SALES
            </th>
            <th className="bg-gray-100 p-2 text-gray-400  md:border-none text-left block md:table-cell">
              CONVERSION
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {data.map((row, index) => (
            <tr
              key={index}
              className="bg-white md:border-none block md:table-row"
            >
              <td className="p-2 md:border-none text-left block md:table-cell flex items-center">
                <span className="ml-2 flex items-center gap-x-3">
                  <span className={`text-xl p-2 text-white rounded-full ${getIconBgColor(row.source)}`}>
                    {row.icon}
                  </span>
                  {row.source}
                </span>
              </td>
              <td className="p-2 md:border-none text-center block md:table-cell">
                {row.visitors}
              </td>
              <td className="p-2 md:border-none text-green-500 text-center block md:table-cell">
                {row.revenues}
              </td>
              <td className="p-2 md:border-none text-center block md:table-cell">
                {row.sales}
              </td>
              <td className="p-2 md:border-none text-blue-500 text-center block md:table-cell">
                {row.conversion}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopChannelTable;
