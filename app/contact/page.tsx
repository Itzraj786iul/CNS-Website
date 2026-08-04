import { ContactPageContent } from "@/components/contact/contact-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact the Center for Neuroscience — phone, email, emergency line, address, hospital timings, and department contacts.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageContent />;
}
