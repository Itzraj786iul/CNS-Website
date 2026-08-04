"use client";

import { motion } from "framer-motion";

import { facilities } from "@/components/home/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { FeatureCard } from "@/components/common/feature-card";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { fadeUp } from "@/lib/motion";

function FacilitiesSection() {
  return (
    <Section variant="white" spacing="default">
      <div className="space-y-8">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Clinical Excellence"
            title="Technology Supporting Better Outcomes"
            description="Every facility is designed for complex neurological care — from rapid emergency imaging to precision surgery and critical recovery."
          />
        </AnimatedSection>

        <AnimatedSection stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <motion.div key={facility.title} variants={fadeUp}>
              <FeatureCard
                icon={facility.icon}
                title={facility.title}
                description={facility.description}
                iconVariant={facility.iconVariant}
              />
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </Section>
  );
}

export { FacilitiesSection };
