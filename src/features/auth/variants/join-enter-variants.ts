export const textParentVariants = {
  start: {},
  end: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 1,
    },
  },
};

export const textChildVariants = {
  start: {
    y: 10,
    opacity: 0,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const buttonChildVariants = {
  invisible: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1,
    },
  },
  hover: {
    scale: 1.05,
  },
  tap: {
    scale: 0.95,
  },
};
