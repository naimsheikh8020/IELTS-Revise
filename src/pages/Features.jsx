import React from "react";
import PracticeCard from "../components/PracticeCard";
import assets from "../assets/assets";
import Track_Your_Progress from "../section/Track_Your_Progress";

const Features = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-10">
      <div className="p-6 mt-2 sm:p-8 lg:p-10">
        <p className="bg-blue-100 text-base my-5 text-blue-600 px-4 py-2 rounded-full text-center mx-auto block w-fit">
  What Make Us different
</p>
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
          Everything You Need to <span className="text-blue-600">Ace IELTS</span>
        </h2>
        <p className="text-gray-500 font-normal mt-3 sm:mt-4 text-sm sm:text-base text-center px-4">
          Professional features designed by certified IELTS examiners to maximize your score
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-12">
          <PracticeCard
            icon={assets.authentic}
            title="Exam-Authentic Questions"
            subtitle="Practice with questions that mirror the real IELTS exam format and difficulty level."
            questionsCount="25,000"
            showButton={false}
            showQuestion={false}
          />
          <PracticeCard
            icon={assets.successrate}
            title="Track Your Progress"
            subtitle="Monitor your improvement with detailed analytics and performance insights."
            questionsCount="30,000+ Question"
            showButton={false}
            showQuestion={false}
          />
          <PracticeCard
            icon={assets.achivement}
            title="Expert-Created Content"
            subtitle="All materials developed by certified IELTS examiners and experienced teachers."
            questionsCount="30,000"
            showButton={false}
            showQuestion={false}
          />
          <PracticeCard
            icon={assets.time}
            title="Study Anytime, Anywhere"
            subtitle="Access your practice materials 24/7 from any device with internet connection."
            questionsCount="15,000+ Question"
            showButton={false}
            showQuestion={false}
          />
        </div>
      </div>
      <Track_Your_Progress/>
    </div>
  );
};

export default Features;
