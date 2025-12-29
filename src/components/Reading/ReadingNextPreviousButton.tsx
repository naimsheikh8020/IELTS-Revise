import React, { useState } from "react";
import { Link } from "react-router";

const ReadingNextPreviousButton = () => {
  const [isLastStep, setIsLastStep] = useState(false);

  return (
    <div className="flex justify-between items-center gap-4 mt-6">

      
      <button
        className="px-4 py-2 cursor-pointer bg-blue-600 text-base text-white rounded
        border border-transparent hover:bg-transparent hover:border-blue-600 hover:text-black transition"
      >
        Previous
      </button>

     
      {!isLastStep ? (
        <button
          onClick={() => setIsLastStep(true)}
          className="px-4 py-2 cursor-pointer bg-blue-600 text-base text-white rounded
          border border-transparent hover:bg-transparent hover:border-blue-600 hover:text-black transition"
        >
          Next
        </button>
      ) : (
        <Link
          to="/feedback"
          className="px-4 py-2 cursor-pointer bg-blue-600 text-base text-white rounded
          border border-transparent hover:bg-transparent hover:border-blue-600 hover:text-black transition text-center"
        >
          Submit
        </Link>
      )}
    </div>
  );
};

export default ReadingNextPreviousButton;
