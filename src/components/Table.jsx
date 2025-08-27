"use client";
import { motion } from "framer-motion";
const Table = ({ header, data }) => {
  return (
    <div className="w-full h-[5rem] mt-[1rem]">
      <table className="border-[1px] border-gray-500 rounded-md shadow-lg w-full">
        <thead className="sticky border-b-[1px] border-gray-500 bg-white/5 backdrop-blur-2x">
          <tr>
            {header.map((item) => {
              return (
                <th key={item} className="py-[0.5rem]">
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((metal, indx) => {
            return (
              <motion.tr
                whileHover={{ scale: 1.01 }}
                key={indx}
                className={`border-b-[1px] border-gray-500 ${
                  indx % 2 === 1 ? "bg-white/5 backdrop-blur-2xl" : "darkBg"
                }`}
              >
                <td className="text-center py-[1rem]">{metal.id}</td>
                <td className="text-center py-[1rem] flex">
                  <div className="flex justify-center items-center font-semibold border-[1px] border-blue-600 bg-blue-800  backdrop-blur-2xl w-[2rem] h-[2rem] rounded-full text-[0.8rem] mr-[1rem]">
                    {metal.chem}
                  </div>
                  {metal.name}
                </td>
                <td className="text-center py-[1rem]">{metal.price}</td>
                <td
                  className={`text-center py-[1rem] ${
                    metal._24h.includes("+") ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {" "}
                  {metal._24h.includes("+") ? (
                    <i className="fa-solid fa-arrow-trend-up"></i>
                  ) : (
                    <i className="fa-solid fa-arrow-trend-down"></i>
                  )}{" "}
                  {metal._24h}
                </td>
                <td
                  className={`text-center py-[1rem] ${
                    metal._7d.includes("+") ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {metal._7d.includes("+") ? (
                    <i className="fa-solid fa-arrow-trend-up"></i>
                  ) : (
                    <i className="fa-solid fa-arrow-trend-down"></i>
                  )}{" "}
                  {metal._7d}
                </td>
                <td className="text-center py-[1rem]">{metal.marketCap}</td>
                <td className="text-center py-[1rem]">{metal.volume}</td>
                <td className="text-center py-[1rem]">{metal.supply}</td>
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
