"use client";

import Link from "next/link";
import { CalendarDays, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import { WHATSAPP_URL } from "@/lib/contact-links";
import { cn } from "@/lib/utils";

type ActionVariant = "appointment" | "whatsapp";

type QuickAction = {
  label: string;
  shortLabel: string;
  href: string;
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
];

const variantStyles: Record<
  ActionVariant,
  { dock: string; icon: string; mobile: string }
> = {
  appointment: {
    dock: "hover:border-secondary/40 hover:bg-secondary/[0.06] hover:shadow-glow-green",
    icon: "bg-secondary/12 text-secondary",
    mobile: "bg-secondary/10 text-secondary",
  },
  whatsapp: {
    dock: "hover:border-[#25D366]/40 hover:bg-[#25D366]/[0.06] hover:shadow-[0_6px_20px_-6px_rgba(37,211,102,0.35)]",
    icon: "bg-[#25D366]/12 text-[#128C7E]",
    mobile: "bg-[#25D366]/10 text-[#128C7E]",
  },
};

function DesktopDockItem({ action }: { action: QuickAction }) {
  const Icon = action.icon;
  const className = cn(
    "group flex items-center gap-2 rounded-full border border-border/70 bg-card/90 py-1.5 pl-1.5 pr-3.5 shadow-soft backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft-lg",
    variantStyles[action.variant].dock
  );
  const content = (
    <>
      <span
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105",
          variantStyles[action.variant].icon
        )}
      >
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <span className="text-xs font-semibold text-foreground">{action.label}</span>
    </>
  );

  if (action.external) {
    return (
      <motion.a
        href={action.href}
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ scale: 0.97 }}
        className={className}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div whileTap={{ scale: 0.97 }}>
      <Link href={action.href} className={className}>
        {content}
      </Link>
    </motion.div>
  );
}

function MobileBarItem({ action }: { action: QuickAction }) {
  const Icon = action.icon;

  const className = cn(
    "flex min-h-[2.75rem] flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-[0.98]",
    variantStyles[action.variant].mobile
  );

  const content = (
    <>
      <Icon className="size-4 shrink-0" aria-hidden="true" />
      <span>{action.shortLabel}</span>
    </>
  );

  if (action.external) {
    return (
      <a href={action.href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={action.href} className={className}>
      {content}
    </Link>
  );
}

function FloatingActions() {
  return (
    <>
      <aside
        aria-label="Quick actions"
        className="fixed bottom-20 right-4 z-40 hidden flex-col items-end gap-2 md:flex xl:right-5"
      >
        {quickActions.map((action) => (
          <DesktopDockItem key={action.label} action={action} />
        ))}
      </aside>

      <nav
        aria-label="Quick actions"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-card/95 shadow-[0_-4px_24px_-8px_rgba(22,50,74,0.15)] backdrop-blur-xl md:hidden dark:shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.4)]"
      >
        <div
          className="flex gap-2 px-3 py-2"
          style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
        >
          {quickActions.map((action) => (
            <MobileBarItem key={action.label} action={action} />
          ))}
        </div>
      </nav>
    </>
  );
}

export { FloatingActions };
