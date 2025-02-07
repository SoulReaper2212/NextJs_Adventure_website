"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import RotatingShape from "./rotatingShape.js";
import SidewayShape from "./sidewaysShape.js";
import UpwayShape from "./upwaysShape.js";
import Header from "./Header.js";

const Hero = () => {
  return (
    <section className="h-[550px] relative bg-gradient-to-r from-backgroundDarkGreen via-backgroundMediumGreen to-backgroundLightGreen">
      {/* header */}
      <div className="w-[600px]"> 
        <Header />
      </div>
      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-full xl:max-w-[768px]  flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10">
          <h1 className="h1 mb-2">
            {" "}
            <span className="text-titleYellow">NEHAL AND FRIENDS <br/> OUR </span>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={["      ADVENTURES", 2000, " EXPEDITIONS", 2000]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={false}
              className="text-titleWhite"
            />
          </h1>

          <p className="lead max-w-[600px] text-titleWhite">
            This website is just for showing off my awesome adventures and{" "}
            <br />{" "}
            <span className="text-titleYellow">
              appreciate nature of my home city Islamabad and my country
              Pakistan
            </span>
          </p>

          <div className="absolute top-[5vw] left-[2vw] opacity-5">
            <RotatingShape
              content={<Image src="hexa.svg" width={60} height={60} alt="" />}
              duration={30}
              direction="left"
            />
          </div>

          <div className="absolute top-[5vw] left-[2vw] opacity-5">
            <RotatingShape
              content={<Image src="hexa.svg" width={60} height={60} alt="" />}
              duration={30}
              direction="left"
            />
          </div>

          <div className=" absolute top-[26vw] left-[30vw] opacity-5">
            <RotatingShape
              content={<Image src="hexa.svg" width={60} height={60} alt="" />}
              duration={30}
              direction="left"
            />
          </div>

          <div className=" absolute top-[28vw] left-[2vw] opacity-5">
            <RotatingShape
              content={
                <Image src="square.svg" width={100} height={100} alt="" />
              }
              duration={30}
              direction="left"
            />
          </div>

          <div className=" absolute top-[0vw] left-[20vw] opacity-5">
            <RotatingShape
              content={
                <Image src="triangle.svg" width={100} height={100} alt="" />
              }
              duration={20}
              direction="left"
            />
          </div>
        </div>

        {/* image */}
        <div className="hidden xl:flex w-[34vw] h-[550px] absolute top-0 right-0 bg-backgroundDarkGreen">
          <div>
            <Image
              src="/Title.png"
              fill
              quality={100}
              priority
              className="object-contain shadow-[-10px_0_20px_-5px_rgba(0,0,0,0.3)] hover:shadow-[-13px_0_20px_-6px_rgba(0,0,0,0.35)] cursor-pointer"
            />
          </div>

          {/* title symbols */}

          <div className="hidden z-40 xl:flex absolute top-[15.5vw] left-[15.3vw] ">
            <UpwayShape content={<Image src="/crown.svg" width={30} height={30} alt="meow" />} duration={2} direction="up" />
          </div>
          <div className="hidden z-40 xl:flex absolute top-[20vw] left-[2vw] ">
            <SidewayShape
              content={
                <Image src="/arrow.svg" width={100} height={100} alt="meow" />
              }
              duration={2}
              direction="left"
            />
          </div>

          <div className="hidden z-40 xl:flex absolute top-[20vw] left-[25vw] ">
            <SidewayShape
              content={
                <Image src="/arrow2.svg" width={100} height={100} alt="meow" />
              }
              duration={2}
              direction="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
