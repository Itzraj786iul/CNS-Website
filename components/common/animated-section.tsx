"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

import {
  animationVariants,
  fadeUp,
  staggerContainer,
  viewportOnce,
  type AnimationDirection,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = HTMLMotionProps<"div"> & {
  stagger?: boolean;
  direction?: AnimationDirection;
};

function AnimatedSection({
  className,
  stagger = false,
  direction = "up",
  children,
  ...props
}: AnimatedSectionProps) {
  const variant = stagger ? staggerContainer : animationVariants[direction] ?? fadeUp;

  return (
    <motion.div
      data-slot="animated-section"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variant}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { AnimatedSection };
