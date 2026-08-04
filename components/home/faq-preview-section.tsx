"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { faqItems } from "@/components/home/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { FAQCard } from "@/components/common/faq-card";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";

function FaqPreviewSection() {
  return (
    <Section variant="white" spacing="default">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-12">
        <AnimatedSection className="space-y-6 lg:sticky lg:top-28">
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
            className="h-12 border-cns-border px-6"
          />
        </AnimatedSection>

        <AnimatedSection>
          <FAQCard items={faqItems} />
        </AnimatedSection>
      </div>
    </Section>
  );
}

export { FaqPreviewSection };
