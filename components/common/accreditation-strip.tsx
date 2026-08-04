"use client";

import Image from "next/image";
import { Award } from "lucide-react";

import { AnimatedSection } from "@/components/common/animated-section";
import { Section } from "@/components/common/section";
import { getEnabledAccreditations } from "@/lib/content/accreditations";
import { cn } from "@/lib/utils";

type AccreditationStripProps = {
  variant?: "default" | "compact";
  className?: string;
};

function AccreditationStrip({ variant = "default", className }: AccreditationStripProps) {
  const items = getEnabledAccreditations();

  if (items.length === 0) return null;

  const isCompact = variant === "compact";

  const content = (
    <AnimatedSection>
      <div
        className={cn(
          "flex flex-wrap items-center justify-center gap-4 sm:gap-6",
          isCompact ? "py-2" : "py-4",
          className
        )}
        aria-label="Accreditations and affiliations"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 rounded-xl border border-cns-border/60 bg-card/80 px-3 py-2 shadow-soft"
          >
            {item.logoSrc ? (
              <div className="relative h-8 w-16">
                <Image
                  src={item.logoSrc}
                  alt={`${item.label} logo`}
                  fill
                  className="object-contain object-left"
                  sizes="64px"
                />
              </div>
            ) : (
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Award className="size-4" aria-hidden="true" />
              </span>
            )}
            <div>
              <p className="text-xs font-semibold text-cns-navy">{item.label}</p>
              {item.description && !isCompact ? (
                <p className="text-[10px] text-muted-foreground">{item.description}</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );

  if (isCompact) {
    return content;
  }

  return (
    <Section variant="white" spacing="sm" contained={false}>
      {content}
    </Section>
  );
}

export { AccreditationStrip };
