"use client";

import React from "react";

import Input from "../Input";
import Button from "../Button";
import { useRouter } from "next/navigation";

function Form1({ setStep }) {
  const router = useRouter();

  return (
    <div>
      <p className="text-[#4B5563] font-bold text-4xl">
        Hello! Welcome To YOGASTA 👋
      </p>

      <p className="text-[#9CA3AF] text-center md:text-left font-medium text-sm mt-6">
        Embrace Tranquility, Nurture Your Soul, and Begin Your Yoga Journey with
        Us. Unleash Inner Harmony and Radiate Well-being. Please provide us your
        email.
      </p>

      <div className="flex flex-col gap-3 mt-8 mb-3">
        <Input type="text" placeholder="Full Name" />

        <Input type="text" placeholder="Email" />

        <Input type="text" placeholder="Country" />
      </div>

      <div className="flex gap-3 flex-col">
        <Button onClick={() => setStep(2)}>Continue</Button>
        <Button type="secondary" onClick={() => router.push("/")}>
          Back to Home
        </Button>
      </div>
    </div>
  );
}

export default Form1;
