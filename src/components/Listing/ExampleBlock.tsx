import OptionItem from "./OptionItem";

const ExampleBlock = ({ example }) => {
  return (
    <div className="mb-6 bg-gray-50 p-4 rounded-lg">
      <p className="font-semibold text-gray-700">Example:</p>

      <p className="mt-2 text-gray-900">{example.question}</p>

      <div className="space-y-2 mt-3">
        {example.options.map((opt, i) => (
          <OptionItem
            key={i}
            label={opt.label}
            text={opt.correct ? <b>{opt.text}</b> : opt.text}
            selected={opt.correct}
            onClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default ExampleBlock;
