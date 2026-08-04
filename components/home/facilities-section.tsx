"use client";

import { FeatureCard } from "@/components/common/feature-card";
import { CardGridItem, CardGridSection } from "@/components/common/sections";
import { facilities } from "@/components/home/data";

function FacilitiesSection() {
  return (
    <CardGridSection
      variant="white"
      spacing="default"
      density="preview"
      heading={{
        align: "center",
        eyebrow: "Clinical Excellence",
        title: "Technology Supporting Better Outcomes",
        description:
          "Every facility is designed for complex neurological care — from rapid emergency imaging to precision surgery and critical recovery.",
      }}
    >
      {facilities.map((facility) => (
        <CardGridItem key={facility.title}>
          <FeatureCard
            variant="compact"
            icon={facility.icon}
            title={facility.title}
            description={facility.description}
            iconVariant={facility.iconVariant}
          />
        </CardGridItem>
      ))}
    </CardGridSection>
  );
}

export { FacilitiesSection };
