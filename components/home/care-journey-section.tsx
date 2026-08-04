"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CardGridItem, CardGridSection } from "@/components/common/sections";
import { StepCard } from "@/components/common/step-card";
import { Button } from "@/components/ui/button";
import { careJourneySteps } from "@/components/home/data";

function CareJourneySection() {
  return (
    <CardGridSection
      variant="default"
      spacing="default"
      density="preview"
      heading={{
        align: "center",
        eyebrow: "What to Expect",
        title: "Your Care Journey",
        description:
          "We know neurological care can feel overwhelming. Here is exactly what happens from your first call to recovery — so you and your family always know the next step.",
      }}
      footer={
        <div className="flex justify-center">
          <Button
            nativeButton={false}
            render={
              <Link href="/appointment">
                Book Your Consultation
                <ArrowRight />
              </Link>
            }
            size="lg"
            className="rounded-full bg-secondary px-6 shadow-glow-green hover:bg-secondary/90"
          />
        </div>
      }
    >
      {careJourneySteps.map((step, index) => (
        <CardGridItem key={step.title}>
          <StepCard
            step={step.step}
            title={step.title}
            description={step.description}
            showConnector={index < careJourneySteps.length - 1}
            density="preview"
          />
        </CardGridItem>
      ))}
    </CardGridSection>
  );
}

export { CareJourneySection };
