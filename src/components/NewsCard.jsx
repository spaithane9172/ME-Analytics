import Image from "next/image";

const NewsCard = ({ newsDetails }) => {
  return (
    <div>
      <div className="flex p-[1rem] border-b-[1px] border-gray-500 shadow-sm hover:bg-white/5 hover:backdrop-blur-2xl">
        <div className="mr-[1rem] w-[10rem] h-[5rem]">
          <Image
            src={newsDetails.img}
            alt=""
            width={200}
            height={200}
            className="w-full h-[5rem]"
          />
        </div>
        <div>
          <h1 className="text-[0.9rem] font-semibold">
            {newsDetails.title.length > 40
              ? newsDetails.title.slice(0, 40) + "..."
              : newsDetails.title.slice(0, 40)}
            <span className="mx-[1rem] text-[0.7rem]">
              {newsDetails.date + " " + newsDetails.time}
            </span>
          </h1>
          <p className="text-[0.8rem]">{newsDetails.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
