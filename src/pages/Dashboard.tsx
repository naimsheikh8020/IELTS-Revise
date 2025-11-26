import assets from "../assets/assets";
import TopBanner from "../components/Dashboard/TopBanner";
import ScoreCard from "../components/Dashboard/ScoreCard";
import ScoreSection from "../components/Dashboard/ScoreSection";
import ScoreProgressChart from "../components/Dashboard/ScoreProgressChart";
import SectionPerformanceChart from "../components/Dashboard/SectionPerformanceChart";
import ChartSection from "../components/Dashboard/ChartSection";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 sm:pt-28 px-4 sm:px-8 md:px-12">
      <TopBanner />
      <ScoreSection/>
      <ChartSection/>
    </div>
  );
};

export default Dashboard;
