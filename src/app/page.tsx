"use client";

import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "./content/_hero";
import Learn from "./content/_learn";
import Popular from "./content/_popular";

function Content() {
  return (
    <div className="flex bg-white flex-col h-screen  w-full  ">
      <NavBar />
      <div className=" w-5/6 mx-auto flex flex-col flex-1">
        <Hero />
        <Learn/>
        <Popular/>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Content;
