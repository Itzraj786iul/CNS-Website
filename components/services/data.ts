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

import { standardAppointmentCta, standardWhatsAppCta } from "@/lib/content/cta";
import {
  homeImagePath,
  hospitalImage,
  IMAGE_CATEGORIES,
} from "@/lib/content/images";
import { servicePath } from "@/lib/content/slugs";

export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  iconVariant: "blue" | "green" | "orange" | "navy";
  href: string;
  detail: {
    overview: string;
    highlights: string[];
    relatedDepartmentSlug?: string;
  };
};

const service = (
  slug: string,
  item: Omit<ServiceItem, "slug" | "href">
): ServiceItem => ({
  slug,
  href: servicePath(slug),
  ...item,
});

export const servicesContent = {
  hero: {
    eyebrow: "Patient-Centred Neuroscience Care",
    title: "Integrated Brain & Spine Services",
    description:
      "Comprehensive neurological services — stroke care, epilepsy, brain and spine disorders, and rehabilitation under one roof.",
  },
  overview: {
    eyebrow: "Clinical Excellence",
    title: "Complete Care for Brain & Spine Conditions",
    description:
      "From the first consultation to recovery and follow-up, CNS offers an integrated care pathway. Our services are designed to address complex neurological conditions with precision, compassion, and the latest medical advances.",
  },
  services: [
    service("brain-disorders", {
      title: "Brain Disorders",
      description:
        "Diagnosis and treatment of tumors, infections, demyelinating diseases, and cognitive disorders.",
      icon: Brain,
      iconVariant: "blue",
      detail: {
        overview:
          "Our brain disorders program combines advanced neuroimaging, neuro-oncology coordination, and cognitive neurology expertise. Patients receive a structured pathway from initial evaluation through treatment planning and long-term follow-up.",
        highlights: [
          "Multidisciplinary brain tumor boards",
          "MRI and CT with same-day reporting",
          "Memory and cognitive assessment clinics",
          "Infection and demyelinating disease protocols",
        ],
        relatedDepartmentSlug: "neurology",
      },
    }),
    service("spine-disorders", {
      title: "Spine Disorders",
      description:
        "Medical and surgical management of disc disease, spinal stenosis, deformities, and cord compression.",
      icon: BrainCircuit,
      iconVariant: "green",
      detail: {
        overview:
          "Spine care at CNS spans conservative management, interventional procedures, and minimally invasive surgery. Our spine surgeons and neurologists collaborate to match each patient with the least invasive effective treatment.",
        highlights: [
          "Degenerative disc and stenosis care",
          "Minimally invasive spine surgery",
          "Spinal deformity correction",
          "Post-operative rehabilitation pathways",
        ],
        relatedDepartmentSlug: "neurosurgery",
      },
    }),
    service("stroke-care", {
      title: "Stroke Care",
      description:
        "24×7 stroke unit with thrombolysis, mechanical thrombectomy, and dedicated rehabilitation pathways.",
      icon: Zap,
      iconVariant: "orange",
      detail: {
        overview:
          "CNS operates a dedicated stroke pathway with emergency triage, rapid imaging, and interventional neurology capability. Every step — from ambulance notification to ICU and rehab — is designed around the clock when minutes protect brain function.",
        highlights: [
          "24×7 stroke code activation",
          "Mechanical thrombectomy capability",
          "Dedicated neuro ICU beds",
          "Early rehabilitation after stabilization",
        ],
        relatedDepartmentSlug: "emergency-medicine",
      },
    }),
    service("epilepsy", {
      title: "Epilepsy",
      description:
        "Comprehensive epilepsy program including video-EEG monitoring, medication optimization, and surgery evaluation.",
      icon: Activity,
      iconVariant: "navy",
      detail: {
        overview:
          "Our epilepsy program offers video-EEG monitoring, medication optimization, and pre-surgical evaluation for drug-resistant seizures. Pediatric and adult patients are managed by dedicated epileptologists.",
        highlights: [
          "Continuous video-EEG monitoring",
          "Epilepsy surgery candidacy workup",
          "Pediatric epilepsy specialists",
          "Patient and family education support",
        ],
        relatedDepartmentSlug: "neurology",
      },
    }),
    service("headache-clinic", {
      title: "Headache Clinic",
      description:
        "Specialized care for migraine, cluster headache, and chronic daily headache syndromes.",
      icon: Stethoscope,
      iconVariant: "blue",
      detail: {
        overview:
          "The headache clinic provides structured evaluation for migraine, cluster headache, and chronic daily headache. Treatment plans combine preventive therapy, acute rescue protocols, and lifestyle guidance.",
        highlights: [
          "Migraine and cluster headache protocols",
          "Trigger identification and prevention plans",
          "Botulinum toxin therapy when indicated",
          "Coordination with pain medicine specialists",
        ],
        relatedDepartmentSlug: "neurology",
      },
    }),
    service("movement-disorders", {
      title: "Movement Disorders",
      description:
        "Parkinson's disease, dystonia, tremor, and coordination disorders with DBS program support.",
      icon: Scan,
      iconVariant: "green",
      detail: {
        overview:
          "Movement disorder specialists manage Parkinson's disease, dystonia, tremor, and ataxia with medical therapy and deep brain stimulation program coordination. Care plans focus on maintaining independence and quality of life.",
        highlights: [
          "Parkinson's disease management",
          "Deep brain stimulation evaluation",
          "Botulinum toxin for dystonia",
          "Gait and balance rehabilitation",
        ],
        relatedDepartmentSlug: "neurology",
      },
    }),
    service("neuro-icu", {
      title: "Neuro ICU",
      description:
        "Critical care for severe brain injury, status epilepticus, and post-operative neurosurgical patients.",
      icon: HeartPulse,
      iconVariant: "orange",
      detail: {
        overview:
          "The neuro ICU provides continuous monitoring for critically ill neurological patients — including severe traumatic brain injury, status epilepticus, and post-operative neurosurgical care — with intensivist-led multidisciplinary teams.",
        highlights: [
          "Continuous EEG and ICP monitoring",
          "Ventilator and hemodynamic support",
          "Post-operative neurosurgical recovery",
          "Family-centred critical care communication",
        ],
        relatedDepartmentSlug: "critical-care",
      },
    }),
    service("mental-health", {
      title: "Mental Health",
      description:
        "Psychiatric evaluation, psychotherapy, and integrated care for neuropsychiatric conditions.",
      icon: Heart,
      iconVariant: "navy",
      detail: {
        overview:
          "Psychiatrists and clinical psychologists work alongside neurologists to treat mood disorders, anxiety, psychosis, and neuropsychiatric conditions that accompany neurological illness.",
        highlights: [
          "Psychiatric evaluation and medication management",
          "Individual and family psychotherapy",
          "Neuropsychiatric consultation",
          "Integrated care with neurology teams",
        ],
        relatedDepartmentSlug: "psychiatry",
      },
    }),
    service("pediatric-neurology", {
      title: "Pediatric Neurology",
      description:
        "Specialized neurological care for children with epilepsy, developmental, and neuromuscular disorders.",
      icon: Baby,
      iconVariant: "blue",
      detail: {
        overview:
          "Pediatric neurologists provide compassionate, age-appropriate care for children with epilepsy, developmental delays, cerebral palsy, and neuromuscular conditions — with family education at every stage.",
        highlights: [
          "Pediatric epilepsy programs",
          "Developmental disorder evaluation",
          "Cerebral palsy and neuromuscular care",
          "Child-friendly consultation environments",
        ],
        relatedDepartmentSlug: "neurology",
      },
    }),
    service("pain-management", {
      title: "Pain Management",
      description:
        "Interventional procedures and medical therapy for neuropathic, spine, and headache-related pain.",
      icon: Pill,
      iconVariant: "green",
      detail: {
        overview:
          "Pain medicine specialists offer interventional procedures — including nerve blocks and spinal injections — alongside medical therapy for neuropathic pain, spine pain, and headache-related discomfort.",
        highlights: [
          "Neuropathic pain protocols",
          "Spinal injection procedures",
          "Headache and facial pain management",
          "Multidisciplinary pain assessment",
        ],
        relatedDepartmentSlug: "pain-medicine",
      },
    }),
    service("rehabilitation", {
      title: "Rehabilitation",
      description:
        "Physiotherapy, occupational therapy, speech therapy, and cognitive rehabilitation programs.",
      icon: Ambulance,
      iconVariant: "orange",
      detail: {
        overview:
          "Neuro rehabilitation teams help patients regain mobility, speech, cognition, and daily independence after stroke, spinal injury, brain surgery, and other neurological events.",
        highlights: [
          "Physiotherapy and gait training",
          "Speech and swallowing therapy",
          "Occupational therapy for daily living",
          "Cognitive rehabilitation programs",
        ],
        relatedDepartmentSlug: "neuro-rehabilitation",
      },
    }),
  ] satisfies ServiceItem[],
  process: {
    eyebrow: "How It Works",
    title: "Your Treatment Journey",
    description:
      "A clear, structured pathway ensures you receive timely diagnosis, appropriate treatment, and ongoing support.",
    steps: [
      {
        step: "01",
        title: "Initial Consultation",
        description:
          "Meet with a specialist who reviews your history, symptoms, and prior records to understand your condition.",
      },
      {
        step: "02",
        title: "Diagnostic Evaluation",
        description:
          "Targeted imaging, lab tests, and neurophysiology studies to establish an accurate diagnosis.",
      },
      {
        step: "03",
        title: "Personalized Treatment",
        description:
          "A tailored plan combining medication, procedures, surgery, or therapy based on evidence and your goals.",
      },
      {
        step: "04",
        title: "Follow-Up & Recovery",
        description:
          "Regular monitoring, rehabilitation support, and long-term management to optimize your outcome.",
      },
    ],
  },
  whyChoose: {
    eyebrow: "Why CNS",
    title: "Evidence-Based Care You Can Trust",
    description:
      "Every service at CNS is backed by subspecialty expertise, advanced technology, and a commitment to patient-centered care.",
    points: [
      "Subspecialty-trained clinicians across all neurological disciplines",
      "Integrated diagnostics with same-day imaging and reporting",
      "Multidisciplinary teams for complex and rare conditions",
      "Transparent communication and shared decision-making",
    ],
  },
  sectionImage: hospitalImage(
    homeImagePath("patient-care"),
    "Patient receiving neurological care at Center for Neuroscience",
    IMAGE_CATEGORIES.patientCare
  ),
  cta: {
    title: "Book Your Consultation",
    description:
      "Our coordinators handle scheduling, records, and insurance verification — so you can focus on getting the care you need.",
    ...standardAppointmentCta,
    ...standardWhatsAppCta(),
  },
} as const;

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesContent.services.find((item) => item.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesContent.services.map((item) => item.slug);
}
