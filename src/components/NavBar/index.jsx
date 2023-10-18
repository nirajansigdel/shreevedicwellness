import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "./logo.png";

function Index() {
  return (
    <div className="w-full bg-white py-[22px] flex items-center justify-center">
      <div className="flex  w-3/4 gap-5 flex flex-row justify-between">
        <p>
          <span className="text-[#4B5563] font-bold text-[24px]">YOGAS</span>
          <span className="text-[#22C55E] font-bold text-[24px]">TA</span>
        </p>

        <div className="flex items-center gap-10">
          <Link href={"/"}>
            <span className="text-[#4B5563] font-medium">Home</span>
          </Link>
          <Link href={"/"}>
            <span className="text-[#4B5563] font-medium">Courses</span>
          </Link>

          <Link href={"/"}>
            <span className="text-[#4B5563] font-medium">Pricing</span>
          </Link>
          <Link href={"/"}>
            <span className="text-white rounded-md px-4 py-2 font-medium bg-[#22C55E]">
              Join Class
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
