"use client";

import { motion } from "framer-motion";

import { featuredDoctors } from "@/components/doctors/data";
import { DoctorProfileCard } from "@/components/doctors/doctor-profile-card";
import { AnimatedSection } from "@/components/common/animated-section";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { fadeUp } from "@/lib/motion";

function FeaturedSection() {
  return (
    <Section variant="white" spacing="lg">
      <div className="space-y-12">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Clinical Leadership"
            title="Featured Neuroscience Specialists"
            description="Recognised leaders in their fields — combining fellowship training with years of hands-on clinical practice at CNS."
          />
        </AnimatedSection>

        <AnimatedSection stagger className="grid gap-6 md:grid-cols-3">
          {featuredDoctors.map((doctor) => (
            <motion.div key={doctor.id} variants={fadeUp}>
              <DoctorProfileCard doctor={doctor} />
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </Section>
  );
}

export { FeaturedSection };
