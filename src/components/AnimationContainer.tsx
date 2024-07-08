"use client";
import { animationContainer } from "@/constants/animation";
import { motion } from "framer-motion";

const AnimationContainer = ({
  children,
  className,
}: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <motion.div
      variants={animationContainer}
      initial="initial"
      animate="animate"
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer;
