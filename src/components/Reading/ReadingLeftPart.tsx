import React, { useState } from 'react';



const ReadingLeftPart = ({ data }) => {
  // Default data structure - API friendly
  const defaultData = {
    totalQuestions: 40,
    completedQuestions: 0,
    parts: [
      { 
        id: 1,
        name: 'Part 1', 
        questions: [
          { number: 1, completed: false },
          { number: 2, completed: false },
          { number: 3, completed: false },
          { number: 4, completed: false },
          { number: 5, completed: false },
          { number: 6, completed: false },
          { number: 7, completed: false },
          { number: 8, completed: false },
          { number: 9, completed: false },
          { number: 10, completed: false }
        ]
      },
      { 
        id: 2,
        name: 'Part 2', 
        questions: [
          { number: 11, completed: false },
          { number: 12, completed: false },
          { number: 13, completed: false },
          { number: 14, completed: false },
          { number: 15, completed: false },
          { number: 16, completed: false },
          { number: 17, completed: false },
          { number: 18, completed: false },
          { number: 19, completed: false },
          { number: 20, completed: false }
        ]
      },
      { 
        id: 3,
        name: 'Part 3', 
        questions: [
          { number: 21, completed: false },
          { number: 22, completed: false },
          { number: 23, completed: false },
          { number: 24, completed: false },
          { number: 25, completed: false },
          { number: 26, completed: false },
          { number: 27, completed: false },
          { number: 28, completed: false },
          { number: 29, completed: false },
          { number: 30, completed: false }
        ]
      },
      { 
        id: 4,
        name: 'Part 4', 
        questions: [
          { number: 31, completed: false },
          { number: 32, completed: false },
          { number: 33, completed: false },
          { number: 34, completed: false },
          { number: 35, completed: false },
          { number: 36, completed: false },
          { number: 37, completed: false },
          { number: 38, completed: false },
          { number: 39, completed: false },
          { number: 40, completed: false }
        ]
      }
    ]
  };

  const apiData = data || defaultData;
  const [openPart, setOpenPart] = useState(1);

  const togglePart = (partId) => {
    setOpenPart(openPart === partId ? null : partId);
  };

  const progressPercentage = (apiData.completedQuestions / apiData.totalQuestions) * 100;

  return (
    <div className="w-full md:max-w-[320px] bg-white rounded-lg shadow-sm p-6 md:mt-4">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Questions</h2>
        <p className="text-sm text-gray-500">
          {apiData.completedQuestions}/{apiData.totalQuestions} Completed
        </p>
        
        {/* Progress Bar */}
        <div className="mt-3 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Parts */}
      <div className="space-y-3">
        {apiData.parts.map((part) => (
          <div
            key={part.id}
            className={`border-2 rounded-xl overflow-hidden transition-all duration-300 ${
              openPart === part.id ? 'border-blue-300 bg-blue-50/30' : 'border-gray-200 bg-white'
            }`}
          >
            <button
              onClick={() => togglePart(part.id)}
              className="w-full text-left p-4 font-semibold text-blue-600 hover:bg-blue-50/50 transition-colors"
            >
              {part.name}
            </button>
            
            {/* Question Numbers Grid with Smooth Animation */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                openPart === part.id 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 pb-4 grid grid-cols-6 gap-2">
                {part.questions.map((q) => (
                  <button
                    key={q.number}
                    className={`aspect-square flex items-center justify-center rounded-lg border-2 font-medium text-sm transition-all duration-200 ${
                      q.completed
                        ? 'border-green-500 bg-green-500 text-white'
                        : 'border-blue-300 text-blue-600 hover:bg-blue-100'
                    }`}
                  >
                    {q.number}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadingLeftPart;








