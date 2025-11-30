// src/components/writing/WritingTaskTabs.tsx
import { PenLine } from "lucide-react";

interface Props {
  active: number;
  setActive: (id: number) => void;
}

export default function WritingTaskTabs({ active, setActive }: Props) {
  const tasks = [1, 2]; // simple array

  return (
    <div className="flex bg-gray-100 p-1 rounded-full">
      {tasks.map((task) => {
        const isActive = active === task;

        return (
          <button
            key={task}
            onClick={() => setActive(task)}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-full text-sm font-medium transition-all
              ${isActive ? "bg-blue-600 text-white shadow" : "text-gray-600"}
            `}
          >
            <PenLine className="w-4 h-4" />
            Task {task}
          </button>
        );
      })}
    </div>
  );
}
