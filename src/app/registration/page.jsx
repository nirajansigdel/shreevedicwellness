"use client";

import AnimationContainer from "@/components/AnimationContainer";
import Form1 from "../../components/Form1";
import Form2 from "../../components/Form2";
import Form3 from "../../components/Form3";
import { useState } from "react";
import Animated from "@/components/Animated";

export default function Home() {
  const [step, setStep] = useState(1);
  const [form1Data, setForm1Data] = useState({});
  const [form2Data, setForm2Data] = useState({});

  console.log({ form1Data });
  return (
    <main className="relative min-h-screen gap-12 items-center justify-between p-8 md:p-24">
      <div className="flex flex-col gap-20">
        <div className="z-10  max-w-[475px] h-full m-auto">
          {step == 1 && (
            <Form2
              setStep={setStep}
              setForm1Data={setForm1Data}
              form2Data={form2Data}
              form1Data={form1Data}
              setForm2Data={setForm2Data}
            />
          )}
          {step == 2 && (
            <Form1
              setStep={setStep}
              form1Data={form1Data}
              form2Data={form2Data}
              setForm1Data={setForm1Data}
            />
          )}
          {step == 3 && <Form3 setStep={setStep} form1Data={form1Data} />}
        </div>

        <Animated>
          <p className="text-[#4B5563] font-medium text-md text-center ">
            Crafted with 💖 by Huge End Programmers
          </p>
        </Animated>
      </div>
    </main>
  );
}
