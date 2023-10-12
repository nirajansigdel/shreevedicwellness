import React from "react";

function Button({ children }) {
  return (
    <div className="bg-[#22C55E] text-[16px] font-medium text-white rounded-md w-full flex items-center justify-center p-4 cursor-pointer">
      {children}
    </div>
  );
}

export default Button;
