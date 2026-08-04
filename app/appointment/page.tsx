import { AppointmentPageContent } from "@/app/appointment/appointment-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Appointment",
  description:
    "Book an appointment at Center for Neuroscience. Schedule a consultation with our neurology, neurosurgery, and psychiatry specialists.",
  path: "/appointment",
});

export default function AppointmentPage() {
  return <AppointmentPageContent />;
}
