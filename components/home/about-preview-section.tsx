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
    <Section variant="white" spacing="lg">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <AnimatedSection className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted shadow-soft-lg">
            <Image
              src="https://placehold.co/640x800/EEF4F9/16324A/png?font=roboto&text=CNS+Medical+Team"
              alt="Center for Neuroscience medical team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-cns-navy/20 via-transparent to-transparent"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -right-6 -z-10 size-48 rounded-full bg-secondary/10 blur-2xl"
          />
        </AnimatedSection>

        <div className="space-y-10">
          <AnimatedSection>
            <SectionHeading
              eyebrow="About CNS"
              title="Leading Neuroscience Care, Built Around You"
              description="For over two decades, the Center for Neuroscience has united expert clinicians, advanced diagnostics, and compassionate support to treat the full range of brain and spine conditions."
            />
          </AnimatedSection>

          <AnimatedSection stagger className="grid gap-4 sm:grid-cols-2">
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
                  Learn More
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
