"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnimatedSection } from "@/components/common/animated-section";
import { Button } from "@/components/ui/button";
import { CardGridSection } from "./card-grid-section";
import type { CardGridSectionProps } from "./card-grid-section";

type PreviewCarouselSectionProps = Omit<CardGridSectionProps, "density"> & {
  /** Preview density — compact cards for fast scanning */
  density?: CardGridSectionProps["density"];
  cta?: {
    label: string;
    href: string;
  };
};

/**
 * Preview sections: high-density card grids with optional footer CTA.
 * Used on homepage and cross-link landing sections for fast scanning.
 */
function PreviewCarouselSection({
  density = "preview",
  cta,
  footer,
  children,
  ...props
}: PreviewCarouselSectionProps) {
  const resolvedFooter =
    cta || footer ? (
      <div className="section-stack">
        {footer}
        {cta ? (
          <AnimatedSection className="flex justify-center">
            <Button
              nativeButton={false}
              render={
                <Link href={cta.href}>
                  {cta.label}
                  <ArrowRight />
                </Link>
              }
              variant="outline"
              className="h-11 rounded-full border-cns-border px-6"
            />
          </AnimatedSection>
        ) : null}
      </div>
    ) : undefined;

  return (
    <CardGridSection density={density} footer={resolvedFooter} {...props}>
      {children}
    </CardGridSection>
  );
}

export { PreviewCarouselSection };
export type { PreviewCarouselSectionProps };
