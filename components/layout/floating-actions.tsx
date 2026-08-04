"use client";

import * as React from "react";
import Link from "next/link";
import { CalendarDays, ChevronUp, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants/site";
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

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hello, I would like to inquire about an appointment at CNS.")}`;

  return (
    <>
      {/* Mobile sticky appointment bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-cns-border/80 bg-white/95 p-3 shadow-soft-lg backdrop-blur-xl md:hidden">
        <Button
          nativeButton={false}
          render={
            <Link href="/appointment">
              <CalendarDays />
              Book Appointment
            </Link>
          }
          className="h-12 w-full rounded-full bg-secondary shadow-glow-green hover:bg-secondary/90"
        />
      </div>

      {/* Floating action buttons — desktop + tablet */}
      <div
        className={cn(
          "fixed z-40 flex flex-col items-end gap-3",
          "bottom-20 right-4 md:bottom-6 md:right-6"
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

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-all duration-300 hover:scale-[1.02] hover:shadow-soft-lg"
        >
          <MessageCircle className="size-5" />
        </a>

        <Button
          nativeButton={false}
          render={
            <Link href="/appointment" aria-label="Book appointment">
              <CalendarDays />
              <span className="hidden sm:inline">Book Appointment</span>
            </Link>
          }
          className="hidden h-12 rounded-full bg-secondary px-5 shadow-glow-green hover:bg-secondary/90 sm:inline-flex"
        />
      </div>
    </>
  );
}

export { FloatingActions };
