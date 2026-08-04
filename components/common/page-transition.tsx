"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "@/lib/motion";

type PageTransitionProps = {
  children: React.ReactNode;
  className?: string;
};

function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <motion.div
      data-slot="page-transition"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { PageTransition };
