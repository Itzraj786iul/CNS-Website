"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { careJourneySteps } from "@/components/home/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, hoverLift } from "@/lib/motion";

function CareJourneySection() {
  return (
    <Section variant="default" spacing="default">
      <div className="section-stack">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="What to Expect"
            title="Your Care Journey"
            description="We know neurological care can feel overwhelming. Here is exactly what happens from your first call to recovery — so you and your family always know the next step."
          />
        </AnimatedSection>

        <AnimatedSection stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {careJourneySteps.map((step, index) => (
            <motion.div key={step.title} variants={fadeUp}>
              <motion.div
                initial="rest"
                whileHover="hover"
                variants={hoverLift}
                className="relative"
              >
                <Card className="card-premium card-premium-hover ring-0">
                  <CardContent className="space-y-2 px-4 py-4">
                    <div className="flex items-center gap-2.5">
                      <span className="flex size-7 items-center justify-center rounded-full bg-primary/10 font-heading text-xs font-semibold text-primary">
                        {step.step}
                      </span>
                      {index < careJourneySteps.length - 1 ? (
                        <span
                          aria-hidden="true"
                          className="hidden h-px flex-1 bg-linear-to-r from-primary/25 to-transparent lg:block"
                        />
                      ) : null}
                    </div>
                    <h3 className="card-title-compact">{step.title}</h3>
                    <p className="card-desc-compact">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </AnimatedSection>

        <AnimatedSection className="flex justify-center">
          <Button
            nativeButton={false}
            render={
              <Link href="/appointment">
                Book Your Consultation
                <ArrowRight />
              </Link>
            }
            size="lg"
            className="rounded-full bg-secondary px-6 shadow-glow-green hover:bg-secondary/90"
          />
        </AnimatedSection>
      </div>
    </Section>
  );
}

export { CareJourneySection };
