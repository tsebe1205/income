import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GeldLogo from "../../components/mycomponents/GeldLogo";

const Signup = () => {
  return (
    <div className=" w-[100%] h-[100vh] flex">
    <div className="w-1/2 flex flex-col justify-center items-center gap-10">
 
        <div className="flex gap-[9.459px] items-center">
      <GeldLogo/>
          <p className="font-semibold text-2xl">Geld</p>
        </div>

         <div className="flex flex-col justify-center items-center gap-2">
         <p className="font-semibold text-2xl">Create Geld account</p>
          <p className="text-lg font-light">Sign up below to create your Wallet account</p>
         </div>
     
      <form className="flex flex-col gap-3  justify-center items-center">
        <Input className="w-[384px] h-12" placeholder="Name"/>
        <Input className="w-[384px] h-12" placeholder="Email"/>
        <Input className="w-[384px] h-12" placeholder="Password"/>
        <Input className="w-[384px] h-12" placeholder="RE-Password"/>
        <Button className="w-[384px] h-12 bg-blue-600 rounded-[20px]">Sign up</Button>
      </form>
      <div className="flex justify-center gap-4">
          <p className="text-lg font-light"> Already have account?</p> 
          <Link href="http://localhost:3000/signin" className="text-lg font-light text-blue-600"> Sign in</Link>
        </div>
    </div>
    <div className="w-1/2 bg-blue-600"></div>
  </div>
  );
};
export default Signup;
