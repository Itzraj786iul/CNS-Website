"use client";

import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

import { IconBox } from "@/components/common/icon-box";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CARD_VARIANT_DEFAULT,
  type CardVariant,
  cardDescClamp,
  cardIconSize,
} from "@/lib/card-variants";
import { hoverLift } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description?: string;
  iconVariant?: "blue" | "green" | "orange" | "navy";
  variant?: CardVariant;
  className?: string;
};

function FeatureCard({
  icon,
  title,
  description,
  iconVariant = "blue",
  variant = CARD_VARIANT_DEFAULT,
  className,
}: FeatureCardProps) {
  const isCompact = variant === "compact";
  const headerPad = isCompact ? "gap-1.5 px-3 pt-3 pb-0" : variant === "detailed" ? "gap-2 px-5 pt-5 pb-0" : "gap-1.5 px-4 pt-4 pb-0";
  const contentPad = isCompact ? "px-3 pb-3 pt-1" : variant === "detailed" ? "px-5 pb-5 pt-1.5" : "px-4 pb-4 pt-1.5";

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={hoverLift}
      className={cn("h-full", className)}
    >
      <Card className="h-full card-premium card-premium-hover ring-0">
        <CardHeader className={headerPad}>
          <IconBox icon={icon} variant={iconVariant} size={cardIconSize[variant]} />
          <CardTitle
            className={cn(
              "font-semibold tracking-tight text-cns-navy",
              isCompact ? "text-sm" : variant === "detailed" ? "text-base" : "text-sm"
            )}
          >
            {title}
          </CardTitle>
        </CardHeader>
        {description ? (
          <CardContent className={contentPad}>
            <CardDescription
              className={cn(
                "text-[13px] leading-snug text-muted-foreground",
                cardDescClamp[variant]
              )}
            >
              {description}
            </CardDescription>
          </CardContent>
        ) : null}
      </Card>
    </motion.div>
  );
}

export { FeatureCard };
