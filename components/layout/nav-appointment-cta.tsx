"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CalendarDays, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ctaNavigation } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

type NavAppointmentCtaProps = {
  className?: string;
  fullWidth?: boolean;
  size?: "default" | "large";
};

function NavAppointmentCta({
  className,
  fullWidth = false,
  size = "default",
}: NavAppointmentCtaProps) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    window.setTimeout(() => {
      router.push(ctaNavigation.href);
    }, 180);
  };

  return (
    <Button
      nativeButton={false}
      aria-busy={loading}
      render={
        <Link
          href={ctaNavigation.href}
          onClick={handleClick}
          className={cn(fullWidth && "w-full")}
        >
          {loading ? (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <CalendarDays className="size-4" aria-hidden="true" />
          )}
          {ctaNavigation.label}
        </Link>
      }
      className={cn(
        "group/cta relative overflow-hidden rounded-full bg-secondary text-secondary-foreground shadow-glow-green transition-[transform,box-shadow,background-color] duration-300 hover:scale-[1.02] hover:bg-secondary/90 hover:shadow-[0_10px_36px_-8px_rgb(125_189_36_/_0.45)] focus-visible:ring-secondary/40 active:scale-[0.98]",
        size === "default" && "hidden h-11 min-h-[44px] px-6 sm:inline-flex",
        size === "large" && "inline-flex h-12 w-full px-6",
        loading && "pointer-events-none opacity-90",
        className
      )}
    />
  );
}

export { NavAppointmentCta };
