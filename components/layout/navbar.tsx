"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Logo, LogoLink } from "@/components/common/logo";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ctaNavigation,
  mainNavigation,
  moreNavigation,
  primaryNavigation,
} from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

function NavLink({
  href,
  label,
  isActive,
  onClick,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative rounded-full px-3 py-2 text-sm font-medium transition-[color,background-color,box-shadow] duration-300",
        isActive
          ? "text-primary"
          : "text-cns-navy/75 hover:bg-white/80 hover:text-cns-navy hover:shadow-soft"
      )}
    >
      {label}
      {isActive ? (
        <motion.span
          layoutId="nav-active-indicator"
          aria-hidden="true"
          className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-primary"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      ) : null}
    </Link>
  );
}

function MoreMenu({
  isActive,
}: {
  isActive: (href: string) => boolean;
}) {
  const [open, setOpen] = React.useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const moreActive = moreNavigation.some((item) => isActive(item.href));

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        clearCloseTimer();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "relative inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-[color,background-color,box-shadow] duration-300",
          moreActive
            ? "text-primary"
            : "text-cns-navy/75 hover:bg-white/80 hover:text-cns-navy hover:shadow-soft"
        )}
      >
        More
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-300",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
        {moreActive ? (
          <motion.span
            layoutId="nav-active-indicator"
            aria-hidden="true"
            className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-primary"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        ) : null}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-[calc(100%+0.5rem)] z-50 w-52 -translate-x-1/2 rounded-2xl border border-cns-border/80 bg-white/95 p-2 shadow-soft-lg backdrop-blur-xl"
            onMouseEnter={clearCloseTimer}
            onMouseLeave={scheduleClose}
          >
            <ul className="space-y-0.5">
              {moreNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-primary/8 text-primary"
                        : "text-cns-navy/80 hover:bg-muted hover:text-cns-navy"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setIsScrolled(current > 12);

      if (current < 64) {
        setIsVisible(true);
      } else if (current > lastScrollY.current + 6) {
        setIsVisible(false);
      } else if (current < lastScrollY.current - 6) {
        setIsVisible(true);
      }

      lastScrollY.current = current;
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
      className={cn(
        "sticky top-0 z-50 transition-[transform,background-color,border-color,box-shadow] duration-300 ease-out",
        isVisible ? "translate-y-0" : "-translate-y-full",
        isScrolled
          ? "glass border-b border-cns-border/50 shadow-soft backdrop-saturate-150"
          : "border-b border-cns-border/20 bg-background/60 backdrop-blur-md"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
          <LogoLink size="md" priority linkClassName="mr-1" />

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-0.5 lg:flex"
          >
            {primaryNavigation.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={isActive(item.href)}
              />
            ))}
            <MoreMenu isActive={isActive} />
          </nav>

          <div className="flex items-center gap-2">
            <Button
              nativeButton={false}
              render={
                <Link href={ctaNavigation.href}>{ctaNavigation.label}</Link>
              }
              className="hidden h-11 min-h-[44px] rounded-full bg-secondary px-5 text-secondary-foreground shadow-glow-green hover:bg-secondary/90 sm:inline-flex"
            />

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-cns-border lg:hidden"
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
                    <Logo size="sm" />
                  </SheetTitle>
                </SheetHeader>
                <nav
                  aria-label="Mobile navigation"
                  className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-4"
                >
                  {mainNavigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                        isActive(item.href)
                          ? "bg-primary/8 text-primary"
                          : "text-cns-navy hover:bg-muted"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="border-t border-cns-border p-4">
                  <Button
                    nativeButton={false}
                    render={
                      <Link href={ctaNavigation.href}>
                        {ctaNavigation.label}
                      </Link>
                    }
                    className="h-12 w-full rounded-full bg-secondary text-secondary-foreground shadow-glow-green hover:bg-secondary/90"
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}

export { Navbar };
