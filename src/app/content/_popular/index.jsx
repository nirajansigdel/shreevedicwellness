import React from "react";

import Image from "next/image";

import Image1 from "./img1.png";
import Image2 from "./img2.png";
import Image3 from "./img3.png";
import Image4 from "./img4.png";
import Image5 from "./img5.png";
import Image6 from "./img6.png";

function Index() {
  const data = [
    {
      id: 1,
      price: "$35.00",
      name: "Yoga For Beginners",
      image: Image1,
    },
    {
      id: 2,
      price: "$35.00",
      name: "Balance Body and Mind",
      image: Image2,
    },
    {
      id: 3,
      price: "$35.00",
      name: "Self confidence flow",
      image: Image3,
    },
    {
      id: 4,
      price: "$35.00",
      name: "Exercise for slim",
      image: Image4,
    },
    {
      id: 5,
      price: "$35.00",
      name: "Public Speaking",
      image: Image5,
    },
    {
      id: 6,
      price: "$35.00",
      name: "Weight Management",
      image: Image6,
    },
  ];

  return (
    <div className="my-20">
      <p className="text-[#4B5563] text-[29px] font-medium text-center">
        Most Popular Classes
      </p>
      <p className="text-[#9CA3AF] text-[13px] mt-3 mb-4 font-medium text-center">
        Explore our most popular classes- where wellness meets wisdom. Join us
        in the journey to holistic well-being
      </p>

      <div className="mt-10 flex flex-row gap-x-19 gap-y-20  flex-wrap justify-around">
        {data.map((popular) => (
          <div className="relative rounded-md ">
            <Image src={popular.image} alt="image" className="relative" />
            <div className="bg-white rounded-md shadow-lg absolute gap-2 flex flex-col bottom-[-25px] w-[350px] mx-auto left-0 right-0 px-3 py-2">
              <div className="flex flex-col">
                <p className="text-[#4B5563] text-[11px] ">{popular.price}</p>
                <p className="text-[#4B5563] text-[13px] font-medium">
                  {popular.name}
                </p>
              </div>
              <p className="text-[11px] font-medium flex justify-between">  
                <span className="text-[#22C55E] ">Join Now</span>
                <span>8 day</span>
                
                </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
