"use client";

import { motion } from "framer-motion";

import { servicesContent } from "@/components/services/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, hoverLift } from "@/lib/motion";

function TreatmentProcessSection() {
  const { process } = servicesContent;
  return (
    <Section variant="white" spacing="default">
      <div className="section-stack">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading align="center" eyebrow={process.eyebrow} title={process.title} description={process.description} />
        </AnimatedSection>
        <AnimatedSection stagger className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          {process.steps.map((step) => (
            <motion.div key={step.step} variants={fadeUp}>
              <motion.div initial="rest" whileHover="hover" variants={hoverLift}>
                <Card className="border-cns-border/80 bg-card shadow-soft ring-0">
                  <CardContent className="space-y-2 px-4 py-4">
                    <span className="font-heading text-2xl font-semibold text-primary/30">{step.step}</span>
                    <h3 className="card-title-compact">{step.title}</h3>
                    <p className="card-desc-compact">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </Section>
  );
}

export { TreatmentProcessSection };
