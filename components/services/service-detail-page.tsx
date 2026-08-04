"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { ServiceCard } from "@/components/services/service-card";
import {
  getServiceBySlug,
  servicesContent,
} from "@/components/services/data";
import { SectionHeading } from "@/components/common/section-heading";
import { ServiceDetailLayout } from "@/components/layouts/service-detail-layout";
import { Button } from "@/components/ui/button";
import { departmentPath } from "@/lib/content/slugs";
import { standardAppointmentCta, standardWhatsAppCta } from "@/lib/content/cta";

type ServiceDetailPageContentProps = {
  slug: string;
};

function ServiceDetailPageContent({ slug }: ServiceDetailPageContentProps) {
  const service = getServiceBySlug(slug);

  if (!service) {
    return null;
  }

  const relatedDepartment = service.detail.relatedDepartmentSlug;
  const relatedServices = servicesContent.services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);
  const { cta } = servicesContent;

  return (
    <ServiceDetailLayout
      title={service.title}
      description={service.description}
      eyebrow="Clinical Service"
      cta={{
        title: cta.title,
        description: cta.description,
        primaryAction: { label: cta.primaryLabel, href: cta.primaryHref },
        secondaryAction: { label: cta.secondaryLabel, href: cta.secondaryHref },
      }}
      sidebar={
        <>
          <div className="rounded-[20px] border border-cns-border/60 bg-card p-5 shadow-soft">
            <h2 className="text-sm font-semibold text-cns-navy">Quick Actions</h2>
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
          {relatedDepartment ? (
            <div className="rounded-[20px] border border-cns-border/60 bg-card p-5 shadow-soft">
              <h2 className="text-sm font-semibold text-cns-navy">Related Department</h2>
              <p className="mt-2 text-[13px] leading-snug text-muted-foreground">
                This service is delivered through our integrated clinical departments.
              </p>
              <Link
                href={departmentPath(relatedDepartment)}
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary"
              >
                View department
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          ) : null}
        </>
      }
      related={
        <div className="section-stack">
          <SectionHeading
            align="center"
            eyebrow="Related Care"
            title="Other Services You May Need"
            description="Explore additional neurological services available at CNS."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((item) => (
              <ServiceCard key={item.slug} {...item} variant="compact" />
            ))}
          </div>
        </div>
      }
    >
      <div className="section-stack max-w-3xl">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-cns-navy">Overview</h2>
          <p className="text-[15px] leading-relaxed text-muted-foreground">{service.detail.overview}</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-cns-navy">What We Offer</h2>
          <ul className="space-y-2.5">
            {service.detail.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2.5 text-[14px] text-cns-navy/85">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ServiceDetailLayout>
  );
}

export { ServiceDetailPageContent, getServiceBySlug };
