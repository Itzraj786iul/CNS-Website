import { FacilitiesPageContent } from "@/components/facilities/facilities-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Facilities",
  description:
    "Explore CNS facilities — MRI, CT, EEG, ICU, modular OT, emergency, laboratory, pharmacy, and ambulance services.",
  path: "/facilities",
});

export default function FacilitiesPage() {
  return <FacilitiesPageContent />;
}
