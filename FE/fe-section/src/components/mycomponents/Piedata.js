const Piedata = () => {
  const arr = [
    { bg: "bg-[#1C64F2]", ename: "Bills",amount:"500,000", per: "15.50%" },
    { bg: "bg-[#E74694]", ename: "Food",amount:"1,500,000", per: "15.50%" },
    { bg: "bg-[#FDBA8C]", ename: "Shopping",amount:"200,000", per: "15.50%" },
    { bg: "bg-[#16BDCA]", ename: "Insurance",amount:"100,000", per: "15.50%" },
    { bg: "bg-[#F2901C]", ename: "Clothing",amount:"300,000", per: "15.50%" },
  ];
  return (
    <div className="  max-w-[337px] max-h-[164px] flex flex-col gap-[8px] mt-[32px]">
        {arr.map((el ) => {
            return    <div className="flex flex-row items-center gap-2">
            <div className={`w-2 h-2 rounded-full flex flex-col justify-center ` + el.bg}></div><div className="flex gap-8 text-sm"><p>{el.ename}</p>
            <p>{el.amount}</p> <p>{el.per}</p></div>
             </div>
          
        })}
    </div>
  );
};
export default Piedata

