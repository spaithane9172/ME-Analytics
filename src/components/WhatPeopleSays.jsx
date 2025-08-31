"use client";
import React from "react";
import { userReviews } from "../data/UserReviews";
import { motion } from "framer-motion";

const WhatPeopleSays = () => {
  return (
    <div className="mt-3 w-1/2">
      <div className="border-[1px] border-gray-500 rounded-lg">
        <div className="px-[1rem] py-[0.5rem] border-b-[1px] border-gray-500 flex justify-between">
          <h1 className="text-[1.2rem] font-semibold">What People Say</h1>
          <h1 className="cursor-pointer">
            <i className="fa-solid fa-plus"></i>
          </h1>
        </div>
        <div className="h-[25vh] scrollbar overflow-y-scroll px-[0.5rem]">
          {userReviews.map((review) => {
            return (
              <motion.div
                key={review.id}
                whileHover={{ scale: 1.01 }}
                className="bg-gray-900/25 backdrop-blur-2xl"
              >
                <div className=" border-gray-500 px-[1rem] py-[0.5rem] flex justify-between items-center">
                  <h1 className="font-semibold flex items-center">
                    <div className="flex justify-center items-center text-[0.9rem] mr-[1rem] w-[2rem] h-[2rem] rounded-full border-[1px] border-blue-600 bg-blue-700  backdrop-blur-2xl">
                      {review.name.slice(0, 2)}
                    </div>
                    {review.name}
                  </h1>
                  <p className="text-[0.9rem]">{review.date}</p>
                </div>
                <div className="px-[2rem] pt-[0.5rem] pb-[1rem] border-b-[1px] border-gray-500">
                  <p>{review.message}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatPeopleSays;
