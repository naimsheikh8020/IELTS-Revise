import React from "react";
import IeltsCard from "../components/IeltsCard";
import assets from "../assets/assets";

const Section = () => {
  return (
    <div className="0">
      <div className="bg-blue-50 p-8 sm:p-10 lg:p-14 rounded-xl">
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
          Complete IELTS Preparation
        </h2>
        <p className="text-gray-500 font-normal mt-3 sm:mt-4 text-sm sm:text-base text-center px-4">
          100,000 authentic exam-style questions across all four sections
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-12">
          <IeltsCard
            icon={assets.listing}
            iconBg="bg-blue-100"
            title="Listening"
            description="Practice with authentic audio recordings and develop your listening comprehension skills."
            points={[
              "25,000 questions",
              "Varied accents",
              "All question types",
            ]}
            buttonColor="text-blue-600 border-blue-600  hover:bg-blue-600 hover:text-white"
          />
          <IeltsCard
            icon={assets.reading}
            iconBg="bg-green-100"
            title="Reading"
            description="Enhance your reading speed and accuracy with passages from books, magazines."
            points={[
              "25,000 questions",
              "Authentic texts",
              "Academic & General",
            ]}
          />
          <IeltsCard
            icon={assets.writing}
            iconBg="bg-purple-100"
            title="Writing"
            description="Master essay writing and task completion with detailed sample answers and feedback."
            points={["25,000 questions", "Task 1 & Task 2", "Model answers"]}
          />
          <IeltsCard
            icon={assets.speaking}
            iconBg="bg-orange-100"
            title="Speaking"
            description="Build confidence with sample questions for all three parts of the speaking test and feedback."
            points={["25,000 questions", "Part 1, 2 & 3", "Sample responses"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
