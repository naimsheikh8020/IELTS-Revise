import React from "react";
import assets from "../../assets/assets";
import ActivityItem from "./ActivityItem";

const RecentActivity: React.FC = () => {
  const activities = [
    {
      icon: assets.writingrecent,
      title: "Writing Task 2 - Technology Essay",
      subtitle: "Completed 2 hours ago",
      band: 8, // numeric
    },
    {
      icon: assets.listingrecent,
      title: "Listening Practice Test 5",
      subtitle: "Completed yesterday",
      score: 28, // numeric
      total: 40,
    },
    {
      icon: assets.readingrecent,
      title: "Reading - Academic Passage Analysis",
      subtitle: "Completed 2 days ago",
      score: 35,
      total: 40,
    },
    {
      icon: assets.speakingrecent,
      title: "Speaking - Academic Passage Analysis",
      subtitle: "Completed 2 days ago",
      score: 35,
      total: 40,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mb-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <img src={assets.recentActivity} alt="recent activity" className="w-6 h-6" />
        <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
      </div>

      {/* Activity List */}
      <div className="flex flex-col gap-4">
        {activities.map((item, index) => (
          <ActivityItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
