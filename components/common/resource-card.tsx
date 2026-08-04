"use client";

import type { LucideIcon } from "lucide-react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

import { IconBox } from "@/components/common/icon-box";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CARD_VARIANT_DEFAULT,
  type CardVariant,
  cardIconSize,
} from "@/lib/card-variants";
import { hoverLift } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ResourceCardProps = {
  title: string;
  type: string;
  size: string;
  icon?: LucideIcon;
  iconVariant?: "blue" | "green" | "orange" | "navy";
  variant?: CardVariant;
  className?: string;
};

function ResourceCard({
  title,
  type,
  size,
  icon: Icon,
  iconVariant = "blue",
  variant = CARD_VARIANT_DEFAULT,
  className,
}: ResourceCardProps) {
  const isCompact = variant === "compact";
  const pad = isCompact ? "gap-3 px-3 py-3" : "gap-4 px-4 py-4";

  return (
    <motion.div initial="rest" whileHover="hover" variants={hoverLift} className={className}>
      <Card className="card-premium card-premium-hover ring-0">
        <CardContent className={cn("flex items-start", pad)}>
          {Icon ? (
            <IconBox icon={Icon} variant={iconVariant} size={cardIconSize[variant]} className="shrink-0" />
          ) : null}
          <div className="min-w-0 flex-1 space-y-1.5">
            <h3 className={cn("card-title-compact", !isCompact && "text-base")}>{title}</h3>
            <p className="text-xs text-muted-foreground">
              {type} · {size}
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="-ml-1.5 h-8 px-2 text-xs text-primary hover:bg-primary/5"
            >
              <Download />
              Download
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export { ResourceCard };
