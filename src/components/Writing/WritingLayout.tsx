// src/components/writing/WritingLayout.tsx
import { useState } from "react";
import WritingTips from "./WritingTips";
import WritingTaskTabs from "./WritingTaskTabs";
import WritingTaskBox from "./WritingTaskBox";

interface Props {
  initialTask?: number;
  showTips?: boolean;
}

export default function WritingLayout({
  initialTask = 1,
  showTips = true,
}: Props) {
  const [activeTask, setActiveTask] = useState(initialTask);

  return (
    <div className="min-h-screen px-3 sm:px-6 bg-gray-50 w-full mt-6">

      {/* Two-column layout (30% / 70%) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-[35%_65%] lg:grid-cols-[20%_80%] gap-6">

        {/* LEFT SIDE (30%) */}
        {showTips && (
          <div className="w-full">
            <WritingTips />
          </div>
        )}

        {/* RIGHT SIDE (70%) */}
        <div className="w-full">
          <WritingTaskTabs active={activeTask} setActive={setActiveTask} />
          <WritingTaskBox activeTask={activeTask} />
        </div>

      </div>
    </div>
  );
}
