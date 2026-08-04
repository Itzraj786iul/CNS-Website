"use client";

import { motion } from "framer-motion";

import { aboutContent } from "@/components/about/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { FeatureCard } from "@/components/common/feature-card";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { fadeUp } from "@/lib/motion";

function InfrastructureSection() {
  return (
    <Section variant="default" spacing="lg">
      <div className="space-y-12">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Infrastructure"
            title="Built for Complex Neuro Care"
            description="Our facilities are designed to support the full continuum of neurological care — from emergency response to long-term rehabilitation."
          />
        </AnimatedSection>

        <AnimatedSection stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutContent.infrastructure.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              <FeatureCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                iconVariant={item.variant}
              />
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </Section>
  );
}

export { InfrastructureSection };
