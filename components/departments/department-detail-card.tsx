"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
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
      <Card className="group/dept flex h-full flex-col card-premium card-premium-hover ring-0">
        <CardHeader className="gap-4">
          <IconBox icon={icon} variant={iconVariant} size="lg" />
          <CardTitle className="text-xl font-semibold text-cns-navy">
            {title}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col gap-5">
          <ul className="space-y-2">
            {treatments.map((treatment) => (
              <li
                key={treatment}
                className="flex items-center gap-2.5 text-sm text-cns-navy/80"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-secondary" />
                {treatment}
              </li>
            ))}
          </ul>

          <Button
            nativeButton={false}
            render={
              <Link href={href}>
                Learn More
                <ArrowRight />
              </Link>
            }
            variant="ghost"
            className="group/btn mt-auto -ml-2 h-auto w-fit px-2 py-1 text-primary hover:bg-primary/5"
          />
        </CardContent>
      </Card>
    </motion.div>
  );
}

export { DepartmentDetailCard };
