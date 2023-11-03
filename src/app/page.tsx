"use client";

import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "./content/_hero";
import Learn from "./content/_learn";
import Popular from "./content/_popular";
import Gallery from "./content/_gallery";
import Contact from "./content/_contact";

function Content() {
  return (
    <div className="flex bg-white flex-col h-screen  w-full  ">
      <div className="w-4/5  mx-auto flex flex-col flex-1">
        <NavBar />
        <Hero />
        <Learn />
        <Popular />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Content;
