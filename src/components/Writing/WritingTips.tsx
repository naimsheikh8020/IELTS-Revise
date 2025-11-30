// src/components/writing/WritingTips.tsx
import { CheckCircle } from "lucide-react";

const tips = [
  "Start with a clear overview",
  "Select and report key features",
  "Use data to support your points",
  "Make relevant comparisons"
];

export default function WritingTips() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Writing Tips</h2>

      <ul className="space-y-3">
        {tips.map((t, i) => (
          <li key={i} className="flex items-center gap-2 text-gray-700">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
