"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { AnimatedSection } from "@/components/common/animated-section";
import { Section, type SectionProps } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { getCardGridClass, type CardVariant } from "@/lib/card-variants";
import {
  resolveCardVariant,
  type ContentDensity,
} from "@/lib/design-system";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionHeadingConfig = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  size?: "default" | "lg";
};

type CardGridSectionProps = {
  heading?: SectionHeadingConfig;
  density?: ContentDensity | CardVariant;
  stagger?: boolean;
  footer?: React.ReactNode;
  headerAction?: React.ReactNode;
  className?: string;
  gridClassName?: string;
  embedded?: boolean;
  children: React.ReactNode;
} & Omit<SectionProps, "children">;

function CardGridItem({ children }: { children: React.ReactNode }) {
  return <motion.div variants={fadeUp}>{children}</motion.div>;
}

function CardGridSection({
  heading,
  density = "listing",
  stagger = true,
  footer,
  headerAction,
  className,
  gridClassName,
  embedded = false,
  children,
  ...sectionProps
}: CardGridSectionProps) {
  const cardVariant = resolveCardVariant(density);
  const gridClass = cn(getCardGridClass(cardVariant), gridClassName);

  const body = (
    <div className="section-stack">
      {heading ? (
        <AnimatedSection
          className={cn(
            headerAction
              ? "flex min-w-0 flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
              : heading.align === "center" && "mx-auto max-w-3xl text-center"
          )}
        >
          <SectionHeading
            eyebrow={heading.eyebrow}
            title={heading.title}
            description={heading.description}
            align={heading.align ?? "center"}
            size={heading.size}
          />
          {headerAction}
        </AnimatedSection>
      ) : null}

      {stagger ? (
        <AnimatedSection stagger className={gridClass}>
          {children}
        </AnimatedSection>
      ) : (
        <div className={gridClass}>{children}</div>
      )}

      {footer ? <AnimatedSection>{footer}</AnimatedSection> : null}
    </div>
  );

  if (embedded) {
    return body;
  }

  return (
    <Section className={className} {...sectionProps}>
      {body}
    </Section>
  );
}

export { CardGridSection, CardGridItem };
export type { CardGridSectionProps, SectionHeadingConfig };
