"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { aboutContent } from "@/components/about/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { fadeUp } from "@/lib/motion";

function AboutCnsSection() {
  const { aboutCns } = aboutContent;

  return (
    <Section variant="white" spacing="default">
      <div className="grid items-start gap-5 lg:grid-cols-2 lg:gap-6">
        <AnimatedSection className="relative order-2 lg:order-1 lg:flex lg:flex-col lg:justify-center">
          <div className="relative image-placeholder aspect-[3/2] lg:max-h-[170px] lg:w-full">
            <Image
              src={aboutCns.image.src}
              alt={aboutCns.image.alt}
              fill
              className="img-zoom object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -right-4 -z-10 size-32 rounded-full bg-primary/10 blur-2xl"
          />
        </AnimatedSection>

        <AnimatedSection className="order-1 space-y-4 lg:order-2 lg:flex lg:flex-col lg:justify-center">
          <SectionHeading
            eyebrow="Our Story"
            title={aboutCns.title}
            description={aboutCns.description}
          />
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base leading-relaxed text-muted-foreground"
          >
            {aboutCns.secondaryDescription}
          </motion.p>
        </AnimatedSection>
      </div>
    </Section>
  );
}

export { AboutCnsSection };
