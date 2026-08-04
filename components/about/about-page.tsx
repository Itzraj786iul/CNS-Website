import { AboutCnsSection } from "@/components/about/about-cns-section";
import { AboutCtaSection } from "@/components/about/about-cta-section";
import { CoreValuesSection } from "@/components/about/core-values-section";
import { aboutContent } from "@/components/about/data";
import { InfrastructureSection } from "@/components/about/infrastructure-section";
import { JourneySection } from "@/components/about/journey-section";
import { LeadershipSection } from "@/components/about/leadership-section";
import { PageHero } from "@/components/common/page-hero";
import { VisionMissionSection } from "@/components/about/vision-mission-section";

function AboutPageContent() {
  return (
    <>
      <PageHero
        title={aboutContent.hero.title}
        description={aboutContent.hero.description}
        eyebrow={aboutContent.hero.eyebrow}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <AboutCnsSection />
      <VisionMissionSection />
      <CoreValuesSection />
      <JourneySection />
      <LeadershipSection />
      <InfrastructureSection />
      <AboutCtaSection />
    </>
  );
}

export { AboutPageContent };
