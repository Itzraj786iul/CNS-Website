"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import type { NavGroup } from "@/lib/constants/navigation";
import { moreNavigationGroups } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

type NavMoreMenuProps = {
  isActive: (href: string) => boolean;
  groups?: NavGroup[];
};

function NavMoreMenu({
  isActive,
  groups = moreNavigationGroups,
}: NavMoreMenuProps) {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const moreActive = groups.some((group) =>
    group.items.some((item) => isActive(item.href))
  );

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  React.useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => {
        clearCloseTimer();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        id="nav-more-trigger"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={open ? "nav-more-panel" : undefined}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "relative inline-flex items-center gap-1.5 rounded-full px-3.5 py-2.5 text-sm font-medium transition-[color,background-color,box-shadow,transform] duration-300 active:scale-[0.98]",
          moreActive
            ? "text-primary"
            : "text-cns-navy/75 hover:bg-white/85 hover:text-cns-navy hover:shadow-soft"
        )}
      >
        More
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-300 ease-out",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
        {moreActive ? (
          <motion.span
            layoutId="nav-active-indicator"
            aria-hidden="true"
            className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        ) : null}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="nav-more-panel"
            role="menu"
            aria-labelledby="nav-more-trigger"
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-[calc(100%+0.75rem)] z-50 w-[min(calc(100vw-2rem),19.5rem)] -translate-x-1/2 overflow-hidden rounded-3xl border border-white/70 bg-white/82 p-3 shadow-soft-lg backdrop-blur-2xl backdrop-saturate-150"
            onMouseEnter={clearCloseTimer}
            onMouseLeave={scheduleClose}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/[0.04] via-transparent to-secondary/[0.05]"
            />
            <div className="relative space-y-4">
              {groups.map((group, groupIndex) => (
                <div key={group.title}>
                  {groupIndex > 0 ? (
                    <div
                      aria-hidden="true"
                      className="mb-4 border-t border-cns-border/70"
                    />
                  ) : null}
                  <p className="px-3 pb-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {group.title}
                  </p>
                  <ul className="space-y-1">
                    {group.items.map((item, index) => {
                      const Icon = item.icon;
                      const active = isActive(item.href);

                      return (
                        <motion.li
                          key={item.href}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: groupIndex * 0.04 + index * 0.03,
                            duration: 0.22,
                          }}
                        >
                          <Link
                            href={item.href}
                            role="menuitem"
                            onClick={() => setOpen(false)}
                            className={cn(
                              "group/item flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition-all duration-300 active:scale-[0.98]",
                              active
                                ? "bg-primary/8 text-primary shadow-soft"
                                : "text-cns-navy/85 hover:bg-white hover:text-cns-navy hover:shadow-soft"
                            )}
                          >
                            {Icon ? (
                              <span
                                className={cn(
                                  "flex size-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300",
                                  active
                                    ? "bg-primary/12 text-primary"
                                    : "bg-muted/80 text-cns-navy/70 group-hover/item:scale-105 group-hover/item:bg-primary/8 group-hover/item:text-primary"
                                )}
                              >
                                <Icon className="size-4" aria-hidden="true" />
                              </span>
                            ) : null}
                            <span className="leading-snug">{item.label}</span>
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export { NavMoreMenu };
