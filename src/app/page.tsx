"use client";

import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "./content/_hero";
import Learn from "./content/_learn";
import Popular from "./content/_popular";
import Gallery from "./content/_gallery";
import Contact from "./content/_contact";
import AnimationContainer from "@/components/AnimationContainer";

function Content() {
  return (
    <div className="flex bg-white flex-col h-screen  w-full  ">
      <AnimationContainer className="content-container flex flex-col flex-1">
        <NavBar />
        <div className="flex flex-col gap-24">
          <Hero />
          <Learn />
          <Popular />
          <Gallery />
          <Contact />
          <Footer />
        </div>
      </AnimationContainer>
    </div>
  );
}

export default Content;
