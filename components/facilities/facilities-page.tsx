import { facilitiesContent } from "@/components/facilities/data";
import {
  FacilitiesCtaSection,
  GallerySection,
  OverviewSection,
  PatientSafetySection,
  TechnologySection,
} from "@/components/facilities/facilities-sections";
import { PageHero } from "@/components/facilities/page-hero";

function FacilitiesPageContent() {
  return (
    <>
      <PageHero title={facilitiesContent.hero.title} description={facilitiesContent.hero.description} />
      <OverviewSection />
      <GallerySection />
      <TechnologySection />
      <PatientSafetySection />
      <FacilitiesCtaSection />
    </>
  );
}

export { FacilitiesPageContent };
