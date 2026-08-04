import { facilitiesContent } from "@/components/facilities/data";
import {
  FacilitiesCtaSection,
  GallerySection,
  OverviewSection,
  PatientSafetySection,
  TechnologySection,
} from "@/components/facilities/facilities-sections";
import { PageHero } from "@/components/common/page-hero";

function FacilitiesPageContent() {
  return (
    <>
      <PageHero
        title={facilitiesContent.hero.title}
        description={facilitiesContent.hero.description}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Facilities" }]}
      />
      <OverviewSection />
      <GallerySection />
      <TechnologySection />
      <PatientSafetySection />
      <FacilitiesCtaSection />
    </>
  );
}

export { FacilitiesPageContent };
