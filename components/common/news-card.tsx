"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

import { HospitalImage } from "@/components/common/hospital-image";
import { Tag } from "@/components/common/tag";
import { Card, CardContent } from "@/components/ui/card";
import {
  CARD_VARIANT_DEFAULT,
  type CardVariant,
  cardDescClamp,
  cardLandscapeImageHeights,
} from "@/lib/card-variants";
import { hoverLift } from "@/lib/motion";
import { cn } from "@/lib/utils";

type NewsCardProps = {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  href?: string;
  categoryVariant?: "blue" | "green" | "orange" | "navy" | "default";
  variant?: CardVariant;
  className?: string;
};

function NewsCard({
  title,
  excerpt,
  image,
  date,
  category,
  href,
  categoryVariant = "blue",
  variant = CARD_VARIANT_DEFAULT,
  className,
}: NewsCardProps) {
  const isCompact = variant === "compact";
  const contentPad = isCompact ? "space-y-1.5 px-3 py-3" : "space-y-2 px-4 py-4";

  const card = (
    <Card className="card-premium card-premium-hover overflow-hidden ring-0">
      <HospitalImage
        src={image}
        alt={title}
        aspect="landscape"
        className={cn("w-full", cardLandscapeImageHeights[variant])}
        imageClassName="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <CardContent className={contentPad}>
        <div className="flex flex-wrap items-center gap-2">
          <Tag variant={categoryVariant} className="px-2 py-0.5 text-[10px]">
            {category}
          </Tag>
          <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
            <Calendar className="size-3" aria-hidden="true" />
            {date}
          </span>
        </div>
        <h3 className={cn("card-title-compact", !isCompact && "text-base")}>{title}</h3>
        <p className={cn("text-[13px] leading-snug text-muted-foreground", cardDescClamp[variant])}>
          {excerpt}
        </p>
        {href ? (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
            Read more
            <ArrowRight className="size-3.5" />
          </span>
        ) : null}
      </CardContent>
    </Card>
  );

  return (
    <motion.article initial="rest" whileHover="hover" variants={hoverLift} className={className}>
      {href ? (
        <Link href={href} className="group block h-full focus-visible:outline-none">
          {card}
        </Link>
      ) : (
        card
      )}
    </motion.article>
  );
}

export { NewsCard };
