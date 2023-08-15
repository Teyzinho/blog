import React from "react";

const Tag = ({ className, category, onClick }) => {
  return (
    <button
      type="button"
      className={`rounded-full border-gray-500 border px-5 py-1 text-xs transition-all hover:bg-slate-400 hover:border-transparent ${className}`}
      onClick={onClick}
    >
      {category}
    </button>
  );
};

export default Tag;
