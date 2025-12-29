import React, { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { Link, useNavigate } from "react-router";
import Audio from "../components/Listing/Audio";
import ListingSidebar from "../components/Listing/ListingSidebar";
import PartContainer from "../components/Listing/PartContainer";
import { partDataList } from "../assets/assets";

const Listing = () => {
  const navigate = useNavigate();
  const [selectedPart, setSelectedPart] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);

  // Store answers
  const [answers, setAnswers] = useState({});

  // Handle selecting an option
  const handleSelectOption = (partIndex, questionNum, optionLabel) => {
    setAnswers((prev) => ({
      ...prev,
      [`${partIndex}-${questionNum}`]: optionLabel,
    }));
  };

  // Sidebar labels
  const parts = partDataList.map((p) => ({
    title: p.title,
    totalQuestions: p.questions.length,
  }));

  // Handle final submit
  const handleFinalSubmit = () => {
    setShowConfirm(false);

    console.log("Submitted:", answers);

    navigate("/result", { state: { answers } });
  };

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
        {/* Mobile Sidebar */}
        <div className="block md:hidden mb-4">
          <ListingSidebar
            parts={parts}
            selectedPart={selectedPart}
            onSelectPart={setSelectedPart}
          />
        </div>

        <div className="md:flex md:gap-6">
          {/* Desktop Sidebar */}
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

              {/* Buttons */}
              <div className="flex justify-between mt-6">
                {/* PREVIOUS */}
                <button
                  disabled={selectedPart === 0}
                  onClick={() => setSelectedPart((p) => p - 1)}
                  className={`px-4 py-2 rounded-lg border border-gray-400 cursor-pointer ${
                    selectedPart === 0
                      ? "opacity-30 cursor-not-allowed"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Previous
                </button>

                {/* NEXT or SUBMIT */}
                {selectedPart < partDataList.length - 1 ? (
                  <button
                    onClick={() => setSelectedPart((p) => p + 1)}
                    className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={() => setShowConfirm(true)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONFIRM MODAL */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-80">
            <h2 className="text-lg font-semibold text-gray-800">
              Confirm Submit
            </h2>
            <p className="text-gray-600 mt-2">
              Are you sure you want to submit your answers?
            </p>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>

              <Link to="/feedback"
                onClick={handleFinalSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Submit
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Listing;
