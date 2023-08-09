import React from "react";

const Input = ({ type, label }) => {
  return (
    <div>
      <label>{label}</label>

      <input type={type} className="w-full border-gray-400 border-b-2 p-3" />
    </div>
  );
};

export default Input;
