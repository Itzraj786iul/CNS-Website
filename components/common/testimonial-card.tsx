"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import {
  CARD_VARIANT_DEFAULT,
  type CardVariant,
  cardDescClamp,
} from "@/lib/card-variants";
import { hoverLift } from "@/lib/motion";
import { cn } from "@/lib/utils";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "size-3.5",
            index < rating
              ? "fill-accent text-accent"
              : "fill-cns-border text-cns-border"
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

type TestimonialCardProps = {
  quote: string;
  author: string;
  role?: string;
  outcome?: string;
  avatar: string;
  rating: number;
  variant?: CardVariant;
  className?: string;
};

function TestimonialCard({
  quote,
  author,
  role,
  outcome,
  avatar,
  rating,
  variant = CARD_VARIANT_DEFAULT,
  className,
}: TestimonialCardProps) {
  const isCompact = variant === "compact";
  const pad = isCompact ? "px-3 py-3.5" : "px-4 py-4";

  return (
    <motion.div initial="rest" whileHover="hover" variants={hoverLift} className={className}>
      <Card className="card-premium card-premium-hover ring-0">
        <CardContent className={cn("flex flex-col gap-2", pad)}>
          <StarRating rating={rating} />
          {outcome && !isCompact ? (
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-secondary">
              {outcome}
            </p>
          ) : null}
          <blockquote>
            <p
              className={cn(
                "text-[13px] leading-snug text-cns-navy/90",
                cardDescClamp[variant]
              )}
            >
              &ldquo;{quote}&rdquo;
            </p>
          </blockquote>
          <footer className="flex items-center gap-2 border-t border-cns-border/80 pt-2">
            <div className="photo-frame relative size-8 shrink-0 rounded-full ring-2 ring-white">
              <Image src={avatar} alt={author} fill className="object-cover" sizes="32px" />
            </div>
            <cite className="not-italic">
              <p className="font-heading text-sm font-semibold text-cns-navy">{author}</p>
              {role ? <p className="text-xs text-muted-foreground">{role}</p> : null}
            </cite>
          </footer>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export { TestimonialCard };
