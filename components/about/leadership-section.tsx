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
      <div className="space-y-8">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Leadership"
            title="Leadership You Can Trust"
            description="Clinicians and administrators united by a shared commitment to patient-centred care, clinical excellence, and institutional integrity."
          />
        </AnimatedSection>

        <AnimatedSection stagger className="grid gap-6 md:grid-cols-3">
          {aboutContent.leadership.map((leader) => (
            <motion.div key={leader.name} variants={fadeUp}>
              <motion.div
                initial="rest"
                whileHover="hover"
                variants={hoverLift}
              >
                <Card className="card-premium card-premium-hover overflow-hidden ring-0">
                  <div className="photo-frame relative aspect-[5/6]">
                    <Image
                      src={leader.image.src}
                      alt={leader.image.alt}
                      fill
                      className="img-zoom object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <CardContent className="space-y-3 px-5 py-5">
                    <Tag variant="blue">{leader.role}</Tag>
                    <h3 className="font-heading text-xl font-semibold text-cns-navy">
                      {leader.name}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {leader.qualification}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {leader.bio}
                    </p>
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
