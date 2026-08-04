"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { conditionsWeTreat } from "@/components/home/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { IconBox } from "@/components/common/icon-box";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { fadeUp, hoverLift } from "@/lib/motion";

function ConditionsSection() {
  return (
    <Section variant="white" spacing="default" divider>
      <div className="space-y-8">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Can We Help You?"
            title="Conditions We Treat"
            description="If you or someone you love is facing a brain or spine concern — you are in the right place. Our specialists treat a wide range of neurological conditions under one roof."
          />
        </AnimatedSection>

        <AnimatedSection stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {conditionsWeTreat.map((condition) => (
            <motion.div key={condition.title} variants={fadeUp}>
              <motion.div
                initial="rest"
                whileHover="hover"
                variants={hoverLift}
              >
                <Link
                  href={condition.href}
                  className="group flex flex-col gap-3 rounded-2xl border border-cns-border/60 bg-background p-4 transition-colors hover:border-primary/20 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <IconBox
                    icon={condition.icon}
                    variant={condition.iconVariant}
                    size="sm"
                  />
                  <div className="flex flex-1 flex-col gap-1.5">
                    <h3 className="font-heading text-base font-semibold text-cns-navy">
                      {condition.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {condition.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    Learn more
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </Section>
  );
}

export { ConditionsSection };
