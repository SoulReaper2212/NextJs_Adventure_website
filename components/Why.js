"use client";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Container } from "postcss";
import SidewayShape from "./sidewaysShape.js";
import { animate, motion, useScroll,useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import UpwayShape from "./upwaysShape.js";

const services = [
  {
    icon: "/adventurer.svg",
    Title: "RECREATIONAL",
    Description:
      "We want to spread the awareness about the increase pollution in our beautiful country, the increase in smog a",
  },

  {
    icon: "/climate-change.svg",
    Title: "Climate Awareness",
    Description:
      "We want to spread the awareness about the increase pollution in our beautiful country, our nature is pure and its our duty to preserve its pureness",
  },

  {
    icon: "/landscape.svg",
    Title: "Personal Growth",
    Description:
      "We want to spread the awareness about the increase pollution in our beautiful country, our nature is pure and its our duty to preserve its pureness",
  },
];
const Why = () => {
  const { scrollY } = useScroll();
 

  const opacity = useSpring(useTransform(scrollY, [100, 300], [0, 1]), {
    stiffness: 400,   // Lower stiffness for a smoother transition
    damping: 40,     // Higher damping to prevent bounciness
    mass: 1,
     ease: "easeInOut"
  });

  const xTransform = useTransform(scrollY, [150, 400], [0, 30]); // Move from 0px to 200px
  const x = useSpring(xTransform, {
    stiffness: 400,   // Smoothness of the motion
    damping: 50,     // Resistance to motion
    mass: 1,
     ease: "easeInOut"
  });

 


  const scaleTransform = useTransform(scrollY, [150, 400], [1, 1.3]); // Scale from 1 to 1.5

  // Apply smooth spring motion to the scale
  const scale = useSpring(scaleTransform, {
    stiffness: 400,  // Lower stiffness for smooth scaling
    damping: 50,    // Higher damping for slower transition
    mass: 1,
     ease: "easeInOut"
  });
  
  
  return (
    <section className="relative bg-CreamGreen  z-40">
      <div className="container mx-auto h-full">
        <ul className="relative gap-[20px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 -top-12 place-items-center lg:place-items-stretch">
          {services.map((service, index) => {
            return (
              <li
                key={index}
                className="bg-backgroundDarkGreen shadow-custom p-6 max-w-[400px] md:max-w-none rounded-lg hover:cursor-pointer hover:bg-backgroundLightGreen hover:scale-105 transition-transform duration-200 shadow-lg"
              >
                <Image
                  src={service.icon}
                  width={48}
                  height={48}
                  alt=""
                  className="mb-4"
                />
                <h3 className=" text-titleYellow  font-primary text-2xl mb-3">
                  {service.Title}
                </h3>
                <p className="text-titleWhite">{service.Description}</p>
              </li>
            );
          })}
        </ul>

        <div className="hidden  xl:flex lg:hidden w-[40vw] h-full absolute top-0 right-0 bg-transparent">
          <div className="relative z-20 h-full w-full xl:max-w-[768px] ml-[160px]  flex flex-col items-center xl:items-start  text-center xl:text-left pt-10">
            <h1 className="h1 mb-2 z-50">
              {" "}
              <span className="text-backgroundDarkGreen">OUR <span className="text-titleYellow">PURPOSE </span> </span>
             
            </h1>

            <motion.div className=""  style={{opacity}}>
              <motion.div
                className="absolute z-20 top-[6vw] left-[2vw] xl:block  "
                style={{scale}}
              >
                <Image src="plant1.svg" width={150} height={150} alt="" />
              </motion.div>

              <motion.div
                className="absolute z-8 top-[10.8vw] left-[-4vw] xl:block"
                style={{scale,x}}
              >
                <Image src="plant2.svg" width={150} height={150} alt="" />
              </motion.div>

              <motion.div className="absolute z-9 top-[10.5vw] left-[6vw] xl:block"  style={{scale,x}} >
                <Image src="plant4.svg" width={150} height={150} alt="" />
              </motion.div>
              <motion.div
                className="absolute z-20 top-[10.6vw] left-[6.7vw]  xl:block"
                style={{scale}}
              >
                <Image src="plant6.svg" width={240} height={240} alt="" />
              </motion.div>

              <motion.div
                className="absolute z-10 top-[7vw] left-[13vw] xl:block  "
                style={{scale}}

               
              >
                <Image src="plant7.svg" width={180} height={180} alt="" />
              </motion.div>

              <motion.div
                className="absolute z-20 top-[13.5vw] left-[21vw] xl:block "
                
              >
                <Image src="plant2.svg" width={150} height={150} alt="" />
              </motion.div>
            </motion.div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
