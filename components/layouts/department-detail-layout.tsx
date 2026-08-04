import * as React from "react";

import { DetailPageLayout } from "@/components/layouts/detail-page-layout";

type DepartmentDetailLayoutProps = {
  title: string;
  description: string;
  eyebrow?: string;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  related?: React.ReactNode;
  cta?: React.ComponentProps<typeof DetailPageLayout>["cta"];
};

/** Shell for future /departments/[slug] pages. */
function DepartmentDetailLayout({
  title,
  description,
  eyebrow,
  children,
  sidebar,
  related,
  cta,
}: DepartmentDetailLayoutProps) {
  return (
    <DetailPageLayout
      hero={{
        title,
        description,
        eyebrow,
        breadcrumb: [
          { label: "Home", href: "/" },
          { label: "Departments", href: "/departments" },
          { label: title },
        ],
      }}
      sidebar={sidebar}
      related={related}
      cta={cta}
    >
      {children}
    </DetailPageLayout>
  );
}

export { DepartmentDetailLayout };
