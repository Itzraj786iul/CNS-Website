"use client";

import { motion } from "framer-motion";

import { galleryContent } from "@/components/gallery/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { CTASection } from "@/components/common/cta-section";
import { MasonryGallery } from "@/components/common/lightbox";
import { PageHero } from "@/components/common/page-hero";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { fadeUp } from "@/lib/motion";

function GalleryPageContent() {
  const { hero, sections, cta } = galleryContent;

  return (
    <>
      <PageHero
        title={hero.title}
        description={hero.description}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      {sections.map((section, index) => (
        <Section
          key={section.id}
          id={section.id}
          variant={index % 2 === 0 ? "white" : "default"}
          spacing="lg"
          divider={index > 0}
        >
          <div className="space-y-10">
            <AnimatedSection direction={index % 2 === 0 ? "up" : "fade"}>
              <SectionHeading
                eyebrow={section.eyebrow}
                title={section.title}
                description={section.description}
              />
            </AnimatedSection>
            <AnimatedSection stagger>
              <motion.div variants={fadeUp}>
                <MasonryGallery images={[...section.images]} />
              </motion.div>
            </AnimatedSection>
          </div>
        </Section>
      ))}

      <CTASection
        title={cta.title}
        description={cta.description}
        primaryAction={{ label: cta.primaryLabel, href: cta.primaryHref }}
        secondaryAction={{ label: cta.secondaryLabel, href: cta.secondaryHref }}
        variant="navy"
      />
    </>
  );
}

export { GalleryPageContent };
