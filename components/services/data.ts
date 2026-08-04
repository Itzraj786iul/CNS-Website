import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Ambulance,
  Baby,
  Brain,
  BrainCircuit,
  Heart,
  HeartPulse,
  Pill,
  Scan,
  Stethoscope,
  Zap,
} from "lucide-react";

export const servicesContent = {
  hero: {
    title: "Our Services",
    description:
      "Comprehensive neurological services — from urgent stroke care to long-term rehabilitation — delivered by subspecialty experts under one roof.",
  },
  overview: {
    eyebrow: "Overview",
    title: "Complete Care for Brain & Spine Conditions",
    description:
      "From the first consultation to recovery and follow-up, CNS offers an integrated care pathway. Our services are designed to address complex neurological conditions with precision, compassion, and the latest medical advances.",
  },
  services: [
    { title: "Brain Disorders", description: "Diagnosis and treatment of tumors, infections, demyelinating diseases, and cognitive disorders.", icon: Brain, iconVariant: "blue" as const, href: "/services" },
    { title: "Spine Disorders", description: "Medical and surgical management of disc disease, spinal stenosis, deformities, and cord compression.", icon: BrainCircuit, iconVariant: "green" as const, href: "/services" },
    { title: "Stroke Care", description: "24×7 stroke unit with thrombolysis, mechanical thrombectomy, and dedicated rehabilitation pathways.", icon: Zap, iconVariant: "orange" as const, href: "/services" },
    { title: "Epilepsy", description: "Comprehensive epilepsy program including video-EEG monitoring, medication optimization, and surgery evaluation.", icon: Activity, iconVariant: "navy" as const, href: "/services" },
    { title: "Headache Clinic", description: "Specialized care for migraine, cluster headache, and chronic daily headache syndromes.", icon: Stethoscope, iconVariant: "blue" as const, href: "/services" },
    { title: "Movement Disorders", description: "Parkinson's disease, dystonia, tremor, and coordination disorders with DBS program support.", icon: Scan, iconVariant: "green" as const, href: "/services" },
    { title: "Neuro ICU", description: "Critical care for severe brain injury, status epilepticus, and post-operative neurosurgical patients.", icon: HeartPulse, iconVariant: "orange" as const, href: "/services" },
    { title: "Mental Health", description: "Psychiatric evaluation, psychotherapy, and integrated care for neuropsychiatric conditions.", icon: Heart, iconVariant: "navy" as const, href: "/services" },
    { title: "Pediatric Neurology", description: "Specialized neurological care for children with epilepsy, developmental, and neuromuscular disorders.", icon: Baby, iconVariant: "blue" as const, href: "/services" },
    { title: "Pain Management", description: "Interventional procedures and medical therapy for neuropathic, spine, and headache-related pain.", icon: Pill, iconVariant: "green" as const, href: "/services" },
    { title: "Rehabilitation", description: "Physiotherapy, occupational therapy, speech therapy, and cognitive rehabilitation programs.", icon: Ambulance, iconVariant: "orange" as const, href: "/services" },
  ] satisfies { title: string; description: string; icon: LucideIcon; iconVariant: "blue" | "green" | "orange" | "navy"; href: string }[],
  process: {
    eyebrow: "How It Works",
    title: "Your Treatment Journey",
    description: "A clear, structured pathway ensures you receive timely diagnosis, appropriate treatment, and ongoing support.",
    steps: [
      { step: "01", title: "Initial Consultation", description: "Meet with a specialist who reviews your history, symptoms, and prior records to understand your condition." },
      { step: "02", title: "Diagnostic Evaluation", description: "Targeted imaging, lab tests, and neurophysiology studies to establish an accurate diagnosis." },
      { step: "03", title: "Personalized Treatment", description: "A tailored plan combining medication, procedures, surgery, or therapy based on evidence and your goals." },
      { step: "04", title: "Follow-Up & Recovery", description: "Regular monitoring, rehabilitation support, and long-term management to optimize your outcome." },
    ],
  },
  whyChoose: {
    eyebrow: "Why CNS",
    title: "Why Patients Choose Our Services",
    description: "Every service at CNS is backed by subspecialty expertise, advanced technology, and a commitment to patient-centered care.",
    points: [
      "Subspecialty-trained clinicians across all neurological disciplines",
      "Integrated diagnostics with same-day imaging and reporting",
      "Multidisciplinary teams for complex and rare conditions",
      "Transparent communication and shared decision-making",
    ],
  },
  cta: {
    title: "Begin Your Care Journey",
    description: "Schedule with the right specialist. Our coordinators handle scheduling, records, and insurance verification — so you can focus on your health.",
    primaryLabel: "Book Appointment",
    primaryHref: "/appointment",
    secondaryLabel: "Contact Us",
    secondaryHref: "/contact",
  },
} as const;
