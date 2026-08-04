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
          "inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-border bg-card px-2.5 text-[13px] font-medium text-foreground shadow-soft transition-all duration-300 hover:border-primary/25 hover:shadow-soft-lg active:scale-[0.98] xl:px-3",
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
            className="absolute right-0 top-[calc(100%+0.375rem)] z-50 w-44 overflow-hidden rounded-xl border border-border bg-popover p-1.5 shadow-soft-lg backdrop-blur-xl"
          >
            <p className="px-2 pb-1 pt-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Appearance
            </p>
            <ul className="space-y-0.5">
              {themeOptions.map((option) => {
                const Icon = option.icon;
                const selected = theme === option.value;

                return (
                  <li key={option.value}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={selected}
                      aria-label={`${option.label} — ${option.description}`}
                      onClick={() => {
                        setTheme(option.value);
                        setOpen(false);
                      }}
                      className={cn(
                        "flex h-9 w-full items-center gap-2.5 rounded-lg px-2.5 text-left text-sm transition-colors duration-200",
                        selected
                          ? "bg-primary/10 font-medium text-foreground"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      <Icon
                        className={cn(
                          "size-3.5 shrink-0",
                          selected ? "text-primary" : "text-muted-foreground"
                        )}
                        aria-hidden="true"
                      />
                      <span className="min-w-0 flex-1 truncate">{option.label}</span>
                      {selected ? (
                        <Check className="size-3.5 shrink-0 text-primary" aria-hidden="true" />
                      ) : null}
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
      <div className="grid grid-cols-3 gap-1.5 px-4">
        {themeOptions.map((option) => {
          const Icon = option.icon;
          const selected = theme === option.value;

          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={selected}
              aria-label={`${option.label} — ${option.description}`}
              onClick={() => setTheme(option.value)}
              className={cn(
                "flex flex-col items-center gap-1.5 rounded-xl border px-2 py-2 text-center transition-all duration-300 active:scale-[0.98]",
                selected
                  ? "border-primary/30 bg-primary/10 text-primary"
                  : "border-border bg-card text-foreground hover:border-primary/20 hover:bg-muted"
              )}
            >
              <Icon className="size-3.5" aria-hidden="true" />
              <span className="text-[11px] font-medium">{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { ThemeSwitcher, ThemeSwitcherMobile };
