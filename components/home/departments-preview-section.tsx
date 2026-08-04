"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { DepartmentCard } from "@/components/common/department-card";
import { CardGridItem, CardGridSection } from "@/components/common/sections";
import { Button } from "@/components/ui/button";
import { homepageDepartments } from "@/components/home/data";

function DepartmentsPreviewSection() {
  return (
    <CardGridSection
      variant="default"
      spacing="sm"
      divider
      density="preview"
      heading={{
        align: "center",
        eyebrow: "Comprehensive Care",
        title: "Integrated Brain & Spine Specialties",
        description:
          "Neurology, neurosurgery, psychiatry, and rehabilitation — one coordinated team.",
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
            size="default"
            className="border-cns-border px-5"
          />
        </div>
      }
    >
      {homepageDepartments.map((dept) => (
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
