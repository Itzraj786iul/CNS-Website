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

/** Visible frame — crops excess whitespace baked into the square PNG */
const logoFrameClasses = {
  sm: "h-9 w-[10.25rem] sm:h-10 sm:w-[11rem]",
  md: "h-10 w-[11rem] sm:h-11 sm:w-[12rem] lg:h-12 lg:w-[13rem]",
  lg: "h-12 w-[13rem] sm:h-14 sm:w-[15rem]",
} as const;

/** Zoom into artwork so tagline stays legible in the header */
const logoZoomClasses = {
  sm: "scale-[1.72]",
  md: "scale-[1.78] lg:scale-[1.82]",
  lg: "scale-[1.85]",
} as const;

function Logo({
  className,
  size = "md",
  variant = "nav",
  priority = false,
}: LogoProps) {
  const isFooter = variant === "footer";

  const image = (
    <span
      className={cn(
        "relative block shrink-0 overflow-hidden",
        logoFrameClasses[size],
        className
      )}
    >
      <Image
        src="/cns-logo.png"
        alt={`${siteConfig.name} logo`}
        fill
        priority={priority}
        quality={95}
        sizes="(max-width: 640px) 160px, (max-width: 1024px) 180px, 208px"
        className={cn("object-contain object-center", logoZoomClasses[size])}
      />
    </span>
  );

  if (isFooter) {
    return (
      <span className="inline-flex shrink-0 items-center rounded-lg border border-white/10 bg-white px-2 py-1.5 shadow-soft">
        {image}
      </span>
    );
  }

  return image;
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
