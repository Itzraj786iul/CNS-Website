"use client";

import * as React from "react";

import { AnimatedSection } from "@/components/common/animated-section";
import { Section, type SectionProps } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { splitColumnClasses, type SplitRatio } from "@/lib/design-system";
import { cn } from "@/lib/utils";

type SplitContentSectionProps = {
  left: React.ReactNode;
  right: React.ReactNode;
  ratio?: SplitRatio;
  heading?: {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
  };
  leftClassName?: string;
  rightClassName?: string;
  className?: string;
} & Omit<SectionProps, "children">;

function SplitContentSection({
  left,
  right,
  ratio = "narrowWide",
  heading,
  leftClassName,
  rightClassName,
  className,
  ...sectionProps
}: SplitContentSectionProps) {
  return (
    <Section className={className} {...sectionProps}>
      {heading ? (
        <AnimatedSection className="mb-5 mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow={heading.eyebrow}
            title={heading.title}
            description={heading.description}
            align={heading.align ?? "center"}
          />
        </AnimatedSection>
      ) : null}
      <div
        className={cn(
          "grid gap-5 md:grid-cols-2 md:items-stretch md:gap-6 lg:items-stretch lg:gap-6",
          splitColumnClasses[ratio]
        )}
      >
        <AnimatedSection className={cn("flex flex-col justify-center", leftClassName)}>
          {left}
        </AnimatedSection>
        <AnimatedSection className={rightClassName}>{right}</AnimatedSection>
      </div>
    </Section>
  );
}

export { SplitContentSection };
export type { SplitContentSectionProps };
