import React from "react";
import { userData } from "../../assets/assets";
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";


const TopBanner = () => {
  return (
    <div className="bg-white p-10 rounded-2xl shadow-md  gap-4">
      <h2 className="font-bold text-blue-600 text-3xl leading-relaxed">
        Welcome back, {userData.name}!<span>🎯</span>
      </h2>
      <p className="text-lg text-gray-600">
        You're improving! Keep practicing to boost your band score. Your current
        overall band is <span className="font-bold text-orange-600">{userData.score}</span>
      </p>

      <PrimaryButton className="mt-4">Continue Where You Left Off</PrimaryButton>

      <SecondaryButton className="mt-4 ml-4">Start New Mock Test</SecondaryButton>
    </div>
  );
};

export default TopBanner;
