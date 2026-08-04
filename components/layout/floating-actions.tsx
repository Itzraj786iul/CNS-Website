"use client";

import * as React from "react";
import Link from "next/link";
import { CalendarDays, ChevronUp, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/contact-links";
import { cn } from "@/lib/utils";

function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile sticky conversion bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-cns-border/80 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-soft-lg backdrop-blur-xl md:hidden">
        <div className="flex gap-2.5">
          <Button
            nativeButton={false}
            render={
              <Link href="/appointment">
                <CalendarDays />
                Book Appointment
              </Link>
            }
            className="h-12 min-h-[48px] flex-1 rounded-full bg-secondary shadow-glow-green hover:bg-secondary/90"
          />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-all duration-300 hover:scale-[1.02] hover:shadow-soft-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50 focus-visible:ring-offset-2"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Floating action buttons — desktop + tablet */}
      <div
        className={cn(
          "fixed z-40 flex flex-col items-end gap-3",
          "bottom-6 right-4 md:bottom-6 md:right-6"
        )}
      >
        <AnimatePresence>
          {showScrollTop ? (
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex size-11 items-center justify-center rounded-full border border-cns-border bg-white text-cns-navy shadow-soft transition-all duration-300 hover:scale-[1.02] hover:border-primary/20 hover:shadow-soft-lg"
              aria-label="Scroll to top"
            >
              <ChevronUp className="size-5" />
            </motion.button>
          ) : null}
        </AnimatePresence>

        <Button
          nativeButton={false}
          render={
            <Link href="/appointment" aria-label="Book appointment">
              <CalendarDays />
              <span className="hidden sm:inline">Book Appointment</span>
            </Link>
          }
          className="hidden h-12 min-h-[48px] rounded-full bg-secondary px-5 shadow-glow-green hover:bg-secondary/90 sm:inline-flex"
        />

        <div className="group relative">
          <span
            role="tooltip"
            className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-full bg-cns-navy px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
          >
            Chat on WhatsApp
          </span>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Center for Neuroscience on WhatsApp"
            className="animate-whatsapp-pulse relative flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-all duration-300 hover:scale-[1.02] hover:shadow-soft-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50 focus-visible:ring-offset-2"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </>
  );
}

export { FloatingActions };
