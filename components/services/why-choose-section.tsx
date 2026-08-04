"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { servicesContent } from "@/components/services/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { HospitalImage } from "@/components/common/hospital-image";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { fadeUp } from "@/lib/motion";

function WhyChooseSection() {
  const { whyChoose, sectionImage } = servicesContent;

  return (
    <Section variant="default" spacing="default">
      <div className="grid items-center gap-5 lg:grid-cols-2 lg:gap-6">
        <AnimatedSection className="relative lg:flex lg:flex-col lg:justify-center">
          <HospitalImage
            src={sectionImage.src}
            alt={sectionImage.alt}
            category={sectionImage.category}
            aspect="landscape"
            className="lg:max-h-[160px] lg:w-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </AnimatedSection>
        <div className="section-stack">
          <AnimatedSection>
            <SectionHeading
              eyebrow={whyChoose.eyebrow}
              title={whyChoose.title}
              description={whyChoose.description}
            />
          </AnimatedSection>
          <AnimatedSection stagger className="space-y-3">
            {whyChoose.points.map((point) => (
              <motion.div
                key={point}
                variants={fadeUp}
                className="flex gap-3 rounded-xl border border-cns-border/60 bg-card p-3.5 shadow-soft"
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
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
