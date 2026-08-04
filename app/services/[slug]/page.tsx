import { notFound } from "next/navigation";

import {
  getAllServiceSlugs,
  getServiceBySlug,
} from "@/components/services/data";
import { ServiceDetailPageContent } from "@/components/services/service-detail-page";
import { createPageMetadata } from "@/lib/metadata";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return createPageMetadata({
      title: "Service Not Found",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: service.title,
    description: service.description,
    path: service.href,
  });
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPageContent slug={slug} />;
}
