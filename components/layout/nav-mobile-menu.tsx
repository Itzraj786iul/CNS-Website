"use client";

import * as React from "react";
import Link from "next/link";
import { MessageCircle, Siren } from "lucide-react";
import { motion } from "framer-motion";

import { NavAppointmentCta } from "@/components/layout/nav-appointment-cta";
import { Separator } from "@/components/ui/separator";
import {
  moreNavigationGroups,
  primaryNavigation,
} from "@/lib/constants/navigation";
import {
  WHATSAPP_URL,
  getEmergencyTelHref,
} from "@/lib/contact-links";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

type NavMobileMenuProps = {
  isActive: (href: string) => boolean;
  onNavigate?: () => void;
};

function NavMobileMenu({ isActive, onNavigate }: NavMobileMenuProps) {
  return (
    <div className="flex flex-1 flex-col">
      <nav
        aria-label="Mobile navigation"
        className="flex flex-1 flex-col overflow-y-auto px-4 py-4"
      >
        <ul className="space-y-1">
          {primaryNavigation.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.03, duration: 0.22 }}
            >
              <Link
                href={item.href}
                onClick={onNavigate}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "block rounded-2xl px-4 py-3.5 text-base font-medium transition-all duration-300 active:scale-[0.99]",
                  isActive(item.href)
                    ? "bg-primary/8 text-primary"
                    : "text-cns-navy hover:bg-muted"
                )}
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        <Separator className="my-5" />

        <div className="space-y-3">
          <p className="px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            More
          </p>
          <ul className="space-y-1">
            {moreNavigationGroups.flatMap((group, groupIndex) =>
              group.items.map((item, itemIndex) => {
                const Icon = item.icon;
                const delay =
                  primaryNavigation.length * 0.03 +
                  0.06 +
                  (groupIndex * group.items.length + itemIndex) * 0.025;

                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay, duration: 0.22 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn(
                        "flex items-center gap-3 rounded-2xl px-4 py-3 text-[15px] font-medium transition-all duration-300 active:scale-[0.99]",
                        isActive(item.href)
                          ? "bg-primary/8 text-primary"
                          : "text-cns-navy/90 hover:bg-muted"
                      )}
                    >
                      {Icon ? (
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-muted/80 text-cns-navy/70">
                          <Icon className="size-4" aria-hidden="true" />
                        </span>
                      ) : null}
                      {item.label}
                    </Link>
                  </motion.li>
                );
              })
            )}
          </ul>
        </div>
      </nav>

      <div className="space-y-3 border-t border-cns-border bg-background/95 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <NavAppointmentCta fullWidth size="large" />

        <a
          href={getEmergencyTelHref()}
          onClick={onNavigate}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-destructive/25 bg-destructive/5 text-sm font-semibold text-destructive transition-all duration-300 hover:bg-destructive/10 active:scale-[0.98]"
        >
          <Siren className="size-4" aria-hidden="true" />
          Emergency Call
        </a>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onNavigate}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-[#25D366]/25 bg-[#25D366]/8 text-sm font-semibold text-[#128C7E] transition-all duration-300 hover:bg-[#25D366]/12 active:scale-[0.98]"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          WhatsApp
        </a>

        <p className="text-center text-xs text-muted-foreground">
          Emergency line:{" "}
          <a
            href={getEmergencyTelHref()}
            className="font-medium text-cns-navy hover:text-primary"
          >
            {siteConfig.contact.emergency}
          </a>
        </p>
      </div>
    </div>
  );
}

export { NavMobileMenu };
