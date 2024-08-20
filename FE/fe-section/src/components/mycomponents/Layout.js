import Link from "next/link";
import { Button } from "@/components/ui/button";
import GeldLogo from "./GeldLogo";
import Image from "next/image";

const Layout = () => {
  return (
    <div className="max-w-[1200px] flex mx-auto py-4 justify-between">
      <div className="flex gap-6 items-center">
        <GeldLogo />
        <Link
          href="http://localhost:3000/dashboard"
          className="font-semibold text-base"
        >
          Dashboard
        </Link>
        <Link href="http://localhost:3000/signin">Record</Link>
      </div>
      <div className="flex gap-6 items-center">
        <Button className="w-[99px] h-8 bg-blue-600 rounded-[20px]">
          + Record
        </Button>
        <Image
          className=" rounded-full"
          src="https://cdn.vectorstock.com/i/1000x1000/21/78/businessman-avatar-elegant-icon-vector-11222178.webp"
          alt="profilePicture"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};
export default Layout;
