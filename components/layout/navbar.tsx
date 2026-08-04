"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ctaNavigation, mainNavigation } from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("size-9", className)}
    >
      <rect width="40" height="40" rx="12" className="fill-primary" />
      <circle cx="20" cy="16" r="4" className="fill-white" />
      <path
        d="M12 28c2.5-4 5-6 8-6s5.5 2 8 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="14" cy="22" r="1.5" className="fill-secondary" />
      <circle cx="26" cy="22" r="1.5" className="fill-accent" />
    </svg>
  );
}

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
      className={cn(
        "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
        isActive
          ? "text-primary"
          : "text-cns-navy/75 hover:text-cns-navy"
      )}
    >
      {label}
      {isActive ? (
        <span className="absolute inset-x-3.5 -bottom-px h-0.5 rounded-full bg-primary" />
      ) : null}
    </Link>
  );
}

function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      data-slot="navbar"
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled ? "glass shadow-soft" : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <LogoMark />
            <div className="hidden sm:block">
              <p className="font-heading text-base font-semibold leading-none text-cns-navy">
                {siteConfig.shortName}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {siteConfig.name}
              </p>
            </div>
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-0.5 xl:flex"
          >
            {mainNavigation.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={isActive(item.href)}
              />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              nativeButton={false}
              render={
                <Link href={ctaNavigation.href}>{ctaNavigation.label}</Link>
              }
              className="hidden h-10 rounded-full bg-secondary px-5 text-secondary-foreground shadow-glow-green hover:bg-secondary/90 sm:inline-flex"
            />

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-cns-border xl:hidden"
                    aria-label="Open menu"
                  />
                }
              >
                <Menu />
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm border-cns-border p-0">
                <SheetHeader className="border-b border-cns-border px-6 py-5">
                  <SheetTitle className="flex items-center gap-3">
                    <LogoMark className="size-8" />
                    <span>{siteConfig.shortName}</span>
                  </SheetTitle>
                </SheetHeader>
                <nav
                  aria-label="Mobile navigation"
                  className="flex flex-col gap-1 px-4 py-4"
                >
                  {mainNavigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
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
                <div className="mt-auto border-t border-cns-border p-4">
                  <Button
                    nativeButton={false}
                    render={
                      <Link href={ctaNavigation.href}>
                        {ctaNavigation.label}
                      </Link>
                    }
                    className="h-11 w-full rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
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
