"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { aboutContent } from "@/components/about/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Tag } from "@/components/common/tag";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, hoverLift } from "@/lib/motion";

function LeadershipSection() {
  return (
    <Section variant="white" spacing="default">
      <div className="section-stack">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Leadership"
            title="Leadership You Can Trust"
            description="Clinicians and administrators united by a shared commitment to patient-centred care, clinical excellence, and institutional integrity."
          />
        </AnimatedSection>

        <AnimatedSection stagger className="grid gap-4 md:grid-cols-3">
          {aboutContent.leadership.map((leader) => (
            <motion.div key={leader.name} variants={fadeUp}>
              <motion.div
                initial="rest"
                whileHover="hover"
                variants={hoverLift}
              >
                <Card className="card-premium card-premium-hover overflow-hidden ring-0">
                  <div className="photo-frame relative aspect-[3/4] max-h-[160px] sm:max-h-[180px]">
                    <Image
                      src={leader.image.src}
                      alt={leader.image.alt}
                      fill
                      className="img-zoom object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <CardContent className="space-y-1.5 px-4 py-4">
                    <Tag variant="blue" className="px-2 py-0.5 text-[10px]">
                      {leader.role}
                    </Tag>
                    <h3 className="card-title-compact text-base">{leader.name}</h3>
                    <p className="text-xs font-medium text-primary">{leader.qualification}</p>
                    <p className="card-desc-compact">{leader.bio}</p>
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

export { LeadershipSection };
