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
import { hoverLift } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description?: string;
  iconVariant?: "blue" | "green" | "orange" | "navy";
  className?: string;
};

function FeatureCard({
  icon,
  title,
  description,
  iconVariant = "blue",
  className,
}: FeatureCardProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={hoverLift}
      className={cn("h-full", className)}
    >
      <Card className="h-full card-premium card-premium-hover ring-0">
        <CardHeader className="gap-2 px-5 pt-5 pb-0">
          <IconBox icon={icon} variant={iconVariant} size="sm" />
          <CardTitle className="text-sm font-semibold tracking-tight text-cns-navy">
            {title}
          </CardTitle>
        </CardHeader>
        {description ? (
          <CardContent className="px-5 pb-5">
            <CardDescription className="text-[13px] leading-[1.65]">
              {description}
            </CardDescription>
          </CardContent>
        ) : null}
      </Card>
    </motion.div>
  );
}

export { FeatureCard };
