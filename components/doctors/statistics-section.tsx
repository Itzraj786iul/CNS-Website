"use client";

import { motion } from "framer-motion";

import { doctorsContent } from "@/components/doctors/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { StatisticsCard } from "@/components/common/statistics-card";
import { fadeUp } from "@/lib/motion";

function StatisticsSection() {
  return (
    <Section variant="default" spacing="lg">
      <div className="space-y-12">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="By the Numbers"
            title="A Team Built on Experience"
            description="Our collective expertise translates into better diagnoses, safer procedures, and improved outcomes for every patient we serve."
          />
        </AnimatedSection>

        <AnimatedSection stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {doctorsContent.statistics.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <StatisticsCard
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </Section>
  );
}

export { StatisticsSection };
