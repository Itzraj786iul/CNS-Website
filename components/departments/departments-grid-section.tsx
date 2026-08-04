"use client";

import { DepartmentDetailCard } from "@/components/departments/department-detail-card";
import { CardGridItem, CardGridSection } from "@/components/common/sections";
import { departmentsContent } from "@/components/departments/data";

function DepartmentsGridSection() {
  return (
    <CardGridSection
      variant="default"
      spacing="default"
      className="!pt-6"
      density="listing"
    >
      {departmentsContent.departments.map((dept) => (
        <CardGridItem key={dept.title}>
          <DepartmentDetailCard
            variant="standard"
            title={dept.title}
            description={dept.description}
            icon={dept.icon}
            iconVariant={dept.iconVariant}
            treatments={[...dept.treatments]}
            href={dept.href}
          />
        </CardGridItem>
      ))}
    </CardGridSection>
  );
}

export { DepartmentsGridSection };
