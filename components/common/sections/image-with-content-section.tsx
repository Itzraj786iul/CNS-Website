"use client";

import * as React from "react";

import { AnimatedSection } from "@/components/common/animated-section";
import { Section, type SectionProps } from "@/components/common/section";
import { cn } from "@/lib/utils";

type ImageWithContentSectionProps = {
  image: React.ReactNode;
  body: React.ReactNode;
  imagePosition?: "left" | "right";
  className?: string;
} & Omit<SectionProps, "children">;

function ImageWithContentSection({
  image,
  body,
  imagePosition = "left",
  className,
  ...sectionProps
}: ImageWithContentSectionProps) {
  const imageColumn = (
    <AnimatedSection
      className={cn(
        "relative lg:flex lg:flex-col lg:justify-center",
        imagePosition === "right" && "md:order-2 lg:order-2"
      )}
      direction={imagePosition === "left" ? "left" : "right"}
    >
      {image}
    </AnimatedSection>
  );

  const contentColumn = (
    <div
      className={cn(
        "section-stack",
        imagePosition === "right" ? "md:order-1 lg:order-1" : "md:order-2 lg:order-2"
      )}
    >
      {body}
    </div>
  );

  return (
    <Section className={className} {...sectionProps}>
      <div className="grid items-start gap-5 md:grid-cols-2 md:gap-6 lg:gap-6">
        {imagePosition === "left" ? (
          <>
            {imageColumn}
            {contentColumn}
          </>
        ) : (
          <>
            {contentColumn}
            {imageColumn}
          </>
        )}
      </div>
    </Section>
  );
}

export { ImageWithContentSection };
export type { ImageWithContentSectionProps };
