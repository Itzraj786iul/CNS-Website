"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { departmentsContent } from "@/components/departments/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { fadeUp } from "@/lib/motion";

function WhyDepartmentsSection() {
  const { whyDepartments } = departmentsContent;

  return (
    <Section variant="white" spacing="default">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <AnimatedSection className="relative">
          <div className="relative image-placeholder aspect-[3/2] lg:max-h-[240px] lg:w-full">
            <Image
              src="https://placehold.co/720x540/F8FBFD/1F7CC6/png?font=roboto&text=Multidisciplinary+Care"
              alt="Multidisciplinary neuroscience team at CNS"
              fill
              className="img-zoom object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </AnimatedSection>

        <div className="section-stack">
          <AnimatedSection>
            <SectionHeading
              eyebrow={whyDepartments.eyebrow}
              title={whyDepartments.title}
              description={whyDepartments.description}
            />
          </AnimatedSection>

          <AnimatedSection stagger className="space-y-5">
            {whyDepartments.points.map((point) => (
              <motion.div
                key={point.title}
                variants={fadeUp}
                className="flex gap-4 rounded-2xl border border-cns-border/60 bg-background p-5 transition-colors hover:border-primary/20 hover:bg-card hover:shadow-soft"
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
