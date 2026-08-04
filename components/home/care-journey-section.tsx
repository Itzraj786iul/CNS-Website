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
    <Section variant="default" spacing="xl">
      <div className="space-y-14">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="What to Expect"
            title="Your Care Journey"
            description="We know neurological care can feel overwhelming. Here is exactly what happens from your first call to recovery — so you and your family always know the next step."
          />
        </AnimatedSection>

        <AnimatedSection stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {careJourneySteps.map((step, index) => (
            <motion.div key={step.title} variants={fadeUp}>
              <motion.div
                initial="rest"
                whileHover="hover"
                variants={hoverLift}
                className="relative h-full"
              >
                <Card className="card-premium card-premium-hover h-full ring-0">
                  <CardContent className="space-y-4 px-6 py-7 sm:px-7">
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-semibold text-primary">
                        {step.step}
                      </span>
                      {index < careJourneySteps.length - 1 ? (
                        <span
                          aria-hidden="true"
                          className="hidden h-px flex-1 bg-linear-to-r from-primary/25 to-transparent lg:block"
                        />
                      ) : null}
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-cns-navy">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-[1.75] text-muted-foreground">
                      {step.description}
                    </p>
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
            className="h-12 rounded-full bg-secondary px-7 shadow-glow-green hover:bg-secondary/90"
          />
        </AnimatedSection>
      </div>
    </Section>
  );
}

export { CareJourneySection };
