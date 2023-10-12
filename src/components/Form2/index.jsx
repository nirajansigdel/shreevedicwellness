import React from "react";

import Input from "../Input";
import Button from "../Button";

function Form2({ setStep }) {
  return (
    <div className=" flex flex-col">
      <p className="mb-6 text-[#4B5563] font-bold text-[36px]">
        Class Registration 🧘‍♂️
      </p>
      <p className="mb-8 text-[#9CA3AF] font-medium text-[13px]">
        Embrace Tranquility, Nurture Your Soul, and Begin Your Yoga Journey with
        Us. Unleash Inner Harmony and Radiate Well-being. Please provide us your
        email.
      </p>

      <div className="flex flex-col gap-3">
        <Input type="text" placeholder="Class" />
        <Input type="text" placeholder="Class Type" />
        <Input type="text" placeholder="Session Time" />
      </div>

      <div className="flex flex-col gap-3 mt-3">
        <Button>Continue</Button>
        <Button type={"secondary"} onClick={() => setStep(1)}>
          Go Back
        </Button>
      </div>
    </div>
  );
}

export default Form2;
