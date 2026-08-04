"use client";

import * as React from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { hoverLift } from "@/lib/motion";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  quote: string;
  author: string;
  role?: string;
  className?: string;
};

function TestimonialCard({
  quote,
  author,
  role,
  className,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={hoverLift}
      className={cn("h-full", className)}
    >
      <Card className="h-full border-cns-border/80 bg-white shadow-soft ring-0">
        <CardContent className="flex h-full flex-col gap-6 px-6 py-8">
          <Quote
            aria-hidden="true"
            className="size-8 text-primary/30"
            strokeWidth={1.5}
          />
          <blockquote className="flex-1 text-base leading-relaxed text-cns-navy/90">
            {quote}
          </blockquote>
          <footer className="border-t border-cns-border pt-5">
            <cite className="not-italic">
              <p className="font-heading text-base font-semibold text-cns-navy">
                {author}
              </p>
              {role ? (
                <p className="mt-1 text-sm text-muted-foreground">{role}</p>
              ) : null}
            </cite>
          </footer>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export { TestimonialCard };
