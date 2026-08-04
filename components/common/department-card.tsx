"use client";

import * as React from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
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

type DepartmentCardProps = {
  title: string;
  description?: string;
  icon: LucideIcon;
  href?: string;
  iconVariant?: "blue" | "green" | "orange" | "navy";
  className?: string;
};

function DepartmentCard({
  title,
  description,
  icon,
  href,
  iconVariant = "blue",
  className,
}: DepartmentCardProps) {
  const content = (
    <Card className="group/dept h-full card-premium card-premium-hover ring-0">
      <CardHeader className="gap-1.5 px-4 pt-4 pb-0">
        <IconBox icon={icon} variant={iconVariant} size="sm" />
        <CardTitle className="card-title-compact">{title}</CardTitle>
      </CardHeader>
      {description ? (
        <CardContent className="space-y-2 px-4 pb-4 pt-1.5">
          <CardDescription className="card-desc-compact">{description}</CardDescription>
          {href ? (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
              Explore
              <ArrowUpRight className="size-3.5 transition-transform group-hover/dept:translate-x-0.5 group-hover/dept:-translate-y-0.5" />
            </span>
          ) : null}
        </CardContent>
      ) : null}
    </Card>
  );

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={hoverLift}
      className={cn("h-full", className)}
    >
      {href ? (
        <Link href={href} className="block h-full focus-visible:outline-none">
          {content}
        </Link>
      ) : (
        content
      )}
    </motion.div>
  );
}

export { DepartmentCard };
