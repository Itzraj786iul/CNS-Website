"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import { Tag } from "@/components/common/tag";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WHATSAPP_URL } from "@/lib/contact-links";
import {
  CARD_VARIANT_DEFAULT,
  type CardVariant,
  cardDescClamp,
  cardImageHeights,
  cardShellPadding,
  cardTagLimit,
} from "@/lib/card-variants";
import { hoverLift } from "@/lib/motion";
import { cn } from "@/lib/utils";

type DoctorCardProps = {
  variant?: CardVariant;
  name: string;
  title: string;
  department?: string;
  qualification?: string;
  experience?: string;
  specializations?: string[];
  intro?: string;
  available?: boolean;
  showQuickActions?: boolean;
  image: {
    src: string;
    alt: string;
  };
  href?: string;
  className?: string;
};

function DoctorCard({
  variant = CARD_VARIANT_DEFAULT,
  name,
  title,
  department,
  qualification,
  experience,
  specializations,
  intro,
  available,
  showQuickActions = false,
  image,
  href,
  className,
}: DoctorCardProps) {
  const shell = cardShellPadding[variant];
  const isDetailed = variant === "detailed";
  const isCompact = variant === "compact";
  const visibleSpecs = specializations?.slice(0, cardTagLimit[variant]) ?? [];
  const descClass = cn("text-[13px] leading-snug text-muted-foreground", cardDescClamp[variant]);

  const content = (
    <Card className="group/doctor flex h-full flex-col overflow-hidden card-premium card-premium-hover ring-0">
      <div className={shell.image}>
        <div
          className={cn(
            "photo-frame relative aspect-[3/4] w-full",
            cardImageHeights[variant]
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="img-zoom object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/55 to-transparent" />
          {isDetailed && (experience || available !== undefined) ? (
            <div className="absolute bottom-2.5 left-2.5 flex flex-wrap items-center gap-1.5">
              {experience ? (
                <Tag variant="green" className="px-2 py-0.5 text-[10px] shadow-soft backdrop-blur-sm">
                  {experience}
                </Tag>
              ) : null}
              {available !== undefined ? (
                <span
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold shadow-soft backdrop-blur-sm",
                    available
                      ? "bg-secondary/90 text-white"
                      : "bg-card/90 text-muted-foreground"
                  )}
                >
                  <span
                    className={cn(
                      "size-1 rounded-full",
                      available ? "bg-white" : "bg-muted-foreground"
                    )}
                    aria-hidden="true"
                  />
                  {available ? "Available" : "Limited"}
                </span>
              ) : null}
            </div>
          ) : showQuickActions && available !== undefined && !isDetailed ? (
            <div className="absolute left-2.5 top-2.5">
              <span
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold shadow-soft backdrop-blur-sm",
                  available
                    ? "bg-secondary/90 text-white"
                    : "bg-card/90 text-muted-foreground"
                )}
              >
                <span
                  className={cn(
                    "size-1 rounded-full",
                    available ? "bg-white" : "bg-muted-foreground"
                  )}
                  aria-hidden="true"
                />
                {available ? "Available" : "Limited"}
              </span>
            </div>
          ) : null}
        </div>
      </div>

      <CardHeader className={shell.header}>
        {department && !isCompact ? (
          <Tag variant="green" className="w-fit px-2 py-0.5 text-[10px]">
            {department}
          </Tag>
        ) : null}
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 space-y-0.5">
            <CardTitle
              className={cn(
                "font-semibold tracking-tight text-cns-navy",
                isCompact ? "text-sm" : isDetailed ? "text-base" : "text-sm"
              )}
            >
              {name}
            </CardTitle>
            <CardDescription
              className={cn(
                "font-medium leading-snug text-primary",
                isCompact ? "text-xs" : "text-sm"
              )}
            >
              {title}
            </CardDescription>
            {qualification && (isDetailed || variant === "standard") ? (
              <p className="text-xs leading-snug text-muted-foreground">{qualification}</p>
            ) : null}
          </div>
          {href && (showQuickActions || isDetailed) ? (
            <Link
              href={href}
              className="inline-flex shrink-0 items-center gap-0.5 text-[11px] font-semibold text-primary hover:text-primary/80"
            >
              Profile
              <ArrowUpRight className="size-3" />
            </Link>
          ) : null}
        </div>
      </CardHeader>

      {(visibleSpecs.length > 0 || intro) && (
        <CardContent className={cn("flex flex-1 flex-col", shell.content)}>
          {visibleSpecs.length > 0 ? (
            <div className="flex flex-wrap gap-1">
              {visibleSpecs.map((spec) => (
                <Tag key={spec} variant="blue" className="px-2 py-0.5 text-[10px]">
                  {spec}
                </Tag>
              ))}
            </div>
          ) : null}
          {intro ? <p className={descClass}>{intro}</p> : null}
        </CardContent>
      )}

      {showQuickActions ? (
        <CardFooter
          className={cn(
            "mt-auto flex border-t-0 bg-transparent",
            isCompact ? "gap-0" : "gap-2",
            shell.footer
          )}
        >
          {isCompact ? (
            <Button
              nativeButton={false}
              render={
                <Link href={href ?? "/doctors"}>
                  View Details
                  <ArrowUpRight />
                </Link>
              }
              size="sm"
              className="h-8 min-h-0 w-full rounded-full bg-secondary text-xs font-semibold text-secondary-foreground shadow-glow-green hover:bg-[#527a14]"
            />
          ) : (
            <>
              <Button
                nativeButton={false}
                render={
                  <Link href="/appointment">
                    <CalendarDays />
                    Book
                  </Link>
                }
                size="sm"
                className="h-8 min-h-0 flex-1 rounded-full bg-secondary text-xs font-semibold text-secondary-foreground shadow-glow-green hover:bg-[#527a14]"
              />
              {variant !== "standard" ? (
                <Button
                  nativeButton={false}
                  render={
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle />
                    </a>
                  }
                  variant="outline"
                  size="icon-sm"
                  className="shrink-0 rounded-full border-border text-cns-navy hover:border-primary/35 hover:bg-primary/5"
                />
              ) : null}
            </>
          )}
        </CardFooter>
      ) : href ? (
        <CardFooter className={cn("border-t-0 bg-transparent", shell.footer)}>
          <Button
            variant="ghost"
            className="group/btn -ml-1.5 h-8 rounded-full px-2 text-xs font-semibold text-primary hover:bg-primary/10"
          >
            View Profile
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Button>
        </CardFooter>
      ) : null}
    </Card>
  );

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={hoverLift}
      className={cn("h-full", className)}
    >
      {href && !showQuickActions ? (
        <Link href={href} className="block h-full focus-visible:outline-none">
          {content}
        </Link>
      ) : (
        content
      )}
    </motion.div>
  );
}

export { DoctorCard };
