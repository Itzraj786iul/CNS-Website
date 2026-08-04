import * as React from "react";

import { SectionDivider } from "@/components/common/section-divider";
import { cn } from "@/lib/utils";
import { Container } from "@/components/common/container";

type SectionProps = React.ComponentProps<"section"> & {
  variant?: "default" | "muted" | "white" | "navy" | "gradient";
  spacing?: "sm" | "default" | "lg" | "xl";
  containerSize?: "default" | "narrow" | "wide";
  contained?: boolean;
  divider?: boolean;
};

const variantClasses = {
  default: "bg-background",
  muted: "bg-muted/50",
  white: "bg-white",
  navy: "bg-cns-navy text-white",
  gradient: "bg-gradient-brand",
} as const;

const spacingClasses = {
  sm: "py-12 md:py-16",
  default: "py-16 md:py-24",
  lg: "py-20 md:py-28",
  xl: "py-24 md:py-32",
} as const;

const dividerVariantMap = {
  default: "default",
  muted: "muted",
  white: "white",
  navy: "default",
  gradient: "default",
} as const;

function Section({
  className,
  variant = "default",
  spacing = "default",
  containerSize = "default",
  contained = true,
  divider = false,
  children,
  ...props
}: SectionProps) {
  return (
    <>
      {divider ? (
        <SectionDivider variant={dividerVariantMap[variant]} />
      ) : null}
      <section
        data-slot="section"
        data-variant={variant}
        className={cn(
          "relative overflow-hidden",
          variantClasses[variant],
          spacingClasses[spacing],
          className
        )}
        {...props}
      >
        {variant !== "navy" ? (
          <div
            aria-hidden="true"
            className="section-blob -right-24 top-0 size-64 bg-primary/5"
          />
        ) : null}
        {contained ? (
          <Container size={containerSize} className="relative">
            {children}
          </Container>
        ) : (
          children
        )}
      </section>
    </>
  );
}

export { Section };
