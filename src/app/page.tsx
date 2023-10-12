"use client";

import Form1 from "../components/Form1";
import Form2 from "../components/Form2";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <main className="flex  min-h-screen flex-col items-center justify-between p-24">
      <div className=" max-w-[475px] h-full m-auto">
        {step == 1 && <Form1 setStep={setStep} />}
        {step == 2 && <Form2 setStep={setStep} />}
      </div>

      <p className="text-[#4B5563] font-medium text-[16px]  text-center ">
        Crafted with 💖 by Huge End Proframmers
      </p>
    </main>
  );
}
