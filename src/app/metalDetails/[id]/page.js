import MetalChart from "@/components/MetalChart";
import MetalDetails from "@/components/MetalDetails";
import WhatPeopleSays from "@/components/WhatPeopleSays";
import { goldPriceData } from "@/data/sampleDataForChart";
import NewsCard from "@/components/NewsCard";
import { NewsData } from "@/data/NewsData";
import Calculator from "@/components/Calculator";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <div className="pt-[5rem] text-white px-[1rem] flex ">
      <div className="w-1/2 mr-3">
        <MetalDetails />
        <div className="flex">
          <WhatPeopleSays />
          <Calculator />
        </div>
      </div>
      <div className="w-1/2">
        <MetalChart data={goldPriceData} />
        <div className="mt-2">
          <div className="border-[1px] border-gray-500 rounded-lg">
            <div className="border-b-[1px] border-gray-500 py-[0.5rem]">
              <h1 className="text-blue-600 font-semibold px-[1rem]">News</h1>
            </div>
            <div className="h-[25vh] overflow-y-scroll scrollbar">
              {NewsData.map((newsDetails) => {
                return (
                  <NewsCard key={newsDetails.id} newsDetails={newsDetails} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
