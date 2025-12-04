import React, { useState } from "react";

// Sample data structure - replace with your API data
const quizData = [
  {
    id: 6,
    title: "The travel agent:",
    options: [
      { id: "A", text: "Booking a hotel room" },
      { id: "B", text: "Renting a car" },
      { id: "C", text: "Making a restaurant reservation" },
      { id: "D", text: "Scheduling a flight" }
    ]
  },
  {
    id: 7,
    title: "The travel agent:",
    options: [
      { id: "A", text: "Booking a hotel room" },
      { id: "B", text: "Renting a car" },
      { id: "C", text: "Making a restaurant reservation" },
      { id: "D", text: "Scheduling a flight" }
    ]
  },
  {
    id: 8,
    title: "The event planner:",
    options: [
      { id: "A", text: "Organizing a wedding" },
      { id: "B", text: "Coordinating a conference" },
      { id: "C", text: "Booking entertainment" },
      { id: "D", text: "Managing guest lists" }
    ]
  },
  {
    id: 9,
    title: "The financial advisor:",
    options: [
      { id: "A", text: "Creating a retirement plan" },
      { id: "B", text: "Investment strategies" },
      { id: "C", text: "Tax planning" },
      { id: "D", text: "Budget management" }
    ]
  },
  {
    id: 10,
    title: "The personal trainer:",
    options: [
      { id: "A", text: "Designing workout plans" },
      { id: "B", text: "Nutritional guidance" },
      { id: "C", text: "Monitoring progress" },
      { id: "D", text: "Providing motivation" }
    ]
  }
];

const ReadingQuiz = () => {
  const [answers, setAnswers] = useState({});

  const handleSelect = (questionId, optionId) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-4">
      {/* Header */}
      <div className="mb-6">
        <h2 className="font-bold text-xl mb-2">Part 2</h2>
        <p className="text-gray-600 text-base">Questions 6-10</p>
        <p className="mt-2 text-gray-900">
          For each question, only ONE of the choices is correct.
        </p>
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {quizData.map((question) => (
          <div key={question.id}>
            {/* Question Title */}
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              {question.id}.{question.title}
            </h3>

            {/* Options */}
            <div className="space-y-2">
              {question.options.map((option) => {
                const isSelected = answers[question.id] === option.id;
                
                return (
                  <label
                    key={option.id}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer transition-colors ${
                      isSelected
                        ? "bg-blue-50"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    {/* Hidden Radio Input */}
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      checked={isSelected}
                      onChange={() => handleSelect(question.id, option.id)}
                      className="hidden"
                    />
                    
                    {/* Custom Radio Circle */}
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-semibold ${
                        isSelected
                          ? "bg-blue-500 text-white"
                          : "bg-white text-gray-600 border-2 border-gray-300"
                      }`}
                    >
                      {option.id}
                    </div>

                    {/* Option Text */}
                    <span className="text-sm text-gray-700">
                      {option.text}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadingQuiz;