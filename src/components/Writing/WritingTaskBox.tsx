// src/components/writing/WritingTaskBox.tsx
import { writingTasks } from "../../assets/assets";
import { useState } from "react";

interface Props {
  activeTask: number;
}

export default function WritingTaskBox({ activeTask }: Props) {
  const task = writingTasks.find((t) => t.id === activeTask)!;

  const [text, setText] = useState("");
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl p-5 shadow-sm mt-6">
      <h2 className="text-lg font-semibold mb-3">{task.title}</h2>

      <p className="text-gray-700 whitespace-pre-line bg-gray-50 p-4 rounded-xl border border-gray-200">
        {task.question}
      </p>

      <div className="mt-6">
        <label className="block font-medium mb-2">Your Response</label>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your response here..."
          className="w-full min-h-[180px] sm:min-h-[220px] border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
        ></textarea>

        <div className="text-right text-sm text-gray-500 mt-1">
          {wordCount} / {task.minWords} words
        </div>

        <div className="w-full flex justify-center mt-6">
  <button
    onClick={() => console.log("Send to API:", text)}
    className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 flex items-center gap-2"
  >
    ✨ Get AI Feedback
  </button>
</div>


        <p className="text-center text-gray-500 mt-3 text-sm">
          AI will evaluate grammar, coherence, vocabulary, and task response.
        </p>
      </div>
    </div>
  );
}
