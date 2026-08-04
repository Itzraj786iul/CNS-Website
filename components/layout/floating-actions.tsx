"use client";

import * as React from "react";
import Link from "next/link";
import {
  CalendarDays,
  ChevronUp,
  MessageCircle,
  Siren,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import {
  WHATSAPP_URL,
  getEmergencyTelHref,
} from "@/lib/contact-links";
import { cn } from "@/lib/utils";

type ActionVariant = "appointment" | "whatsapp" | "emergency" | "scroll";

type QuickAction = {
  label: string;
  shortLabel: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  variant: ActionVariant;
  external?: boolean;
};

const quickActions: QuickAction[] = [
  {
    label: "Book Appointment",
    shortLabel: "Book",
    href: "/appointment",
    icon: CalendarDays,
    variant: "appointment",
  },
  {
    label: "WhatsApp",
    shortLabel: "WhatsApp",
    href: WHATSAPP_URL,
    icon: MessageCircle,
    variant: "whatsapp",
    external: true,
  },
  {
    label: "Emergency Call",
    shortLabel: "Emergency",
    href: getEmergencyTelHref(),
    icon: Siren,
    variant: "emergency",
  },
];

const variantStyles: Record<
  ActionVariant,
  { icon: string; hover: string; mobile: string }
> = {
  appointment: {
    icon: "bg-secondary/15 text-secondary",
    hover:
      "hover:border-secondary/35 hover:bg-secondary/8 hover:shadow-glow-green",
    mobile: "text-secondary",
  },
  whatsapp: {
    icon: "bg-[#25D366]/15 text-[#128C7E]",
    hover:
      "hover:border-[#25D366]/35 hover:bg-[#25D366]/8 hover:shadow-[0_8px_24px_-8px_rgba(37,211,102,0.35)]",
    mobile: "text-[#128C7E]",
  },
  emergency: {
    icon: "bg-destructive/12 text-destructive",
    hover:
      "hover:border-destructive/35 hover:bg-destructive/8 hover:shadow-[0_8px_24px_-8px_rgba(198,40,40,0.28)]",
    mobile: "text-destructive",
  },
  scroll: {
    icon: "bg-primary/12 text-primary",
    hover: "hover:border-primary/35 hover:bg-primary/8 hover:shadow-glow-blue",
    mobile: "text-primary",
  },
};

function ActionIcon({
  icon: Icon,
  variant,
}: {
  icon: React.ComponentType<{ className?: string }>;
  variant: ActionVariant;
}) {
  return (
    <span
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105",
        variantStyles[variant].icon
      )}
    >
      <Icon className="size-4" aria-hidden="true" />
    </span>
  );
}

function DesktopDockItem({
  action,
  onClick,
}: {
  action: QuickAction;
  onClick?: () => void;
}) {
  const Icon = action.icon;
  const className = cn(
    "group glass flex w-[11rem] items-center gap-2.5 rounded-xl border border-border/80 px-2.5 py-2 text-left shadow-soft transition-all duration-300 hover:-translate-x-1 hover:shadow-soft-lg",
    variantStyles[action.variant].hover
  );
  const content = (
    <>
      <ActionIcon icon={Icon} variant={action.variant} />
      <span className="text-xs font-semibold leading-tight text-foreground">
        {action.label}
      </span>
    </>
  );

  if (onClick) {
    return (
      <motion.button
        type="button"
        onClick={onClick}
        whileTap={{ scale: 0.98 }}
        className={className}
      >
        {content}
      </motion.button>
    );
  }

  if (action.external || action.href?.startsWith("tel:")) {
    return (
      <motion.a
        href={action.href}
        target={action.external ? "_blank" : undefined}
        rel={action.external ? "noopener noreferrer" : undefined}
        whileTap={{ scale: 0.98 }}
        className={className}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div whileTap={{ scale: 0.98 }}>
      <Link href={action.href ?? "/"} className={className}>
        {content}
      </Link>
    </motion.div>
  );
}

function MobileBarItem({ action }: { action: QuickAction }) {
  const Icon = action.icon;
  const className = cn(
    "flex min-h-[3rem] flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-center transition-colors duration-200 active:scale-[0.98]",
    "hover:bg-muted/80",
    variantStyles[action.variant].mobile
  );
  const content = (
    <>
      <Icon className="size-5 shrink-0" aria-hidden="true" />
      <span className="text-[10px] font-semibold leading-none">
        {action.shortLabel}
      </span>
    </>
  );

  if (action.external || action.href?.startsWith("tel:")) {
    return (
      <a
        href={action.href}
        target={action.external ? "_blank" : undefined}
        rel={action.external ? "noopener noreferrer" : undefined}
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={action.href ?? "/"} className={className}>
      {content}
    </Link>
  );
}

function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop — permanent vertical quick-action dock */}
      <aside
        aria-label="Quick actions"
        className="fixed bottom-24 right-4 z-40 hidden flex-col gap-1.5 md:flex xl:right-5 xl:bottom-28"
      >
        {quickActions.map((action) => (
          <DesktopDockItem key={action.label} action={action} />
        ))}
        <DesktopDockItem
          action={{
            label: "Back to Top",
            shortLabel: "Top",
            icon: ChevronUp,
            variant: "scroll",
          }}
          onClick={scrollToTop}
        />
      </aside>

      {/* Mobile — sticky bottom action bar */}
      <nav
        aria-label="Quick actions"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-card/95 shadow-[0_-8px_32px_-12px_rgba(22,50,74,0.18)] backdrop-blur-xl md:hidden dark:shadow-[0_-8px_32px_-12px_rgba(0,0,0,0.45)]"
      >
        <div
          className="grid grid-cols-3 gap-1 px-2 py-2"
          style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
        >
          {quickActions.map((action) => (
            <MobileBarItem key={action.label} action={action} />
          ))}
        </div>
      </nav>

      {/* Mobile — back to top (separate from bar) */}
      <AnimatePresence>
        {showScrollTop ? (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.92 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className={cn(
              "glass fixed right-3 z-40 flex size-11 items-center justify-center rounded-full border border-border/80 shadow-soft-lg transition-all duration-300 hover:border-primary/30 hover:shadow-glow-blue active:scale-95 md:hidden",
              "bottom-[calc(3.75rem+max(0.5rem,env(safe-area-inset-bottom)))]"
            )}
          >
            <ChevronUp className="size-5 text-primary" aria-hidden="true" />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export { FloatingActions };
