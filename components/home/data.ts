import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Ambulance,
  Brain,
  BrainCircuit,
  FlaskConical,
  Heart,
  HeartPulse,
  HeartHandshake,
  Microscope,
  Pill,
  Scan,
  ScanLine,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Users,
} from "lucide-react";

import type { FAQItem } from "@/components/common/faq-card";
import { getAppointmentDisplay, getEmergencyTelHref, toTelHref } from "@/lib/contact-links";
import { siteConfig } from "@/lib/constants/site";

export const heroStats = [
  { value: "20", suffix: "+", label: "Subspecialist Physicians" },
  { value: "50,000", suffix: "+", label: "Patients Cared For" },
  { value: "24", suffix: "×7", label: "Emergency Neuro Response" },
  { value: "95", suffix: "%", label: "Patient Recommendation Rate" },
] as const;

export const aboutFeatures = [
  {
    icon: Stethoscope,
    title: "Board-Certified Specialists",
    description:
      "Neurologists, neurosurgeons, and psychiatrists with advanced fellowship training and years of clinical practice.",
    iconVariant: "blue" as const,
  },
  {
    icon: Microscope,
    title: "Precision Diagnostics",
    description:
      "3T MRI, digital EEG, and neuro-navigation for accurate diagnosis and surgical planning.",
    iconVariant: "green" as const,
  },
  {
    icon: HeartHandshake,
    title: "Care Built Around You",
    description:
      "Treatment plans shaped by your goals, your family, and your recovery timeline — not a one-size-fits-all protocol.",
    iconVariant: "orange" as const,
  },
  {
    icon: Ambulance,
    title: "24×7 Neuro Emergency",
    description:
      "Dedicated stroke pathway, neuro ICU beds, and on-call specialists — ready when minutes matter.",
    iconVariant: "navy" as const,
  },
];

export const departments = [
  {
    title: "Neurology",
    description:
      "Comprehensive care for stroke, epilepsy, movement disorders, and neurodegenerative conditions.",
    icon: Brain,
    href: "/departments",
    iconVariant: "blue" as const,
  },
  {
    title: "Neurosurgery",
    description:
      "Minimally invasive and complex brain and spine surgery with advanced intraoperative imaging.",
    icon: BrainCircuit,
    href: "/departments",
    iconVariant: "green" as const,
  },
  {
    title: "Psychiatry",
    description:
      "Evidence-based treatment for mood disorders, anxiety, and complex psychiatric conditions.",
    icon: Heart,
    href: "/departments",
    iconVariant: "orange" as const,
  },
  {
    title: "Clinical Psychology",
    description:
      "Cognitive assessments, psychotherapy, and rehabilitation support for neurological patients.",
    icon: Users,
    href: "/departments",
    iconVariant: "navy" as const,
  },
  {
    title: "Neuro Rehabilitation",
    description:
      "Multidisciplinary programs to restore mobility, speech, and independence after injury.",
    icon: Activity,
    href: "/departments",
    iconVariant: "blue" as const,
  },
  {
    title: "Pain Medicine",
    description:
      "Interventional and medical management for chronic neuropathic and spine-related pain.",
    icon: Pill,
    href: "/departments",
    iconVariant: "green" as const,
  },
];

export const whyChooseFeatures: {
  icon: LucideIcon;
  title: string;
  description: string;
  iconVariant: "blue" | "green" | "orange" | "navy";
}[] = [
  {
    icon: Stethoscope,
    title: "Experienced Clinicians",
    description:
      "A senior team with decades of combined experience across neurology, neurosurgery, and psychiatry.",
    iconVariant: "blue",
  },
  {
    icon: Scan,
    title: "Clinical Technology",
    description:
      "Advanced imaging, monitoring, and surgical systems — integrated under one roof in Raipur.",
    iconVariant: "green",
  },
  {
    icon: HeartHandshake,
    title: "Patient-First Approach",
    description:
      "Plain-language explanations, shared decisions, and support for families at every stage of care.",
    iconVariant: "orange",
  },
  {
    icon: ShieldCheck,
    title: "Evidence-Based Treatment",
    description:
      "Protocols aligned with international guidelines and the latest clinical research.",
    iconVariant: "navy",
  },
  {
    icon: Ambulance,
    title: "Emergency Support",
    description:
      "Immediate access to stroke protocols, neuro ICU beds, and on-call specialists.",
    iconVariant: "blue",
  },
  {
    icon: Microscope,
    title: "Advanced Diagnostics",
    description:
      "Integrated lab, imaging, and neurophysiology for faster, more accurate results.",
    iconVariant: "green",
  },
];

export const specialists = [
  {
    name: "Dr. Ananya Sharma",
    title: "MD, DM (Neurology)",
    department: "15+ Years Experience",
    image: {
      src: "https://placehold.co/400x500/EEF4F9/16324A/png?font=roboto&text=Dr.+Sharma",
      alt: "Dr. Ananya Sharma, Neurologist",
    },
    href: "/doctors",
  },
  {
    name: "Dr. Rajesh Menon",
    title: "MCh (Neurosurgery)",
    department: "18+ Years Experience",
    image: {
      src: "https://placehold.co/400x500/E7EEF5/1F7CC6/png?font=roboto&text=Dr.+Menon",
      alt: "Dr. Rajesh Menon, Neurosurgeon",
    },
    href: "/doctors",
  },
  {
    name: "Dr. Priya Nair",
    title: "MD (Psychiatry)",
    department: "12+ Years Experience",
    image: {
      src: "https://placehold.co/400x500/F8FBFD/7DBD24/png?font=roboto&text=Dr.+Nair",
      alt: "Dr. Priya Nair, Psychiatrist",
    },
    href: "/doctors",
  },
  {
    name: "Dr. Vikram Patel",
    title: "DM (Neuro Rehabilitation)",
    department: "10+ Years Experience",
    image: {
      src: "https://placehold.co/400x500/FFFFFF/16324A/png?font=roboto&text=Dr.+Patel",
      alt: "Dr. Vikram Patel, Rehabilitation Specialist",
    },
    href: "/doctors",
  },
];

export const facilities = [
  {
    icon: Scan,
    title: "MRI",
    description: "High-field 3T MRI with advanced neuroimaging protocols.",
    iconVariant: "blue" as const,
  },
  {
    icon: ScanLine,
    title: "CT Scan",
    description: "Low-dose multi-slice CT for rapid emergency and routine scans.",
    iconVariant: "green" as const,
  },
  {
    icon: Syringe,
    title: "Operation Theatre",
    description: "Modular OTs equipped for complex brain and spine procedures.",
    iconVariant: "orange" as const,
  },
  {
    icon: HeartPulse,
    title: "ICU",
    description: "Dedicated neuro ICU with continuous monitoring and ventilator support.",
    iconVariant: "navy" as const,
  },
  {
    icon: Ambulance,
    title: "Emergency",
    description: "24×7 triage, stroke pathway, and critical care stabilization.",
    iconVariant: "blue" as const,
  },
  {
    icon: FlaskConical,
    title: "Laboratory",
    description: "In-house pathology and specialized neuro diagnostic testing.",
    iconVariant: "green" as const,
  },
];

export const testimonials = [
  {
    quote:
      "After my stroke, the CNS team explained every step clearly. Their clarity and compassion made a frightening time feel manageable.",
    author: "Meera Krishnan",
    role: "Stroke Recovery Patient",
    avatar:
      "https://placehold.co/80x80/1F7CC6/FFFFFF/png?font=roboto&text=MK",
    rating: 5,
  },
  {
    quote:
      "The neurosurgery team walked me through every option before surgery. I felt prepared, informed, and genuinely cared for throughout recovery.",
    author: "Arjun Desai",
    role: "Spine Surgery Patient",
    avatar:
      "https://placehold.co/80x80/7DBD24/FFFFFF/png?font=roboto&text=AD",
    rating: 5,
  },
  {
    quote:
      "From diagnosis to rehabilitation, every department worked as one team. CNS made us feel heard — not just treated.",
    author: "Sunita Rao",
    role: "Epilepsy Care Patient",
    avatar:
      "https://placehold.co/80x80/F7941D/FFFFFF/png?font=roboto&text=SR",
    rating: 5,
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "What conditions does the Center for Neuroscience treat?",
    answer:
      "We provide care for stroke, epilepsy, brain tumors, spine disorders, movement disorders, dementia, psychiatric conditions, chronic pain, and neurotrauma. Our departments cover the full spectrum of brain and spine health.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can schedule online through our Appointment page, call our front desk during business hours, or walk in for emergency and urgent neurological care available 24 hours a day.",
  },
  {
    question: "Do you accept health insurance?",
    answer:
      "Yes. We work with most major insurance providers and offer guidance on pre-authorization, billing, and payment plans. Our team can verify your coverage before your visit.",
  },
  {
    question: "What should I bring to my first consultation?",
    answer:
      "Please bring a valid ID, insurance details, a list of current medications, and any prior medical records, imaging CDs, or reports related to your condition.",
  },
  {
    question: "Is emergency neurological care available at all hours?",
    answer:
      "Yes. Our emergency department and stroke team are available 24×7, with rapid imaging, neurology consultation, and neuro ICU admission when required.",
  },
];

export const contactCards = [
  {
    icon: "phone" as const,
    title: "Appointments",
    value: getAppointmentDisplay(),
    href: siteConfig.contact.phone
      ? toTelHref(siteConfig.contact.phone)
      : "/appointment",
    description: "Mon–Sat, 8:00 AM – 8:00 PM",
  },
  {
    icon: "email" as const,
    title: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    description: "We respond within one business day",
  },
  {
    icon: "location" as const,
    title: "Location",
    value: siteConfig.location,
    href: "/contact",
    description: "Parking and wheelchair access available",
  },
  {
    icon: "emergency" as const,
    title: "Emergency Line",
    value: siteConfig.contact.emergency,
    href: getEmergencyTelHref(),
    description: "24×7 neurological emergency line",
  },
];
