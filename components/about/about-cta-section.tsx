import { aboutContent } from "@/components/about/data";
import { CTASection } from "@/components/common/cta-section";

function AboutCtaSection() {
  const { cta } = aboutContent;

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

export { AboutCtaSection };
