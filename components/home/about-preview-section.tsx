"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { AnimatedSection } from "@/components/common/animated-section";
import { FeatureCard } from "@/components/common/feature-card";
import { CardGridItem } from "@/components/common/sections";
import { ImageWithContentSection } from "@/components/common/sections";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { aboutFeatures } from "@/components/home/data";
import { mediaImageClasses } from "@/lib/design-system";

function AboutPreviewSection() {
  return (
    <ImageWithContentSection
      variant="white"
      spacing="default"
      divider
      image={
        <>
          <div className={mediaImageClasses.preview}>
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
            className="absolute -bottom-4 -right-4 -z-10 size-32 rounded-full bg-secondary/10 blur-2xl"
          />
        </>
      }
      body={
        <>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Who We Are"
              title="Two Decades of Neuroscience Leadership"
              description="For over twenty years, CNS has united expert clinicians, precision diagnostics, and compassionate support — so every patient receives care that is both clinically rigorous and deeply human."
            />
          </AnimatedSection>

          <AnimatedSection stagger className="grid gap-4 sm:grid-cols-2">
            {aboutFeatures.map((feature) => (
              <CardGridItem key={feature.title}>
                <FeatureCard
                  variant="compact"
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  iconVariant={feature.iconVariant}
                />
              </CardGridItem>
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
              className="px-6"
            />
          </AnimatedSection>
        </>
      }
    />
  );
}

export { AboutPreviewSection };
