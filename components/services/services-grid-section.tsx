"use client";

import { ServiceCard } from "@/components/services/service-card";
import { CardGridItem, CardGridSection } from "@/components/common/sections";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { AnimatedSection } from "@/components/common/animated-section";
import { servicesContent } from "@/components/services/data";

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
    <CardGridSection
      variant="default"
      spacing="default"
      className="!pt-6"
      density="listing"
    >
      {servicesContent.services.map((service) => (
        <CardGridItem key={service.title}>
          <ServiceCard {...service} variant="standard" />
        </CardGridItem>
      ))}
    </CardGridSection>
  );
}

export { OverviewSection, ServicesGridSection };
