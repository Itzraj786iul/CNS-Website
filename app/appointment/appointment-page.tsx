"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarDays, CheckCircle2, Clock, FileText, Phone, Siren } from "lucide-react";

import { PageHero } from "@/components/common/page-hero";
import { PatientConversionCta } from "@/components/common/patient-conversion-cta";
import {
  appointmentDepartments,
  appointmentDoctors,
  appointmentTimeSlots,
} from "@/components/contact/data";
import { FormField, FormInput, FormSelect, FormTextarea } from "@/components/contact/form-fields";
import { AnimatedSection } from "@/components/common/animated-section";
import { IconBox } from "@/components/common/icon-box";
import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getEmergencyTelHref } from "@/lib/contact-links";
import { siteConfig } from "@/lib/constants/site";

type FormData = {
  name: string;
  phone: string;
  email: string;
  department: string;
  doctor: string;
  date: string;
  time: string;
  message: string;
};

const processSteps = [
  { icon: FileText, title: "Submit Request", description: "Share your details and preferred time — it takes just a few minutes." },
  { icon: Phone, title: "Confirmation Call", description: "Our coordinator calls within 24 hours to confirm and answer your questions." },
  { icon: CalendarDays, title: "Visit CNS", description: "Arrive 15 minutes early with ID, insurance, and any prior reports you have." },
  { icon: CheckCircle2, title: "Begin Your Care", description: "Meet your specialist, understand your condition, and leave with a clear plan." },
];

function AppointmentPageContent() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const fd = new FormData(e.currentTarget);
    window.setTimeout(() => {
      setFormData({
        name: fd.get("name") as string,
        phone: fd.get("phone") as string,
        email: fd.get("email") as string,
        department: fd.get("department") as string,
        doctor: fd.get("doctor") as string,
        date: fd.get("date") as string,
        time: fd.get("time") as string,
        message: (fd.get("message") as string) || "",
      });
      setSubmitted(true);
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 600);
  };

  return (
    <>
      <PageHero
        title="Book Your Consultation"
        description="Tell us about your concern. Our care coordinator will call to confirm your appointment — usually within one business day — and help you prepare."
        eyebrow="Appointments"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Appointment" }]}
      />

      {submitted && formData ? (
        <Section variant="white" spacing="default">
          <AnimatedSection>
            <div className="mx-auto max-w-2xl rounded-3xl border border-secondary/30 bg-secondary/5 p-8 text-center shadow-soft sm:p-12">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-secondary/15">
                <CheckCircle2 className="size-8 text-secondary" />
              </div>
              <h2 className="mt-6 font-heading text-2xl font-semibold text-cns-navy sm:text-3xl">
                Appointment Request Received
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Thank you, {formData.name}. We have received your request and will contact you at{" "}
                <span className="font-medium text-cns-navy">{formData.phone}</span> within one business day to confirm your appointment.
              </p>
              <div className="mt-8 rounded-2xl border border-cns-border/80 bg-card p-6 text-left">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">Request Summary</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4"><dt className="shrink-0 text-muted-foreground">Department</dt><dd className="min-w-0 font-medium text-cns-navy sm:text-right">{formData.department}</dd></div>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4"><dt className="shrink-0 text-muted-foreground">Doctor</dt><dd className="min-w-0 font-medium text-cns-navy sm:text-right">{formData.doctor}</dd></div>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4"><dt className="shrink-0 text-muted-foreground">Preferred Date</dt><dd className="min-w-0 font-medium text-cns-navy sm:text-right">{formData.date}</dd></div>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4"><dt className="shrink-0 text-muted-foreground">Preferred Time</dt><dd className="min-w-0 font-medium text-cns-navy sm:text-right">{formData.time}</dd></div>
                </dl>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button nativeButton={false} render={<Link href="/">Return Home</Link>} size="lg" className="h-12 px-6" />
                <Button nativeButton={false} render={<Link href="/contact">Contact Us</Link>} variant="outline" size="lg" className="h-12 border-cns-border px-6" />
              </div>
            </div>
          </AnimatedSection>
        </Section>
      ) : (
        <Section variant="default" spacing="default" className="!pt-6">
          <div className="grid gap-5 md:grid-cols-[1.3fr_0.7fr] md:items-start md:gap-6 lg:gap-6">
            <AnimatedSection>
              <form
                className="space-y-4 rounded-[20px] border border-cns-border/80 bg-card p-5 shadow-soft sm:p-6"
                onSubmit={handleSubmit}
                aria-label="Appointment booking form"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Patient Name" htmlFor="appt-name" required>
                    <FormInput id="appt-name" name="name" placeholder="Full name" required />
                  </FormField>
                  <FormField label="Phone" htmlFor="appt-phone" required>
                    <FormInput id="appt-phone" name="phone" type="tel" placeholder="+91 00000 00000" required />
                  </FormField>
                </div>
                <FormField label="Email" htmlFor="appt-email" required>
                  <FormInput id="appt-email" name="email" type="email" placeholder="you@email.com" required />
                </FormField>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Department" htmlFor="appt-dept" required>
                    <FormSelect id="appt-dept" name="department" options={appointmentDepartments} placeholder="Select department" required />
                  </FormField>
                  <FormField label="Doctor" htmlFor="appt-doctor" required>
                    <FormSelect id="appt-doctor" name="doctor" options={appointmentDoctors} placeholder="Select doctor" required />
                  </FormField>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Preferred Date" htmlFor="appt-date" required>
                    <FormInput id="appt-date" name="date" type="date" required />
                  </FormField>
                  <FormField label="Preferred Time" htmlFor="appt-time" required>
                    <FormSelect id="appt-time" name="time" options={appointmentTimeSlots} placeholder="Select time" required />
                  </FormField>
                </div>
                <FormField label="Message" htmlFor="appt-message">
                  <FormTextarea id="appt-message" name="message" placeholder="Brief description of your symptoms or reason for visit..." rows={4} />
                </FormField>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  type="submit"
                  size="lg"
                  aria-busy={isSubmitting}
                  disabled={isSubmitting}
                  className="h-12 w-full bg-secondary font-semibold shadow-glow-green hover:bg-[#527a14] sm:w-auto sm:px-10"
                >
                  <CalendarDays />
                  {isSubmitting ? "Submitting..." : "Book Appointment"}
                </Button>
                <Button
                  nativeButton={false}
                  render={
                    <Link href={getEmergencyTelHref()}>
                      <Siren />
                      <span className="sm:hidden">Call Emergency</span>
                      <span className="hidden sm:inline">Need Immediate Help? Call Emergency</span>
                    </Link>
                  }
                  variant="destructive"
                  size="lg"
                  className="h-12 w-full font-semibold sm:w-auto sm:px-8"
                />
                </div>
              </form>
            </AnimatedSection>

            <AnimatedSection className="space-y-5">
              <Card className="card-premium card-premium-hover ring-0">
                <CardContent className="space-y-4 px-5 py-5">
                  <div>
                    <h2 className="font-heading text-lg font-semibold text-cns-navy">How It Works</h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      Booking an appointment at CNS is simple. Follow these steps for a smooth experience.
                    </p>
                  </div>
                  <ol className="space-y-3.5">
                    {processSteps.map((step, index) => (
                      <li key={step.title} className="flex gap-4">
                        <IconBox icon={step.icon} variant={(["blue", "green", "orange", "navy"] as const)[index % 4]} size="sm" className="shrink-0" />
                        <div>
                          <p className="font-heading text-sm font-semibold text-cns-navy">{step.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              <Card className="footer-surface border-white/10 shadow-soft ring-0">
                <CardContent className="space-y-3 px-5 py-5">
                  <div className="flex items-center gap-3">
                    <Clock className="size-5 text-secondary" />
                    <h3 className="font-heading text-base font-semibold text-white">Outpatient Hours</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-white/88">Mon – Sat, 8:00 AM – 8:00 PM</p>
                  <p className="text-sm text-white/75">Emergency care available 24×7</p>
                  <Button
                    nativeButton={false}
                    render={
                      <Link href={getEmergencyTelHref()}>
                        Emergency: {siteConfig.contact.emergency}
                      </Link>
                    }
                    variant="outline"
                    className="mt-1 h-[46px] w-full rounded-full border-white/35 bg-white/5 font-semibold text-white hover:border-white/50 hover:bg-white/12 hover:text-white"
                  />
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </Section>
      )}
      <PatientConversionCta variant="emergency" />
    </>
  );
}

export { AppointmentPageContent };
