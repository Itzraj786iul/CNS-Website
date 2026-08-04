"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

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
import { ctaNavigation, mainNavigation } from "@/lib/constants/navigation";
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
        "relative rounded-full px-2.5 py-2 text-xs font-medium transition-all duration-300 xl:px-3 xl:text-sm 2xl:px-3.5",
        isActive
          ? "bg-primary/8 text-primary shadow-soft ring-1 ring-primary/10"
          : "text-cns-navy/75 hover:bg-white/80 hover:text-cns-navy hover:shadow-soft"
      )}
    >
      {label}
      {isActive ? (
        <span
          aria-hidden="true"
          className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-primary"
        />
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

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      data-slot="navbar"
      className={cn(
        "sticky top-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "glass border-b border-cns-border/50 shadow-soft backdrop-saturate-150"
          : "border-b border-cns-border/20 bg-background/60 backdrop-blur-md"
      )}
    >
      <Container>
        <div className="flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
          <LogoLink size="md" priority linkClassName="mr-1" />

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
              className="hidden h-11 min-h-[44px] rounded-full bg-secondary px-6 text-secondary-foreground shadow-glow-green hover:bg-secondary/90 sm:inline-flex"
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
                  <SheetTitle className="flex items-center">
                    <Logo size="sm" />
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
                <div className="mt-auto border-t border-cns-border p-4">
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
