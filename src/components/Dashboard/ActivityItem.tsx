import React from "react";

interface ActivityItemProps {
  icon: string;
  title: string;
  subtitle: string;
  band?: number;
  score?: number;
  total?: number;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  icon,
  title,
  subtitle,
  band,
  score,
  total,
}) => {
  let formattedScore: string | null = null;

  if (band !== undefined) {
    formattedScore = `Band ${band.toFixed(1)}`;
  } else if (score !== undefined && total !== undefined) {
    formattedScore = `${score}/${total}`;
  }

  return (
    <div className="flex justify-between items-center bg-gray-50 rounded-xl p-3 sm:p-4 ">
      <div className="flex items-center gap-2 sm:gap-3 ">
        <img src={icon} alt={title} className="w-7 h-7 sm:w-8 sm:h-8" />

        <div>
          <p className="font-semibold text-gray-800 text-sm sm:text-base leading-tight">
            {title}
          </p>
          <p className="text-xs sm:text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>

      {formattedScore && (
        <span
          className="bg-blue-100 text-blue-600 font-medium 
                     text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full whitespace-nowrap"
        >
          {formattedScore}
        </span>
      )}
    </div>
  );
};

export default ActivityItem;
