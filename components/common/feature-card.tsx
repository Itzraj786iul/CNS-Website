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
        <CardHeader className="gap-4 px-5 pt-6 pb-2">
          <IconBox icon={icon} variant={iconVariant} />
          <CardTitle className="text-lg font-semibold tracking-tight text-cns-navy">
            {title}
          </CardTitle>
        </CardHeader>
        {description ? (
          <CardContent className="px-5 pb-6">
            <CardDescription className="text-base leading-[1.75]">
              {description}
            </CardDescription>
          </CardContent>
        ) : null}
      </Card>
    </motion.div>
  );
}

export { FeatureCard };
