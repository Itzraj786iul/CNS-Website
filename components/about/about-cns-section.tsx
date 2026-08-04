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
    <Section variant="white" spacing="lg">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <AnimatedSection className="relative order-2 lg:order-1">
          <div className="relative image-placeholder aspect-[5/6]">
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
            className="absolute -bottom-6 -right-6 -z-10 size-48 rounded-full bg-primary/10 blur-2xl"
          />
        </AnimatedSection>

        <AnimatedSection className="order-1 space-y-6 lg:order-2">
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
