"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { whyChooseFeatures } from "@/components/home/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { IconBox } from "@/components/common/icon-box";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

function WhyChooseSection() {
  return (
    <Section variant="muted" spacing="lg">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <AnimatedSection className="relative order-2 lg:order-1" direction="left">
          <div className="relative image-placeholder aspect-[4/5]">
            <Image
              src="https://placehold.co/640x800/F8FBFD/1F7CC6/png?font=roboto&text=Advanced+Neuro+Care"
              alt="Advanced neuroscience care at CNS"
              fill
              className="img-zoom object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -left-6 -top-6 -z-10 size-40 rounded-full bg-primary/10 blur-2xl"
          />
        </AnimatedSection>

        <div className="order-1 space-y-10 lg:order-2">
          <AnimatedSection direction="right">
            <SectionHeading
              eyebrow="Why Choose CNS"
              title="Why Patients Trust CNS"
              description="Depth of expertise, precision technology, and care that treats you as an individual — not a case file."
            />
          </AnimatedSection>

          <AnimatedSection stagger className="grid gap-5 sm:grid-cols-2">
            {whyChooseFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className={cn(
                  "group flex gap-4 rounded-2xl border border-cns-border/60 bg-background p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white hover:shadow-soft",
                  index === whyChooseFeatures.length - 1 &&
                    "sm:col-span-2 sm:max-w-md"
                )}
              >
                <IconBox
                  icon={feature.icon}
                  variant={feature.iconVariant}
                  size="default"
                  className="shrink-0"
                />
                <div className="space-y-1.5">
                  <h3 className="font-heading text-base font-semibold text-cns-navy">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
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
