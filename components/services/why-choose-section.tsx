"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { servicesContent } from "@/components/services/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { fadeUp } from "@/lib/motion";

function WhyChooseSection() {
  const { whyChoose } = servicesContent;
  return (
    <Section variant="default" spacing="lg">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <AnimatedSection className="relative">
          <div className="relative image-placeholder aspect-[4/3]">
            <Image
              src="https://placehold.co/720x540/EEF4F9/16324A/png?font=roboto&text=Patient+Care"
              alt="Patient receiving neurological care at CNS"
              fill
              className="img-zoom object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </AnimatedSection>
        <div className="space-y-10">
          <AnimatedSection>
            <SectionHeading eyebrow={whyChoose.eyebrow} title={whyChoose.title} description={whyChoose.description} />
          </AnimatedSection>
          <AnimatedSection stagger className="space-y-4">
            {whyChoose.points.map((point) => (
              <motion.div key={point} variants={fadeUp} className="flex gap-3 rounded-xl border border-cns-border/60 bg-white p-4 shadow-soft">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-secondary" />
                <p className="text-sm leading-relaxed text-cns-navy/85">{point}</p>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </Section>
  );
}

export { WhyChooseSection };
