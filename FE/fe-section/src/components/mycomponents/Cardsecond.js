



const Cardsecond = () => {
  return (
    <div className=" max-w-[384px] min-w-[384px] max-h-[216px]   rounded-3xl bg-white">
      <div className=" flex items-center py-4 px-6 font-semibold gap-2 ">
        <div className=" bg-[#84CC16] w-2 h-2 rounded-full" />
        <p>Your Income</p>
      </div>
      <div className=" flex flex-col px-6 pt-5 pb-6 border-t-2">
        <div className="flex font-semibold text-4xl leading-10"><p>1,200,000</p><p>T</p></div>
        <p className="text-lg leading-7">Your Income Amount</p>
        <div className=" flex items-center gap-2">
          <div className=" bg-[#84CC16] w-6 h-6 rounded-full" ></div>
          <p>32% from last month</p>
        </div>
      </div>
    </div>
   
  );
};
export default Cardsecond;
// border-t-indigo-500

