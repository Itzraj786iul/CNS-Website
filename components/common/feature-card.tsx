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
        <CardHeader className="gap-3 px-4 pt-5 pb-1">
          <IconBox icon={icon} variant={iconVariant} />
          <CardTitle className="text-base font-semibold tracking-tight text-cns-navy">
            {title}
          </CardTitle>
        </CardHeader>
        {description ? (
          <CardContent className="px-4 pb-5">
            <CardDescription className="text-sm leading-[1.7]">
              {description}
            </CardDescription>
          </CardContent>
        ) : null}
      </Card>
    </motion.div>
  );
}

export { FeatureCard };
