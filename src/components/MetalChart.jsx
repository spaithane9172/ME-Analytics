"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";
import { useEffect, useRef, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  plugins: {
    legend: { display: true, labels: { color: "#fff" } },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    x: {
      ticks: { color: "#fff" },
      grid: { color: "rgba(255,255,255,0.1" },
    },
    y: {
      ticks: { color: "#fff" },
      grid: { color: "rgba(255,255,255,0.1" },
    },
  },
};

const MetalChart = ({ data }) => {
  const [range, setRange] = useState("24h");
  const [showDropDown, setShowDropDown] = useState(false);
  const rangesForDropDown = [
    "24h",
    "7days",
    "1Month",
    "3Months",
    "6Months",
    "1Year",
    "All",
  ];
  const dropDownRef = useRef(null);

  useEffect(() => {
    const close = (event) => {
      if (dropDownRef.current && dropDownRef.current.contains(event.target)) {
        setShowDropDown(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div>
      <div className="flex justify-end">
        <button
          onClick={() => {
            setShowDropDown(!showDropDown);
          }}
          className="border-b-[1px] border-gray-500 text-start  bg-white/5 backdrop-blur-2xl w-[10vw] cursor-pointer"
        >
          <div className="flex justify-between px-[1rem] py-[0.2rem]">
            <p>{range}</p>
            <p>
              <i className="fa-solid fa-caret-down"></i>
            </p>
          </div>
          {showDropDown && (
            <div className="relative">
              <div className="absolute left-0 top-0 bg-gray-900 backdrop-blur-xl w-[10vw] ">
                <ul>
                  {rangesForDropDown.map((r) => {
                    return (
                      <li
                        key={r}
                        className="cursor-pointer px-[1rem] py-[0.3rem] border-b-[1px] border-gray-500 hover:bg-gray-800"
                      >
                        <button
                          onClick={() => {
                            setRange(r);
                          }}
                          className="w-full text-start cursor-pointer"
                        >
                          {r}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </button>
      </div>
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default MetalChart;
