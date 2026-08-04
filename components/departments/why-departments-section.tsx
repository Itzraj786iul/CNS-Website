"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { departmentsContent } from "@/components/departments/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { HospitalImage } from "@/components/common/hospital-image";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { fadeUp } from "@/lib/motion";

function WhyDepartmentsSection() {
  const { whyDepartments, sectionImage } = departmentsContent;

  return (
    <Section variant="white" spacing="default">
      <div className="grid items-center gap-5 md:grid-cols-2 md:gap-6 lg:gap-6">
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
              eyebrow={whyDepartments.eyebrow}
              title={whyDepartments.title}
              description={whyDepartments.description}
            />
          </AnimatedSection>

          <AnimatedSection stagger className="space-y-3">
            {whyDepartments.points.map((point) => (
              <motion.div
                key={point.title}
                variants={fadeUp}
                className="flex gap-3 rounded-[20px] border border-cns-border/60 bg-background p-3.5 transition-colors hover:border-primary/20 hover:bg-card hover:shadow-soft"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-secondary" />
                <div className="space-y-1">
                  <h3 className="font-heading text-base font-semibold text-cns-navy">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </Section>
  );
}

export { WhyDepartmentsSection };
