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
    <Section variant="white" spacing="lg">
      <div className="space-y-12">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Facilities"
            title="Advanced Clinical Infrastructure"
            description="Diagnostic, surgical, and critical care facilities purpose-built for complex brain and spine conditions."
          />
        </AnimatedSection>

        <AnimatedSection stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
