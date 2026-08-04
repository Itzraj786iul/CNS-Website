import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Ambulance,
  Brain,
  BrainCircuit,
  FlaskConical,
  Heart,
  HeartHandshake,
  HeartPulse,
  Microscope,
  Pill,
  Scan,
  ScanLine,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Users,
  Wind,
  Zap,
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

export const conditionsWeTreat = [
  {
    title: "Stroke",
    description: "Rapid diagnosis and treatment when every minute protects brain function.",
    icon: Zap,
    href: "/departments",
    iconVariant: "blue" as const,
  },
  {
    title: "Epilepsy",
    description: "Specialist care to reduce seizures and restore daily confidence.",
    icon: Activity,
    href: "/departments",
    iconVariant: "green" as const,
  },
  {
    title: "Migraine",
    description: "Relief for chronic and severe headaches that disrupt your life.",
    icon: Brain,
    href: "/services",
    iconVariant: "orange" as const,
  },
  {
    title: "Parkinson's Disease",
    description: "Movement disorder care to help you stay independent longer.",
    icon: Activity,
    href: "/departments",
    iconVariant: "navy" as const,
  },
  {
    title: "Memory Disorders",
    description: "Compassionate evaluation and support for dementia and cognitive decline.",
    icon: BrainCircuit,
    href: "/departments",
    iconVariant: "blue" as const,
  },
  {
    title: "Brain Tumors",
    description: "Multidisciplinary planning from diagnosis through treatment and recovery.",
    icon: Scan,
    href: "/departments",
    iconVariant: "green" as const,
  },
  {
    title: "Spine Disorders",
    description: "Medical and surgical options for back pain, disc disease, and cord compression.",
    icon: ScanLine,
    href: "/departments",
    iconVariant: "orange" as const,
  },
  {
    title: "Vertigo",
    description: "Specialist assessment to find the cause of dizziness and restore balance.",
    icon: Wind,
    href: "/services",
    iconVariant: "navy" as const,
  },
  {
    title: "Balance Disorders",
    description: "Rehabilitation and treatment to help you move safely again.",
    icon: HeartPulse,
    href: "/departments",
    iconVariant: "blue" as const,
  },
  {
    title: "Nerve Pain",
    description: "Targeted relief for neuropathic and chronic nerve-related pain.",
    icon: Pill,
    href: "/departments",
    iconVariant: "green" as const,
  },
];

export const careJourneySteps = [
  {
    step: "1",
    title: "Book Appointment",
    description:
      "Call, message us on WhatsApp, or book online. A coordinator confirms your visit and helps you prepare.",
  },
  {
    step: "2",
    title: "Meet Our Specialist",
    description:
      "Your doctor listens carefully, reviews your history, and explains your condition in plain language.",
  },
  {
    step: "3",
    title: "Advanced Diagnosis",
    description:
      "MRI, CT, EEG, or lab tests as needed — often on the same campus, so results come faster.",
  },
  {
    step: "4",
    title: "Personalised Treatment",
    description:
      "A plan built around you — medication, procedure, or surgery — with your family involved in every decision.",
  },
  {
    step: "5",
    title: "Recovery & Rehabilitation",
    description:
      "Physiotherapy, speech therapy, and psychological support to help you regain independence.",
  },
  {
    step: "6",
    title: "Continuous Follow-Up",
    description:
      "Regular check-ins to monitor progress, adjust treatment, and support your long-term wellbeing.",
  },
];

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
    icon: Users,
    title: "Experienced Neuroscience Team",
    description:
      "Board-certified specialists with years of experience treating complex brain and spine conditions.",
    iconVariant: "blue",
  },
  {
    icon: BrainCircuit,
    title: "Integrated Brain & Spine Care",
    description:
      "Neurology, neurosurgery, psychiatry, and rehabilitation work together — so nothing falls through the cracks.",
    iconVariant: "green",
  },
  {
    icon: Scan,
    title: "Advanced Diagnostic Technology",
    description:
      "3T MRI, digital EEG, and neuro-navigation help us find answers faster and plan treatment with precision.",
    iconVariant: "orange",
  },
  {
    icon: HeartHandshake,
    title: "Personalised Treatment Plans",
    description:
      "Your care plan reflects your goals, your family, and your life — not a one-size-fits-all protocol.",
    iconVariant: "navy",
  },
  {
    icon: Ambulance,
    title: "24×7 Emergency Support",
    description:
      "Stroke and neurotrauma teams ready around the clock — because neurological emergencies cannot wait.",
    iconVariant: "blue",
  },
  {
    icon: Stethoscope,
    title: "Transparent Communication",
    description:
      "We explain your diagnosis and options clearly, so you and your family can make confident decisions together.",
    iconVariant: "green",
  },
  {
    icon: ShieldCheck,
    title: "Evidence-Based Care",
    description:
      "Treatment guided by international clinical guidelines and the latest neuroscience research.",
    iconVariant: "orange",
  },
  {
    icon: Heart,
    title: "Compassionate Recovery Support",
    description:
      "Rehabilitation and follow-up care designed to help you heal — physically, emotionally, and with dignity.",
    iconVariant: "navy",
  },
];

export const specialists = [
  {
    name: "Dr. Ananya Sharma",
    title: "MD, DM (Neurology)",
    department: "15+ Years Experience",
    specializations: ["Stroke", "Epilepsy", "Movement Disorders"],
    intro:
      "Walks patients and families through stroke and epilepsy care with clarity, patience, and compassion.",
    available: true,
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
    specializations: ["Brain Tumors", "Spine Surgery", "Vascular"],
    intro:
      "Explains every surgical option in plain language so you feel informed and confident before treatment.",
    available: true,
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
    specializations: ["Mood Disorders", "Anxiety", "Neuropsychiatry"],
    intro:
      "Creates a safe space for patients and families navigating mental health alongside neurological conditions.",
    available: true,
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
    specializations: ["Stroke Recovery", "Mobility", "Speech Therapy"],
    intro:
      "Guides recovery with realistic goals — helping patients regain independence step by step.",
    available: true,
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
    description:
      "High-resolution 3T MRI for faster, more accurate neurological diagnosis — often with same-day reporting.",
    iconVariant: "blue" as const,
  },
  {
    icon: ScanLine,
    title: "CT Scan",
    description:
      "Rapid low-dose CT for stroke and trauma emergencies — critical when every minute saves brain tissue.",
    iconVariant: "green" as const,
  },
  {
    icon: Syringe,
    title: "Operation Theatre",
    description:
      "Modular theatres with neuro-navigation — so complex brain and spine surgery is safer and more precise.",
    iconVariant: "orange" as const,
  },
  {
    icon: HeartPulse,
    title: "Neuro ICU",
    description:
      "Dedicated critical care with continuous monitoring — for patients who need the closest medical attention.",
    iconVariant: "navy" as const,
  },
  {
    icon: Ambulance,
    title: "Emergency",
    description:
      "24×7 stroke pathway and triage — our team is ready the moment you or your family needs urgent help.",
    iconVariant: "blue" as const,
  },
  {
    icon: FlaskConical,
    title: "Laboratory",
    description:
      "In-house neuro diagnostic testing — so you spend less time waiting and more time starting treatment.",
    iconVariant: "green" as const,
  },
];

export const testimonials = [
  {
    quote:
      "After my stroke, the CNS team explained every step in words we could understand. We never felt alone — and today I am walking again.",
    author: "Meera Krishnan",
    role: "Stroke Recovery Patient",
    outcome: "Returned to daily activities within 3 months",
    avatar:
      "https://placehold.co/80x80/1F7CC6/FFFFFF/png?font=roboto&text=MK",
    rating: 5,
  },
  {
    quote:
      "Before surgery, the neurosurgery team walked us through every option. We felt prepared, not scared — and recovery went better than we hoped.",
    author: "Arjun Desai",
    role: "Spine Surgery Patient",
    outcome: "Back to work within 6 weeks",
    avatar:
      "https://placehold.co/80x80/7DBD24/FFFFFF/png?font=roboto&text=AD",
    rating: 5,
  },
  {
    quote:
      "From diagnosis to rehabilitation, every department worked as one team. They listened to us — and that made all the difference for our family.",
    author: "Sunita Rao",
    role: "Epilepsy Care Patient",
    outcome: "Seizures controlled, quality of life restored",
    avatar:
      "https://placehold.co/80x80/F7941D/FFFFFF/png?font=roboto&text=SR",
    rating: 5,
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "What conditions does the Center for Neuroscience treat?",
    answer:
      "We care for stroke, epilepsy, migraine, Parkinson's disease, memory disorders, brain tumors, spine disorders, vertigo, balance problems, nerve pain, and many other neurological conditions. If you are unsure, call us — we will guide you to the right specialist.",
  },
  {
    question: "How quickly can I get an appointment?",
    answer:
      "Most non-emergency appointments are scheduled within a few days. Urgent cases are prioritised, and our emergency team is available 24×7 for stroke, seizures, and head injury.",
  },
  {
    question: "What should I bring to my first consultation?",
    answer:
      "Please bring a valid ID, insurance details, a list of current medications, and any prior medical records, imaging CDs, or reports. If you have questions written down, bring those too — we welcome them.",
  },
  {
    question: "Do I need to bring previous medical reports?",
    answer:
      "Yes, if you have them. Previous MRI, CT, blood test results, and specialist letters help us understand your history faster — so your first visit is more productive.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "Book online through our Appointment page, call our front desk, or message us on WhatsApp. A care coordinator will confirm your visit and help you prepare.",
  },
  {
    question: "Do you accept health insurance?",
    answer:
      "Yes. We work with most major insurance providers and help with pre-authorization, billing, and payment plans. Our team can verify your coverage before your visit.",
  },
  {
    question: "When should I seek emergency neurological care?",
    answer:
      "Call our emergency line immediately for sudden weakness, facial drooping, slurred speech, severe headache, seizures, loss of consciousness, or head injury. In a stroke, every minute matters.",
  },
  {
    question: "What happens after I book an appointment?",
    answer:
      "A coordinator confirms your visit, explains what to bring, and answers your questions. On the day, you meet your specialist, receive any needed tests, and leave with a clear plan — with follow-up arranged.",
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
