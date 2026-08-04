import { ServicesPageContent } from "@/components/services/services-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore CNS neurological services — stroke care, epilepsy, brain and spine disorders, mental health, pain management, and rehabilitation.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesPageContent />;
}
