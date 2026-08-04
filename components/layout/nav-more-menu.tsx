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
          "relative inline-flex items-center gap-1 rounded-full px-2.5 py-2 text-[13px] font-medium transition-[color,background-color,box-shadow,transform] duration-300 active:scale-[0.98] xl:px-3 xl:py-2.5 xl:text-sm",
          moreActive
            ? "text-primary"
            : "text-cns-navy/88 hover:bg-card/85 hover:text-cns-navy hover:shadow-soft dark:hover:bg-card/70"
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
            className="absolute left-1/2 top-[calc(100%+0.375rem)] z-50 w-48 -translate-x-1/2 overflow-hidden rounded-xl border border-border bg-popover p-1.5 shadow-soft-lg backdrop-blur-xl"
            onMouseEnter={clearCloseTimer}
            onMouseLeave={scheduleClose}
          >
            <div className="relative space-y-2">
              {groups.map((group, groupIndex) => (
                <div key={group.title}>
                  {groupIndex > 0 ? (
                    <div
                      aria-hidden="true"
                      className="mb-2 border-t border-border"
                    />
                  ) : null}
                  <p className="px-2 pb-1 pt-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {group.title}
                  </p>
                  <ul className="space-y-0.5">
                    {group.items.map((item, index) => {
                      const Icon = item.icon;
                      const active = isActive(item.href);

                      return (
                        <motion.li
                          key={item.href}
                          initial={{ opacity: 0, x: -4 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: groupIndex * 0.03 + index * 0.02,
                            duration: 0.18,
                          }}
                        >
                          <Link
                            href={item.href}
                            role="menuitem"
                            onClick={() => setOpen(false)}
                            className={cn(
                              "group/item flex h-9 items-center gap-2.5 rounded-lg px-2.5 text-sm transition-colors duration-200 active:scale-[0.98]",
                              active
                                ? "bg-primary/10 font-medium text-primary"
                                : "text-foreground hover:bg-muted"
                            )}
                          >
                            {Icon ? (
                              <Icon
                                className={cn(
                                  "size-3.5 shrink-0",
                                  active
                                    ? "text-primary"
                                    : "text-muted-foreground group-hover/item:text-primary"
                                )}
                                aria-hidden="true"
                              />
                            ) : null}
                            <span className="truncate">{item.label}</span>
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
