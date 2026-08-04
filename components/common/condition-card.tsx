"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { IconBox } from "@/components/common/icon-box";
import {
  type CardVariant,
  cardDescClamp,
  cardIconSize,
} from "@/lib/card-variants";
import { hoverLift } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ConditionCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  iconVariant?: "blue" | "green" | "orange" | "navy";
  variant?: CardVariant;
  className?: string;
};

function ConditionCard({
  title,
  description,
  icon,
  href,
  iconVariant = "blue",
  variant = "compact",
  className,
}: ConditionCardProps) {
  const isCompact = variant === "compact";
  const pad = isCompact ? "p-3" : variant === "detailed" ? "p-4" : "p-3.5";

  return (
    <motion.div initial="rest" whileHover="hover" variants={hoverLift} className={className}>
      <Link
        href={href}
        className={cn(
          "group flex h-full flex-col gap-2 rounded-[20px] border border-cns-border/60 bg-background transition-colors hover:border-primary/20 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
          pad
        )}
      >
        <IconBox icon={icon} variant={iconVariant} size={cardIconSize[variant]} />
        <div className="flex flex-1 flex-col gap-1">
          <h3 className={cn("card-title-compact", !isCompact && "text-base")}>{title}</h3>
          <p
            className={cn(
              "text-[13px] leading-snug text-muted-foreground",
              cardDescClamp[variant]
            )}
          >
            {description}
          </p>
        </div>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
          Learn more
          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </motion.div>
  );
}

export { ConditionCard };
