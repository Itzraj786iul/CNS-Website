import { standardAppointmentCta, standardWhatsAppCta } from "@/lib/content/cta";

export const researchContent = {
  hero: {
    eyebrow: "Research Driven Care",
    title: "Research & Publications",
    description:
      "Advancing neuroscience through clinical research, peer-reviewed publications, and collaborative studies that translate discovery into better patient outcomes.",
  },
  highlights: [
    {
      title: "Stroke Outcomes Registry",
      description:
        "A multi-center registry tracking acute stroke interventions, recovery metrics, and long-term functional outcomes across South India.",
      tag: "Clinical Research",
    },
    {
      title: "Epilepsy Surgery Program",
      description:
        "Pre-surgical evaluation protocols combining video-EEG, PET-CT, and neuropsychological assessment for epilepsy surgery candidacy.",
      tag: "Epilepsy",
    },
    {
      title: "Neuro Rehabilitation Outcomes",
      description:
        "Studying the impact of early multidisciplinary rehabilitation on motor recovery and quality of life after stroke and spinal injury.",
      tag: "Rehabilitation",
    },
    {
      title: "Brain Tumor Biomarkers",
      description:
        "Investigating molecular markers for glioma classification and personalized treatment planning in neuro-oncology.",
      tag: "Neuro-Oncology",
    },
  ],
  publications: [
    {
      title: "Outcomes of Mechanical Thrombectomy in Large Vessel Occlusion Stroke",
      journal: "Indian Journal of Neurology, 2025",
      authors: "Sharma A, Menon R, et al.",
    },
    {
      title: "Long-Term Efficacy of Deep Brain Stimulation in Parkinson's Disease",
      journal: "Movement Disorders Research, 2024",
      authors: "Joshi M, Rao S, et al.",
    },
    {
      title: "Pediatric Epilepsy: A Multicenter Cohort Analysis",
      journal: "Child Neurology Open, 2024",
      authors: "Reddy A, Gupta S, et al.",
    },
    {
      title: "Minimally Invasive Spine Surgery: Two-Year Follow-Up Data",
      journal: "Spine Surgery International, 2023",
      authors: "Iyer K, Menon R, et al.",
    },
  ],
  studies: [
    {
      title: "PHASE-3 Stroke Protocol Trial",
      status: "Recruiting",
      description: "Evaluating optimized door-to-needle times in acute ischemic stroke management.",
    },
    {
      title: "Cognitive Recovery After Traumatic Brain Injury",
      status: "Active",
      description: "Longitudinal study of cognitive rehabilitation outcomes over 24 months.",
    },
    {
      title: "Neuropathic Pain Intervention Study",
      status: "Completed",
      description: "Comparative analysis of spinal cord stimulation versus medical management.",
    },
  ],
  /** TODO: Add verified awards only after client approval */
  awards: [] as { year: string; title: string; organization: string }[],
  cta: {
    title: "Need Clinical Care or Research Collaboration?",
    description:
      "Patients seeking treatment can book a consultation with our specialists. Researchers and institutions are welcome to connect with our academic affairs office.",
    ...standardAppointmentCta,
    ...standardWhatsAppCta(),
  },
} as const;
