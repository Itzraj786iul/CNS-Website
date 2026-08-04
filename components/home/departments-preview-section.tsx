"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { DepartmentCard } from "@/components/common/department-card";
import { CardGridItem, CardGridSection } from "@/components/common/sections";
import { Button } from "@/components/ui/button";
import { departments } from "@/components/home/data";

function DepartmentsPreviewSection() {
  return (
    <CardGridSection
      variant="default"
      spacing="default"
      density="preview"
      heading={{
        align: "center",
        eyebrow: "Comprehensive Neuroscience Care",
        title: "Integrated Brain & Spine Specialties",
        description:
          "From acute emergencies to long-term rehabilitation — every discipline works together under one roof, so your care never falls through the gaps.",
      }}
      footer={
        <div className="flex justify-center">
          <Button
            nativeButton={false}
            render={
              <Link href="/departments">
                Explore All Specialties
                <ArrowRight />
              </Link>
            }
            variant="outline"
            size="lg"
            className="border-cns-border px-6"
          />
        </div>
      }
    >
      {departments.map((dept) => (
        <CardGridItem key={dept.title}>
          <DepartmentCard
            variant="compact"
            title={dept.title}
            description={dept.description}
            icon={dept.icon}
            href={dept.href}
            iconVariant={dept.iconVariant}
          />
        </CardGridItem>
      ))}
    </CardGridSection>
  );
}

export { DepartmentsPreviewSection };
