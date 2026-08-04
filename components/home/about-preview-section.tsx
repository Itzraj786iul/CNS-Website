"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { aboutFeatures } from "@/components/home/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { FeatureCard } from "@/components/common/feature-card";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/motion";

function AboutPreviewSection() {
  return (
    <Section variant="white" spacing="default" divider>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <AnimatedSection className="relative" direction="left">
          <div className="relative image-placeholder aspect-[4/5]">
            <Image
              src="https://placehold.co/640x800/EEF4F9/16324A/png?font=roboto&text=CNS+Medical+Team"
              alt="Center for Neuroscience medical team"
              fill
              className="img-zoom object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-black/35 via-black/5 to-transparent"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -right-6 -z-10 size-48 rounded-full bg-secondary/10 blur-2xl"
          />
        </AnimatedSection>

        <div className="space-y-8">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Who We Are"
              title="Two Decades of Neuroscience Leadership"
              description="For over twenty years, CNS has united expert clinicians, precision diagnostics, and compassionate support — so every patient receives care that is both clinically rigorous and deeply human."
            />
          </AnimatedSection>

          <AnimatedSection stagger className="grid gap-5 sm:grid-cols-2">
            {aboutFeatures.map((feature) => (
              <motion.div key={feature.title} variants={fadeUp}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  iconVariant={feature.iconVariant}
                />
              </motion.div>
            ))}
          </AnimatedSection>

          <AnimatedSection>
            <Button
              nativeButton={false}
              render={
                <Link href="/about">
                  Discover Our Approach
                  <ArrowRight />
                </Link>
              }
              size="lg"
              className="h-12 px-6"
            />
          </AnimatedSection>
        </div>
      </div>
    </Section>
  );
}

export { AboutPreviewSection };
