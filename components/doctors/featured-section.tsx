"use client";

import { DoctorProfileCard } from "@/components/doctors/doctor-profile-card";
import { CardGridItem, CardGridSection } from "@/components/common/sections";
import { featuredDoctors } from "@/components/doctors/data";

function FeaturedSection() {
  return (
    <CardGridSection
      variant="white"
      spacing="default"
      density="listing"
      heading={{
        align: "center",
        eyebrow: "Clinical Leadership",
        title: "Featured Neuroscience Specialists",
        description:
          "Recognised leaders in their fields — combining fellowship training with years of hands-on clinical practice at CNS.",
      }}
    >
      {featuredDoctors.map((doctor) => (
        <CardGridItem key={doctor.id}>
          <DoctorProfileCard doctor={doctor} variant="standard" />
        </CardGridItem>
      ))}
    </CardGridSection>
  );
}

export { FeaturedSection };
