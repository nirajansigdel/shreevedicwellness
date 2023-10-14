"use client";

import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "./content/_hero";

function Content() {
  return (
    <div className="flex bg-[#F2E9D2] flex-col h-screen  w-full">
      <NavBar />
      <div className="w-4/5 mx-auto flex-1">
        <Hero />
      </div>
      <Footer />
    </div>
  );
}

export default Content;
