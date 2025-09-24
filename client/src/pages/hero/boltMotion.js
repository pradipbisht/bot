export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren || 0.1,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type || "spring",
        delay: delay || 0,
        duration: duration || 1.25,
        ease: "easeOut",
      },
    },
  };
};

export const textVariant = (delay) => {
  return {
    hidden: {
      y: 80,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.6,
        delay: delay || 0,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };
};

export const scale = (delay) => {
  return {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.2,
        delay: delay || 0,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };
};

export const rotate = (direction = "clockwise") => {
  return {
    hidden: {
      rotate: direction === "clockwise" ? 180 : -180,
      opacity: 0,
    },
    show: {
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };
};

export const bounce = (delay) => {
  return {
    hidden: {
      y: -100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
        delay: delay || 0,
      },
    },
  };
};
