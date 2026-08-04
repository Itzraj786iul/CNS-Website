"use client";

import * as React from "react";
import { motion } from "framer-motion";

import {
  formatStatValue,
  parseStatValue,
  useCountUp,
} from "@/hooks/use-count-up";
import { Card, CardContent } from "@/components/ui/card";
import {
  getStatisticDisplayValue,
  shouldAnimateStatistic,
  type SiteStatistic,
} from "@/lib/content/statistics";
import { hoverLift } from "@/lib/motion";
import { cn } from "@/lib/utils";

type StatisticsCardProps = {
  value: string;
  label: string;
  suffix?: string;
  /** small | standard | hero */
  size?: "small" | "standard" | "hero";
  className?: string;
  animate?: boolean;
  /** When false, displays placeholder without count-up */
  confirmed?: boolean;
};

const sizeStyles = {
  small: {
    shell: "px-3 py-3",
    value: "text-lg sm:text-xl",
    suffix: "text-base sm:text-lg",
    label: "text-[11px]",
  },
  standard: {
    shell: "px-4 py-3.5 sm:px-4 sm:py-4",
    value: "text-xl sm:text-2xl",
    suffix: "text-lg sm:text-xl",
    label: "text-xs",
  },
  hero: {
    shell: "px-5 py-5 sm:px-6 sm:py-6",
    value: "text-2xl sm:text-3xl lg:text-4xl",
    suffix: "text-xl sm:text-2xl",
    label: "text-sm",
  },
} as const;

function StatisticsCardFromStat({
  stat,
  size = "standard",
  className,
}: {
  stat: SiteStatistic;
  size?: StatisticsCardProps["size"];
  className?: string;
}) {
  return (
    <StatisticsCard
      value={getStatisticDisplayValue(stat)}
      suffix={stat.suffix}
      label={stat.label}
      size={size}
      className={className}
      animate={shouldAnimateStatistic(stat)}
      confirmed={stat.confirmed}
    />
  );
}

function StatisticsCard({
  value,
  label,
  suffix,
  size = "standard",
  className,
  animate = true,
  confirmed = true,
}: StatisticsCardProps) {
  const styles = sizeStyles[size];
  const isPlaceholder = !confirmed || value === "—";
  const numericValue = parseStatValue(value);
  const { count, ref } = useCountUp({
    end: numericValue,
    enabled: animate && !isPlaceholder,
  });

  const displayValue =
    animate && !isPlaceholder ? formatStatValue(count, value) : value;

  return (
    <motion.div
      ref={ref}
      initial="rest"
      whileHover="hover"
      variants={hoverLift}
      className={cn("h-full", className)}
    >
      <Card className="card-premium card-premium-hover h-full">
        <CardContent className={cn("flex flex-col gap-1", styles.shell)}>
          <p
            className={cn("font-heading font-semibold tracking-tight", styles.value)}
            aria-label={`${value}${suffix ?? ""} ${label}`}
          >
            <span
              className={cn(
                isPlaceholder ? "text-muted-foreground" : "text-gradient-brand"
              )}
              aria-hidden="true"
            >
              {displayValue}
            </span>
            {suffix && !isPlaceholder ? (
              <span className={cn("text-primary", styles.suffix)} aria-hidden="true">
                {suffix}
              </span>
            ) : null}
          </p>
          <p className={cn("line-clamp-2 font-semibold tracking-wide text-muted-foreground", styles.label)}>
            {label}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export { StatisticsCard, StatisticsCardFromStat };
