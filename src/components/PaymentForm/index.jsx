"use client";

import React from "react";

import Button from "../Button";
import PayPalPayment from "@/components/PayPalPayment";
import PayPalScriptProvider from "@/components/PayPalScriptProvider";
import { useSearchParams } from "next/navigation";

function PaymentForm({ setStep }) {
  const searchParams = useSearchParams();
  const order_id = searchParams.get("orderId");

  // const order_id = "654241c0ec9b24fdfc34bc8f" // ID referencing the object stored in database after submitting the form
  if (!order_id) {
    return (
      <div>
        <p>Could not process the order. Please Try Again...</p>
      </div>
    );
  }
  return (
    <div className=" flex flex-col">
      <p className="text-[#4B5563] font-bold text-4xl">Almost There 🏁</p>

      <p className="text-[#9CA3AF] font-medium text-[13px] my-6">
        Please complete your payment to proceed. Fill the form to reserve your
        class
      </p>
      <PayPalScriptProvider>
        <PayPalPayment order_id={order_id} />
      </PayPalScriptProvider>

      <div className="flex gap-3 flex-col">
        <Button type={"secondary"} onClick={() => setStep(2)}>
          Go Back
        </Button>
      </div>
    </div>
  );
}

export default PaymentForm;
