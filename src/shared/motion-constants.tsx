export const pageTransition: Record<string, string | number> = {
  type: "tween",
  ease: "linear",
  duration: 0.5,
};

export const pageVariants: Record<string, Record<string, string | number>> = {
  initial: {
    opacity: 0,
    y: -100,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -100
  },
};
