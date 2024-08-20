import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import Mntlogo from "../../components/mycomponents/MntLogo";

const Currency = () => {
    return (
        <div className="flex flex-col items-center w- mt-[141px]">
    <div className="pb-6"><Mntlogo/></div>
      <Select>
          <SelectTrigger className="w-[384px] h-[48px] pt-6 pb-3">
            <SelectValue placeholder="Amount" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="MNT">MNT - Mongolian Tugrik</SelectItem>
            <SelectItem value="EUR">EUR - Europian euro</SelectItem>
            <SelectItem value="USD">USD - United States dollar</SelectItem>
          </SelectContent>
        </Select>

       <p className="text-xs font-extralight w-[384px] pt-3 pb-8">
          Your base currency should be the one you use most often. All transaction
          in other currencies will be calculated based on this one
        </p>
        </div>
    )
}
export default Currency

          
      
   