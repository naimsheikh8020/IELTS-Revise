import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { useNavigate } from 'react-router';
import Audio from '../components/Listing/Audio';
import ListingSidebar from '../components/Listing/ListingSidebar';

const Listing = () => {
  const navigate = useNavigate();
  const [selectedPart, setSelectedPart] = useState(0);

  const parts = [
    { title: "Part 1", totalQuestions: 10 },
    { title: "Part 2", totalQuestions: 10 },
    { title: "Part 3", totalQuestions: 10 },
    { title: "Part 4", totalQuestions: 10 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* SECTION HEADER */}
      <div className="pt-24">
        <SectionHeader
          title="Listening Practice"
          subtitle="Listen carefully and answer each question."
          timeLimit="60:00"
          showResume={true}
          onBack={() => navigate(-1)}
          onPracticeMode={() => console.log("Practice")}
          onMockMode={() => console.log("Mock")}
          onResume={() => console.log("Resume")}
        />
      </div>

      {/* MOBILE FIRST LAYOUT */}
      <div className="px-4 md:px-6 mt-6">

        {/* 🟦 SIDEBAR MOBILE (full width, not sticky) */}
        <div className="block md:hidden mb-4">
          <ListingSidebar
            parts={parts}
            selectedPart={selectedPart}
            onSelectPart={setSelectedPart}
          />
        </div>

        {/* 🟦 DESKTOP LAYOUT: SIDEBAR LEFT + CONTENT RIGHT */}
        <div className="md:flex md:gap-6">

          {/* SIDEBAR DESKTOP (sticky) */}
          <div className="hidden md:block w-64 h-fit sticky top-32">
            <ListingSidebar
              parts={parts}
              selectedPart={selectedPart}
              onSelectPart={setSelectedPart}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 pb-20">

            <Audio
              currentTime="0:50"
              totalTime="3:00"
              progress={25}
              onPlay={() => console.log("Play clicked")}
              onRewind={() => console.log("Rewind clicked")}
            />

            <div className="mt-4 p-4 bg-white rounded-xl shadow">
              <p className="font-semibold text-gray-700">
                Selected Part: {parts[selectedPart].title}
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Listing;
