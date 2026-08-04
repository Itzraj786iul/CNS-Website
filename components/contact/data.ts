import type { FAQItem } from "@/components/common/faq-card";
import {
  getAppointmentDisplay,
  getEmergencyTelHref,
  getMapsDirectionsUrl,
  toTelHref,
} from "@/lib/contact-links";
import { siteConfig } from "@/lib/constants/site";

const emergencyPhone = siteConfig.contact.emergency;
const emergencyHref = getEmergencyTelHref();
const appointmentDisplay = getAppointmentDisplay();

export const contactContent = {
  hero: {
    eyebrow: "Reach Our Care Team",
    title: "Contact Center for Neuroscience",
    description:
      "Appointments, referrals, or billing questions — our team responds with clarity, because navigating care should never feel confusing.",
  },
  cards: [
    {
      type: "phone" as const,
      title: "Phone",
      value: appointmentDisplay,
      href: siteConfig.contact.phone
        ? toTelHref(siteConfig.contact.phone)
        : "/appointment",
      description: siteConfig.hours.outpatient,
    },
    {
      type: "email" as const,
      title: "Email",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
      description: "Response within one business day",
    },
    {
      type: "emergency" as const,
      title: "Emergency",
      value: emergencyPhone,
      href: emergencyHref,
      description: siteConfig.hours.emergency,
    },
    {
      type: "address" as const,
      title: "Address",
      value: siteConfig.contact.address,
      href: getMapsDirectionsUrl(),
      description: "Parking & wheelchair access available",
    },
  ],
  timings: {
    eyebrow: "Hospital Hours",
    title: "Visiting & Outpatient Timings",
    schedules: [
      { label: "Outpatient Clinics", hours: siteConfig.hours.outpatient },
      { label: "Emergency Department", hours: siteConfig.hours.emergency },
      { label: "Diagnostics & Imaging", hours: siteConfig.hours.diagnostics },
      { label: "Pharmacy", hours: siteConfig.hours.pharmacy },
      { label: "Visiting Hours (Wards)", hours: siteConfig.hours.visiting },
    ],
  },
  departments: [
    {
      name: "Appointments",
      phone: appointmentDisplay,
      email: siteConfig.contact.departments.appointments,
      href: siteConfig.contact.phone ? toTelHref(siteConfig.contact.phone) : "/appointment",
    },
    {
      name: "Neurology OPD",
      phone: siteConfig.contact.phone ?? appointmentDisplay,
      email: siteConfig.contact.departments.neurology,
      href: siteConfig.contact.phone ? toTelHref(siteConfig.contact.phone) : "/appointment",
    },
    {
      name: "Neurosurgery",
      phone: siteConfig.contact.phone ?? appointmentDisplay,
      email: siteConfig.contact.departments.neurosurgery,
      href: siteConfig.contact.phone ? toTelHref(siteConfig.contact.phone) : "/appointment",
    },
    {
      name: "Psychiatry",
      phone: siteConfig.contact.phone ?? appointmentDisplay,
      email: siteConfig.contact.departments.psychiatry,
      href: siteConfig.contact.phone ? toTelHref(siteConfig.contact.phone) : "/appointment",
    },
    {
      name: "Billing & Insurance",
      phone: siteConfig.contact.phone ?? appointmentDisplay,
      email: siteConfig.contact.departments.billing,
      href: siteConfig.contact.phone ? toTelHref(siteConfig.contact.phone) : "/appointment",
    },
    {
      name: "Medical Records",
      phone: siteConfig.contact.phone ?? appointmentDisplay,
      email: siteConfig.contact.departments.medicalRecords,
      href: `mailto:${siteConfig.contact.departments.medicalRecords}`,
    },
  ],
  faq: [
    {
      question: "How quickly can I get an appointment?",
      answer: "Most non-emergency appointments are scheduled within a few days. For urgent neurological concerns, call our emergency line — available 24×7.",
    },
    {
      question: "What should I bring to my first consultation?",
      answer: "Please bring a valid ID, insurance details, a list of current medications, and any prior medical records or imaging CDs. Writing down your questions in advance helps too.",
    },
    {
      question: "How do I schedule an appointment?",
      answer: "Book online via our Appointment page, call our appointments desk, message us on WhatsApp, or visit the front desk during outpatient hours. Emergency cases should go directly to our 24×7 emergency department.",
    },
    {
      question: "When should I seek emergency neurological care?",
      answer: "Call immediately for sudden weakness, facial drooping, slurred speech, severe headache, seizures, loss of consciousness, or head injury. In a stroke, every minute matters.",
    },
    {
      question: "What are the visiting hours?",
      answer: "Ward visiting hours are 11:00 AM – 1:00 PM and 5:00 PM – 7:00 PM daily. ICU visiting is restricted — please check with the nursing station for current policy.",
    },
    {
      question: "How do I obtain medical records?",
      answer: `Submit a request to ${siteConfig.contact.departments.medicalRecords} with valid ID and authorization. Records are typically available within 3–5 business days.`,
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
