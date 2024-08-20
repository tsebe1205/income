
import { Pie, PieChart } from "recharts"
import {
  Card,
  CardContent, CardHeader
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "Insurance", visitors: 275, fill: "#16BDCA" },
  { browser: "Bills", visitors: 200, fill: "#1C64F2" },
  { browser: "Food", visitors: 187, fill: "#E74694" },
  { browser: "Clothing", visitors: 173, fill: "#F2901C" },
  { browser: "Shopping", visitors: 90, fill: "#FDBA8C" },
]
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Insurance",
    color: "#16BDCA",
  },
  safari: {
    label: "Bills",
    color: "#1C64F2",
  },
  firefox: {
    label: "Food",
    color: "#E74694",
  },
  edge: {
    label: "Clothing",
    color: "#F2901C",
  },
  other: {
    label: "Shopping",
    color: "#FDBA8C",
  },
} 

const Piee=()=> {
  return (
    <div className="max-w-[1200px] h-full flex mx-auto py-4 justify-between">
      <div className=" flex flex-col max-w-[588px] max-h-[284px] w-full h-full rounded-2xl bg-white mt-5">
        <p className="px-6 py-4">income - Expense</p>
        <Card className=" px-6 py-8 border-t-2">
        <CardHeader className="items-center pb-0"></CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square h-[200px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius={40}
              />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
      </div>
     
    </div>
);
}; export default Piee



 
 