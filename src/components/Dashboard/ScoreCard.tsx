import React from "react";

const ScoreCard = ({ title, icon, score, band, extra, progress, advice }) => {
  return (
    <div
      className="
        bg-white rounded-2xl border border-gray-200 
        p-4 sm:p-6 shadow-sm 
        flex flex-col justify-between
        hover:shadow-md hover:-translate-y-1 
        transition-all duration-300
        min-h-[240px]
      "
    >
      <div className="flex justify-between items-center">
        <h3 className="text-gray-700 font-medium">{title}</h3>

        <img src={icon} alt={`${title} icon`} className="w-1/16 opacity-70" />
      </div>

      <div>
        <p className="text-blue-600 text-2xl font-bold mt-6">{score}</p>
        <p className="text-sm text-gray-500 mt-6">Band: {band}</p>

        <div className="w-full bg-gray-200 h-[6px] rounded-full mt-2">
          <div
            className="bg-blue-500 h-[6px] rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-6">{extra}</p>
      </div>
      <p className="text-sm text-gray-500 mt-1">{advice}</p>
    </div>
  );
};

export default ScoreCard;
