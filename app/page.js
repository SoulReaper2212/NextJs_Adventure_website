"use client";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import About from "@/components/About";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import FixedMenu from "@/components/FixedMenu";
import Gallery from "@/components/Gallery";


const Homepage = () => {

  useEffect(()=>{

    const loadlocomotive = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();

    }

    loadlocomotive();
  },[])

  return(
    <div>
      <Hero/>
     
      <Why/>
      <About/>
      <Gallery/>
      <FixedMenu/>


     


    </div>
  )

}

export default Homepage