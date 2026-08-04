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
        <CardHeader className="gap-1.5 px-4 pt-4 pb-0">
          <IconBox icon={icon} variant={iconVariant} size="sm" />
          <CardTitle className="card-title-compact">{title}</CardTitle>
        </CardHeader>
        {description ? (
          <CardContent className="px-4 pb-4 pt-1.5">
            <CardDescription className="card-desc-compact">{description}</CardDescription>
          </CardContent>
        ) : null}
      </Card>
    </motion.div>
  );
}

export { FeatureCard };
