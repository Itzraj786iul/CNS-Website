"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
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

type DepartmentDetailCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconVariant?: "blue" | "green" | "orange" | "navy";
  treatments: string[];
  href?: string;
  className?: string;
};

function DepartmentDetailCard({
  title,
  description,
  icon,
  iconVariant = "blue",
  treatments,
  href = "/departments",
  className,
}: DepartmentDetailCardProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={hoverLift}
      className={cn("h-full", className)}
    >
      <Link href={href} className="group block h-full focus-visible:outline-none">
        <Card className="flex h-full flex-col card-premium card-premium-hover ring-0">
          <CardHeader className="gap-2 px-4 pt-4 pb-0">
            <IconBox icon={icon} variant={iconVariant} size="sm" />
            <CardTitle className="text-base font-semibold text-cns-navy">{title}</CardTitle>
            <CardDescription className="card-desc-compact">{description}</CardDescription>
          </CardHeader>

          <CardContent className="flex flex-1 flex-col gap-3 px-4 pb-4 pt-2">
            <ul className="space-y-1">
              {treatments.slice(0, 4).map((treatment) => (
                <li
                  key={treatment}
                  className="flex items-center gap-2 text-xs text-cns-navy/80"
                >
                  <span className="size-1 shrink-0 rounded-full bg-secondary" />
                  {treatment}
                </li>
              ))}
            </ul>

            <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-primary">
              Learn more
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

export { DepartmentDetailCard };
