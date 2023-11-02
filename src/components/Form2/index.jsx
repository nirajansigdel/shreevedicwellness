"use client";

import React from "react";

import Input from "../Input";
import { useState, useEffect } from "react";
import { Listbox } from "@headlessui/react";

import Button from "../Button";
import Select from "../Select";
import ReactSelect from "react-select";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const dropDownDataClass = {
  // name: "Yoga Class",
  options: [
    {
      label: "Yoga",
      value: "Yoga",
      id: 1,
    },
    {
      label: "Meditation",
      value: "Meditation",
      id: 2,
    },
    {
      label: "Wellness",
      value: "Wellness",
      id: 3,
    },
    {
      label: "Learning",
      value: "Learning",
      id: 4,
    },
    {
      label: "Events",
      value: "Events",
      id: 5,
    },
  ],
};

const yogaClass = {
  // name: "Yoga Class type",
  options: [
    {
      label: "Basic ",
      value: "Basic ",
    },
    {
      label: "Intermediate ",
      value: "Intermediate ",
    },
    {
      label: "Advance ",
      value: "Advance ",
    },
    {
      label: "Pregnancy  ",
      value: "Pregnancy  ",
    },
    {
      label: "Elderly / chair yoga ",
      value: "Elderly / chair yoga ",
    },
    {
      value: "Detox yoga",
      label: "Detox yoga",
    },
    {
      label: " Backpain",
      value: " Backpain",
    },
    {
      label: "Join pain",
      value: "Join pain",
    },
  ],
};

const meditationClass = {
  // name: "meditation Class type",
  options: [
    {
      label: "Depression",
      value: "Depression",
    },
    {
      label: "Anxiety",
      value: "Anxiety",
    },
    {
      label: "Happiness",
      value: "Happiness",
    },
    {
      label: "Mental Detox",
      value: "Mental Detox",
    },

    {
      label: "Breathing technique",
      value: "Breathing technique",
    },
    {
      label: "Mudras",
      value: "Mudras",
    },
    {
      label: "Concentration",
      value: "Concentration",
    },
  ],
};

//Wellness Counselling
const wellnessClass = {
  // name: "Wellness Counselling  type",
  options: [
    {
      label: "Nutrition as per body type",
      value: "Nutrition as per body type",
    },
    {
      label: "Weight management",
      value: "HWeight management",
    },
    {
      label: "Diabetes",
      value: "Diabetes",
    },
    {
      label: "Thyroid",
      value: "Thyroid",
    },
    {
      label: "Blood pressure",
      value: "Blood pressure",
    },
    {
      label: "Cholesterol",
      value: "Cholesterol",
    },
    {
      label: " Arthritis",
      value: "Arthritis",
    },
    {
      label: "Fatty liver",
      value: "Fatty liver",
    },
    {
      label: "Kidney problem",
      value: "Kidney problem",
    },
    {
      label: "Prostate",
      value: "Prostate",
    },
    {
      label: "Any other problems",
      value: "Any other problems",
    },
  ],
};

//Learning type

const learningClass = {
  // name: "Learning Class type",
  options: [
    {
      label: "Bhagvat Gita Class for kids",
      value: "Bhagvat Gita Class for kids",
    },
    {
      label: "Public Speaking",
      value: "Public Speaking",
    },
    {
      label: "Slokas Recitation",
      value: "Slokas Recitation",
    },
    {
      label: "Srimat Bhagavat mahapuran",
      value: "Srimat Bhagavat mahapuran",
    },
    {
      label: "Book Club",
      value: "Book Club",
    },
  ],
};

//Events type

const eventsClass = {
  // name: "Events Class type",
  options: [
    {
      label: "kids online Book club ",
      value: "kids online Book club",
    },
    {
      label: "Adult online book club",
      value: "Adult online book club",
    },
    {
      label: "Elderly Online Book Club  ",
      value: "Elderly Online Book Club  ",
    },
    {
      label: "Kids  online slokas recitation",
      value: "Kids  online slokas recitation",
    },
    {
      label: "Kids online Gita Reading",
      value: "Kids online Gita Reading",
    },
  ],
};

function Form2({ setStep, setForm1Data, form2Data, setForm2Data, form1Data }) {
  const [selectedPerson, setSelectedPerson] = useState(1);
  const [firsSelectedValue, setFirsSelectedValue] = useState();
  const [secondSelectedValue, setSecondSelectedValue] = useState(null);
  const [secondOption, setSecondOption] = useState(null);
  const [sessionTime, setSessionTime] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  const switchClass = () => {
    switch (selectedPerson) {
      case 1:
        return yogaClass;
      case 2:
        return meditationClass;
      case 3:
        return wellnessClass;
      case 4:
        return learningClass;
      case 5:
        return eventsClass;
      default:
        return yogaClass;
    }
  };

  useEffect(() => {
    setSecondOption(switchClass().options[0]);
    console.log(switchClass().options[0]);
  }, []);

  useEffect(() => {
    setSecondOption(switchClass().options[0]);
    console.log(switchClass().options[0]);
  }, [selectedPerson]);

  const formValidation = () => {
    if (form2Data.class && form2Data.class_type && sessionTime) {
      setStep(2);
    } else if (!firsSelectedValue || !secondOption || sessionTime) {
      setError(true);
    }
  };

  console.log({ form2Data });

  return (
    <div className=" flex flex-col">
      <p className="mb-6 text-[#4B5563] font-bold text-4xl">
        Class Registration 🧘‍♂️
      </p>
      <p className="mb-8 text-[#9CA3AF] font-medium text-[13px]">
        Embrace Tranquility, Nurture Your Soul, and Begin Your Yoga Journey with
        Us. Unleash Inner Harmony and Radiate Well-being. Please provide us your
        email.
      </p>

      <div className="flex flex-col gap-3">
        <ReactSelect
          className="basic-single"
          classNamePrefix="select"
          isSearchable={true}
          value={firsSelectedValue}
          name="color"
          onChange={(e) => {
            setSelectedPerson(e.id);
            setFirsSelectedValue(e);
            setForm2Data({ ...form2Data, class: e.value });
          }}
          options={dropDownDataClass.options}
        />
        {firsSelectedValue && (
          <ReactSelect
            className="basic-single"
            classNamePrefix="select"
            defaultValue={secondOption}
            value={secondSelectedValue}
            isSearchable={true}
            name="color"
            onChange={(e) => {
              console.log("222", e);
              setSecondSelectedValue(e);
              setForm2Data({ ...form2Data, class_type: e.value });
            }}
            options={switchClass().options}
          />
        )}
        <Input
          type="text"
          placeholder="Session Time"
          onChange={(e) => {
            console.log(e.target.value);
            setSessionTime(e.target.value);
            setForm2Data({
              ...form2Data,
              sessionTime: e.target.value,
            });
          }}
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 mt-5 ">
          Some fields are empty. Please fill the form
        </p>
      )}

      <div className="flex flex-col gap-3 mt-3">
        <Button
          onClick={() => {
            formValidation();
          }}
        >
          Continue
        </Button>
        <Button
          type={"secondary"}
          onClick={() => {
            router.push("/");
            setForm1Data({});
          }}
        >
          Go Back
        </Button>
      </div>
    </div>
  );
}

export default Form2;
