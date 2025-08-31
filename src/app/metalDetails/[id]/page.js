import MetalChart from "@/components/MetalChart";
import MetalDetails from "@/components/MetalDetails";
import { goldPriceData } from "@/data/sampleDataForChart";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <div className="pt-[5rem] text-white px-[1rem] flex ">
      <MetalDetails />
      <div className="w-1/2">
        <MetalChart data={goldPriceData} />
      </div>
    </div>
  );
};

export default page;
