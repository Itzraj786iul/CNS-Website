import { CTASection } from "@/components/common/cta-section";
import { WHATSAPP_URL } from "@/lib/contact-links";
import { getEmergencyTelHref } from "@/lib/contact-links";

type PatientConversionCtaProps = {
  variant?: "consultation" | "specialist" | "emergency" | "contact";
  className?: string;
};

const presets = {
  consultation: {
    title: "Ready to Take the Next Step?",
    description:
      "Our care coordinators will help you find the right specialist, prepare your records, and answer any questions — usually within one business day.",
    primary: { label: "Book Your Consultation", href: "/appointment" },
    secondary: { label: "Chat With Our Care Team", href: WHATSAPP_URL },
  },
  specialist: {
    title: "Talk to a Neuroscience Specialist",
    description:
      "Not sure which department you need? Speak with our team — we will guide you to the right specialist based on your symptoms and medical history.",
    primary: { label: "Book Your Consultation", href: "/appointment" },
    secondary: { label: "Chat With Our Care Team", href: WHATSAPP_URL },
  },
  emergency: {
    title: "Need Immediate Neurological Help?",
    description:
      "If you or someone you know has stroke symptoms, seizures, severe headache, or head injury — do not wait. Our emergency team is available 24 hours a day.",
    primary: { label: "Call Emergency Line", href: getEmergencyTelHref() },
    secondary: { label: "Book Your Consultation", href: "/appointment" },
  },
  contact: {
    title: "We Are Here to Help You",
    description:
      "Whether you need an appointment, a referral, or simply have questions about your care — our team responds with clarity and compassion.",
    primary: { label: "Book Your Consultation", href: "/appointment" },
    secondary: { label: "Chat With Our Care Team", href: WHATSAPP_URL },
  },
} as const;

function PatientConversionCta({
  variant = "consultation",
  className,
}: PatientConversionCtaProps) {
  const preset = presets[variant];

  return (
    <CTASection
      className={className}
      title={preset.title}
      description={preset.description}
      primaryAction={preset.primary}
      secondaryAction={preset.secondary}
      variant="navy"
    />
  );
}

export { PatientConversionCta };
