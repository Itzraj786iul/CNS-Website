"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import {
  resolveCardVariant,
  type ContentDensity,
} from "@/lib/design-system";
import type { CardVariant } from "@/lib/card-variants";
import { cardDescClamp } from "@/lib/card-variants";
import { hoverLift } from "@/lib/motion";
import { cn } from "@/lib/utils";

type StepCardProps = {
  step?: string | number;
  title: string;
  description?: string;
  showConnector?: boolean;
  density?: ContentDensity | CardVariant;
  className?: string;
};

function StepCard({
  step,
  title,
  description,
  showConnector = false,
  density = "listing",
  className,
}: StepCardProps) {
  const variant = resolveCardVariant(density);
  const isCompact = variant === "compact";
  const pad = isCompact ? "space-y-2 px-3 py-3" : "space-y-2 px-4 py-4";

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={hoverLift}
      className={cn("relative h-full", className)}
    >
      <Card className="card-premium card-premium-hover h-full ring-0">
        <CardContent className={pad}>
          {step !== undefined ? (
            <div className="flex items-center gap-2.5">
              <span className="flex size-7 items-center justify-center rounded-full bg-primary/10 font-heading text-xs font-semibold text-primary">
                {step}
              </span>
              {showConnector ? (
                <span
                  aria-hidden="true"
                  className="hidden h-px flex-1 bg-linear-to-r from-primary/25 to-transparent lg:block"
                />
              ) : null}
            </div>
          ) : null}
          <h3 className="card-title-compact">{title}</h3>
          {description ? (
            <p className={cn("text-[13px] leading-snug text-muted-foreground", cardDescClamp[variant])}>
              {description}
            </p>
          ) : null}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export { StepCard };
