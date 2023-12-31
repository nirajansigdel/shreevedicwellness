"use client";

import Form1 from "../../components/Form1";
import Form2 from "../../components/Form2";
import Form3 from "../../components/Form3";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);
  const [form1Data, setForm1Data] = useState({});
  const [form2Data, setForm2Data] = useState({});

  console.log({ form1Data });
  return (
    <main className="flex relative min-h-screen flex-col gap-12 items-center justify-between p-8 md:p-24">
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

      <p className="text-[#4B5563] font-medium text-md text-center ">
        Crafted with 💖 by Huge End Programmers
      </p>
    </main>
  );
}
