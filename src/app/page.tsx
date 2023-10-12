"use client";

import Image from "next/image";

import Button from "../components/Button";
import Form1 from "../components/Form1";

export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col items-center justify-between p-24">
      <div className=" max-w-[475px] h-full m-auto">
        <Form1 />
      </div>

      <p className="text-[#4B5563] font-medium text-[16px]  text-center ">
        Crafted with 💖 by Huge End Proframmers
      </p>
    </main>
  );
}
