"use client";
import React, { useState } from "react";

const Calculator = () => {
  const METAL_PRICE = 111;
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleChangeInput = (e) => {
    if (!isNaN(e.target.value)) {
      setInput(e.target.value);
      setResult(e.target.value * METAL_PRICE);
    }
  };
  return (
    <div className="w-1/2 mt-3 ml-3 bg-white/5 backdrop-blur-2xl rounded-lg shadow-lg flex flex-col border-[1px] border-gray-500">
      <div className="py-[0.5rem] border-b-[1px] border-gray-500">
        <h1 className="text-[1.2rem] text-center font-semibold">
          <i className="fa-solid fa-calculator"></i> Metal Price Calculator
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center pt-[2rem]">
        <h1 className="text-[1.5rem] mb-[1rem]">{result}</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            handleChangeInput(e);
          }}
          placeholder="Weight in kg"
          className="border-[1px] border-gray-500 outline-none px-[0.5rem] text-center rounded-md py-[0.5rem] focus:border-white w-[20vw]"
        />
      </div>
    </div>
  );
};

export default Calculator;
