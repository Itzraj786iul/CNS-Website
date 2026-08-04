"use client";

import { departmentsContent } from "@/components/departments/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";

function OverviewSection() {
  const { overview } = departmentsContent;

  return (
    <Section variant="white" spacing="default">
      <AnimatedSection className="mx-auto max-w-3xl text-center">
        <SectionHeading
          align="center"
          eyebrow={overview.eyebrow}
          title={overview.title}
          description={overview.description}
        />
      </AnimatedSection>
    </Section>
  );
}

export { OverviewSection };
