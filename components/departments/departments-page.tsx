import { departmentsContent } from "@/components/departments/data";
import { DepartmentsCtaSection } from "@/components/departments/departments-cta-section";
import { DepartmentsGridSection } from "@/components/departments/departments-grid-section";
import { OverviewSection } from "@/components/departments/overview-section";
import { PageHero } from "@/components/common/page-hero";
import { TechnologySection } from "@/components/departments/technology-section";
import { WhyDepartmentsSection } from "@/components/departments/why-departments-section";

function DepartmentsPageContent() {
  return (
    <>
      <PageHero
        title={departmentsContent.hero.title}
        description={departmentsContent.hero.description}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Departments" }]}
      />
      <OverviewSection />
      <DepartmentsGridSection />
      <WhyDepartmentsSection />
      <TechnologySection />
      <DepartmentsCtaSection />
    </>
  );
}

export { DepartmentsPageContent };
