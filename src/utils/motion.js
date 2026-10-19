// SkillClass Motion & Interaction System
// Calibrated directly against https://skillclass.framer.website/ Framer animation specifications

// Signature SkillClass Easing Curves extracted from Framer bundles
export const easeSkillClass = [0.44, 0, 0, 1]; // Primary Framer tween easing (smooth editorial entrance)
export const easeSkillDecel = [0.16, 1, 0.3, 1]; // Smooth deceleration / spring-like settle
export const easeSkillHover = [0.44, 0, 0.56, 1]; // Responsive micro-interactions & hover transitions

// Framer Spring Configurations from SkillClass bundles
export const springTight = {
  type: "spring",
  stiffness: 500,
  damping: 60,
  mass: 1,
};

export const springSnappy = {
  type: "spring",
  stiffness: 400,
  damping: 30,
  mass: 1,
};

export const springGentle = {
  type: "spring",
  stiffness: 274,
  damping: 51,
  mass: 3.3,
};

export const springBounce = {
  type: "spring",
  stiffness: 350,
  damping: 24,
};

// Section Header Reveal Variants
export const headerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const headerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: easeSkillClass,
    },
  },
};

// Scroll Reveal for Individual Blocks
export const fadeUp = (delay = 0, distance = 30) => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: easeSkillClass,
    },
  },
});

export const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      delay,
      ease: easeSkillClass,
    },
  },
});

export const scaleUp = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.94, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.85,
      delay,
      ease: easeSkillClass,
    },
  },
});

// Staggered Grids for Cards (Capabilities, Skills, Certifications)
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerCard = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: easeSkillClass,
    },
  },
};

// Word-by-word reveal for headlines
export const wordRevealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.1,
    },
  },
};

export const wordItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeSkillClass,
    },
  },
};

// Micro-interaction presets
export const btnHover = {
  whileHover: { y: -2, scale: 1.02 },
  whileTap: { scale: 0.98, y: 0 },
  transition: { duration: 0.2, ease: easeSkillHover },
};

export const cardHover = {
  whileHover: {
    y: -4,
    transition: { duration: 0.35, ease: easeSkillHover },
  },
};
