"use client";

import { motion } from "framer-motion";

import { facilitiesContent } from "@/components/facilities/data";
import { FacilityGalleryCard } from "@/components/facilities/facility-gallery-card";
import { AnimatedSection } from "@/components/common/animated-section";
import { FeatureCard } from "@/components/common/feature-card";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { IconBox } from "@/components/common/icon-box";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/common/cta-section";
import { CardGridItem, CardGridSection } from "@/components/common/sections";
import { fadeUp, hoverLift } from "@/lib/motion";

function OverviewSection() {
  const { overview } = facilitiesContent;
  return (
    <Section variant="white" spacing="default">
      <AnimatedSection className="mx-auto max-w-3xl text-center">
        <SectionHeading align="center" eyebrow={overview.eyebrow} title={overview.title} description={overview.description} />
      </AnimatedSection>
    </Section>
  );
}

function GallerySection() {
  return (
    <Section variant="default" spacing="default" className="!pt-6">
      <AnimatedSection stagger className="grid gap-4 md:grid-cols-3 md:items-start">
        {facilitiesContent.facilities.map((facility) => (
          <motion.div key={facility.title} variants={fadeUp}>
            <FacilityGalleryCard facility={facility} variant="standard" />
          </motion.div>
        ))}
      </AnimatedSection>
    </Section>
  );
}

function TechnologySection() {
  const { technology } = facilitiesContent;
  return (
    <CardGridSection
      variant="white"
      spacing="default"
      density="listing"
      heading={{
        align: "center",
        eyebrow: technology.eyebrow,
        title: technology.title,
        description: technology.description,
      }}
    >
      {technology.items.map((item) => (
        <CardGridItem key={item.title}>
          <FeatureCard
            icon={item.icon}
            title={item.title}
            description={item.description}
            iconVariant={item.variant}
            variant="standard"
          />
        </CardGridItem>
      ))}
    </CardGridSection>
  );
}

function PatientSafetySection() {
  const { safety } = facilitiesContent;
  return (
    <Section variant="default" spacing="default">
      <div className="section-stack">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading align="center" eyebrow={safety.eyebrow} title={safety.title} description={safety.description} />
        </AnimatedSection>
        <AnimatedSection stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {safety.items.map((item, index) => (
            <motion.div key={item.title} variants={fadeUp}>
              <motion.div initial="rest" whileHover="hover" variants={hoverLift}>
                <Card className="border-cns-border/80 bg-card shadow-soft ring-0">
                  <CardContent className="space-y-2 px-4 py-3.5">
                    <IconBox icon={item.icon} variant={(["blue", "green", "orange", "navy"] as const)[index % 4]} size="sm" />
                    <h3 className="card-title-compact">{item.title}</h3>
                    <p className="card-desc-compact">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </Section>
  );
}

function FacilitiesCtaSection() {
  const { cta } = facilitiesContent;
  return (
    <CTASection
      title={cta.title}
      description={cta.description}
      primaryAction={{ label: cta.primaryLabel, href: cta.primaryHref }}
      secondaryAction={{ label: cta.secondaryLabel, href: cta.secondaryHref }}
      variant="navy"
    />
  );
}

export { OverviewSection, GallerySection, TechnologySection, PatientSafetySection, FacilitiesCtaSection };
