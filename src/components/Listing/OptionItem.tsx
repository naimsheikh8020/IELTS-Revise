const OptionItem = ({ label, text, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full p-3 flex items-start gap-3 text-left rounded-lg border transition
        ${selected ? "bg-blue-50 border-blue-500" : "bg-white border-gray-300 hover:bg-gray-50"}
      `}
    >
      <div className="w-6 h-6 flex items-center justify-center bg-gray-100 border rounded-full text-sm text-blue-600">
        {label}
      </div>

      <p className="text-gray-800">{text}</p>
    </button>
  );
};

export default OptionItem;
