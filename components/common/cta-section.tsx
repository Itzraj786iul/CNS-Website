import * as React from "react";
import Link from "next/link";

import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function isExternalHref(href: string) {
  return href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
}

function CtaHref({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

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
  default: "surface-elevated",
  navy: "border border-white/10 bg-gradient-navy text-white shadow-soft-lg",
  gradient: "border border-cns-border/60 bg-gradient-brand shadow-soft",
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
    <section data-slot="cta-section" className={cn("py-5 md:py-7 lg:py-9", className)}>
      <Container>
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl px-4 py-6 sm:px-6 sm:py-7 lg:px-10 lg:py-8",
            variantClasses[variant]
          )}
        >
          <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-2">
              <h2
                className={cn(
                  "font-heading text-xl font-semibold tracking-tight text-balance sm:text-[1.375rem]",
                  isNavy ? "text-white" : "text-cns-navy"
                )}
              >
                {title}
              </h2>
              {description ? (
                <p
                  className={cn(
                    "text-sm leading-[1.75] sm:text-base",
                    isNavy ? "text-white/88" : "text-muted-foreground"
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
                      <CtaHref href={primaryAction.href}>
                        {primaryAction.label}
                      </CtaHref>
                    }
                    size="lg"
                    className={cn(
                      "h-11 rounded-full px-6",
                      isNavy &&
                        "bg-secondary text-secondary-foreground shadow-glow-green hover:bg-secondary/90"
                    )}
                  />
                ) : null}
                {secondaryAction ? (
                  <Button
                    nativeButton={false}
                    render={
                      <CtaHref href={secondaryAction.href}>
                        {secondaryAction.label}
                      </CtaHref>
                    }
                    variant="outline"
                    size="lg"
                    className={cn(
                      "h-11 rounded-full px-6",
                      isNavy &&
                        "border-white/35 bg-white/5 text-white hover:border-white/50 hover:bg-white/12 hover:text-white"
                    )}
                  />
                ) : null}
              </div>
            )}
          </div>

          {isNavy ? (
            <>
              <div
                aria-hidden="true"
                className="neural-pattern pointer-events-none absolute inset-0 opacity-[0.15]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-primary/20 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -left-10 size-56 rounded-full bg-secondary/15 blur-3xl"
              />
            </>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export { CTASection };
