import { contactContent } from "@/components/contact/data";
import {
  ContactCardsSection,
  ContactFormSection,
  DepartmentsContactSection,
  EmergencyBannerSection,
  FaqSection,
} from "@/components/contact/contact-sections";
import { PageHero } from "@/components/common/page-hero";

function ContactPageContent() {
  return (
    <>
      <PageHero
        title={contactContent.hero.title}
        description={contactContent.hero.description}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <ContactCardsSection />
      <ContactFormSection />
      <DepartmentsContactSection />
      <EmergencyBannerSection />
      <FaqSection />
    </>
  );
}

export { ContactPageContent };
