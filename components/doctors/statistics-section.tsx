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
    <Section variant="default" spacing="default">
      <div className="section-stack">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Clinical Credibility"
            title="Experience You Can Measure"
            description="Our collective expertise translates into sharper diagnoses, safer procedures, and better outcomes for every patient we serve."
          />
        </AnimatedSection>

        <AnimatedSection stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {doctorsContent.statistics.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <StatisticsCard
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                className="rounded-2xl border border-cns-border/50 bg-card/90 shadow-card backdrop-blur-sm"
              />
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </Section>
  );
}

export { StatisticsSection };
