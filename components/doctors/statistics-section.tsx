"use client";

import { motion } from "framer-motion";

import { doctorsStatistics } from "@/lib/content/statistics";
import { AnimatedSection } from "@/components/common/animated-section";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { StatisticsCardFromStat } from "@/components/common/statistics-card";
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
            description="Verified figures appear once confirmed by hospital administration. Update lib/content/statistics.ts when approved."
          />
        </AnimatedSection>

        <AnimatedSection stagger className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          {doctorsStatistics.map((stat) => (
            <motion.div key={stat.id} variants={fadeUp}>
              <StatisticsCardFromStat
                stat={stat}
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
