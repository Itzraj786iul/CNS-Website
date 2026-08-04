import { AboutPreviewSection } from "@/components/home/about-preview-section";
import { AppointmentCtaSection } from "@/components/home/appointment-cta-section";
import { ConditionsSection } from "@/components/home/conditions-section";
import { DepartmentsPreviewSection } from "@/components/home/departments-preview-section";
import { HeroSection } from "@/components/home/hero-section";
import { SpecialistsSection } from "@/components/home/specialists-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { EmergencyBanner } from "@/components/common/emergency-banner";
import { AccreditationStrip } from "@/components/common/accreditation-strip";
import { Section } from "@/components/common/section";

function HomePage() {
  return (
    <>
      <HeroSection />
      <Section
        variant="white"
        spacing="sm"
        contained={true}
        className="!pt-2 !pb-4 md:!pt-3 md:!pb-5"
      >
        <EmergencyBanner
          title="Emergency Assistance"
          description="Stroke, severe headache, seizures, or head injury — call now. Neuro emergency team available 24×7."
        />
      </Section>
      <AccreditationStrip variant="compact" />
      <AboutPreviewSection />
      <ConditionsSection />
      <DepartmentsPreviewSection />
      <SpecialistsSection />
      <TestimonialsSection />
      <AppointmentCtaSection />
    </>
  );
}

export { HomePage };
