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
            className="border-cns-border px-7 last:border-b-0"
          >
            <AccordionTrigger className="py-6 text-left font-heading text-base font-semibold text-cns-navy transition-colors hover:text-primary hover:no-underline [&[data-state=open]]:text-primary">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-base leading-[1.8] text-muted-foreground">
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
