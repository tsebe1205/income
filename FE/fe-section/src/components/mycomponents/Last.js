import { Home } from "lucide-react";
import Homep from "./Homep";

const Last = () => {
    return (
        <div className=" mx-auto max-w-[1200px]">
            <div className="px-6 py-4">Last Records</div>
            <div className="flex justify-between items-center border-t-2">
              <div className="flex items-center gap-4">
              <Homep/>
                <div className="">
                <p>Lending & Renting</p>
                <p>3 hours ago</p>
                </div>
              </div>
                <p>1000</p>
            </div>
        </div>
    )
};
export default Last