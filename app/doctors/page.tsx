import { DoctorsPageContent } from "@/components/doctors/doctors-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Doctors",
  description:
    "Meet the specialists at Center for Neuroscience — neurologists, neurosurgeons, psychiatrists, and rehabilitation experts.",
  path: "/doctors",
});

export default function DoctorsPage() {
  return <DoctorsPageContent />;
}
