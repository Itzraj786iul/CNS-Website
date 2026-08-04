"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { IconBox } from "@/components/common/icon-box";
import { Button } from "@/components/ui/button";
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
      <Card className="group flex h-full flex-col border-cns-border/80 bg-white shadow-soft ring-0">
        <CardHeader className="gap-4">
          <IconBox icon={icon} variant={iconVariant} size="lg" />
          <CardTitle className="text-xl font-semibold text-cns-navy">{title}</CardTitle>
          <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
          <Button
            nativeButton={false}
            render={<Link href={href}>Learn More<ArrowRight /></Link>}
            variant="ghost"
            className="group/btn -ml-2 h-auto px-2 py-1 text-primary hover:bg-primary/5"
          />
        </CardContent>
      </Card>
    </motion.div>
  );
}

export { ServiceCard };
