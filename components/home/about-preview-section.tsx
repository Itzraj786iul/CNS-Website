"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnimatedSection } from "@/components/common/animated-section";
import { HospitalImage } from "@/components/common/hospital-image";
import { ImageWithContentSection } from "@/components/common/sections";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { sectionImages } from "@/components/home/data";

function AboutPreviewSection() {
  const image = sectionImages.aboutPreview;

  return (
    <ImageWithContentSection
      variant="white"
      spacing="sm"
      divider
      image={
        <HospitalImage
          src={image.src}
          alt={image.alt}
          category={image.category}
          aspect="landscape"
          className="w-full lg:max-h-[200px]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      }
      body={
        <AnimatedSection className="flex flex-col justify-center gap-4">
          <SectionHeading
            eyebrow="Who We Are"
            title="Two Decades of Neuroscience Leadership"
            description="Expert clinicians, precision diagnostics, and compassionate care — united under one trusted institution in Raipur."
          />
          <Button
            nativeButton={false}
            render={
              <Link href="/about" aria-label="Learn more about Center for Neuroscience">
                Discover Our Approach
                <ArrowRight />
              </Link>
            }
            size="default"
            className="w-fit px-5"
          />
        </AnimatedSection>
      }
    />
  );
}

export { AboutPreviewSection };
