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
  default: "section-surface-default",
  muted: "section-surface-muted",
  white: "section-surface-white",
  navy: "bg-cns-brand-navy text-white",
  gradient: "section-surface-gradient",
} as const;

const spacingClasses = {
  sm: "py-6 md:py-9",
  default: "py-9 md:py-12",
  lg: "py-11 md:py-16",
  xl: "py-12 md:py-20",
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
          <>
            <div
              aria-hidden="true"
              className="neural-pattern pointer-events-none absolute inset-0 opacity-[0.18]"
            />
            <div
              aria-hidden="true"
              className="section-blob -right-32 top-0 size-80 bg-primary/[0.035]"
            />
            <div
              aria-hidden="true"
              className="section-blob -left-32 bottom-0 size-72 bg-secondary/[0.04]"
            />
            {variant === "gradient" || variant === "white" ? (
              <div
                aria-hidden="true"
                className="section-blob left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 bg-primary/[0.03]"
              />
            ) : null}
          </>
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
