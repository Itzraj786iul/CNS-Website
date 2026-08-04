"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { DoctorCard } from "@/components/common/doctor-card";
import { CardGridItem, CardGridSection } from "@/components/common/sections";
import { Button } from "@/components/ui/button";
import { specialists } from "@/components/home/data";

function SpecialistsSection() {
  return (
    <CardGridSection
      variant="default"
      spacing="default"
      divider
      density="preview"
      heading={{
        eyebrow: "Our Physicians",
        title: "Meet Our Neuroscience Specialists",
        description:
          "Board-certified clinicians with advanced fellowship training — chosen for their expertise, and remembered for how they treat people.",
        align: "left",
      }}
      headerAction={
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
          className="hidden shrink-0 border-cns-border px-5 sm:inline-flex"
        />
      }
      footer={
        <div className="flex justify-center sm:hidden">
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
            className="border-cns-border px-5"
          />
        </div>
      }
    >
      {specialists.map((doctor) => (
        <CardGridItem key={doctor.name}>
          <DoctorCard
            variant="compact"
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
        </CardGridItem>
      ))}
    </CardGridSection>
  );
}

export { SpecialistsSection };
