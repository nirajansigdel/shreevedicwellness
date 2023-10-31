import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "./logo.png";

function Index() {
  return (
    <div className="mx-auto w-full md:w-4/5 bg-white py-[10px] md:py-[22px] flex items-center justify-center ">
      <div className="py-2 md:py-0 flex w-full gap-5 flex flex-col md:flex-row justify-between">
        <Link href={"/"}>
          <p className="text-left px-3 flex items-center justify-between ">
            <p className="">
              <span className="text-[#4B5563] font-bold text-md md:text-2xl">
                SHREEVEDIC
              </span>
              <span className="text-[#22C55E] font-bold text-md md:text-2xl">
                WELLNESS
              </span>
            </p>

            <p className="md:hidden ">
              <Link href={"/registration"}>
                <span className="text-white rounded-md px-4 py-1 font-medium bg-[#22C55E]">
                  Join Class
                </span>
              </Link>
            </p>
          </p>
        </Link>

        <div className="hidden md:flex flex flex-col md:flex-row items-center gap-4 md:gap-10">
          <Link href={"/"}>
            <span className="text-[#4B5563] font-medium">Home</span>
          </Link>
          <Link href={"/"}>
            <span className="text-[#4B5563] font-medium">Courses</span>
          </Link>

          <Link href={"/"}>
            <span className="text-[#4B5563] font-medium">Pricing</span>
          </Link>
          <Link href={"/registration"}>
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
