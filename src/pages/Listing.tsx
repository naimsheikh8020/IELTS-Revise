import React, { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { useNavigate } from "react-router";
import Audio from "../components/Listing/Audio";
import ListingSidebar from "../components/Listing/ListingSidebar";
import PartContainer from "../components/Listing/PartContainer";
import { partDataList } from "../assets/assets"; 
const Listing = () => {
  const navigate = useNavigate();
  const [selectedPart, setSelectedPart] = useState(0);

  // Store user answers locally
  const [answers, setAnswers] = useState({});

  // Handle selecting an option
  const handleSelectOption = (partIndex, questionNum, optionLabel) => {
    setAnswers((prev) => ({
      ...prev,
      [`${partIndex}-${questionNum}`]: optionLabel,
    }));

    // 🔥 Future backend API here
    console.log("Saved (mock):", {
      partIndex,
      questionNum,
      answer: optionLabel,
    });
  };

  // Sidebar labels (derived from partData)
  const parts = partDataList.map((p) => ({
    title: p.title,
    totalQuestions: p.questions.length,
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="pt-24">
        <SectionHeader
          title="Listening Practice"
          subtitle="Listen carefully and answer each question."
          timeLimit="60:00"
          showResume={true}
          onBack={() => navigate(-1)}
        />
      </div>

      <div className="px-4 md:px-6 mt-6">
        {/* Mobile sidebar */}
        <div className="block md:hidden mb-4">
          <ListingSidebar
            parts={parts}
            selectedPart={selectedPart}
            onSelectPart={setSelectedPart}
          />
        </div>

        <div className="md:flex md:gap-6">
          {/* Desktop sidebar */}
          <div className="hidden md:block w-64 h-fit sticky top-32">
            <ListingSidebar
              parts={parts}
              selectedPart={selectedPart}
              onSelectPart={setSelectedPart}
            />
          </div>

          {/* MAIN CONTENT */}
          <div className="flex-1 pb-20">
             <Audio
              currentTime="0:50"
              totalTime="3:00"
              progress={25}
              onPlay={() => console.log("Play clicked")}
              onRewind={() => console.log("Rewind clicked")}
            />

            <div className="mt-4 p-4 bg-white rounded-xl shadow">
              <p className="font-semibold text-gray-700 mb-4 text-lg">
                {partDataList[selectedPart].title}
              </p>

              <PartContainer
                part={partDataList[selectedPart]}
                partIndex={selectedPart}
                answers={answers}
                onSelectOption={handleSelectOption}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;




