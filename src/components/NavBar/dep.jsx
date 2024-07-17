import Link from "next/link";
import React from "react";
import Logo from "../icons/Logo";
import { TbPhone } from "react-icons/tb";

function Index() {
  return (
    <div className="mx-auto w-full  bg-white py-[10px] md:py-[22px] flex items-center justify-center ">
      <div className="py-2 md:py-0  w-full gap-5 flex flex-col md:flex-row justify-between">
        <Link href={"/"}>
          <Logo />
        </Link>

        <div className="hidden md:flex flex-col md:flex-row items-center gap-4 md:gap-10">
          <Link href={"/"}>
            <span className="text-[#4B5563] font-medium">Home</span>
          </Link>
          <Link href={"#courses"}>
            <span className="text-[#4B5563] font-medium">Courses</span>
          </Link>

          <Link href={"#gallery"}>
            <span className="text-[#4B5563] font-medium">Gallery</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="border py-3 rounded-full px-4 flex items-center gap-2">
                <TbPhone className="text-lg" />
                <span className="font-semibold">+91 5714749074</span>
              </div>
              <span class="flex h-3 w-3 absolute top-0 right-1">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </div>
            <Link
              href={"/registration"}
              className="py-3 px-5 bg-primary text-white rounded-full hover:opacity-80 transition-opacity"
            >
              Join Class
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
