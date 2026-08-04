import * as React from "react";

import { DetailPageLayout } from "@/components/layouts/detail-page-layout";

type ResearchArticleLayoutProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  meta?: React.ReactNode;
  children: React.ReactNode;
  related?: React.ReactNode;
  cta?: React.ComponentProps<typeof DetailPageLayout>["cta"];
};

/** Shell for future /research/[slug] article pages. */
function ResearchArticleLayout({
  title,
  description,
  eyebrow,
  meta,
  children,
  related,
  cta,
}: ResearchArticleLayoutProps) {
  return (
    <DetailPageLayout
      hero={{
        title,
        description,
        eyebrow,
        breadcrumb: [
          { label: "Home", href: "/" },
          { label: "Research", href: "/research" },
          { label: title },
        ],
      }}
      sidebar={meta}
      related={related}
      cta={cta}
    >
      {children}
    </DetailPageLayout>
  );
}

export { ResearchArticleLayout };
