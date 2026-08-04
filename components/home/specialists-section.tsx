"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { DoctorCard } from "@/components/common/doctor-card";
import { CardGridItem, CardGridSection } from "@/components/common/sections";
import { Button } from "@/components/ui/button";
import { homepageSpecialists } from "@/components/home/data";

function SpecialistsSection() {
  return (
    <CardGridSection
      variant="default"
      spacing="sm"
      divider
      density="preview"
      heading={{
        eyebrow: "Our Physicians",
        title: "Meet Our Specialists",
        description: "Board-certified experts who listen, explain clearly, and treat you with respect.",
        align: "left",
      }}
      headerAction={
        <Button
          nativeButton={false}
          render={
            <Link href="/doctors">
              View All Doctors
              <ArrowRight />
            </Link>
          }
          variant="outline"
          size="default"
          className="hidden shrink-0 border-cns-border px-4 sm:inline-flex"
        />
      }
      footer={
        <div className="flex justify-center sm:hidden">
          <Button
            nativeButton={false}
            render={
              <Link href="/doctors">
                View All Doctors
                <ArrowRight />
              </Link>
            }
            variant="outline"
            size="default"
            className="border-cns-border px-4"
          />
        </div>
      }
    >
      {homepageSpecialists.map((doctor) => (
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
