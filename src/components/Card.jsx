const Card = ({ details }) => {
  return (
    <div className="w-1/2">
      <div className="border-[1px] border-gray-500 shadow-lg rounded-md px-[1rem] py-[1rem] mx-[0.5rem] my-[0.5rem] bg-white/5 backdrop-blur-2xl z-1">
        <div className="flex justify-between">
          <h1 className="font-semibold">{details.title}</h1>
          <i className={`${details.icon}`}></i>
        </div>
        <div>
          <p className="text-[2rem]">{details.amount}</p>
        </div>
        <div
          className={`text-[0.9rem] ${
            details.subText.includes("+") ? "text-green-500" : "text-red-500"
          } font-semibold`}
        >
          {details.subText}
        </div>
      </div>
    </div>
  );
};

export default Card;
