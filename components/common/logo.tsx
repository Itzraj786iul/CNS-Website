import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "nav" | "footer" | "default";
  priority?: boolean;
};

const frameSizes = {
  sm: "h-9 w-[5.75rem]",
  md: "h-10 w-[6.75rem] sm:h-11 sm:w-[7.5rem]",
  lg: "h-14 w-[9.5rem] sm:h-16 sm:w-[11rem]",
} as const;

function LogoFrame({
  children,
  size,
  variant,
  className,
}: {
  children: ReactNode;
  size: NonNullable<LogoProps["size"]>;
  variant: NonNullable<LogoProps["variant"]>;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden",
        frameSizes[size],
        variant === "nav" &&
          cn(
            "rounded-lg border border-border/70 bg-white shadow-soft",
            "dark:border-white/12 dark:bg-linear-to-b dark:from-[#f8fbfd] dark:to-[#eef3f8] dark:shadow-[0_2px_10px_rgba(0,0,0,0.28)]"
          ),
        variant === "footer" &&
          "rounded-xl border border-white/12 bg-white p-1.5 shadow-soft",
        variant === "default" &&
          cn(
            "rounded-lg border border-border/60 bg-white shadow-soft",
            "dark:border-white/10 dark:bg-[#f4f7fb] dark:shadow-soft"
          ),
        className
      )}
    >
      {children}
    </span>
  );
}

function Logo({
  className,
  size = "md",
  variant = "nav",
  priority = false,
}: LogoProps) {
  const imageScale =
    variant === "footer" ? "scale-[1.38]" : size === "sm" ? "scale-[1.48]" : "scale-[1.42]";

  return (
    <LogoFrame size={size} variant={variant} className={className}>
      <Image
        src="/cns-logo.png"
        alt={`${siteConfig.name} logo`}
        fill
        priority={priority}
        sizes="(max-width: 640px) 120px, 180px"
        className={cn(
          "object-cover object-center transition-transform duration-300",
          imageScale
        )}
      />
    </LogoFrame>
  );
}

type LogoLinkProps = LogoProps & {
  linkClassName?: string;
};

function LogoLink({
  linkClassName,
  size = "md",
  variant = "nav",
  priority = true,
  ...logoProps
}: LogoLinkProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 rounded-lg transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.99]",
        linkClassName
      )}
      aria-label={`${siteConfig.name} homepage`}
    >
      <Logo size={size} variant={variant} priority={priority} {...logoProps} />
    </Link>
  );
}

export { Logo, LogoLink, LogoFrame };
