import Layout from "../../components/mycomponents/Layout";
import Last from "../../components/mycomponents/Last";
import Cardssum from "../../components/mycomponents/Cardssum";
import Chart from "../../components/mycomponents/Chart";
import Chartsum from "../../components/mycomponents/Chartsum";

const Dashboard = () => {
  return (
    <div className="bg-[#F3F4F6]">
      <Layout />
      <Cardssum />
      <Chartsum />
      <Last />
    </div>
  );
};

export default Dashboard;
