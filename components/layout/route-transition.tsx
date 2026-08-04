"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import { pageEnter, pageExit } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RouteTransitionProps = {
  children: React.ReactNode;
  className?: string;
};

function RouteTransition({ children, className }: RouteTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        data-slot="route-transition"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={{ hidden: pageEnter.hidden, visible: pageEnter.visible, exit: pageExit }}
        className={cn("flex flex-1 flex-col", className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export { RouteTransition };
