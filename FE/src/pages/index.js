import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex w-11 items-center">
     <Button> hello</Button>
    </main>
  );
}
