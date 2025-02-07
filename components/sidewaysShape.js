

import { animate, motion } from "framer-motion";
const sidewaysShape = ({ content, duration, direction  }) => {
    const upDownAnimation = {
        animate: {
          x: direction === "left" ? [-20, 20] : direction ==="right" ? [20, -20] : [-20,20], // Moves left and right
          transition: {
            duration: duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse", 
          },
        },
      };
    
      return (
        <motion.div variants={upDownAnimation} animate="animate">
          {content}
        </motion.div>
      );
}

export default sidewaysShape