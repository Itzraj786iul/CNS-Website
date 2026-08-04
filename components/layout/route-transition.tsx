"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { pageEnter } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RouteTransitionProps = {
  children: React.ReactNode;
  className?: string;
};

function RouteTransition({ children, className }: RouteTransitionProps) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      data-slot="route-transition"
      initial="hidden"
      animate="visible"
      variants={pageEnter}
      className={cn("flex flex-1 flex-col", className)}
    >
      {children}
    </motion.div>
  );
}

export { RouteTransition };
