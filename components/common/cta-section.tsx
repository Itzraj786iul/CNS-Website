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
    icon?: React.ReactNode;
  };
  secondaryAction?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  };
  /** Surface / color treatment */
  variant?: "default" | "navy" | "gradient" | "brand";
  /** Layout density — compact | standard | hero | fullWidth */
  size?: "compact" | "standard" | "hero" | "fullWidth";
  align?: "left" | "center";
  className?: string;
};

const surfaceClasses = {
  default: "surface-elevated",
  navy: "border border-white/10 bg-gradient-navy text-white shadow-soft-lg",
  gradient: "border border-cns-border/60 bg-gradient-brand shadow-soft",
  brand:
    "border border-white/10 bg-linear-to-br from-primary via-primary to-secondary text-white shadow-soft-lg",
} as const;

const sizeClasses = {
  compact: "px-4 py-5 sm:px-5 sm:py-6",
  standard: "px-4 py-6 sm:px-6 sm:py-7 lg:px-10 lg:py-8",
  hero: "px-5 py-8 sm:px-8 sm:py-9 lg:px-12 lg:py-10",
  fullWidth: "rounded-none px-4 py-6 sm:px-6 sm:py-7",
} as const;

function CTASection({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = "navy",
  size = "standard",
  align = "left",
  className,
}: CTASectionProps) {
  const isLightText = variant === "navy" || variant === "brand";
  const isCentered = align === "center" || size === "hero";

  const inner = (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl",
        sizeClasses[size],
        surfaceClasses[variant],
        size === "fullWidth" && "rounded-none"
      )}
    >
      <div
        className={cn(
          "relative z-10 flex flex-col gap-5",
          isCentered
            ? "mx-auto max-w-2xl items-center text-center"
            : "lg:flex-row lg:items-center lg:justify-between"
        )}
      >
        <div className={cn("space-y-2", isCentered ? "max-w-2xl" : "max-w-2xl")}>
          <h2
            className={cn(
              "font-heading font-semibold tracking-tight text-balance",
              size === "hero"
                ? "text-2xl sm:text-[1.75rem] lg:text-[2.125rem] lg:leading-[1.12]"
                : size === "compact"
                  ? "text-lg sm:text-xl"
                  : "text-xl sm:text-[1.375rem]",
              isLightText ? "text-white" : "text-cns-navy"
            )}
          >
            {title}
          </h2>
          {description ? (
            <p
              className={cn(
                "text-sm leading-[1.75] sm:text-base",
                isLightText ? "text-white/88" : "text-muted-foreground"
              )}
            >
              {description}
            </p>
          ) : null}
        </div>

        {(primaryAction || secondaryAction) && (
          <div
            className={cn(
              "flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center",
              isCentered && "sm:justify-center"
            )}
          >
            {primaryAction ? (
              <Button
                nativeButton={false}
                render={
                  <CtaHref href={primaryAction.href}>
                    {primaryAction.icon}
                    {primaryAction.label}
                  </CtaHref>
                }
                size={size === "compact" ? "default" : "lg"}
                className={cn(
                  "w-full rounded-full px-6 sm:w-auto",
                  variant === "brand" &&
                    "bg-white text-primary shadow-soft hover:bg-white/90",
                  variant === "navy" &&
                    "bg-secondary text-secondary-foreground shadow-glow-green hover:bg-secondary/90"
                )}
              />
            ) : null}
            {secondaryAction ? (
              <Button
                nativeButton={false}
                render={
                  <CtaHref href={secondaryAction.href}>
                    {secondaryAction.icon}
                    {secondaryAction.label}
                  </CtaHref>
                }
                variant="outline"
                size={size === "compact" ? "default" : "lg"}
                className={cn(
                  "w-full rounded-full px-6 sm:w-auto",
                  variant === "brand" &&
                    "border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white",
                  variant === "navy" &&
                    "border-white/35 bg-white/5 text-white hover:border-white/50 hover:bg-white/12 hover:text-white"
                )}
              />
            ) : null}
          </div>
        )}
      </div>

      {variant === "navy" ? (
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
      {variant === "brand" ? (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-16 size-80 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="hero-light-beam pointer-events-none absolute inset-0 opacity-40"
          />
        </>
      ) : null}
    </div>
  );

  if (size === "fullWidth") {
    return (
      <section data-slot="cta-section" className={cn("py-5 md:py-7 lg:py-9", className)}>
        {inner}
      </section>
    );
  }

  return (
    <section data-slot="cta-section" className={cn("py-5 md:py-7 lg:py-9", className)}>
      <Container>{inner}</Container>
    </section>
  );
}

export { CTASection };
