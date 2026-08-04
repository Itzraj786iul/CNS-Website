"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { IconBox } from "@/components/common/icon-box";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CARD_VARIANT_DEFAULT,
  type CardVariant,
  cardDescClamp,
  cardIconSize,
} from "@/lib/card-variants";
import { hoverLift } from "@/lib/motion";
import { cn } from "@/lib/utils";

function ServiceCard({
  title,
  description,
  icon,
  iconVariant = "blue",
  href = "/services",
  variant = CARD_VARIANT_DEFAULT,
  className,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  iconVariant?: "blue" | "green" | "orange" | "navy";
  href?: string;
  variant?: CardVariant;
  className?: string;
}) {
  const isCompact = variant === "compact";
  const headerPad = isCompact ? "gap-1.5 px-3 pt-3 pb-0" : "gap-2 px-4 pt-4 pb-0";
  const contentPad = isCompact ? "px-3 pb-3 pt-1" : "px-4 pb-4 pt-2";

  return (
    <motion.div initial="rest" whileHover="hover" variants={hoverLift} className={cn("h-full", className)}>
      <Link href={href} className="group block h-full focus-visible:outline-none">
        <Card className="flex h-full flex-col card-premium card-premium-hover ring-0">
          <CardHeader className={headerPad}>
            <IconBox icon={icon} variant={iconVariant} size={cardIconSize[variant]} />
            <CardTitle
              className={cn(
                "font-semibold tracking-tight text-cns-navy",
                isCompact ? "text-sm" : "text-base"
              )}
            >
              {title}
            </CardTitle>
            <CardDescription
              className={cn(
                "text-[13px] leading-snug text-muted-foreground",
                cardDescClamp[variant]
              )}
            >
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className={cn("mt-auto", contentPad)}>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
              {isCompact ? "View details" : "Learn more"}
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

export { ServiceCard };
