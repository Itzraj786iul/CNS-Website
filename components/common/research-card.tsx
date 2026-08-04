"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import { Tag } from "@/components/common/tag";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CARD_VARIANT_DEFAULT,
  type CardVariant,
  cardDescClamp,
} from "@/lib/card-variants";
import { hoverLift } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ResearchCardKind = "highlight" | "study" | "award" | "publication";

type ResearchCardProps = {
  kind?: ResearchCardKind;
  title: string;
  description?: string;
  tag?: string;
  tagVariant?: "blue" | "green" | "orange" | "navy" | "default";
  meta?: string;
  submeta?: string;
  year?: string;
  variant?: CardVariant;
  className?: string;
};

function ResearchCard({
  kind = "highlight",
  title,
  description,
  tag,
  tagVariant = "blue",
  meta,
  submeta,
  year,
  variant = CARD_VARIANT_DEFAULT,
  className,
}: ResearchCardProps) {
  const isPublication = kind === "publication";
  const pad = variant === "compact" ? "px-3 py-3" : "px-4 py-4";

  return (
    <motion.div initial="rest" whileHover="hover" variants={hoverLift} className={className}>
      <Card className="card-premium card-premium-hover ring-0">
        <CardContent
          className={cn(
            isPublication
              ? "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
              : "space-y-1.5",
            pad
          )}
        >
          <div className="min-w-0 space-y-1">
            {year ? (
              <p className="text-xs font-semibold text-primary">{year}</p>
            ) : null}
            {tag ? (
              <Tag variant={tagVariant} className="px-2 py-0.5 text-[10px]">
                {tag}
              </Tag>
            ) : null}
            <h3 className={cn("card-title-compact", variant !== "compact" && "text-base")}>
              {title}
            </h3>
            {description ? (
              <p className={cn("text-[13px] leading-snug text-muted-foreground", cardDescClamp[variant])}>
                {description}
              </p>
            ) : null}
            {meta ? <p className="text-xs text-primary">{meta}</p> : null}
            {submeta ? <p className="text-xs text-muted-foreground">{submeta}</p> : null}
          </div>
          {isPublication ? (
            <Button variant="ghost" size="sm" className="h-8 shrink-0 px-2 text-primary hover:bg-primary/5">
              <ExternalLink />
              View
            </Button>
          ) : null}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export { ResearchCard };
