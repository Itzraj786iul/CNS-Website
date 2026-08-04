"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { hoverLift } from "@/lib/motion";
import { cn } from "@/lib/utils";

type GalleryCardProps = {
  image: {
    src: string;
    alt: string;
  };
  title?: string;
  category?: string;
  className?: string;
  onClick?: () => void;
};

function GalleryCard({
  image,
  title,
  category,
  className,
  onClick,
}: GalleryCardProps) {
  const Wrapper = onClick ? "button" : "div";

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={hoverLift}
      className={cn("h-full", className)}
    >
      <Wrapper
        type={onClick ? "button" : undefined}
        onClick={onClick}
        className={cn(
          "group/gallery relative block w-full overflow-hidden rounded-2xl border border-cns-border/80 bg-white text-left shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
          onClick && "cursor-pointer"
        )}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="img-zoom object-cover transition-transform duration-500 group-hover/gallery:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-cns-navy/0 transition-colors duration-300 group-hover/gallery:bg-cns-navy/20" />
        </div>

        {(title || category) && (
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-cns-navy/80 via-cns-navy/40 to-transparent px-5 pb-5 pt-12">
            {category ? (
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
                {category}
              </p>
            ) : null}
            {title ? (
              <p className="mt-1 font-heading text-lg font-semibold text-white">
                {title}
              </p>
            ) : null}
          </div>
        )}
      </Wrapper>
    </motion.div>
  );
}

export { GalleryCard };
