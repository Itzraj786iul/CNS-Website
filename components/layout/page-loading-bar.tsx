"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { easeOut } from "@/lib/motion";

function PageLoadingBar() {
  const pathname = usePathname();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-0.5 overflow-hidden bg-transparent"
    >
      <motion.div
        key={pathname}
        initial={{ width: "0%", opacity: 1 }}
        animate={{ width: "100%", opacity: 0 }}
        transition={{
          width: { duration: 0.6, ease: easeOut },
          opacity: { delay: 0.55, duration: 0.15, ease: "easeOut" },
        }}
        className="h-full bg-linear-to-r from-primary via-secondary to-primary"
      />
    </div>
  );
}

export { PageLoadingBar };
