import * as React from "react";
import Link from "next/link";

import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  title: string;
  description?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  variant?: "default" | "navy" | "gradient";
  className?: string;
};

const variantClasses = {
  default: "bg-white border border-cns-border shadow-soft",
  navy: "bg-gradient-navy text-white",
  gradient: "bg-gradient-brand border border-cns-border/60",
} as const;

function CTASection({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = "navy",
  className,
}: CTASectionProps) {
  const isNavy = variant === "navy";

  return (
    <section data-slot="cta-section" className={cn("py-16 md:py-20", className)}>
      <Container>
        <div
          className={cn(
            "relative overflow-hidden rounded-3xl px-6 py-12 sm:px-10 sm:py-14 lg:px-14",
            variantClasses[variant]
          )}
        >
          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2
                className={cn(
                  "font-heading text-3xl font-semibold tracking-tight sm:text-4xl",
                  isNavy ? "text-white" : "text-cns-navy"
                )}
              >
                {title}
              </h2>
              {description ? (
                <p
                  className={cn(
                    "text-base leading-relaxed sm:text-lg",
                    isNavy ? "text-white/75" : "text-muted-foreground"
                  )}
                >
                  {description}
                </p>
              ) : null}
            </div>

            {(primaryAction || secondaryAction) && (
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                {primaryAction ? (
                  <Button
                    nativeButton={false}
                    render={
                      <Link href={primaryAction.href}>{primaryAction.label}</Link>
                    }
                    size="lg"
                    className={cn(
                      "h-11 rounded-full px-6",
                      isNavy &&
                        "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    )}
                  />
                ) : null}
                {secondaryAction ? (
                  <Button
                    nativeButton={false}
                    render={
                      <Link href={secondaryAction.href}>
                        {secondaryAction.label}
                      </Link>
                    }
                    variant={isNavy ? "outline" : "outline"}
                    size="lg"
                    className={cn(
                      "h-11 rounded-full px-6",
                      isNavy &&
                        "border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                    )}
                  />
                ) : null}
              </div>
            )}
          </div>

          {isNavy ? (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-primary/20 blur-3xl"
            />
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export { CTASection };
