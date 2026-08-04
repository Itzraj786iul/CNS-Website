import { AboutPreviewSection } from "@/components/home/about-preview-section";
import { AppointmentCtaSection } from "@/components/home/appointment-cta-section";
import { CareJourneySection } from "@/components/home/care-journey-section";
import { ConditionsSection } from "@/components/home/conditions-section";
import { ContactPreviewSection } from "@/components/home/contact-preview-section";
import { DepartmentsPreviewSection } from "@/components/home/departments-preview-section";
import { FacilitiesSection } from "@/components/home/facilities-section";
import { FaqPreviewSection } from "@/components/home/faq-preview-section";
import { HeroSection } from "@/components/home/hero-section";
import { SpecialistsSection } from "@/components/home/specialists-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
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
        className="!pt-3 !pb-6 md:!pt-4 md:!pb-8"
      >
        <EmergencyBanner
          title="Emergency Assistance"
          description="Stroke symptoms, severe headache, seizures, or head injury — call immediately. Our neuro emergency team is ready 24 hours a day, every day."
        />
      </Section>
      <AccreditationStrip variant="compact" />
      <AboutPreviewSection />
      <ConditionsSection />
      <DepartmentsPreviewSection />
      <CareJourneySection />
      <WhyChooseSection />
      <SpecialistsSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <FaqPreviewSection />
      <AppointmentCtaSection />
      <ContactPreviewSection />
    </>
  );
}

export { HomePage };
