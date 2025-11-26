import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaBullseye } from "react-icons/fa";

interface SectionData {
  section: string;
  score: number;
}

const data: SectionData[] = [
  { section: "Listening", score: 6.8 },
  { section: "Reading", score: 8.2 },
  { section: "Writing", score: 7.5 },
  { section: "Speaking", score: 6.4 },
];

const SectionPerformanceChart: React.FC = () => {
  return (
    <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 w-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <FaBullseye className="text-blue-600 text-xl" />
        <h3 className="text-gray-800 font-semibold text-lg">
          Section Performance
        </h3>
      </div>

      {/* Mobile-Responsive Fix */}
      <div className="w-full h-64 sm:h-72 md:h-80 overflow-hidden">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="section" tick={{ fontSize: 13 }} />
            <YAxis domain={[0, 9]} tick={{ fontSize: 13 }} />
            <Tooltip />
            <Bar dataKey="score" fill="#2563eb" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SectionPerformanceChart;
