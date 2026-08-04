"use client";

import { motion } from "framer-motion";

import { servicesContent } from "@/components/services/data";
import { ServiceCard } from "@/components/services/service-card";
import { AnimatedSection } from "@/components/common/animated-section";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { fadeUp } from "@/lib/motion";
import { getCardGridClass } from "@/lib/card-variants";

function OverviewSection() {
  const { overview } = servicesContent;
  return (
    <Section variant="white" spacing="default">
      <AnimatedSection className="mx-auto max-w-3xl text-center">
        <SectionHeading align="center" eyebrow={overview.eyebrow} title={overview.title} description={overview.description} />
      </AnimatedSection>
    </Section>
  );
}

function ServicesGridSection() {
  return (
    <Section variant="default" spacing="default" className="!pt-6">
      <AnimatedSection stagger className={getCardGridClass("standard")}>
        {servicesContent.services.map((service) => (
          <motion.div key={service.title} variants={fadeUp}>
            <ServiceCard {...service} variant="standard" />
          </motion.div>
        ))}
      </AnimatedSection>
    </Section>
  );
}

export { OverviewSection, ServicesGridSection };
