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
    <Section variant="white" spacing="lg">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-16">
        <AnimatedSection className="space-y-8 lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions We Hear Often"
            description="Find quick answers to common questions about appointments, insurance, and our neurological services."
          />
          <Button
            nativeButton={false}
            render={
              <Link href="/contact">
                Contact Us
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
