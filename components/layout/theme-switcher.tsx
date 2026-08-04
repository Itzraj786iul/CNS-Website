"use client";

import * as React from "react";
import { Check, ChevronDown, Monitor, Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

type ThemeOption = {
  value: "light" | "dark" | "system";
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

const themeOptions: ThemeOption[] = [
  {
    value: "light",
    label: "Light",
    description: "Bright clinical interface",
    icon: Sun,
  },
  {
    value: "dark",
    label: "Dim",
    description: "Premium low-light mode",
    icon: Moon,
  },
  {
    value: "system",
    label: "System",
    description: "Match device preference",
    icon: Monitor,
  },
];

function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

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

  const activeOption =
    themeOptions.find((option) => option.value === theme) ?? themeOptions[0];

  const ActiveIcon =
    resolvedTheme === "dark" && theme !== "light" ? Moon : Sun;

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Theme"
        className={cn(
          "inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft",
          className
        )}
      >
        <Sun className="size-4" aria-hidden="true" />
      </button>
    );
  }

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        type="button"
        id="theme-switcher-trigger"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={open ? "theme-switcher-panel" : undefined}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full border border-border bg-card px-2.5 text-sm font-medium text-foreground shadow-soft transition-all duration-300 hover:border-primary/25 hover:shadow-soft-lg active:scale-[0.98] xl:px-3",
          open && "border-primary/25 shadow-soft-lg"
        )}
      >
        <ActiveIcon className="size-4 text-primary" aria-hidden="true" />
        <span className="hidden xl:inline">{activeOption.label}</span>
        <ChevronDown
          className={cn(
            "size-3.5 text-muted-foreground transition-transform duration-300",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="theme-switcher-panel"
            role="listbox"
            aria-labelledby="theme-switcher-trigger"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-56 overflow-hidden rounded-2xl border border-border bg-popover p-2 shadow-soft-lg backdrop-blur-xl"
          >
            <p className="px-3 pb-2 pt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Appearance
            </p>
            <ul className="space-y-1">
              {themeOptions.map((option) => {
                const Icon = option.icon;
                const selected = theme === option.value;

                return (
                  <li key={option.value}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={selected}
                      onClick={() => {
                        setTheme(option.value);
                        setOpen(false);
                      }}
                      className={cn(
                        "flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-all duration-300",
                        selected
                          ? "bg-primary/10 text-foreground"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg",
                          selected
                            ? "bg-primary/15 text-primary"
                            : "bg-muted text-muted-foreground"
                        )}
                      >
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-2 font-medium">
                          {option.label}
                          {selected ? (
                            <Check className="size-3.5 text-primary" aria-hidden="true" />
                          ) : null}
                        </span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                          {option.description}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function ThemeSwitcherMobile({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return null;
  }

  return (
    <div className={cn("space-y-3", className)}>
      <p className="px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        Appearance
      </p>
      <div className="grid grid-cols-3 gap-2 px-4">
        {themeOptions.map((option) => {
          const Icon = option.icon;
          const selected = theme === option.value;

          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={selected}
              onClick={() => setTheme(option.value)}
              className={cn(
                "flex flex-col items-center gap-2 rounded-2xl border px-2 py-3 text-center transition-all duration-300 active:scale-[0.98]",
                selected
                  ? "border-primary/30 bg-primary/10 text-primary"
                  : "border-border bg-card text-foreground hover:border-primary/20 hover:bg-muted"
              )}
            >
              <Icon className="size-4" aria-hidden="true" />
              <span className="text-xs font-medium">{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { ThemeSwitcher, ThemeSwitcherMobile };
