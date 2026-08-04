"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FAQCard } from "@/components/common/faq-card";
import { SectionHeading } from "@/components/common/section-heading";
import { SplitContentSection } from "@/components/common/sections";
import { Button } from "@/components/ui/button";
import { faqItems } from "@/components/home/data";

function FaqPreviewSection() {
  return (
    <SplitContentSection
      variant="white"
      spacing="default"
      ratio="narrowWide"
      left={
        <>
          <SectionHeading
            eyebrow="Your Questions Answered"
            title="Clear Guidance Before You Visit"
            description="Practical answers about appointments, insurance, emergencies, and what to expect — so you arrive informed and confident."
          />
          <Button
            nativeButton={false}
            render={
              <Link href="/contact">
                Speak With Our Team
                <ArrowRight />
              </Link>
            }
            variant="outline"
            size="lg"
            className="mt-4 w-fit border-cns-border px-6"
          />
        </>
      }
      right={<FAQCard items={faqItems} />}
    />
  );
}

export { FaqPreviewSection };
