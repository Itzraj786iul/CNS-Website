import type { Transition, Variants } from "framer-motion";

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const defaultTransition: Transition = {
  duration: 0.55,
  ease: easeOut,
};

export const fastTransition: Transition = {
  duration: 0.35,
  ease: easeOut,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: fastTransition,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
};

export const pageEnter: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
};

export const pageExit = {
  opacity: 0,
  y: -6,
  transition: { duration: 0.25, ease: easeOut },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

export const hoverLift = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 1px 2px rgb(22 50 74 / 0.04), 0 8px 32px -8px rgb(22 50 74 / 0.1)",
  },
  hover: {
    y: -6,
    scale: 1.008,
    boxShadow: "0 4px 16px -4px rgb(22 50 74 / 0.08), 0 24px 56px -16px rgb(22 50 74 / 0.14)",
    transition: { duration: 0.35, ease: easeOut },
  },
};

export const viewportOnce = {
  once: true,
  margin: "-40px" as const,
  amount: 0.12 as const,
};

export type AnimationDirection = "up" | "down" | "left" | "right" | "fade" | "scale";

export const animationVariants: Record<AnimationDirection, Variants> = {
  up: fadeUp,
  down: fadeDown,
  left: fadeLeft,
  right: fadeRight,
  fade: fadeIn,
  scale: scaleIn,
};
