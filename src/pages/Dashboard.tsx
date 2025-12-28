import assets from "../assets/assets";
import TopBanner from "../components/Dashboard/TopBanner";
import ScoreCard from "../components/Dashboard/ScoreCard";
import ScoreSection from "../components/Dashboard/ScoreSection";
import ScoreProgressChart from "../components/Dashboard/ScoreProgressChart";
import SectionPerformanceChart from "../components/Dashboard/SectionPerformanceChart";
import ChartSection from "../components/Dashboard/ChartSection";
import RecentActivity from "../components/Dashboard/RecentActivity";

const Dashboard = () => {
  return (
    <div className="min-h-screen  pt-28 sm:pt-28 px-6 ">
      <TopBanner />
      <ScoreSection/>
      <ChartSection/>
      <RecentActivity/>
    </div>
  );
};

export default Dashboard;
