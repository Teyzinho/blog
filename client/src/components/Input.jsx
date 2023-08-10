import React from "react";

const Input = ({ type, label , setValue, value, disabled}) => {
  return (
    <div>
      <label>{label}</label>

      <input 
        type={type} 
        className="w-full border-gray-400 border-b-2 p-3" 
        onChange={(e) => setValue(e.target.value)}
        value={value}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
