"use client";
import { useEffect, useRef, useState } from "react";

const MetalDetails = () => {
  const [showATHL, setShowATHL] = useState(false);
  const showATHLRef = useRef(null);
  useEffect(() => {
    const close = (event) => {
      if (showATHLRef.current && !showATHLRef.current.contains(event.target)) {
        setShowATHL(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="bg-white/5 backdrop-blur-2xl w-1/2 mr-3 px-[1rem] py-[1rem]">
      <div className="flex items-center border-b-[1px] border-gray-500 pb-[1rem]">
        <div className="flex flex-col justify-center w-1/2">
          <div className="flex items-center mb-[1rem]">
            <div className="w-[2rem] h-[2rem] border-[2px] border-white mr-[1rem] rounded-full bg-yellow-600"></div>
            <h1 className="font-semibold text-[1.5rem]">Gold (Au)</h1>
          </div>
          <div className="pl-[3rem]">
            <h1 className="text-[1.2rem]">$200.78</h1>
          </div>
        </div>
        <div className="w-1/2 flex">
          <div className="w-1/2">
            <h1 className="text-[1.2rem] font-semibold">Price 24h</h1>
            <p className="text-green-500">
              <i className="fa-solid fa-caret-up"></i> 1.5%
            </p>
          </div>
          <div className="w-1/2">
            <h1 className="text-[1.2rem] font-semibold">Price 7d</h1>
            <p className="text-red-600">
              <i className="fa-solid fa-caret-down"></i>0.5%
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-[1.5rem]">
        <div className="w-1/2  px-[1rem] mb-3">
          <div className="border-b-[1px] border-gray-500 py-[0.5rem]">
            <h1 className="text-[1.2rem] font-semibold">Price Change</h1>
            <p className="text-green-500">
              <i className="fa-solid fa-caret-up"></i> 1.5%
            </p>
          </div>
        </div>
        <div className="w-1/2 px-[1rem] mb-3">
          <div className="border-b-[1px] border-gray-500 py-[0.5rem]">
            <h1 className="text-[1.2rem] font-semibold">Market Cap</h1>
            <p className="">$890.00B</p>
          </div>
        </div>
        <div className="w-1/2 px-[1rem] mb-3">
          <div className="border-b-[1px] border-gray-500 py-[0.5rem]">
            <h1 className="text-[1.2rem] font-semibold">24h Volume</h1>
            <p className="">$12.52</p>
          </div>
        </div>
        <div className="w-1/2 px-[1rem] mb-3">
          <div className="border-b-[1px] border-gray-500 py-[0.5rem]">
            <h1 className="text-[1.2rem] font-semibold">Supply</h1>
            <p className="">5,89,00,000</p>
          </div>
        </div>
        <div className="w-1/2 px-[1rem] mb-3">
          <div className="border-b-[1px] border-gray-500 py-[0.5rem]">
            <h1 className="text-[1.2rem] font-semibold">Market Dominance</h1>
            <p className="text-green-500">
              <i className="fa-solid fa-caret-up"></i> 1.5%
            </p>
          </div>
        </div>
        <div className="w-1/2  px-[1rem] mb-3">
          <div className="border-b-[1px] border-gray-500 py-[0.5rem]">
            <div className="flex">
              <h1 className="mr-[0.5rem] text-[1.2rem] font-semibold">
                All Time{" "}
              </h1>
              <div className="w-fit" ref={showATHLRef}>
                <button
                  onClick={() => {
                    setShowATHL(!showATHL);
                  }}
                  className="flex items-center cursor-pointer border-b-[1px] border-gray-500 text-[1.2rem] font-semibold"
                >
                  <p>High</p>
                  <i className="fa-solid fa-caret-down ml-[1rem]"></i>
                </button>
                {showATHL && (
                  <div className="absolute border-[1px] border-gray-500">
                    <p className="px-[1rem] py-[0.2rem] border-b-[1px] border-gray-500 hover:bg-gray-700 cursor-pointer">
                      High
                    </p>
                    <p className="px-[1rem] py-[0.2rem] hover:bg-gray-700 cursor-pointer">
                      Low
                    </p>
                  </div>
                )}
              </div>
            </div>
            <p className="text-green-500">
              <i className="fa-solid fa-caret-up"></i> 1.5%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetalDetails;
