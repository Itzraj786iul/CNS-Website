"use client";

import { aboutContent } from "@/components/about/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { SectionHeading } from "@/components/common/section-heading";
import { SplitContentSection } from "@/components/common/sections";
import { TimelineCard } from "@/components/common/timeline-card";
import { fadeUp } from "@/lib/motion";
import { motion } from "framer-motion";

function JourneySection() {
  const items = aboutContent.timeline;

  return (
    <SplitContentSection
      variant="default"
      spacing="default"
      ratio="contentAside"
      left={
        <SectionHeading
          eyebrow="Our Journey"
          title="Two Decades of Growth"
          description="From a single outpatient clinic to a full-service neuroscience institution — our history reflects a commitment to continuous improvement."
        />
      }
      right={
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
      }
    />
  );
}

export { JourneySection };
