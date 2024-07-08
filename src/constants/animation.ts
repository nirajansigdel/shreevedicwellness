export const animationContainer = {
  initial: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  animate: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

export const linearAnimataion = {
  initial: { y: 14, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};
