const InputQuestionBlock = ({
  question,
  partIndex,
  value,
  onChangeAnswer,
}) => {
  const isGrayRow = question.number % 2 === 1;

  return (
    <div
      className={`border border-gray-200 rounded-xl shadow-sm p-4 mt-4 
      ${isGrayRow ? "bg-gray-50" : "bg-white"}`}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        
        {/* Left label */}
        <div className="md:w-56 w-full">
          <span className="text-sm text-gray-900">{question.labelLeft}</span>
        </div>

        {/* Input + badge */}
        <div className="flex-1">
          <div className="relative max-w-md w-full">
            <input
              type="text"
              value={value || ""}
              onChange={(e) =>
                onChangeAnswer(partIndex, question.number, e.target.value)
              }
              placeholder={question.placeholder}
              className="w-full px-3 py-2 pr-10 border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />

            {/* Number badge */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              {question.number}
            </div>
          </div>

          {/* Right side text */}
          {question.labelRight && (
            <span className="ml-1 text-sm text-gray-600">({question.labelRight})</span>
          )}
        </div>

      </div>
    </div>
  );
};

export default InputQuestionBlock;
