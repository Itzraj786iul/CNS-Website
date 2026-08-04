import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

/** Generated via npm run process-logo from the client PNG */
const LOGO_MARK_SRC = "/cns-logo-mark.png";
const LOGO_FULL_SRC = "/cns-logo-full.png";

const logoAssets = {
  nav: {
    src: LOGO_MARK_SRC,
    width: 590,
    height: 200,
    sizes: "(max-width: 640px) 128px, (max-width: 1024px) 144px, 160px",
  },
  footer: {
    src: LOGO_FULL_SRC,
    width: 590,
    height: 275,
    sizes: "(max-width: 640px) 152px, 176px",
  },
  default: {
    src: LOGO_FULL_SRC,
    width: 590,
    height: 275,
    sizes: "(max-width: 640px) 152px, 176px",
  },
} as const;

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "nav" | "footer" | "default";
  priority?: boolean;
};

const logoSizeClasses = {
  sm: "h-8 w-auto max-w-[8.5rem] sm:h-9 sm:max-w-[9.5rem]",
  md: "h-9 w-auto max-w-[9.5rem] sm:h-10 sm:max-w-[10.5rem] lg:h-11 lg:max-w-[11.5rem]",
  lg: "h-11 w-auto max-w-[11rem] sm:h-12 sm:max-w-[12.5rem]",
} as const;

function Logo({
  className,
  size = "md",
  variant = "nav",
  priority = false,
}: LogoProps) {
  const asset = logoAssets[variant];

  const image = (
    <Image
      src={asset.src}
      alt={`${siteConfig.name} logo`}
      width={asset.width}
      height={asset.height}
      priority={priority}
      unoptimized
      sizes={asset.sizes}
      className={cn(
        "block w-auto object-contain object-left",
        logoSizeClasses[size],
        className
      )}
    />
  );

  if (variant === "footer") {
    return (
      <span className="inline-flex shrink-0 items-center rounded-lg border border-white/10 bg-white/95 px-2.5 py-1.5 shadow-soft">
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
