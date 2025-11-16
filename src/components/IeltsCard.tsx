import React from "react";
import { Check, ArrowRight } from "lucide-react";

const IeltsCard = ({
  icon,
  iconBg = "bg-gray-100",
  title,
  description,
  points = [],
  buttonColor = "text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white",
  onClick,
}) => {
  return (
    <div
      className="
        w-full max-w-sm mx-auto
        bg-white
        rounded-2xl
        p-6
        shadow-[0_4px_18px_rgba(0,0,0,0.08)]
        transition-all
        duration-300
        ease-out
        hover:shadow-[0_8px_26px_rgba(0,0,0,0.14)]
        border border-gray-200
        flex flex-col
      "
    >
      {/* Icon */}
      <div
        className={`w-16 h-16 ${iconBg} rounded-xl flex items-center justify-center`}
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold mt-4">{title}</h2>

      {/* Description */}
      <p className="text-gray-600 mt-2 leading-relaxed">{description}</p>

      {/* Bullet Points */}
      <ul className="mt-4 space-y-2">
        {points.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <Check className="w-4 h-4 text-green-600 mt-1" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={onClick}
        className={`
          mt-6 
          flex items-center justify-center
          gap-2
          font-medium 
          border 
          rounded-xl 
          py-2.5 
          px-4
          cursor-pointer
          transition-all
          duration-300
          ease-out
          ${buttonColor}
        `}
      >
        Start Practice
        <ArrowRight className="w-4" />
      </button>
    </div>
  );
};

export default IeltsCard;
