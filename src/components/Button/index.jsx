import React from "react";

function Button({ children, onClick, type }) {
  if (type == "secondary") {
    return (
      <button className="bg-[#22C55E] text-[16px] font-medium text-white rounded-md w-full flex items-center justify-center p-4 cursor-pointer">
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="bg-[#22C55E] text-[16px] font-medium text-white rounded-md w-full flex items-center justify-center p-4 cursor-pointer"
    >
      {children}
    </button>
  );
}

export default Button;
