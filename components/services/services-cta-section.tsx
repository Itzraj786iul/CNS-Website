import { servicesContent } from "@/components/services/data";
import { CTASection } from "@/components/common/cta-section";

function ServicesCtaSection() {
  const { cta } = servicesContent;
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

export { ServicesCtaSection };
