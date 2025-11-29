import OptionItem from "./OptionItem";

const QuestionBlock = ({ question, partIndex, selected, onSelectOption }) => {
  return (
    <div className="mt-6">
      {/* Question text */}
      <p className="font-semibold text-gray-800">
        {question.number}. {question.question}
      </p>

      {/* Options */}
      <div className="space-y-3 mt-3">
        {question.options.map((opt, i) => (
          <OptionItem
            key={i}
            label={opt.label}
            text={opt.text}
            selected={selected === opt.label}
            onClick={() =>
              onSelectOption(partIndex, question.number, opt.label)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionBlock;
