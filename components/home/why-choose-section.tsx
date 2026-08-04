"use client";

import { motion } from "framer-motion";

import { whyChooseFeatures, sectionImages } from "@/components/home/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { HospitalImage } from "@/components/common/hospital-image";
import { IconBox } from "@/components/common/icon-box";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { fadeUp } from "@/lib/motion";

function WhyChooseSection() {
  const image = sectionImages.whyChoose;

  return (
    <Section variant="muted" spacing="default">
      <div className="grid items-start gap-5 lg:grid-cols-2 lg:gap-6">
        <AnimatedSection className="relative order-2 lg:order-1 lg:flex lg:flex-col lg:justify-center" direction="left">
          <HospitalImage
            src={image.src}
            alt={image.alt}
            category={image.category}
            aspect="landscape"
            className="lg:max-h-[170px] lg:w-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 -z-10 size-28 rounded-full bg-primary/10 blur-2xl"
          />
        </AnimatedSection>

        <div className="section-stack order-1 lg:order-2">
          <AnimatedSection direction="right">
            <SectionHeading
              eyebrow="Why Patients Choose CNS"
              title="Care That Puts You First"
              description="From your first call to long-term follow-up, every part of your journey is designed around clarity, compassion, and clinical excellence."
            />
          </AnimatedSection>

          <AnimatedSection stagger className="grid gap-3 sm:grid-cols-2">
            {whyChooseFeatures.map((feature) => (
              <motion.div key={feature.title} variants={fadeUp}>
                <div className="flex gap-3 rounded-xl border border-cns-border/60 bg-card px-3.5 py-3 shadow-soft">
                  <IconBox icon={feature.icon} variant={feature.iconVariant} size="sm" />
                  <div className="min-w-0 space-y-0.5">
                    <h3 className="card-title-compact">{feature.title}</h3>
                    <p className="card-desc-compact">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </Section>
  );
}

export { WhyChooseSection };
