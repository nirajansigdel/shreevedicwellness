import Link from "next/link";
import React from "react";
import Logo from "../icons/Logo";

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
          <Link
            href={"/registration"}
            className="py-3 px-5 bg-primary text-white rounded-full hover:opacity-80 transition-opacity"
          >
            Join Class
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
