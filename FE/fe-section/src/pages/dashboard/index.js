import Cardssum from "../../components/mycomponents/Cardssum";
import Layout from "../../components/mycomponents/Layout";
import Chart from "../../components/mycomponents/Chart";
import { Pie } from "recharts";
import Last from "../../components/mycomponents/Last";
import Piee from "../../components/mycomponents/Pie";

const Dash = () => {
  return (
    <div className="bg-[#F3F4F6]">
      <Layout />
      <Cardssum />
      <Chart />
      <Piee/>
      <Last/>
    </div>
  );
};

export default Dash;
