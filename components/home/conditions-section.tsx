"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ConditionCard } from "@/components/common/condition-card";
import { CardGridItem, CardGridSection } from "@/components/common/sections";
import { Button } from "@/components/ui/button";
import { homepageConditions } from "@/components/home/data";

function ConditionsSection() {
  return (
    <CardGridSection
      variant="white"
      spacing="sm"
      divider
      density="preview"
      heading={{
        align: "center",
        eyebrow: "Can We Help You?",
        title: "Conditions We Treat",
        description:
          "Stroke, epilepsy, spine disorders, and more — subspecialist care under one roof.",
      }}
      footer={
        <div className="flex justify-center">
          <Button
            nativeButton={false}
            render={
              <Link href="/services">
                View All Services
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
      {homepageConditions.map((condition) => (
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
