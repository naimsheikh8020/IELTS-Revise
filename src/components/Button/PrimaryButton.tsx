import React from "react";

const PrimaryButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-xl border border-blue-600 bg-blue-600 text-white 
      hover:bg-transparent hover:text-blue-600 transition-all duration-300 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
