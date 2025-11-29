import InputQuestionBlock from "./InputQuestionBlock";
import QuestionBlock from "./QuestionBlock";
import ExampleBlock from "./ExampleBlock";

const PartContainer = ({ part, partIndex, answers, onSelectOption }) => {
  if (!part) return null;

  return (
    <div className="bg-white">
      <h2 className="text-xl font-bold text-gray-900">{part.title}</h2>
      <p className="mt-2 text-gray-700">{part.description}</p>

      {part.example && <ExampleBlock example={part.example} />}

      {part.questions.map((q, i) =>
        q.type === "input" ? (
          <InputQuestionBlock
            key={i}
            question={q}
            partIndex={partIndex}
            value={answers[`${partIndex}-${q.number}`]}
            onChangeAnswer={onSelectOption}
          />
        ) : (
          <QuestionBlock
            key={i}
            question={q}
            partIndex={partIndex}
            selected={answers[`${partIndex}-${q.number}`]}
            onSelectOption={onSelectOption}
          />
        )
      )}
    </div>
  );
};

export default PartContainer;
