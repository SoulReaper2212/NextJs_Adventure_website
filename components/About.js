"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

import { useEffect, useState } from "react";
import {
  animate,
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
const About = () => {
  const { scrollY } = useScroll();
  const [buttonClicked, setButtonClicked] = useState(false);

  const opacity2 = useSpring(useTransform(scrollY, [600, 700], [0, 1]), {
    stiffness: 400, // Lower stiffness for a smoother transition
    damping: 40, // Higher damping to prevent bounciness
    mass: 1,
    ease: "easeInOut",
  });

  const scaleTransform = useTransform(scrollY, [100, 150], [1, 1.123]); // Scale from 1 to 1.5
  const scaleTransform2 = useTransform(scrollY, [100, 150], [1, 1.39]);
  // Apply smooth spring motion to the scale
  const scale = useSpring(scaleTransform, {
    stiffness: 400, // Lower stiffness for smooth scaling
    damping: 50, // Higher damping for slower transition
    mass: 1,
    ease: "easeInOut",
  });

  const yTransform = useTransform(scrollY, [500, 700], [0, -70]); // Move from 0px to 200px
  const y = useSpring(yTransform, {
    stiffness: 400, // Smoothness of the motion
    damping: 40, // Resistance to motion
    mass: 1,
    ease: "easeInOut",
  });

  const scale2 = useSpring(scaleTransform2, {
    stiffness: 400, // Lower stiffness for smooth scaling
    damping: 50, // Higher damping for slower transition
    mass: 1,
    ease: "easeInOut",
  });

  return (
    <section className="h-[435px] relative bg-backgroundDarkGreen py-20">
      <div className="container mx-auto h-full ">
        <div className="hidden  xl:flex lg:hidden w-[60vw] h-full absolute top-0 left-1  bg-titleYellow">
          <motion.div
            className="absolute z-20  top-[-1vw] left-[0vw] xl:block "
            style={{ scale }}
          >
            <Image
              src="/waterfall.png"
              height={500}
              width={340}
              quality={100}
              priority
              alt=""
              className="object-contain  "
            />
          </motion.div>

          <div className="absolute z-50  top-[1.5vw] left-[2.2vw] xl:block  ">
            <h1 className="h2 mb-2  text-titleYellow">
              ABOUT <br /> &nbsp;&nbsp; ME
            </h1>
          </div>

          <motion.div
            className="absolute z-50  top-[0vw] left-[-2.9vw] xl:block  "
            style={{ opacity: opacity2, scale: scale2, y }}
          >
            <Image
              src="/me.png"
              height={500}
              width={340}
              quality={100}
              priority
              alt=""
              className="object-contain "
            />
          </motion.div>

          <div className=" relative z-50 items-end justify-end text-left left-96">
            <h1 className="h1 mb-2">
              {" "}
              <span className="text-white">
                <br />{" "}
              </span>
              <TypeAnimation
                preRenderFirstString={true}
                sequence={["WHO AM I ", 1500, "I AM ", 2000]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
                cursor={false}
                className="text-titleWhite"
              />
              <span className="text-white">
                <br />{" "}
              </span>
              <TypeAnimation
                preRenderFirstString={true}
                sequence={["?", 2000, "SHAHNEHAL", 2000]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
                cursor={false}
                className="text-titleWhite"
              />
            </h1>
          </div>
        </div>

        <div className="z-50 w-full flex xl:w-[40vw] h-full absolute top-0 right-0 bg-b justify-center bg-titleYellow">
          <div className=" absolute z-50 top-8 left-10">
            <Image
              src="/circle.png"
              height={50}
              width={50}
              quality={100}
              priority
              alt=""
              className="object-contain "
            />
          </div>

          <div className=" absolute z-50 top-8 left-8">
            <Image
              src="/circle.png"
              height={20}
              width={20}
              quality={100}
              priority
              alt=""
              className="object-contain "
            />
          </div>

          <div className=" absolute z-50 top-10 left-20">
            <Image
              src="/circle.png"
              height={30}
              width={30}
              quality={100}
              priority
              alt=""
              className="object-contain "
            />
          </div>

          <div className=" absolute z-50 top-[70px] left-[90px]">
            <Image
              src="/circle.png"
              height={40}
              width={40}
              quality={100}
              priority
              alt=""
              className="object-contain "
            />
          </div>

          <div className=" absolute z-50 top-[350px] left-[480px]">
            <Image
              src="/circle.png"
              height={60}
              width={60}
              quality={100}
              priority
              alt=""
              className="object-contain "
            />
          </div>

          <div className=" absolute z-50 top-[350px] left-[520px]">
            <Image
              src="/circle.png"
              height={30}
              width={30}
              quality={100}
              priority
              alt=""
              className="object-contain "
            />
          </div>

          <div className=" absolute z-50 top-[390px] left-[520px]">
            <Image
              src="/circle.png"
              height={30}
              width={30}
              quality={100}
              priority
              alt=""
              className="object-contain "
            />
          </div>

          <ul className="relative gap-[20px] grid grid-cols-1 lg:top-20  place-items-center lg:place-items-stretch">
            <li className="bg-backgroundDarkGreen  relative shadow-custom p-6 h-[300px] w-[400px] md:max-w-none rounded-lg text-center hover:cursor-pointer hover:bg-backgroundLightGreen hover:scale-105 transition-transform duration-200">
              <h3 className=" text-titleYellow   font-primary text-2xl mb-3">
                I AM NEHAL
              </h3>
              <p className="text-titleWhite">
                and this is the story of my travels across the Pakistan <br /> I
                am computer science student and love to make beautiful
                interactive front-end designs <br /> <br /> and my other love is
                to go on adventures and hike on the beauritful mountains and
                hills{" "}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
