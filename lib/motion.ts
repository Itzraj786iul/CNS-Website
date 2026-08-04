import type { Transition, Variants } from "framer-motion";

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const defaultTransition: Transition = {
  duration: 0.5,
  ease: easeOut,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

export const hoverLift = {
  rest: { y: 0, boxShadow: "0 4px 24px -4px rgb(22 50 74 / 0.08)" },
  hover: {
    y: -4,
    boxShadow: "0 12px 40px -8px rgb(22 50 74 / 0.12)",
    transition: { duration: 0.25, ease: easeOut },
  },
};

export const viewportOnce = {
  once: true,
  margin: "-80px" as const,
  amount: 0.2 as const,
};
