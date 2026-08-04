"use client";

import { motion } from "framer-motion";

import { conditionsWeTreat } from "@/components/home/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { ConditionCard } from "@/components/common/condition-card";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { getCardGridClass } from "@/lib/card-variants";
import { fadeUp } from "@/lib/motion";

function ConditionsSection() {
  return (
    <Section variant="white" spacing="default" divider>
      <div className="section-stack">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Can We Help You?"
            title="Conditions We Treat"
            description="If you or someone you love is facing a brain or spine concern — you are in the right place. Our specialists treat a wide range of neurological conditions under one roof."
          />
        </AnimatedSection>

        <AnimatedSection stagger className={getCardGridClass("compact")}>
          {conditionsWeTreat.map((condition) => (
            <motion.div key={condition.title} variants={fadeUp}>
              <ConditionCard
                variant="compact"
                title={condition.title}
                description={condition.description}
                icon={condition.icon}
                href={condition.href}
                iconVariant={condition.iconVariant}
              />
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </Section>
  );
}

export { ConditionsSection };
