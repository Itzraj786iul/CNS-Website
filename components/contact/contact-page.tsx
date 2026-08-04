import { contactContent } from "@/components/contact/data";
import {
  ContactCardsSection,
  ContactFormSection,
  DepartmentsContactSection,
  EmergencyBannerSection,
  FaqSection,
} from "@/components/contact/contact-sections";
import { PageHero } from "@/components/contact/page-hero";

function ContactPageContent() {
  return (
    <>
      <PageHero title={contactContent.hero.title} description={contactContent.hero.description} />
      <ContactCardsSection />
      <ContactFormSection />
      <DepartmentsContactSection />
      <EmergencyBannerSection />
      <FaqSection />
    </>
  );
}

export { ContactPageContent };
