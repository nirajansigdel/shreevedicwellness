"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import Hero from "../bg.png";
import Animated from "@/components/Animated";

export default function Index() {
  const router = useRouter();

  return (
    <Animated className=" bg-white  h-full flex flex-row gap-[200px]  py-10 md:py-20 items-center justify-center">
      <div className=" flex-1 flex  flex-col gap-10 ">
        <p className="text-5xl font-bold w-3/4">
          <span className="text-[#4B5563] ">Experience the best</span>
          <span className="text-[#22C55E]"> Workout Humanly </span>
          <span className="text-[#4B5563]">Possible</span>
        </p>

        <p className="text-[#9CA3AF] font-medium">
          Discover inner peace and holistic well-being through yoga and
          meditation. Join us on a transformative journey towas a healthier,
          happier and harmonious life. Welcome to Shree Vedic Wellness, your
          sanctuary for selfd-discovery and renewal.{" "}
        </p>
      </div>
      <div className="hidden md:block relative flex-1 flex items-center">
        <Image src={Hero} alt="Hero image" className="w-full" />
      </div>
    </Animated>
  );
}
