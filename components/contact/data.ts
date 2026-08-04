import type { FAQItem } from "@/components/common/faq-card";

export const contactContent = {
  hero: {
    title: "Contact Us",
    description:
      "Reach our team for appointments, referrals, billing inquiries, or general information. We are here to help you navigate your care.",
  },
  cards: [
    {
      type: "phone" as const,
      title: "Phone",
      value: "+91 80 4567 8900",
      href: "tel:+918045678900",
      description: "Mon–Sat, 8:00 AM – 8:00 PM",
    },
    {
      type: "email" as const,
      title: "Email",
      value: "care@cns.org",
      href: "mailto:care@cns.org",
      description: "Response within one business day",
    },
    {
      type: "emergency" as const,
      title: "Emergency",
      value: "+91 80 4567 8911",
      href: "tel:+918045678911",
      description: "24×7 stroke & neurotrauma line",
    },
    {
      type: "address" as const,
      title: "Address",
      value: "Center for Neuroscience, Medical District, Bengaluru 560001",
      href: "https://maps.google.com",
      description: "Parking & wheelchair access available",
    },
  ],
  timings: {
    eyebrow: "Hospital Hours",
    title: "Visiting & Outpatient Timings",
    schedules: [
      { label: "Outpatient Clinics", hours: "Mon – Sat, 8:00 AM – 8:00 PM" },
      { label: "Emergency Department", hours: "Open 24 hours, every day" },
      { label: "Diagnostics & Imaging", hours: "Mon – Sat, 7:00 AM – 9:00 PM" },
      { label: "Pharmacy", hours: "Mon – Sat, 7:30 AM – 9:30 PM" },
      { label: "Visiting Hours (Wards)", hours: "Daily, 11:00 AM – 1:00 PM & 5:00 PM – 7:00 PM" },
    ],
  },
  departments: [
    { name: "Appointments", phone: "+91 80 4567 8900", email: "appointments@cns.org" },
    { name: "Neurology OPD", phone: "+91 80 4567 8901", email: "neurology@cns.org" },
    { name: "Neurosurgery", phone: "+91 80 4567 8902", email: "neurosurgery@cns.org" },
    { name: "Psychiatry", phone: "+91 80 4567 8903", email: "psychiatry@cns.org" },
    { name: "Billing & Insurance", phone: "+91 80 4567 8904", email: "billing@cns.org" },
    { name: "Medical Records", phone: "+91 80 4567 8905", email: "records@cns.org" },
  ],
  emergencyBanner: {
    title: "Neurological Emergency?",
    description: "If you or someone you know is experiencing stroke symptoms, severe headache, seizures, or head trauma — call our emergency line immediately.",
    phone: "+91 80 4567 8911",
    href: "tel:+918045678911",
  },
  faq: [
    {
      question: "How do I schedule an appointment?",
      answer: "You can book online via our Appointment page, call our appointments desk, or visit the front desk during outpatient hours. Emergency cases should go directly to our 24×7 emergency department.",
    },
    {
      question: "What are the visiting hours?",
      answer: "Ward visiting hours are 11:00 AM – 1:00 PM and 5:00 PM – 7:00 PM daily. ICU visiting is restricted — please check with the nursing station for current policy.",
    },
    {
      question: "How do I obtain medical records?",
      answer: "Submit a request to medicalrecords@cns.org with valid ID and authorization. Records are typically available within 3–5 business days.",
    },
    {
      question: "Is parking available on campus?",
      answer: "Yes. Free patient and visitor parking is available in the basement and surface lots. Valet service is offered at the main entrance during outpatient hours.",
    },
  ] satisfies FAQItem[],
} as const;

export const appointmentDepartments = [
  "Neurology",
  "Neurosurgery",
  "Psychiatry",
  "Clinical Psychology",
  "Neuro Rehabilitation",
  "Pain Medicine",
  "Pediatric Neurology",
  "General Consultation",
];

export const appointmentDoctors = [
  "Dr. Ananya Sharma — Neurology",
  "Dr. Rajesh Menon — Neurosurgery",
  "Dr. Priya Nair — Psychiatry",
  "Dr. Vikram Patel — Rehabilitation",
  "Dr. Imran Khan — Interventional Neurology",
  "Dr. Sunita Gupta — Epilepsy",
  "Dr. Karthik Iyer — Spine Surgery",
  "Dr. Meera Joshi — Movement Disorders",
  "Dr. Harpreet Singh — Pain Medicine",
  "Dr. Arvind Reddy — Pediatric Neurology",
  "Any Available Specialist",
];

export const appointmentTimeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];
