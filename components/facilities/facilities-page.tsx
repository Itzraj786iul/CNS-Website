import { facilitiesContent } from "@/components/facilities/data";
import {
  FacilitiesCtaSection,
  GallerySection,
  OverviewSection,
  PatientSafetySection,
  TechnologySection,
} from "@/components/facilities/facilities-sections";
import { EmergencyBanner } from "@/components/common/emergency-banner";
import { PageHero } from "@/components/common/page-hero";
import { Section } from "@/components/common/section";

function FacilitiesPageContent() {
  return (
    <>
      <PageHero
        title={facilitiesContent.hero.title}
        description={facilitiesContent.hero.description}
        eyebrow={facilitiesContent.hero.eyebrow}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Facilities" }]}
      />
      <OverviewSection />
      <GallerySection />
      <TechnologySection />
      <PatientSafetySection />
      <Section variant="default" spacing="sm" contained={true}>
        <EmergencyBanner />
      </Section>
      <FacilitiesCtaSection />
    </>
  );
}

export { FacilitiesPageContent };
