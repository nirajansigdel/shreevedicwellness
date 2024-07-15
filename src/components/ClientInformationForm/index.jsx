"use client";

import React from "react";

import Input from "../Input";
import Button from "../Button";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import Animated from "../Animated";
import AnimationContainer from "../AnimationContainer";
import { TbCircleCheck, TbCircleCheckFilled } from "react-icons/tb";

const SESSION_PRICING = [
  {
    id: 1,
    name: "Group",
    price: "10.00",
  },
  {
    id: 2,
    name: "Individual",
    price: "20.00",
  },
];

function ClientInformationForm({
  setStep,
  form1Data,
  form2Data,
  setForm1Data,
}) {
  const router = useRouter();
  const [error, setError] = useState(null);

  const [sessionPricing, setSessionPricing] = useState(SESSION_PRICING[0]);

  const handleApiOrderSubmit = async () => {
    try {
      if (form1Data.client_name && form1Data.email && form1Data.country) {
        const response = await axios.post(`/api/order`, {
          ...form1Data,
          ...form2Data,
          session_pricing: sessionPricing,
        });

        router.push(`?orderId=${response.data?._id}`);
        setStep(3);
      } else if (
        !form1Data.client_name ||
        !form1Data.email ||
        !form1Data.country
      ) {
        setError(true);
      }
    } catch (error) {
      toast.error("Failed to submit");
    }
  };

  return (
    <AnimationContainer className="flex flex-col">
      <Animated as="p" className="text-[#4B5563] font-bold text-4xl">
        Your Few Information 📃
      </Animated>

      <Animated
        as="p"
        className="text-[#9CA3AF] text-center md:text-left font-medium text-sm mt-6"
      >
        Embrace Tranquility, Nurture Your Soul, and Begin Your Yoga Journey with
        Us. Unleash Inner Harmony and Radiate Well-being. Please provide us your
        email.
      </Animated>

      <Animated className="flex flex-col gap-3 mt-8 mb-3">
        <Input
          type="text"
          placeholder="Full Name"
          onChange={(e) =>
            setForm1Data({
              ...form1Data,
              client_name: e.target.value,
            })
          }
        />

        <Input
          type="text"
          placeholder="Email"
          onChange={(e) =>
            setForm1Data({
              ...form1Data,
              email: e.target.value,
            })
          }
        />

        <Input
          type="text"
          placeholder="Country"
          onChange={(e) =>
            setForm1Data({
              ...form1Data,
              country: e.target.value,
            })
          }
        />
      </Animated>

      <div>
        <Animated as="p" className="my-2 text-secondary">
          Session Fee
        </Animated>
        <Animated className="flex gap-3 mb-3">
          {SESSION_PRICING.map((price) => (
            <button
              onClick={() => setSessionPricing(price)}
              className={`border-2 ${
                price.id === sessionPricing.id && "border-indigo-500"
              } rounded-lg flex-1 px-3 py-3 flex justify-between items-center`}
            >
              <div>
                <p className="text-xl font-bold">${price.price}</p>
                <p className="text-start text-secondary">{price.name}</p>
              </div>
              <div>
                {price.id === sessionPricing.id ? (
                  <TbCircleCheckFilled className="text-indigo-500 text-3xl" />
                ) : (
                  <TbCircleCheck className="text-secondary text-3xl" />
                )}
              </div>
            </button>
          ))}
        </Animated>
      </div>

      {error && (
        <p className="text-sm text-red-600 my-5 ">
          Some fields are empty. Please fill the form
        </p>
      )}

      <Animated className="flex gap-3 flex-col">
        <Button
          onClick={() => {
            handleApiOrderSubmit();
          }}
        >
          Continue
        </Button>
        <Button type="secondary" onClick={() => router.push("/")}>
          Back to Home
        </Button>
      </Animated>
    </AnimationContainer>
  );
}

export default ClientInformationForm;
