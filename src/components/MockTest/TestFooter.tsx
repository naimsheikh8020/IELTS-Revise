import type { TestFooterProps } from "../../types/testFooter";

const TestFooter = ({
  instructions,
  onPrevious,
  onNext,
}: TestFooterProps) => {
  return (
    <div className="space-y-6 mt-10">

      <div className="flex gap-4">
        <button
          onClick={onPrevious}
          className="flex-1 h-12 rounded-xl border border-gray-200 bg-gray-50
          text-gray-700 text-sm font-medium hover:bg-gray-100 transition"
        >
          Previous Section
        </button>

        <button
          onClick={onNext}
          className="flex-1 h-12 rounded-xl bg-blue-600
          text-white text-sm font-semibold hover:bg-blue-700 transition"
        >
          Next Section
        </button>
      </div>

     
      <div className="bg-white border rounded-2xl p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-gray-800 mb-4">
          Test Instructions
        </h3>

        <ul className="space-y-2">
          {instructions.map((item) => (
            <li
              key={item.id}
              className="flex items-start gap-2 text-sm text-gray-600"
            >
              <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default TestFooter;
