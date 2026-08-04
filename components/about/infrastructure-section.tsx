"use client";

import { motion } from "framer-motion";

import { aboutContent } from "@/components/about/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { FeatureCard } from "@/components/common/feature-card";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { fadeUp } from "@/lib/motion";
import { getCardGridClass } from "@/lib/card-variants";

function InfrastructureSection() {
  return (
    <Section variant="default" spacing="default">
      <div className="section-stack">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Infrastructure"
            title="Built for Complex Neuro Care"
            description="Our facilities are designed to support the full continuum of neurological care — from emergency response to long-term rehabilitation."
          />
        </AnimatedSection>

        <AnimatedSection stagger className={getCardGridClass("standard")}>
          {aboutContent.infrastructure.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              <FeatureCard
                variant="standard"
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
