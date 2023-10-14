import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "./logo.png";

function Index() {
  return (
    <div className="w-full bg-[#7E8446] h-[200px] flex items-center justify-center">
      <div className="flex items-center gap-10">
        <Link href={"/registration"}>
          <span className="text-white">Yoga</span>
        </Link>
        <Link href={"/registration"}>
          <span className="text-white">Meditation</span>
        </Link>
        <span>
          <Image src={Logo} alt="logo" />
        </span>

        <Link href={"/registration"}>
          <span className="text-white">Wellness</span>
        </Link>
        <Link href={"/registration"}>
          <span className="text-white">Learning</span>
        </Link>
        <Link href={"/registration"}>
          <span className="text-white">Events</span>
        </Link>
      </div>
    </div>
  );
}

export default Index;
