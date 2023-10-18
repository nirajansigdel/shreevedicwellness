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
    <div className="my-20">
      <p className="text-[#4B5563] text-[29px] font-medium text-center">
        Gallery
      </p>
      <p className="text-[#9CA3AF] text-[13px] mt-3 mb-4 font-medium text-center">
        Explore our Yoga Gallery. A Visual journey Through Serenity
      </p>

      <div className="flex flex-row flex-wrap gap-10  justify-between px-20">
        {arrayImages.map((image) => (
          <div
            onClick={() => {
              setOpenImageModal(true);
              setSelectedImage(image);
            }}
          >
            <Image src={image} alt="image" />
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
