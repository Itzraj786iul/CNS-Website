"use client";

import * as React from "react";
import { motion } from "framer-motion";

import {
  formatStatValue,
  parseStatValue,
  useCountUp,
} from "@/hooks/use-count-up";
import { Card, CardContent } from "@/components/ui/card";
import { hoverLift } from "@/lib/motion";
import { cn } from "@/lib/utils";

type StatisticsCardProps = {
  value: string;
  label: string;
  suffix?: string;
  className?: string;
  animate?: boolean;
};

function StatisticsCard({
  value,
  label,
  suffix,
  className,
  animate = true,
}: StatisticsCardProps) {
  const numericValue = parseStatValue(value);
  const { count, ref } = useCountUp({
    end: numericValue,
    enabled: animate,
  });

  const displayValue = animate ? formatStatValue(count, value) : value;

  return (
    <motion.div
      ref={ref}
      initial="rest"
      whileHover="hover"
      variants={hoverLift}
      className={cn("h-full", className)}
    >
      <Card className="card-premium card-premium-hover h-full">
        <CardContent className="flex flex-col gap-1.5 px-4 py-4 sm:gap-2 sm:px-5 sm:py-5">
          <p
            className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[2rem]"
            aria-label={`${value}${suffix ?? ""} ${label}`}
          >
            <span className="text-gradient-brand" aria-hidden="true">
              {displayValue}
            </span>
            {suffix ? (
              <span className="text-xl text-primary sm:text-2xl" aria-hidden="true">
                {suffix}
              </span>
            ) : null}
          </p>
          <p className="text-sm font-semibold tracking-wide text-muted-foreground">{label}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export { StatisticsCard };
