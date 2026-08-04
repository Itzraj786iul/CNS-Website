"use client";

import { motion } from "framer-motion";

import { aboutContent } from "@/components/about/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { FeatureCard } from "@/components/common/feature-card";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { fadeUp } from "@/lib/motion";

function CoreValuesSection() {
  return (
    <Section variant="white" spacing="default">
      <div className="section-stack">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Values"
            title="What We Stand For"
            description="Our core values define how we care for patients, collaborate as a team, and contribute to the field of neuroscience."
          />
        </AnimatedSection>

        <AnimatedSection stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aboutContent.coreValues.map((value) => (
            <motion.div key={value.title} variants={fadeUp}>
              <FeatureCard
                icon={value.icon}
                title={value.title}
                description={value.description}
                iconVariant={value.variant}
              />
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </Section>
  );
}

export { CoreValuesSection };
