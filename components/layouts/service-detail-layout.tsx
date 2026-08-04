import * as React from "react";

import { DetailPageLayout } from "@/components/layouts/detail-page-layout";

type ServiceDetailLayoutProps = {
  title: string;
  description: string;
  eyebrow?: string;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  related?: React.ReactNode;
  cta?: React.ComponentProps<typeof DetailPageLayout>["cta"];
};

/** Shell for future /services/[slug] pages. */
function ServiceDetailLayout({
  title,
  description,
  eyebrow,
  children,
  sidebar,
  related,
  cta,
}: ServiceDetailLayoutProps) {
  return (
    <DetailPageLayout
      hero={{
        title,
        description,
        eyebrow,
        breadcrumb: [
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
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

export { ServiceDetailLayout };
