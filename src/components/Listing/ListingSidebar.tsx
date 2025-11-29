import React from "react";

const ListingSidebar = ({ parts, selectedPart, onSelectPart }) => {
  return (
    <aside className="w-full md:w-64 bg-white p-6 rounded-2xl shadow border border-blue-300">

      <h2 className="text-lg font-semibold text-blue-700">Questions</h2>
      <p className="text-sm text-gray-500 mt-1">0/40 Completed</p>

      <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
        <div className="h-full bg-blue-500 rounded-full" style={{ width: "0%" }}></div>
      </div>

      <div className="mt-5 space-y-3">
        {parts.map((part, index) => (
          <div key={index}>
            <button
              onClick={() => onSelectPart(index)}
              className={`w-full text-left p-3 rounded-xl border cursor-pointer font-medium
                ${selectedPart === index 
                  ? "border-blue-400 bg-blue-50 text-blue-700 shadow-sm" 
                  : "border-gray-200 bg-white text-gray-700"
                }
                hover:border-blue-400 transition-all`}
            >
              {part.title}
            </button>

            {/* Smooth expand */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                selectedPart === index ? "max-h-96 mt-2" : "max-h-0"
              }`}
            >
              <div className="
                bg-blue-50 border border-blue-200 rounded-xl p-3
                grid grid-cols-5 gap-2
              ">
                {Array.from({ length: part.totalQuestions }).map((_, num) => (
                  <button
                    key={num}
                    className="
                      h-8 w-8 flex items-center justify-center 
                      rounded-full border border-blue-300 text-blue-700 
                      bg-white hover:bg-blue-100 transition
                      text-sm font-medium
                    "
                  >
                    {num + 1}
                  </button>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </aside>
  );
};

export default ListingSidebar;
