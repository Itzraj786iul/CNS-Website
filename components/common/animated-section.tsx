"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = HTMLMotionProps<"div"> & {
  stagger?: boolean;
};

function AnimatedSection({
  className,
  stagger = false,
  children,
  ...props
}: AnimatedSectionProps) {
  return (
    <motion.div
      data-slot="animated-section"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={stagger ? staggerContainer : fadeUp}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { AnimatedSection };
