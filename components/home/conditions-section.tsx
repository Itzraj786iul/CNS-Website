"use client";

import { ConditionCard } from "@/components/common/condition-card";
import { CardGridItem, CardGridSection } from "@/components/common/sections";
import { conditionsWeTreat } from "@/components/home/data";

function ConditionsSection() {
  return (
    <CardGridSection
      variant="white"
      spacing="default"
      divider
      density="preview"
      heading={{
        align: "center",
        eyebrow: "Can We Help You?",
        title: "Conditions We Treat",
        description:
          "If you or someone you love is facing a brain or spine concern — you are in the right place. Our specialists treat a wide range of neurological conditions under one roof.",
      }}
    >
      {conditionsWeTreat.map((condition) => (
        <CardGridItem key={condition.title}>
          <ConditionCard
            variant="compact"
            title={condition.title}
            description={condition.description}
            icon={condition.icon}
            href={condition.href}
            iconVariant={condition.iconVariant}
          />
        </CardGridItem>
      ))}
    </CardGridSection>
  );
}

export { ConditionsSection };
