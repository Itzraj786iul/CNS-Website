import * as React from "react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/common/container";

type SectionProps = React.ComponentProps<"section"> & {
  variant?: "default" | "muted" | "white" | "navy" | "gradient";
  spacing?: "sm" | "default" | "lg" | "xl";
  containerSize?: "default" | "narrow" | "wide";
  contained?: boolean;
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

function Section({
  className,
  variant = "default",
  spacing = "default",
  containerSize = "default",
  contained = true,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      data-slot="section"
      data-variant={variant}
      className={cn(variantClasses[variant], spacingClasses[spacing], className)}
      {...props}
    >
      {contained ? (
        <Container size={containerSize}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}

export { Section };
