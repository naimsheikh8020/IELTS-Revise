import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaChartLine } from "react-icons/fa";

interface ScoreData {
  week: string;
  score: number;
}

const data: ScoreData[] = [
  { week: "Week 1", score: 6 },
  { week: "Week 2", score: 6.2 },
  { week: "Week 3", score: 6.5 },
  { week: "Week 4", score: 6.8 },
  { week: "Week 5", score: 7 },
  { week: "Week 6", score: 7.2 },
];

const ScoreProgressChart: React.FC = () => {
  return (
    <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 w-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <FaChartLine className="text-blue-600 text-xl" />
        <h3 className="text-gray-800 font-semibold text-lg">
          Score Progress Over Time
        </h3>
      </div>

      {/* Mobile-Responsive Fix */}
      <div className="w-full h-64 sm:h-72 md:h-80 overflow-hidden">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="week" tick={{ fontSize: 13 }} />
            <YAxis domain={[5, 9]} tick={{ fontSize: 13 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 6, stroke: "#2563eb", strokeWidth: 2, fill: "white" }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ScoreProgressChart;
