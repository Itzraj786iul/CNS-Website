import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "footer";
  priority?: boolean;
};

const sizeClasses = {
  sm: "h-10 max-w-[120px]",
  md: "h-12 max-w-[160px] sm:h-14 sm:max-w-[200px]",
  lg: "h-16 max-w-[220px] sm:h-20 sm:max-w-[260px]",
} as const;

function Logo({
  className,
  size = "md",
  variant = "default",
  priority = false,
}: LogoProps) {
  return (
    <Image
      src="/cns-logo.png"
      alt={`${siteConfig.name} logo`}
      width={512}
      height={512}
      priority={priority}
      className={cn(
        "w-auto object-contain object-left",
        sizeClasses[size],
        variant === "footer" && "rounded-xl bg-white p-2 shadow-soft",
        className
      )}
    />
  );
}

type LogoLinkProps = LogoProps & {
  linkClassName?: string;
};

function LogoLink({
  linkClassName,
  size = "md",
  priority = true,
  ...logoProps
}: LogoLinkProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 rounded-xl transition-transform duration-300 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
        linkClassName
      )}
      aria-label={`${siteConfig.name} homepage`}
    >
      <Logo size={size} priority={priority} {...logoProps} />
    </Link>
  );
}

export { Logo, LogoLink };
