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

import Calendar from "../Calendar";

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
      label: "Elderly / Chair Yoga ",
      value: "Elderly / Chair Yoga ",
    },
    {
      value: "Detox Yoga",
      label: "Detox Yoga",
    },
    {
      label: " Backpain",
      value: " Backpain",
    },
    {
      label: "Join Pain",
      value: "Join Pain",
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
      label: "Breathing Technique",
      value: "Breathing Technique",
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
      label: "Nutrition As Per Body Type",
      value: "Nutrition As Per Body Type",
    },
    {
      label: "Weight Management",
      value: "Weight Management",
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
      label: "Blood Pressure",
      value: "Blood Pressure",
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
      label: "Fatty Liver",
      value: "Fatty Liver",
    },
    {
      label: "Kidney Problem",
      value: "Kidney Problem",
    },
    {
      label: "Prostate",
      value: "Prostate",
    },
    {
      label: "Any Other Problems",
      value: "Any Other Problems",
    },
    {
      label: "Mental Health Councelling",
      value: "Mental Health Councelling",
    },
    {
      label: "Ayurvedic Health and Wellness",
      value: "Ayurvedic Health and Wellness",
    },
  ],
};

//Learning type

const learningClass = {
  // name: "Learning Class type",
  options: [
    {
      label: "Bhagvat Gita Class for Kids",
      value: "Bhagvat Gita Class for Kids",
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
      label: "Srimat Bhagavat Mahapuran",
      value: "Srimat Bhagavat Mahapuran",
    },
    {
      label: "Book Club",
      value: "Book Club",
    },
    {
      label: "Nepali Language",
      value: "Nepali Language",
    },
    {
      label: "Sanskrit Language",
      value: "Sanskrit Language",
    },
  ],
};

//Events type

const eventsClass = {
  // name: "Events Class type",
  options: [
    {
      label: "Kids Online Book Club ",
      value: "Kids Online Book Club",
    },
    {
      label: "Adult Online Book Club",
      value: "Adult Online Book Club",
    },
    {
      label: "Elderly Online Book Club  ",
      value: "Elderly Online Book Club  ",
    },
    {
      label: "Kids  Online Slokas Recitation",
      value: "Kids  Online Slokas Recitation",
    },
    {
      label: "Kids Online Gita Reading",
      value: "Kids Online Gita Reading",
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

  const SessionTimeSpan = ({ text, id }) => {
    return (
      <span
        onClick={() => {
          setForm2Data({
            ...form2Data,
            session_time: text,
          });
          setSessionTime(id);
        }}
        role="button"
        className={`${"text-sm rounded-md text-[#4B5563] border-2  px-4 py-2"} ${
          id == sessionTime && "text-white bg-[#4B5563] "
        }`}
      >
        {text}
      </span>
    );
  };

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

        <Calendar onChange={setForm2Data} form2Data={form2Data} />
     <div className="flex flex-col ">
      <span>session time</span>
      </div>
        <div className=" flex flex-wrap gap-2 ">
          <SessionTimeSpan  text={"5 -6 a.m" } id={1} />
          <SessionTimeSpan  text={"6 - 7 a.m"} id={2} />
          <SessionTimeSpan  text={"7 - 8 a.m"} id={3} />
          <SessionTimeSpan  text={"5 - 6 p.m"} id={4} />
          <SessionTimeSpan  text={"6 - 7 p.m"} id={5} />
          <SessionTimeSpan  text={"7 - 8 a.m"} id={6} />
          
          
        </div>
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
