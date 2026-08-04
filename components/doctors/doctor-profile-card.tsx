"use client";

import type { DoctorProfile } from "@/components/doctors/data";
import { DoctorCard } from "@/components/common/doctor-card";
import type { CardVariant } from "@/lib/card-variants";
import { cn } from "@/lib/utils";

type DoctorProfileCardProps = {
  doctor: DoctorProfile;
  variant?: CardVariant;
  className?: string;
};

function DoctorProfileCard({
  doctor,
  variant = "detailed",
  className,
}: DoctorProfileCardProps) {
  return (
    <DoctorCard
      variant={variant}
      name={doctor.name}
      title={doctor.designation}
      qualification={doctor.qualification}
      experience={doctor.experience}
      specializations={doctor.specializations}
      intro={doctor.bio}
      available={doctor.available}
      showQuickActions
      image={doctor.image}
      href={`/doctors#${doctor.id}`}
      className={cn(className)}
    />
  );
}

export { DoctorProfileCard };
export type { DoctorProfileCardProps };
