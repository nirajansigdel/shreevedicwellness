"use client";

import { useState } from "react";
import Animated from "@/components/Animated";
import SessionFrom from "@/components/SessionForm";
import ClientInformationForm from "@/components/ClientInformationForm";
import PaymentForm from "@/components/PaymentForm";

export default function Home() {
  const [step, setStep] = useState(1);
  const [form1Data, setForm1Data] = useState({});
  const [form2Data, setForm2Data] = useState({});

  return (
    <main className="relative min-h-screen gap-12 items-center justify-between p-8 md:p-24">
      <div className="flex flex-col gap-20">
        <div className="z-10  max-w-[475px] h-full m-auto">
          {step == 1 && (
            <SessionFrom
              setStep={setStep}
              setForm1Data={setForm1Data}
              form2Data={form2Data}
              form1Data={form1Data}
              setForm2Data={setForm2Data}
            />
          )}
          {step == 2 && (
            <ClientInformationForm
              setStep={setStep}
              form1Data={form1Data}
              form2Data={form2Data}
              setForm1Data={setForm1Data}
            />
          )}
          {step == 3 && <PaymentForm setStep={setStep} form1Data={form1Data} />}
        </div>
      </div>
    </main>
  );
}
