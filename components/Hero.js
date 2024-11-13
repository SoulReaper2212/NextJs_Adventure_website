"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="h-[800px] relative bg-gradient-to-r from-backgroundDarkGreen via-backgroundMediumGreen to-backgroundLightGreen">
        {/* header */}
      <div>header</div>
      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10">
          <h1 className="h1 mb-2">
            {" "}
            <span className="text-titleYellow">NEHAL AND FRIENDS </span>
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

          <p className="lead text-titleWhite">
            This website is just for showing off my awesome adventures and <br /> <span className="text-titleYellow">appreciate nature of my home city Islamabad and my country Pakistan</span>
          </p>
        </div>

        <div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
