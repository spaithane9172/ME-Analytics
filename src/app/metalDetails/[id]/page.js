import { MetalTableData } from "@/data/MetalTableData";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <div className="pt-[5rem] text-white px-[1rem]">
      <div className="bg-white/5 backdrop-blur-2xl w-1/2">
        <h1>Gold</h1>
      </div>
      <div className="w-1/2"> chart</div>
    </div>
  );
};

export default page;
