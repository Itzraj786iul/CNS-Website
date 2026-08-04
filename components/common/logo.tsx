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

const logoSizeClasses = {
  sm: "h-9 w-auto max-w-[7.5rem] sm:h-10 sm:max-w-[8.5rem]",
  md: "h-10 w-auto max-w-[8.5rem] sm:h-11 sm:max-w-[9.5rem]",
  lg: "h-12 w-auto max-w-[10rem] sm:h-14 sm:max-w-[12rem]",
} as const;

function Logo({
  className,
  size = "md",
  variant = "nav",
  priority = false,
}: LogoProps) {
  const isFooter = variant === "footer";

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center overflow-hidden rounded-lg bg-white",
        isFooter ? "border border-white/10 px-2.5 py-1.5 shadow-soft" : "px-2 py-1 shadow-soft",
        className
      )}
    >
      <Image
        src="/cns-logo.png"
        alt={`${siteConfig.name} logo`}
        width={512}
        height={512}
        priority={priority}
        className={cn("w-auto object-contain object-left", logoSizeClasses[size])}
      />
    </span>
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
        "inline-flex shrink-0 transition-opacity duration-300 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        linkClassName
      )}
      aria-label={`${siteConfig.name} homepage`}
    >
      <Logo size={size} variant={variant} priority={priority} {...logoProps} />
    </Link>
  );
}

function LogoFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex shrink-0 items-center", className)}>{children}</span>
  );
}

export { Logo, LogoLink, LogoFrame };
