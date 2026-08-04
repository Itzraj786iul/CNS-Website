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
  awards: [
    { year: "2025", title: "Excellence in Stroke Care", organization: "National Neuroscience Association" },
    { year: "2024", title: "Best Neuro ICU", organization: "Healthcare Innovation Awards" },
    { year: "2023", title: "Research Publication Award", organization: "Indian Academy of Neurology" },
    { year: "2022", title: "Patient Safety Certification", organization: "NABH Accreditation" },
  ],
  statistics: [
    { value: "120", suffix: "+", label: "Published Papers" },
    { value: "35", suffix: "+", label: "Active Studies" },
    { value: "18", suffix: "", label: "Research Collaborations" },
    { value: "12", suffix: "", label: "National Awards" },
  ],
  cta: {
    title: "Need Clinical Care or Research Collaboration?",
    description:
      "Patients seeking treatment can book a consultation with our specialists. Researchers and institutions are welcome to connect with our academic affairs office.",
    primaryLabel: "Book Your Consultation",
    primaryHref: "/appointment",
    secondaryLabel: "Chat With Our Care Team",
    secondaryHref: "https://wa.me/917389321886?text=Hello%20I%20would%20like%20to%20know%20more%20about%20the%20services%20offered%20by%20Center%20for%20Neuroscience.",
  },
} as const;
