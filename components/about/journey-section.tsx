"use client";

import { motion } from "framer-motion";

import { aboutContent } from "@/components/about/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { TimelineCard } from "@/components/common/timeline-card";
import { fadeUp } from "@/lib/motion";

function JourneySection() {
  const items = aboutContent.timeline;

  return (
    <Section variant="default" spacing="default">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-12">
        <AnimatedSection className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Our Journey"
            title="Two Decades of Growth"
            description="From a single outpatient clinic to a full-service neuroscience institution — our history reflects a commitment to continuous improvement."
          />
        </AnimatedSection>

        <AnimatedSection stagger>
          {items.map((item, index) => (
            <motion.div key={item.title} variants={fadeUp}>
              <TimelineCard
                year={item.year}
                title={item.title}
                description={item.description}
                isLast={index === items.length - 1}
              />
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </Section>
  );
}

export { JourneySection };
