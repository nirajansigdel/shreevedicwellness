import React from "react";
import Image from "next/image";
import Image1 from "./img1.png";
import Image2 from "./img2.png";
import Image3 from "./img3.png";
import Image4 from "./img4.png";
import Image5 from "./img5.png";
import Image6 from "./img6.png";
import Animated from "@/components/Animated";
import Link from "next/link";

function Index() {
  const data = [
    {
      id: 1,
      price: "Starting from $10.00",
      name: "Yoga For Beginners",
      image: Image1,
    },
    {
      id: 2,
      price: "Starting from $10.00",
      name: "Balance Body and Mind",
      image: Image2,
    },
    {
      id: 3,
      price: "Starting from $10.00",
      name: "Self confidence flow",
      image: Image3,
    },
    {
      id: 4,
      price: "Starting from $10.00",
      name: "Exercise for slim",
      image: Image4,
    },
    {
      id: 5,
      price: "Starting from $10.00",
      name: "Public Speaking",
      image: Image5,
    },
    {
      id: 6,
      price: "Starting from $10.00",
      name: "Weight Management",
      image: Image6,
    },
  ];

  return (
    <Animated id="courses" className="my-20">
      <p className="text-[#4B5563] text-[29px] font-medium text-center">
        Most Popular Classes
      </p>
      <p className="text-[#9CA3AF] text-[13px] mt-3 mb-4 font-medium text-center">
        Explore our most popular classes - where wellness meets wisdom. Join us
        in the journey to holistic well-being
      </p>

      <div className="mt-10 w-full  grid grid-cols-1 w-5/6 mx-auto md:grid-cols-3 gap-16 ">
        {data.map((popular) => (
          <div key={popular.id} className="relative rounded-md ">
            <Image
              src={popular.image}
              alt="image"
              className="rounded-md w-full"
            />
            <div className="bg-white rounded-md shadow-lg absolute w-full bottom-[-25px] py-2 text-center">
              <div className="flex flex-col  items-start px-4">
                <p className="text-[#4B5563] text-[11px] ">{popular.price}</p>
                <p className="text-[#4B5563] text-[13px] font-medium">
                  {popular.name}
                </p>
              </div>
              <div className=" flex justify-between px-4">
                <Link
                  href="/registration"
                  className="text-sm font-medium text-[#22C55E] mt-2"
                >
                  Join Now
                </Link>
                <p className="text-[11px] font-medium mt-1">8 days</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Animated>
  );
}

export default Index;
