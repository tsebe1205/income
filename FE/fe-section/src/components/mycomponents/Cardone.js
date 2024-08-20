import Image from "next/image";
import Largecard from "../assets/Largecard.png";

const Cardone = () => {
  return (
    <div className="flex max-h-[216px] max-w-[384px] min-w-[384px]">
      <Image
        src={Largecard}
        alt="Cardone"
        width={384}
        height={216}
        className="flex w-full h-full bg-cover"
      />
    </div>
  );
};
 
export default Cardone;
