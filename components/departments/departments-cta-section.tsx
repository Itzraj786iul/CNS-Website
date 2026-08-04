"use client";

import { departmentsContent } from "@/components/departments/data";
import { CTASection } from "@/components/common/cta-section";

function DepartmentsCtaSection() {
  const { cta } = departmentsContent;

  return (
    <CTASection
      title={cta.title}
      description={cta.description}
      primaryAction={{ label: cta.primaryLabel, href: cta.primaryHref }}
      secondaryAction={{ label: cta.secondaryLabel, href: cta.secondaryHref }}
      variant="navy"
    />
  );
}

export { DepartmentsCtaSection };
