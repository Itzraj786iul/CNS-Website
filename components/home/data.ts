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

export const heroStats = [
  { value: "20", suffix: "+", label: "Specialists" },
  { value: "50,000", suffix: "+", label: "Patients Treated" },
  { value: "24", suffix: "×7", label: "Emergency Care" },
  { value: "95", suffix: "%", label: "Patient Satisfaction" },
] as const;

export const aboutFeatures = [
  {
    icon: Stethoscope,
    title: "Expert Doctors",
    description:
      "Board-certified neurologists, neurosurgeons, and psychiatrists with subspecialty training.",
    iconVariant: "blue" as const,
  },
  {
    icon: Microscope,
    title: "Advanced Technology",
    description:
      "3T MRI, digital EEG, and neuro-navigation systems for precise diagnosis and treatment.",
    iconVariant: "green" as const,
  },
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    description:
      "Individual treatment plans built around each patient's goals, lifestyle, and recovery timeline.",
    iconVariant: "orange" as const,
  },
  {
    icon: Ambulance,
    title: "24×7 Emergency",
    description:
      "Round-the-clock stroke and neurotrauma response with dedicated critical care teams.",
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
    title: "Experienced Specialists",
    description:
      "A senior team with decades of combined experience across neurology and neurosurgery.",
    iconVariant: "blue",
  },
  {
    icon: Scan,
    title: "Modern Equipment",
    description:
      "State-of-the-art imaging, monitoring, and surgical technology under one roof.",
    iconVariant: "green",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Centered Care",
    description:
      "Clear communication, shared decision-making, and compassionate support at every step.",
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
      "After my stroke, the team at CNS guided me through every step of recovery. Their clarity and compassion made a difficult time manageable.",
    author: "Meera Krishnan",
    role: "Stroke Recovery Patient",
    avatar:
      "https://placehold.co/80x80/1F7CC6/FFFFFF/png?font=roboto&text=MK",
    rating: 5,
  },
  {
    quote:
      "The neurosurgery team explained my options thoroughly. I felt confident going into surgery and the post-operative care was exceptional.",
    author: "Arjun Desai",
    role: "Spine Surgery Patient",
    avatar:
      "https://placehold.co/80x80/7DBD24/FFFFFF/png?font=roboto&text=AD",
    rating: 5,
  },
  {
    quote:
      "From diagnosis to rehabilitation, every department worked together seamlessly. CNS truly puts the patient at the center of care.",
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
    title: "Phone",
    value: "+91 80 0000 0000",
    href: "tel:+918000000000",
    description: "Mon–Sat, 8:00 AM – 8:00 PM",
  },
  {
    icon: "email" as const,
    title: "Email",
    value: "care@cns.org",
    href: "mailto:care@cns.org",
    description: "We respond within one business day",
  },
  {
    icon: "location" as const,
    title: "Location",
    value: "Center for Neuroscience, Medical District",
    href: "/contact",
    description: "Parking and wheelchair access available",
  },
];
