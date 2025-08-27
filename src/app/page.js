import Card from "@/components/Card";
import NewsCard from "@/components/NewsCard";
import Table from "@/components/Table";
import { MarketCapDetails } from "@/data/MarketCapDetails";
import { NewsData } from "@/data/NewsData";
import { tableHeader, MetalTableData } from "@/data/MetalTableData";

export default function Home() {
  return (
    <div className="darkBg w-[100vw] h-[100vh] px-[1rem] pt-[5rem]">
      <div className="flex">
        <div className="flex w-[60vw] flex-wrap">
          {MarketCapDetails.map((details) => {
            return <Card key={details.title} details={details} />;
          })}
        </div>
        <div className="w-[40vw] my-[0.5rem] ">
          <div className="border-[1px] border-gray-500 rounded-lg">
            <div className="border-b-[1px] border-gray-500 py-[0.5rem]">
              <h1 className="text-blue-600 font-semibold px-[1rem]">News</h1>
            </div>
            <div>
              {NewsData.map((newsDetails) => {
                return (
                  <NewsCard key={newsDetails.id} newsDetails={newsDetails} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="px-[0.5rem]">
        <Table header={tableHeader} data={MetalTableData} />
      </div>
    </div>
  );
}
