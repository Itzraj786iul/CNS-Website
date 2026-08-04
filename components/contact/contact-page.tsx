import { contactContent } from "@/components/contact/data";
import {
  ContactCardsSection,
  ContactFormSection,
  DepartmentsContactSection,
  EmergencyBannerSection,
  FaqSection,
} from "@/components/contact/contact-sections";
import { PageHero } from "@/components/common/page-hero";
import { PatientConversionCta } from "@/components/common/patient-conversion-cta";

function ContactPageContent() {
  return (
    <>
      <PageHero
        title={contactContent.hero.title}
        description={contactContent.hero.description}
        eyebrow={contactContent.hero.eyebrow}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <ContactCardsSection />
      <ContactFormSection />
      <DepartmentsContactSection />
      <EmergencyBannerSection />
      <FaqSection />
      <PatientConversionCta variant="contact" />
    </>
  );
}

export { ContactPageContent };
