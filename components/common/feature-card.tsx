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
      <Card className="h-full border-cns-border/80 bg-white shadow-soft ring-0">
        <CardHeader className="gap-4">
          <IconBox icon={icon} variant={iconVariant} />
          <CardTitle className="text-lg font-semibold text-cns-navy">
            {title}
          </CardTitle>
        </CardHeader>
        {description ? (
          <CardContent>
            <CardDescription className="text-base leading-relaxed">
              {description}
            </CardDescription>
          </CardContent>
        ) : null}
      </Card>
    </motion.div>
  );
}

export { FeatureCard };
