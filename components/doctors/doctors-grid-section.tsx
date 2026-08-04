"use client";

import { motion } from "framer-motion";

import { doctorsContent } from "@/components/doctors/data";
import { DoctorProfileCard } from "@/components/doctors/doctor-profile-card";
import { AnimatedSection } from "@/components/common/animated-section";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { fadeUp } from "@/lib/motion";

function IntroductionSection() {
  return (
    <Section variant="default" spacing="sm" className="!pt-0 !pb-0">
      <AnimatedSection className="mx-auto max-w-3xl text-center">
        <SectionHeading
          align="center"
          eyebrow="Our Physicians"
          title="Meet Our Neuroscience Specialists"
          description={doctorsContent.introduction}
        />
      </AnimatedSection>
    </Section>
  );
}

function DoctorsGridSection() {
  return (
    <Section variant="default" spacing="default" className="!pt-6">
      <AnimatedSection stagger className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {doctorsContent.doctors.map((doctor) => (
          <motion.div key={doctor.id} id={doctor.id} variants={fadeUp}>
            <DoctorProfileCard doctor={doctor} />
          </motion.div>
        ))}
      </AnimatedSection>
    </Section>
  );
}

export { IntroductionSection, DoctorsGridSection };
