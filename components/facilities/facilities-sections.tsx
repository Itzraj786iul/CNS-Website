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
            <FacilityGalleryCard facility={facility} />
          </motion.div>
        ))}
      </AnimatedSection>
    </Section>
  );
}

function TechnologySection() {
  const { technology } = facilitiesContent;
  return (
    <Section variant="white" spacing="default">
      <div className="space-y-8">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading align="center" eyebrow={technology.eyebrow} title={technology.title} description={technology.description} />
        </AnimatedSection>
        <AnimatedSection stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {technology.items.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              <FeatureCard icon={item.icon} title={item.title} description={item.description} iconVariant={item.variant} />
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </Section>
  );
}

function PatientSafetySection() {
  const { safety } = facilitiesContent;
  return (
    <Section variant="default" spacing="default">
      <div className="space-y-8">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading align="center" eyebrow={safety.eyebrow} title={safety.title} description={safety.description} />
        </AnimatedSection>
        <AnimatedSection stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {safety.items.map((item, index) => (
            <motion.div key={item.title} variants={fadeUp}>
              <motion.div initial="rest" whileHover="hover" variants={hoverLift}>
                <Card className="border-cns-border/80 bg-card shadow-soft ring-0">
                  <CardContent className="space-y-3 px-5 py-6">
                    <IconBox icon={item.icon} variant={(["blue", "green", "orange", "navy"] as const)[index % 4]} />
                    <h3 className="font-heading text-lg font-semibold text-cns-navy">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
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
