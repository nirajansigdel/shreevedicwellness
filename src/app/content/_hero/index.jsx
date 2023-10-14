"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import Hero from "../hero.png";

export default function Index() {
  const router = useRouter();

  return (
    <div className=" bg-[#F5F0E3] h-full flex flex-row">
      <div className=" flex-1 flex items-center justify-center px-12">
        <div className="flex flex-col gap-10 items-center justify-center">
          <p className="font-bold text-[30px]">
            Welcome to Shree Vedic Wellness
          </p>
          <p className="text-center">
            Discover inner peace and holistic well-being through yoga and
            meditation. Join us on a transformative journey toward a healthier,
            happier, and harmonious life. Welcome to Shree Vedic Wellness, your
            sanctuary for self-discovery and renewal.
          </p>
          <button
            onClick={() => router.push("/registration")}
            className="bg-[#C9B65C] text-white font-medium py-6 px-24 w-fit mx-auto rounded-full"
          >
            Registration
          </button>
        </div>
      </div>
      <div className="relative flex-1">
        <Image src={Hero} alt="Hero image" />
      </div>
    </div>
  );
}
