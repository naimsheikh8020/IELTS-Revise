const StudentCard = ({ 
  icon, 
  iconBgColor = "bg-blue-100", 
  number, 
  numberColor = "text-blue-600",
  title, 
  titleColor = "text-black",
  description, 
  descriptionColor = "text-gray-600" 
}) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center gap-2">
      
      {/* Icon */}
      <div className={` p-3 rounded-full`}>
        <img src={icon} alt={title} className="h-6 w-6 sm:h-8 sm:w-8" />
      </div>

      {/* Number */}
      <h2 className={`text-xl sm:text-3xl font-bold ${numberColor}`}>
        {number}
      </h2>

      {/* Title */}
      <h3 className={`text-base sm:text-lg font-semibold ${titleColor}`}>
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className={`text-xs sm:text-sm ${descriptionColor}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default StudentCard;
