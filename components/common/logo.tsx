import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

/** Trimmed client logo with transparent background — generated via scripts/process-cns-logo.mjs */
const LOGO_SRC = "/cns-logo-nav.png";
const LOGO_WIDTH = 590;
const LOGO_HEIGHT = 275;

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "nav" | "footer" | "default";
  priority?: boolean;
};

const logoSizeClasses = {
  sm: "h-8 w-auto max-w-[9.5rem] sm:h-9 sm:max-w-[10.5rem]",
  md: "h-9 w-auto max-w-[10.5rem] sm:h-10 sm:max-w-[11.5rem] lg:h-11 lg:max-w-[12.5rem]",
  lg: "h-11 w-auto max-w-[12rem] sm:h-12 sm:max-w-[14rem]",
} as const;

function Logo({
  className,
  size = "md",
  variant = "nav",
  priority = false,
}: LogoProps) {
  const image = (
    <Image
      src={LOGO_SRC}
      alt={`${siteConfig.name} logo`}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      quality={95}
      sizes="(max-width: 640px) 152px, (max-width: 1024px) 176px, 200px"
      className={cn("w-auto object-contain object-left", logoSizeClasses[size], className)}
    />
  );

  if (variant === "footer") {
    return (
      <span className="inline-flex shrink-0 items-center rounded-lg border border-white/10 bg-white px-2.5 py-1.5 shadow-soft">
        {image}
      </span>
    );
  }

  return <span className="inline-flex shrink-0 items-center">{image}</span>;
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
        "inline-flex shrink-0 items-center transition-opacity duration-300 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
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
