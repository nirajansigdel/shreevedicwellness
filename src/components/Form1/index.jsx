"use client";

import React from "react";

import Input from "../Input";
import Button from "../Button";

function Form1() {
  return (
    <div>
      <p className="text-[#4B5563] font-bold text-[36px]">
        Hello! Welcome To YOGASTA 👋
      </p>

      <p className="text-[#9CA3AF] font-medium text-[13px] mt-6">
        Embrace Tranquility, Nurture Your Soul, and Begin Your Yoga Journey with
        Us. Unleash Inner Harmony and Radiate Well-being. Please provide us your
        email.
      </p>

      <div className="flex flex-col gap-3 mt-8 mb-3">
        <Input type="text" placeholder="Full Name" />

        <Input type="text" placeholder="Email" />

        <Input type="text" placeholder="Country" />
      </div>

      <Button>Continue</Button>
    </div>
  );
}

export default Form1;
