"use client";

import Form1 from "../components/Form1";
import Form2 from "../components/Form2";
import Form3 from "../components/Form3";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <main className="flex relative min-h-screen flex-col items-center justify-between p-24">
      {/* <div
        className="absolute top-0 left-0 w-full h-full bg-cover"
        style={{ backgroundImage: 'url("/bg.png")' }}
      ></div> */}
      <div className="z-10 max-w-[475px] h-full m-auto">
        {step == 1 && <Form1 setStep={setStep} />}
        {step == 2 && <Form2 setStep={setStep} />}
        {step == 3 && <Form3 setStep={setStep} />}
      </div>

      <p className="text-[#4B5563] font-medium text-[16px]  text-center ">
        Crafted with 💖 by Huge End Proframmers
      </p>
    </main>
  );
}
