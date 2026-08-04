"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnimatedSection } from "@/components/common/animated-section";
import { FeatureCard } from "@/components/common/feature-card";
import { HospitalImage } from "@/components/common/hospital-image";
import { CardGridItem } from "@/components/common/sections";
import { ImageWithContentSection } from "@/components/common/sections";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { aboutFeatures, sectionImages } from "@/components/home/data";

function AboutPreviewSection() {
  const image = sectionImages.aboutPreview;

  return (
    <ImageWithContentSection
      variant="white"
      spacing="default"
      divider
      image={
        <div className="relative">
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
            className="absolute -bottom-4 -right-4 -z-10 size-32 rounded-full bg-secondary/10 blur-2xl"
          />
        </div>
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
                <Link href="/about" aria-label="Learn more about Center for Neuroscience">
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
