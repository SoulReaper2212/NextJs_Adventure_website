"use client";
import GallerySection from "@/components/GallerySection.js";
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
import { useEffect, useState } from "react";
import UpwayShape from "./upwaysShape.js";

const Gallery = () => {
  return (
    <section className="relative bg-CreamGreen p-10 z-50">
      <div className="container mx-auto h-full">

        <div className="relative justify-center text-center -top-20">
          <h1 className=" h2 mb-2 bottom-10  text-backgroundDarkGreen">
            Gallery
          </h1>

          <GallerySection/>


        </div>


      </div>
    </section>
  );
};

export default Gallery;
