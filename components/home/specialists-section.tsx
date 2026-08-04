"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { specialists } from "@/components/home/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { DoctorCard } from "@/components/common/doctor-card";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/motion";

function SpecialistsSection() {
  return (
    <Section variant="default" spacing="xl" divider>
      <div className="space-y-14">
        <AnimatedSection className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Our Physicians"
            title="Meet Our Neuroscience Specialists"
            description="Board-certified clinicians with advanced fellowship training — chosen for their expertise, and remembered for how they treat people."
          />
          <Button
            nativeButton={false}
            render={
              <Link href="/doctors">
                Consult Our Experts
                <ArrowRight />
              </Link>
            }
            variant="outline"
            size="lg"
            className="hidden h-12 shrink-0 border-cns-border px-6 sm:inline-flex"
          />
        </AnimatedSection>

        <AnimatedSection stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specialists.map((doctor) => (
            <motion.div key={doctor.name} variants={fadeUp}>
              <DoctorCard
                name={doctor.name}
                title={doctor.title}
                department={doctor.department}
                specializations={doctor.specializations}
                intro={doctor.intro}
                available={doctor.available}
                showQuickActions
                image={doctor.image}
                href={doctor.href}
              />
            </motion.div>
          ))}
        </AnimatedSection>

        <AnimatedSection className="flex justify-center sm:hidden">
          <Button
            nativeButton={false}
            render={
              <Link href="/doctors">
                Consult Our Experts
                <ArrowRight />
              </Link>
            }
            variant="outline"
            size="lg"
            className="h-12 border-cns-border px-6"
          />
        </AnimatedSection>
      </div>
    </Section>
  );
}

export { SpecialistsSection };
