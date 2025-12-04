import React, { useState, useRef, useEffect } from "react";

const options = ["TRUE", "FALSE", "NOT GIVEN"];

const QuestionRow = ({
  number,
  text,
}: {
  number: number;
  text: string;
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 py-3 border-b border-gray-200">
      {/* Mobile: Number + Dropdown in one row */}
      <div className="flex items-center gap-3 sm:contents">
        {/* Number Circle */}
        <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-blue-600 text-white rounded-full text-sm sm:text-base font-semibold flex-shrink-0">
          {number}
        </div>

        {/* Dropdown */}
        <div className="relative w-40 sm:w-48" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="w-full h-10 sm:h-11 px-3 sm:px-4 flex items-center justify-between bg-white border border-gray-300 rounded text-sm hover:border-gray-400 transition"
          >
            <span className="text-gray-700 truncate">{selected || ""}</span>
            <svg 
              className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {open && (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded shadow-lg mt-1 z-10">
              {options.map((opt) => (
                <div
                  key={opt}
                  onClick={() => {
                    setSelected(opt);
                    setOpen(false);
                  }}
                  className="px-3 sm:px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 active:bg-gray-200"
                >
                  {opt}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Text - Full width on mobile, flex-1 on desktop */}
      <p className="text-gray-900 text-sm sm:text-base leading-snug sm:flex-1 pl-12 sm:pl-0">
        {text}
      </p>
    </div>
  );
};

export default QuestionRow;