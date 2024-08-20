import Cashbaalance from "./Cashbaalance";
import { Input } from "@/components/ui/input";

const Balance = () => {
  return (
    <div className="flex flex-col items-center w- mt-[141px]">
      <Cashbaalance />
      <Input className="w-[384px] h-12" placeholder="Email" />

      <p className="text-xs font-extralight w-[384px] pt-3 pb-8 px-4">
        How much cash do you have in your wallet?
      </p>
    </div>
  );
};
export default Balance;
