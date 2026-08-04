"use client";

import * as React from "react";
import Link from "next/link";
import {
  CalendarDays,
  ChevronUp,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import {
  WHATSAPP_URL,
  getAppointmentTelHref,
  getEmergencyTelHref,
} from "@/lib/contact-links";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

type DockAction = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
  variant?: "default" | "emergency" | "whatsapp" | "appointment";
};

const dockActions: DockAction[] = [
  {
    label: "Call",
    href: getAppointmentTelHref(),
    icon: Phone,
    variant: "default",
  },
  {
    label: "WhatsApp",
    href: WHATSAPP_URL,
    icon: MessageCircle,
    external: true,
    variant: "whatsapp",
  },
  {
    label: "Appointment",
    href: "/appointment",
    icon: CalendarDays,
    variant: "appointment",
  },
];

function FloatingActions() {
  const [expanded, setExpanded] = React.useState(false);
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const dockRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (dockRef.current && !dockRef.current.contains(event.target as Node)) {
        setExpanded(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div
      ref={dockRef}
      className={cn(
        "fixed z-40 flex flex-col items-end gap-3",
        "bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 sm:right-6"
      )}
    >
      <AnimatePresence>
        {expanded ? (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="w-[min(100vw-2rem,15rem)] overflow-hidden rounded-2xl border border-border bg-popover/95 p-2 shadow-soft-lg backdrop-blur-xl"
          >
            <ul className="space-y-1">
              {dockActions.map((action, index) => {
                const Icon = action.icon;
                const content = (
                  <>
                    <Icon className="size-4 shrink-0" aria-hidden="true" />
                    <span>{action.label}</span>
                  </>
                );

                return (
                  <motion.li
                    key={action.label}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    {action.external || action.href.startsWith("tel:") ? (
                      <a
                        href={action.href}
                        target={action.external ? "_blank" : undefined}
                        rel={action.external ? "noopener noreferrer" : undefined}
                        onClick={() => setExpanded(false)}
                        className={cn(
                          "flex h-11 items-center gap-3 rounded-xl px-3.5 text-sm font-medium transition-all duration-300",
                          action.variant === "whatsapp" &&
                            "bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/15",
                          action.variant === "appointment" &&
                            "bg-secondary/10 text-secondary hover:bg-secondary/15",
                          action.variant === "default" &&
                            "text-foreground hover:bg-muted"
                        )}
                      >
                        {content}
                      </a>
                    ) : (
                      <Link
                        href={action.href}
                        onClick={() => setExpanded(false)}
                        className={cn(
                          "flex h-11 items-center gap-3 rounded-xl px-3.5 text-sm font-medium transition-all duration-300",
                          action.variant === "appointment" &&
                            "bg-secondary/10 text-secondary hover:bg-secondary/15",
                          action.variant === "default" &&
                            "text-foreground hover:bg-muted"
                        )}
                      >
                        {content}
                      </Link>
                    )}
                  </motion.li>
                );
              })}
              {showScrollTop ? (
                <motion.li
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: dockActions.length * 0.04 }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      setExpanded(false);
                    }}
                    className="flex h-11 w-full items-center gap-3 rounded-xl px-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-muted"
                  >
                    <ChevronUp className="size-4 shrink-0" aria-hidden="true" />
                    Back to Top
                  </button>
                </motion.li>
              ) : null}
            </ul>
            <div className="mt-1 border-t border-border px-3.5 py-2">
              <a
                href={getEmergencyTelHref()}
                className="flex items-center gap-2 text-xs font-semibold text-destructive transition-colors hover:text-destructive/80"
              >
                Emergency: {siteConfig.contact.emergency}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-expanded={expanded}
        aria-label={expanded ? "Close help menu" : "Open help menu"}
        onClick={() => setExpanded((value) => !value)}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "group relative flex h-12 items-center gap-2 overflow-hidden rounded-full border border-border bg-card/95 px-4 text-sm font-semibold text-foreground shadow-soft-lg backdrop-blur-xl transition-all duration-300 hover:border-primary/20 hover:shadow-glow-blue",
          expanded && "border-primary/25 bg-card"
        )}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        <Sparkles
          className={cn(
            "relative size-4 text-primary transition-transform duration-300",
            expanded && "rotate-90"
          )}
          aria-hidden="true"
        />
        <span className="relative">{expanded ? "Close" : "Need Help?"}</span>
      </motion.button>
    </div>
  );
}

export { FloatingActions };
