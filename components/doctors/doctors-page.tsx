import { doctorsContent } from "@/components/doctors/data";
import { DoctorsCtaSection } from "@/components/doctors/doctors-cta-section";
import {
  DoctorsGridSection,
  IntroductionSection,
} from "@/components/doctors/doctors-grid-section";
import { FeaturedSection } from "@/components/doctors/featured-section";
import { FilterBar } from "@/components/doctors/filter-bar";
import { PageHero } from "@/components/common/page-hero";
import { StatisticsSection } from "@/components/doctors/statistics-section";

function DoctorsPageContent() {
  return (
    <>
      <PageHero
        title={doctorsContent.hero.title}
        description={doctorsContent.hero.description}
        eyebrow={doctorsContent.hero.eyebrow}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Doctors" }]}
      />
      <IntroductionSection />
      <FilterBar />
      <DoctorsGridSection />
      <FeaturedSection />
      <StatisticsSection />
      <DoctorsCtaSection />
    </>
  );
}

export { DoctorsPageContent };
