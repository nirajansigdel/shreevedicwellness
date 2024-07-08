"use client";
import { linearAnimataion } from "@/constants/animation";
import { motion, MotionProps } from "framer-motion";

const Animated = ({
  children,
  className,
  as = "div",
  ...rest
}: React.HTMLAttributes<HTMLElement> & {
  as?: "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & MotionProps) => {
  const MotionComponent = motion[as];

  return (
    <MotionComponent
      variants={linearAnimataion}
      className={className}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
};

export default Animated;
