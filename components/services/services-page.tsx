import { servicesContent } from "@/components/services/data";
import { PageHero } from "@/components/common/page-hero";
import { ServicesCtaSection } from "@/components/services/services-cta-section";
import { OverviewSection, ServicesGridSection } from "@/components/services/services-grid-section";
import { TreatmentProcessSection } from "@/components/services/treatment-process-section";
import { WhyChooseSection } from "@/components/services/why-choose-section";

function ServicesPageContent() {
  return (
    <>
      <PageHero
        title={servicesContent.hero.title}
        description={servicesContent.hero.description}
        eyebrow={servicesContent.hero.eyebrow}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <OverviewSection />
      <ServicesGridSection />
      <TreatmentProcessSection />
      <WhyChooseSection />
      <ServicesCtaSection />
    </>
  );
}

export { ServicesPageContent };
