import GeldLogo from "../../components/mycomponents/GeldLogo";
import Waitlogo from "../../components/mycomponents/Waitlogo";



const Waiting = () => {
  return (
    <div className=" w-[100%] h-[100vh] flex flex-col justify-center items-center gap-12">
      <div className="flex gap-[17.64px] items-center">
        <GeldLogo className ="w-[45px] h-[44px]"/>
      
        
    
        <p className="font-semibold text-4xl">Geld</p>
      </div>
      <div className="flex flex-col gap-3 items-center">
<Waitlogo/>
      <p>Түр хүлээнэ үү...</p>
      </div>
    </div>
  );
};
export default Waiting;
