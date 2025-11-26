import React from "react";
import { userData } from "../../assets/assets";
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";

const TopBanner = () => {
  return (
    <div className="bg-white  p-6 md:p-10 rounded-2xl shadow-md space-y-4">
      {/* Title */}
      <h2 className="font-bold text-blue-600 text-2xl sm:text-3xl leading-relaxed">
        Welcome back, {userData.name}! <span>🎯</span>
      </h2>

      {/* Subtitle */}
      <p className="text-base  text-gray-600 leading-relaxed">
        You're improving! Keep practicing to boost your band score. Your current
        overall band is{" "}
        <span className="font-bold text-orange-600">{userData.score}</span>
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
        <PrimaryButton className="mt-2 sm:mt-0 w-full sm:w-auto">
          Continue Where You Left Off
        </PrimaryButton>

        <SecondaryButton className="mt-3 sm:mt-0 w-full sm:w-auto">
          Start New Mock Test
        </SecondaryButton>
      </div>
    </div>
  );
};

export default TopBanner;
