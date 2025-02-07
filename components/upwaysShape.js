

import { animate, motion } from "framer-motion";
const upwaysShape = ({ content, duration, direction  }) => {
    const upDownAnimation = {
        animate: {
          y: direction === "up" ? [-20, 20] : direction ==="down" ? [20, -20] : [-20,20], // Moves left and right
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

export default upwaysShape