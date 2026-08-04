"use client";

import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCardProps = {
  items: FAQItem[];
  className?: string;
};

function FAQCard({ items, className }: FAQCardProps) {
  return (
    <div
      data-slot="faq-card"
      className={cn(
        "overflow-hidden rounded-3xl card-premium card-premium-hover",
        className
      )}
    >
      <Accordion className="w-full">
        {items.map((item, index) => (
          <AccordionItem
            key={`${item.question}-${index}`}
            value={`faq-${index}`}
            className="border-border px-5 last:border-b-0 sm:px-7"
          >
            <AccordionTrigger className="py-5 text-left font-heading text-base font-semibold text-cns-navy transition-colors hover:text-primary hover:no-underline sm:py-6 [&[data-state=open]]:text-primary">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-base leading-[1.8] text-muted-foreground sm:pb-6">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export { FAQCard };
export type { FAQItem };
