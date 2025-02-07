"use client";

import { animate, motion } from "framer-motion";
const rotatingShape = ({ content, duration, direction }) => {
  const rotatinganimation = {
    animate : {
      rotate: direction === "right" ? 360 : direction === "left" ? -360 : 0,
      transition: {
        duration: 15,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };
  return (
    <motion.div variants={rotatinganimation} animate="animate">
      {content}
    </motion.div>
  );
};

export default rotatingShape;
