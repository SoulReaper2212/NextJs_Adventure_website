"use client";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Container } from "postcss";
import SidewayShape from "./sidewaysShape.js";
import {
  animate,
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { lazy, useEffect, useState } from "react";
import UpwayShape from "./upwaysShape.js";
import { Button } from "react-scroll";

const boxvariant1 = {
  initial: {
    opacity: 0,
    height: 0,
    y: 0,
  },
  animate: {
    opacity: 1,
    height: 500,
    y: 0,
  },
  exit: {
    opacity: 0,
    height: 0,
    y: 0,
  },
};


const boxvariant2 = {
  initial: {
    opacity: 0,
    height: 0,
    y: 500,
  },
  animate: {
    opacity: 1,
    height: 500,
    y: 0,
  },
  exit: {
    opacity: 0,
    height: 0,
    y: 500,
  },
};
const locations = [
  {
    id: "location1",
    imgSrc: "/gallery_locations/rakaposhi.jpg",
    alt: "gilgit",
    description:
      "Nestled in the Karakoram Range, Hunza is a breathtaking valley known for its stunning mountain views and serene landscapes.",
    title: "Hunza and Rakaposhi",
    videoSrc: "/gallery_locations/video1.mp4",
  },

  {
    id: "location2",
    imgSrc: "/gallery_locations/panjpeer.jpg",
    description:
      "Located in the foothills of the Himalayas, Panjpeer Rocks are rugged, awe-inspiring cliffs offering panoramic vistas",
    alt: "panjpeer",
    title: "PANJPEER The Five Saints",
    videoSrc: "/gallery_locations/video2.mp4",
  },

  {
    id: "location3",
    imgSrc: "/gallery_locations/attabad.jpg",
    description:
      "Attabad Lake, formed by a 2010 landslide in Gilgit-Baltistan, features stunning turquoise waters surrounded by majestic mountains.",
    alt: "panjpeer",
    title: "Attabad and Baskochi",
    videoSrc: "/gallery_locations/video3.mp4",
  },
];

const Gallery = () => {
  const [Index, setindex] = useState(0);
  const [isVisible, setVisible] = useState(0);

  const handleNext = () => {
   
   
    setVisible(1);

    if(Index > locations.length-2){
      setTimeout(() => setindex(0), 1000)
    }else{
      setTimeout(() => setindex(Index + 1), 1000)
    }
    
   
    setTimeout(() => setVisible(0), 1000)
    
  };

  const handlePerv = () => {
    setVisible(1);
    if(Index === 0){
      setTimeout(() => setindex(locations.length-1), 1000)
    }else{
      setTimeout(() => setindex(Index - 1), 1000)
    }
    
    setTimeout(() => setVisible(0), 1000)
  };

  return (
    <section className="relative flex flex-col md:flex-row  rounded-lg h-[500px] justify-center   z-40">

     
      <div className="relative flex justify-start align-bottom">
     
     

       
        <AnimatePresence>
          {isVisible && (
            <motion.div
              variants={boxvariant1}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.50 }}
              className="absolute w-full xl:w-[61%]  h-full bg-titleYellow z-50 "
            ></motion.div>
          )}
        </AnimatePresence>


        <div className="h-full  w-[100%] md:w-[70%] text-white bg-backgroundDarkGreen py-15 px-10 rounded-lg md:rounded-l-lg md:rounded-r-none opacity-100">
          <div className="relative grid-flow-col  justify-center">
            <div className="flex justify-center mt-10">
              <video
                key={Index}
                className="inset-0 w-[400px] h-[255px] object-cover rounded-lg "
                controls
                autoPlay
                loop
                muted
              >
                <source src={locations[Index].videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="flex mt-10 justify-center  ">
              <p className="des w-[30vw]">{locations[Index].description}</p>
            </div>

            <div className="relative flex justify-around mt-[30px] mb-[20px]">
              <button
                onClick={() => handlePerv()}
                className="relative px-6 py-2 font-semibold text-titleYellow bg-transparent border border-titleYellow rounded overflow-hidden group"
              >
                <span className="absolute inset-0 w-0 bg-titleYellow transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                <span className="relative z-10 group-hover:text-white group-hover:border-white">
                  PREV
                </span>
              </button>
              <button
                onClick={() => handleNext()}
                className="relative px-6 py-2 font-semibold text-titleYellow bg-transparent border border-titleYellow rounded overflow-hidden group"
              >
                <span className="absolute inset-0 w-0 bg-titleYellow transition-all duration-300 group-hover:w-full"></span>
                <span className="relative z-10 group-hover:text-white group-hover:border-white">
                  NEXT
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex h-full justify-center sm:h-auto w-[100%]  md:w-[50%] rounded-b-lg md:rounded-r-lg md:rounded-l-none ">
          
        <AnimatePresence>
          {isVisible && (
            <motion.div
              variants={boxvariant2}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.50 }}
              className="absolute w-[40%]  h-full bg-titleYellow z-50 "
            ></motion.div>
          )}
        </AnimatePresence>
          
          <Image
            src={locations[Index].imgSrc}
            width={350}
            height={350}
            className=" rounded-b-lg md:rounded-r-lg md:rounded-l-none "
          ></Image>

          <motion.div
            whileHover={{
              x: 12, // Move slightly to the right (5px)
              y: -7,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute cursor-pointer flex flex-row justify-center text-center z-30 text-white transform bg-titleYellow p-10 w-[15vw] h-[8vw] bottom-10 "
          >
            <h1 className="relative h4 bottom-8 text-white">
              {locations[Index].title}
            </h1>
          </motion.div>

          <motion.div
            whileHover={{
              x: -2, // Move slightly to the right (5px)
              y: 2,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute flex flex-row  justify-center z-10 text-white transform  bg-white p-10 pr-7 pb-5 w-[15vw] h-[8vw] bottom-12 right-12 "
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
