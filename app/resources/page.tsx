import { ResourcesPageContent } from "@/components/resources/resources-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Patient Resources",
  description:
    "Patient resources at CNS — download forms, insurance information, visitor guidelines, FAQs, and emergency information.",
  path: "/resources",
});

export default function ResourcesPage() {
  return <ResourcesPageContent />;
}
