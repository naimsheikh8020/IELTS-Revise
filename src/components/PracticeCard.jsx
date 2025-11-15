import React from "react";
import { ArrowRight } from "lucide-react";

const PracticeCard = ({
  icon,
  title,
  subtitle,
  questionsCount,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="
        bg-white 
        rounded-xl 
        p-6 
        shadow-[0_4px_20px_rgba(0,0,0,0.10)]
        hover:shadow-[0_8px_28px_rgba(0,0,0,0.20)]
        border 
        border-transparent
        hover:border-blue-600
        hover:scale-105
        transition-all
        duration-300
        ease-out
        flex 
        flex-col 
        items-center 
        text-center
        gap-4
        cursor-pointer
      "
    >
      {/* Icon */}
      <div className="w-20 h-20 flex items-center justify-center">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
      </div>

      {/* Text */}
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{subtitle}</p>
      <p className="text-gray-900 font-medium">{questionsCount}+ questions</p>

      {/* Action Button */}
      <button
        className="
          flex 
          items-center 
          gap-1
          text-blue-700 
          font-medium 
          mt-2
          px-4
          py-2
          rounded-3xl
          transition-all
          duration-300
          ease-out
          hover:bg-blue-600 
          hover:text-white
          hover:gap-2
          cursor-pointer
        "
      >
        Start Practice 
        <ArrowRight className="w-4" />
      </button>
    </div>
  );
};

export default PracticeCard;
