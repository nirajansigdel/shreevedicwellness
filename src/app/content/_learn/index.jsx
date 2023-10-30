import Image from "next/image";
import React from "react";

import Pic1 from "./pic1.png";
import Pic2 from "./pic2.png";
import Pic3 from "./pic3.png";
import Pic4 from "./pic4.png";
import Pic5 from "./pic5.png";

const data = [
  {
    id: 1,
    name: "Yoga",
    description:
      "In the stillness of the pose and the breath, we discuss the infinite peace within",
    image: Pic1,
  },
  {
    id: 2,
    name: "Meditation",
    description:
      "Meditation is the journey within,where the sould find its sanctuary in the quietude of the mind.",
    image: Pic2,
  },
  {
    id: 3,
    name: "Wellness",
    description:
      "Wellness is the harmonious dance of mind, body and soul where self-care becomes self-love",
    image: Pic3,
  },
  {
    id: 4,
    name: "Events",
    description:
      "In the stillness of the pose and the breath, we discover the infinite peace within.",
    image: Pic4,
  },
  {
    id: 5,
    name: "Fitness",
    description:
      "In the stillness of the pose and the breath, we discover the infinite peace within.",
    image: Pic4,
  },
  {
    id: 6,
    name: "Learning",
    description:
      "In the stillness of the pose and the breath, we discuss the infinite peace within",
    image: Pic5,
  },
];

function Index() {
  return (
    <div id="learn-with-us">
      <p className="text-[#4B5563] text-[29px] font-medium text-center">
        Learn With Us
      </p>
      <p className="text-[#9CA3AF] text-[13px] mt-3 mb-4 font-medium text-center">
        Explore the path to inner and self-discovery. Learn Yoga Meditation with
        us.
      </p>

      <div className="mt-10  grid grid-cols-1 md:grid-cols-3  justify-items-center gap-y-10">
        {data?.map((learn) => (
          <div className="flex flex-col gap-2 items-center justify-center w-96">
            <Image src={learn.image} alt="image" />
            <p className="text-[#4B5563] font-medium text-[13px]">
              {learn.name}
            </p>
            <p className="text-[#9CA3AF] font-medium text-[13px] text-center w-full max-w-[270px]">
              {learn.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
