"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
// import clsx from "clsx";
import { cn } from "@/utils/tailwind-merge";
import Logo from "../icons/Logo";
import { TbPhone } from "react-icons/tb";

export const NAVS = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "#courses" },
  { name: "Gallery", href: "#gallery" },
];

const Navbar: React.FC = () => {
  const [isNavToggled, setIsNavToggled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setIsNavToggled(false);
    };
  }, []);

  return (
    <div className={`py-4 flex items-center justify-between relative`}>
      <Link href={"/"}>
        <Logo />
      </Link>
      <button
        type="button"
        onClick={() => setIsNavToggled(!isNavToggled)}
        className="h-8 w-8 flex md:hidden items-center justify-center text-secondary focus:ring-2 focus:ring-subtle-line"
      >
        <FiMenu />
      </button>

      <div
        className={cn(
          `absolute md:relative md:px-0 w-full md:w-auto top-20 right-4 left-0 md:top-0 md:right-0 transition-opacity duration-300`,
          `${
            isNavToggled
              ? "opacity-100 z-10"
              : "opacity-0 md:opacity-100 invisible md:visible"
          }`
        )}
      >
        <div
          className={cn(
            "flex flex-col md:flex-row gap-3 border-2 border-subtle md:border-0 md:m-0 rounded-md bg-white md:bg-transparent"
          )}
        >
          {NAVS.map((nav, ind) => {
            return (
              <Link
                key={ind}
                onClick={() => setIsNavToggled(false)}
                className={cn(
                  "text-secondary hover:text-primary transition-colors px-4 py-3"
                )}
                href={nav.href}
              >
                {nav.name}
              </Link>
            );
          })}
          <div className="flex items-center gap-5 py-3 px-3 md:px-0 md:py-0">
            <div className="relative">
              <div className="border py-3 rounded-full px-4 flex items-center gap-2">
                <TbPhone className="text-lg" />
                <span className="font-semibold">+91 5714749074</span>
              </div>
              <span className="flex h-3 w-3 absolute top-0 right-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </div>
            <Link
              href={"/registration"}
              className="py-3 px-5 bg-primary text-white rounded-full hover:opacity-80 transition-opacity"
            >
              Join Class
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
