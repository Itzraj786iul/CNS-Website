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
        "overflow-hidden rounded-2xl card-premium card-premium-hover",
        className
      )}
    >
      <Accordion className="w-full">
        {items.map((item, index) => (
          <AccordionItem
            key={`${item.question}-${index}`}
            value={`faq-${index}`}
            className="border-cns-border px-6 last:border-b-0"
          >
            <AccordionTrigger className="py-5 text-left font-heading text-base font-medium text-cns-navy hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
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
