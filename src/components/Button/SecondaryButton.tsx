import React from "react";

const SecondaryButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-xl border border-blue-400 text-blue-400 
      hover:bg-blue-400 hover:text-white transition-all duration-300 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
