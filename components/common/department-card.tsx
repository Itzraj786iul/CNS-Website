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
      <CardHeader className="gap-4">
        <IconBox icon={icon} variant={iconVariant} size="lg" />
        <CardTitle className="text-xl font-semibold text-cns-navy">
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
      {href ? (
        <CardContent className="pt-0">
          <Button
            variant="ghost"
            className="group/btn -ml-2 h-auto px-2 py-1 text-primary hover:bg-primary/5"
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
