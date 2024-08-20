import { Bar, BarChart, XAxis,CartesianGrid, YAxis } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { useEffect, useState } from "react";
import axios from "axios";


const Chart = () => {

    const [chartData, setChartData] = useState([]);
    const fetchData =  async () => {
        const res = await axios.get('http://localhost:8000/record/barChart');
        setChartData(res.data);
    }
    useEffect(() => {
        fetchData()
    }, [])



const chartConfig = {
  income: {
    label: "income",
    color: "#84CC16",
  },
  expense: {
    label: "Expenses",
    color: "#F97316",
  },
};


  return (
    <div className="max-w-[1200px] h-full flex mx-auto py-4 justify-between">
      <div className=" flex flex-col max-w-[588px] max-h-[284px] w-full h-full rounded-2xl bg-white mt-5">
        <p className="px-6 py-4">income - Expense</p>
        <ChartContainer
          config={chartConfig}
          className=" px-6 py-8 border-t-2"
        >
          <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <YAxis/>
    <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
    />
            <Bar dataKey="income" fill="var(--color-income)" radius={4} />
            <Bar dataKey="expense" fill="var(--color-expense)" radius={4} />
          </BarChart>
        </ChartContainer>
      </div>
     
    </div>
  );
};
export default Chart;
