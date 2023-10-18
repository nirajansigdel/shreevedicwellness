"use client";

import Form1 from "../../components/Form1";
import Form2 from "../../components/Form2";
import Form3 from "../../components/Form3";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <main className="flex relative min-h-screen flex-col gap-12 items-center justify-between p-8 md:p-24">
      <div className="z-10  max-w-[475px] h-full m-auto">
        {step == 1 && <Form1 setStep={setStep} />}
        {step == 2 && <Form2 setStep={setStep} />}
        {step == 3 && <Form3 setStep={setStep} />}
      </div>

      <p className="text-[#4B5563] font-medium text-md text-center ">
        Crafted with 💖 by Huge End Programmers
      </p>
    </main>
  );
}
