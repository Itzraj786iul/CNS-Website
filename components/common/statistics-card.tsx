"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { hoverLift } from "@/lib/motion";
import { cn } from "@/lib/utils";

type StatisticsCardProps = {
  value: string;
  label: string;
  suffix?: string;
  className?: string;
};

function StatisticsCard({
  value,
  label,
  suffix,
  className,
}: StatisticsCardProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={hoverLift}
      className={cn("h-full", className)}
    >
      <Card className="h-full border-cns-border/80 bg-white shadow-soft ring-0">
        <CardContent className="flex flex-col gap-2 px-6 py-8">
          <p className="font-heading text-4xl font-semibold tracking-tight text-cns-navy sm:text-5xl">
            {value}
            {suffix ? (
              <span className="text-2xl text-primary sm:text-3xl">{suffix}</span>
            ) : null}
          </p>
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export { StatisticsCard };
