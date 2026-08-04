"use client";

import Image from "next/image";
import { BadgeCheck, Star } from "lucide-react";
import { motion } from "framer-motion";

import { AvatarPlaceholder } from "@/components/common/avatar-placeholder";
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
  city?: string;
  condition?: string;
  role?: string;
  outcome?: string;
  photo?: string | null;
  verified?: boolean;
  avatar?: string;
  rating?: number;
  variant?: CardVariant;
  className?: string;
};

function TestimonialCard({
  quote,
  author,
  city,
  condition,
  role,
  outcome,
  photo,
  verified,
  avatar,
  rating = 5,
  variant = CARD_VARIANT_DEFAULT,
  className,
}: TestimonialCardProps) {
  const isCompact = variant === "compact";
  const pad = isCompact ? "px-3 py-3.5" : "px-4 py-4";
  const photoSrc = photo ?? avatar ?? null;
  const subtitle = condition ?? role;
  const locationLine = [city, subtitle].filter(Boolean).join(" · ");

  return (
    <motion.div initial="rest" whileHover="hover" variants={hoverLift} className={className}>
      <Card className="card-premium card-premium-hover ring-0">
        <CardContent className={cn("flex flex-col gap-2", pad)}>
          <div className="flex items-center justify-between gap-2">
            <StarRating rating={rating} />
            {verified ? (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-secondary">
                <BadgeCheck className="size-3.5" aria-hidden="true" />
                Verified
              </span>
            ) : null}
          </div>
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
            {photoSrc ? (
              <div className="photo-frame relative size-8 shrink-0 overflow-hidden rounded-full ring-2 ring-white">
                <Image
                  src={photoSrc}
                  alt={`${author}${city ? `, ${city}` : ""}`}
                  fill
                  className="object-cover"
                  sizes="32px"
                  loading="lazy"
                />
              </div>
            ) : (
              <AvatarPlaceholder name={author} size="sm" />
            )}
            <cite className="not-italic">
              <p className="font-heading text-sm font-semibold text-cns-navy">{author}</p>
              {locationLine ? (
                <p className="text-xs text-muted-foreground">{locationLine}</p>
              ) : null}
            </cite>
          </footer>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export { TestimonialCard };
