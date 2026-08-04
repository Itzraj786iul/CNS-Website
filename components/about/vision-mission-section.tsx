"use client";

import { motion } from "framer-motion";

import { aboutContent } from "@/components/about/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { IconBox } from "@/components/common/icon-box";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, hoverLift } from "@/lib/motion";

function VisionMissionSection() {
  return (
    <Section variant="default" spacing="default">
      <div className="section-stack">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Purpose"
            title="Vision & Mission"
            description="Guiding principles that shape every clinical decision, investment, and interaction at the Center for Neuroscience."
          />
        </AnimatedSection>

        <AnimatedSection stagger className="grid gap-6 md:grid-cols-2">
          {aboutContent.visionMission.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              <motion.div
                initial="rest"
                whileHover="hover"
                variants={hoverLift}
              >
                <Card className="border-cns-border/80 bg-card shadow-soft ring-0">
                  <CardContent className="space-y-4 px-5 py-6 sm:px-6">
                    <IconBox icon={item.icon} variant={item.variant} size="lg" />
                    <div className="space-y-3">
                      <h3 className="font-heading text-2xl font-semibold text-cns-navy">
                        {item.title}
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
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

export { VisionMissionSection };
