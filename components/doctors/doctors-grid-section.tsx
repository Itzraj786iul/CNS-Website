"use client";

import { DoctorProfileCard } from "@/components/doctors/doctor-profile-card";
import { CardGridItem, CardGridSection } from "@/components/common/sections";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { AnimatedSection } from "@/components/common/animated-section";
import { doctorsContent } from "@/components/doctors/data";

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
    <CardGridSection
      variant="default"
      spacing="default"
      className="!pt-6"
      density="detail"
    >
      {doctorsContent.doctors.map((doctor) => (
        <CardGridItem key={doctor.id}>
          <div id={doctor.id}>
            <DoctorProfileCard doctor={doctor} variant="detailed" />
          </div>
        </CardGridItem>
      ))}
    </CardGridSection>
  );
}

export { IntroductionSection, DoctorsGridSection };
