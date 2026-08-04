"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import { Logo, LogoLink } from "@/components/common/logo";
import { Container } from "@/components/common/container";
import { NavAppointmentCta } from "@/components/layout/nav-appointment-cta";
import { NavMobileMenu } from "@/components/layout/nav-mobile-menu";
import { NavMoreMenu } from "@/components/layout/nav-more-menu";
import { ThemeSwitcher } from "@/components/layout/theme-switcher";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { primaryNavigation } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

function NavLink({
  href,
  label,
  isActive,
  compact,
}: {
  href: string;
  label: string;
  isActive: boolean;
  compact: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative min-w-0 rounded-full font-medium transition-[color,background-color,box-shadow,transform] duration-300 active:scale-[0.98]",
        compact
          ? "px-2 py-1.5 text-xs"
          : "px-2 py-1.5 text-xs lg:px-2.5 lg:py-2 lg:text-[13px] xl:px-3.5 xl:py-2.5 xl:text-sm",
        isActive
          ? "text-primary"
          : "text-cns-navy/88 hover:bg-card/85 hover:text-cns-navy hover:shadow-soft dark:hover:bg-card/70"
      )}
    >
      {label}
      {isActive ? (
        <motion.span
          layoutId="nav-active-indicator"
          aria-hidden="true"
          className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      ) : null}
    </Link>
  );
}

function Navbar() {
  const pathname = usePathname();
  const [isCompact, setIsCompact] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      data-slot="navbar"
      data-compact={isCompact}
      className={cn(
        "sticky top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-out",
        isCompact
          ? "glass border-b border-cns-border/60 shadow-soft-lg backdrop-blur-2xl backdrop-saturate-150"
          : "border-b border-cns-border/20 bg-background/70 backdrop-blur-md"
      )}
    >
      <Container>
        <div
          className={cn(
            "flex items-center justify-between gap-5 transition-[height] duration-500 ease-out lg:gap-8",
            isCompact ? "h-12 lg:h-14" : "h-14 lg:h-16"
          )}
        >
          <LogoLink
            size={isCompact ? "sm" : "md"}
            priority
            linkClassName={cn(
              "shrink-0 transition-transform duration-500",
              isCompact ? "scale-[0.96]" : "scale-100"
            )}
          />

          <nav
            aria-label="Main navigation"
            className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 overflow-hidden lg:flex xl:gap-1.5"
          >
            {primaryNavigation.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={isActive(item.href)}
                compact={isCompact}
              />
            ))}
            <NavMoreMenu isActive={isActive} />
          </nav>

          <div className="flex shrink-0 items-center gap-2 lg:gap-2.5 xl:gap-3">
            <ThemeSwitcher className="hidden lg:inline-flex" />
            <NavAppointmentCta />

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-border lg:hidden"
                    aria-label="Open menu"
                  />
                }
              >
                <Menu />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="flex w-full max-w-sm flex-col border-cns-border p-0"
              >
                <SheetHeader className="border-b border-cns-border px-6 py-5">
                  <SheetTitle className="flex items-center">
                    <Logo size="sm" variant="nav" />
                  </SheetTitle>
                </SheetHeader>
                <NavMobileMenu
                  isActive={isActive}
                  onNavigate={() => setMobileOpen(false)}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}

export { Navbar };
