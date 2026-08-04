import type { FAQItem } from "@/components/common/faq-card";

import { siteConfig } from "@/lib/constants/site";

export const resourcesContent = {
  hero: {
    eyebrow: "Patient Resources",
    title: "Prepare for Your Visit",
    description:
      "Forms, insurance guidance, visitor policies, and practical information to help you arrive informed and confident at CNS.",
  },
  downloads: [
    { title: "New Patient Registration Form", type: "PDF", size: "245 KB" },
    { title: "Medical Records Request Form", type: "PDF", size: "180 KB" },
    { title: "Insurance Pre-Authorization Form", type: "PDF", size: "210 KB" },
    { title: "Consent for Treatment", type: "PDF", size: "156 KB" },
    { title: "Discharge Summary Request", type: "PDF", size: "132 KB" },
  ],
  insurance: {
    title: "Insurance Information",
    description:
      "CNS accepts most major health insurance plans. Our billing team assists with pre-authorization, claim submission, and payment plan options.",
    points: [
      "Cashless facility available for empanelled insurance providers",
      "Pre-authorization support for planned procedures and admissions",
      "Transparent billing with itemized estimates before treatment",
      "Financial counseling available for uninsured and self-pay patients",
    ],
  },
  patientGuidelines: [
    { title: "Before Your Visit", items: ["Carry a valid photo ID and insurance card", "Bring prior medical records and imaging CDs", "Arrive 15 minutes before your appointment", "List all current medications with dosages"] },
    { title: "During Admission", items: ["One attendant pass issued for ward visits", "Follow nursing staff instructions at all times", "Inform staff of any allergies or reactions", "Keep valuables secured or at home"] },
  ],
  visitorGuidelines: [
    "Visiting hours: 11:00 AM – 1:00 PM and 5:00 PM – 7:00 PM daily",
    "Maximum two visitors per patient at a time",
    "Children under 12 must be accompanied by an adult",
    "ICU visiting is restricted — check with the nursing station",
    "Maintain silence in clinical areas and switch phones to silent mode",
  ],
  faq: [
    {
      question: "How do I obtain my medical records?",
      answer: "Submit a completed Medical Records Request Form at the front desk or email records@cns.org with valid ID. Records are typically available within 3–5 business days.",
    },
    {
      question: "What insurance plans do you accept?",
      answer: `We work with most major public and private insurance providers. Contact our billing desk at ${siteConfig.contact.emergency} to verify your specific plan coverage.`,
    },
    {
      question: "Can I request a specific doctor?",
      answer: "Yes. When booking your appointment, indicate your preferred specialist. If unavailable, our coordinators will suggest the next available subspecialist.",
    },
    {
      question: "Is parking available for visitors?",
      answer: "Free parking is available in the basement and surface lots. Valet service is offered at the main entrance during outpatient hours.",
    },
  ] satisfies FAQItem[],
  emergency: {
    title: "Emergency Information",
    description:
      "For stroke symptoms, severe head injury, seizures, or sudden neurological changes — do not wait. Call our emergency line or proceed directly to the emergency department.",
    phone: siteConfig.contact.emergency,
    signs: [
      "Sudden weakness or numbness on one side",
      "Difficulty speaking or understanding speech",
      "Severe headache with no known cause",
      "Loss of consciousness or seizure activity",
      "Sudden vision changes or loss of balance",
    ],
  },
  cta: {
    title: "Questions About Your Care?",
    description:
      "Our patient services team can help you prepare for your visit, understand insurance, and connect you with the right specialist.",
    primaryLabel: "Book Your Consultation",
    primaryHref: "/appointment",
    secondaryLabel: "Chat With Our Care Team",
    secondaryHref: "https://wa.me/917389321886?text=Hello%20I%20would%20like%20to%20know%20more%20about%20the%20services%20offered%20by%20Center%20for%20Neuroscience.",
  },
} as const;
