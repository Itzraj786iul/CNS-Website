import { AboutPreviewSection } from "@/components/home/about-preview-section";
import { AppointmentCtaSection } from "@/components/home/appointment-cta-section";
import { ContactPreviewSection } from "@/components/home/contact-preview-section";
import { DepartmentsPreviewSection } from "@/components/home/departments-preview-section";
import { FacilitiesSection } from "@/components/home/facilities-section";
import { FaqPreviewSection } from "@/components/home/faq-preview-section";
import { HeroSection } from "@/components/home/hero-section";
import { SpecialistsSection } from "@/components/home/specialists-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { EmergencyBanner } from "@/components/common/emergency-banner";
import { Section } from "@/components/common/section";

function HomePage() {
  return (
    <>
      <HeroSection />
      <Section variant="white" spacing="sm" contained={true} className="!pt-0">
        <EmergencyBanner />
      </Section>
      <AboutPreviewSection />
      <DepartmentsPreviewSection />
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
