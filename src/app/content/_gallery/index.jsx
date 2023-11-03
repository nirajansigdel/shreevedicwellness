import React, { useState } from "react";

import Image from "next/image";

import ImageModal from "../../../components/ImageModal";

import Image1 from "./img1.png";
import Image2 from "./img2.png";
import Image3 from "./img3.png";
import Image4 from "./img4.png";

const arrayImages = [Image1, Image2, Image3, Image4, Image4, Image4];

function Index() {
  const [openImageModal, setOpenImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="my-10 " id="gallery">
      <p className="text-[#4B5563] text-[29px] font-medium text-center">
        Gallery
      </p>
      <p className="text-[#9CA3AF] text-[13px] mt-3 mb-4 font-medium text-center">
        Explore our Yoga Gallery. A Visual journey Through Serenity
      </p>

      <div className=" grid sm:grid-cols-1 md:grid-cols-3 gap-10 mx-auto w-full justify-between">
        {arrayImages.map((image, index) => (
          <div
            className=" relative flex items-center justify-center w-full "
            key={index}
            onClick={() => {
              setOpenImageModal(true);
              setSelectedImage(image);
            }}
          >
            <Image src={image} alt="image" className="w-120 " />
          </div>
        ))}
      </div>

      {openImageModal && (
        <ImageModal setIsOpen={setOpenImageModal} image={selectedImage} />
      )}
    </div>
  );
}

export default Index;
