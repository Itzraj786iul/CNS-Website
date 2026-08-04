"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { IconBox } from "@/components/common/icon-box";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { hoverLift } from "@/lib/motion";
import { cn } from "@/lib/utils";

function ServiceCard({
  title,
  description,
  icon,
  iconVariant = "blue",
  href = "/services",
  className,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  iconVariant?: "blue" | "green" | "orange" | "navy";
  href?: string;
  className?: string;
}) {
  return (
    <motion.div initial="rest" whileHover="hover" variants={hoverLift} className={cn("h-full", className)}>
      <Link href={href} className="group block h-full focus-visible:outline-none">
        <Card className="flex h-full flex-col card-premium card-premium-hover ring-0">
          <CardHeader className="gap-2 px-4 pt-4 pb-0">
            <IconBox icon={icon} variant={iconVariant} size="sm" />
            <CardTitle className="text-base font-semibold tracking-tight text-cns-navy">{title}</CardTitle>
            <CardDescription className="card-desc-compact">{description}</CardDescription>
          </CardHeader>
          <CardContent className="mt-auto px-4 pb-4 pt-2">
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
              Learn more
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

export { ServiceCard };
