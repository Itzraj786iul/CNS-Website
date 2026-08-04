"use client";

import * as React from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { IconBox } from "@/components/common/icon-box";
import { Button } from "@/components/ui/button";
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
      <CardHeader className="gap-4 px-5 pt-5 pb-1">
        <IconBox icon={icon} variant={iconVariant} size="default" />
        <CardTitle className="text-lg font-semibold tracking-tight text-cns-navy">
          {title}
        </CardTitle>
      </CardHeader>
      {description ? (
        <CardContent className="px-5 pb-1">
          <CardDescription className="text-sm leading-[1.7]">
            {description}
          </CardDescription>
        </CardContent>
      ) : null}
      {href ? (
        <CardContent className="px-5 pb-5 pt-0">
          <Button
            variant="ghost"
            className="group/btn -ml-2 h-10 rounded-full px-3 text-primary hover:bg-primary/5"
          >
            Explore
            <ArrowUpRight className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Button>
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
