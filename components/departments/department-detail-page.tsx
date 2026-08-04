"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { DepartmentDetailCard } from "@/components/departments/department-detail-card";
import {
  departmentsContent,
  getDepartmentBySlug,
} from "@/components/departments/data";
import { SectionHeading } from "@/components/common/section-heading";
import { DepartmentDetailLayout } from "@/components/layouts/department-detail-layout";
import { Button } from "@/components/ui/button";
import { standardAppointmentCta, standardWhatsAppCta } from "@/lib/content/cta";

type DepartmentDetailPageContentProps = {
  slug: string;
};

function DepartmentDetailPageContent({ slug }: DepartmentDetailPageContentProps) {
  const department = getDepartmentBySlug(slug);

  if (!department) {
    return null;
  }

  const relatedDepartments = departmentsContent.departments
    .filter((item) => item.slug !== department.slug)
    .slice(0, 3);
  const { cta } = departmentsContent;

  return (
    <DepartmentDetailLayout
      title={department.title}
      description={department.description}
      eyebrow="Clinical Department"
      cta={{
        title: cta.title,
        description: cta.description,
        primaryAction: { label: cta.primaryLabel, href: cta.primaryHref },
        secondaryAction: { label: cta.secondaryLabel, href: cta.secondaryHref },
      }}
      sidebar={
        <>
          <div className="rounded-[20px] border border-cns-border/60 bg-card p-5 shadow-soft">
            <h2 className="text-sm font-semibold text-cns-navy">Key Treatments</h2>
            <ul className="mt-3 space-y-2">
              {department.treatments.map((treatment) => (
                <li key={treatment} className="flex items-center gap-2 text-[13px] text-cns-navy/85">
                  <span className="size-1.5 shrink-0 rounded-full bg-secondary" />
                  {treatment}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[20px] border border-cns-border/60 bg-card p-5 shadow-soft">
            <h2 className="text-sm font-semibold text-cns-navy">Book a Consultation</h2>
            <p className="mt-2 text-[13px] leading-snug text-muted-foreground">
              Our coordinators will connect you with the right specialist in this department.
            </p>
            <div className="mt-4 space-y-2">
              <Button nativeButton={false} render={<Link href="/appointment">{standardAppointmentCta.primaryLabel}</Link>} className="w-full" />
              <Button
                variant="outline"
                nativeButton={false}
                render={<Link href={standardWhatsAppCta().secondaryHref}>{standardWhatsAppCta().secondaryLabel}</Link>}
                className="w-full border-cns-border"
              />
            </div>
          </div>
        </>
      }
      related={
        <div className="section-stack">
          <SectionHeading
            align="center"
            eyebrow="Integrated Care"
            title="Related Departments"
            description="CNS departments work together so your care stays coordinated."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedDepartments.map((item) => (
              <DepartmentDetailCard key={item.slug} {...item} variant="compact" />
            ))}
          </div>
        </div>
      }
    >
      <div className="section-stack max-w-3xl">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-cns-navy">Overview</h2>
          <p className="text-[15px] leading-relaxed text-muted-foreground">{department.detail.overview}</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-cns-navy">Clinical Focus</h2>
          <ul className="space-y-2.5">
            {department.detail.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2.5 text-[14px] text-cns-navy/85">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/services"
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
        >
          View all services
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </DepartmentDetailLayout>
  );
}

export { DepartmentDetailPageContent, getDepartmentBySlug };
