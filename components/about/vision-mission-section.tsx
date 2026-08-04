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
    <Section variant="default" spacing="lg">
      <div className="space-y-12">
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
                className="h-full"
              >
                <Card className="h-full border-cns-border/80 bg-white shadow-soft ring-0">
                  <CardContent className="space-y-5 px-8 py-10">
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
