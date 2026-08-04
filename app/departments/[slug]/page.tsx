import { notFound } from "next/navigation";

import {
  getAllDepartmentSlugs,
  getDepartmentBySlug,
} from "@/components/departments/data";
import { DepartmentDetailPageContent } from "@/components/departments/department-detail-page";
import { createPageMetadata } from "@/lib/metadata";

type DepartmentDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllDepartmentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: DepartmentDetailPageProps) {
  const { slug } = await params;
  const department = getDepartmentBySlug(slug);

  if (!department) {
    return createPageMetadata({
      title: "Department Not Found",
      path: `/departments/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: department.title,
    description: department.description,
    path: department.href,
  });
}

export default async function DepartmentDetailPage({ params }: DepartmentDetailPageProps) {
  const { slug } = await params;
  const department = getDepartmentBySlug(slug);

  if (!department) {
    notFound();
  }

  return <DepartmentDetailPageContent slug={slug} />;
}
