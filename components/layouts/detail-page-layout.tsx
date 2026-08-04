import * as React from "react";

import { PageHero, type PageHeroProps } from "@/components/common/page-hero";
import { CTASection } from "@/components/common/cta-section";
import { Section } from "@/components/common/section";
import { cn } from "@/lib/utils";

type DetailPageLayoutProps = {
  hero: PageHeroProps;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  related?: React.ReactNode;
  cta?: {
    title: string;
    description?: string;
    primaryAction?: { label: string; href: string };
    secondaryAction?: { label: string; href: string };
  };
  className?: string;
};

function DetailPageLayout({
  hero,
  children,
  sidebar,
  related,
  cta,
  className,
}: DetailPageLayoutProps) {
  return (
    <div className={cn("brand-surface-page", className)}>
      <PageHero {...hero} />
      <Section variant="default" spacing="default">
        <div
          className={cn(
            sidebar ? "grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start lg:gap-8" : undefined
          )}
        >
          <main>{children}</main>
          {sidebar ? <aside className="space-y-4">{sidebar}</aside> : null}
        </div>
      </Section>
      {related ? (
        <Section variant="white" spacing="default" divider>
          {related}
        </Section>
      ) : null}
      {cta ? (
        <CTASection
          title={cta.title}
          description={cta.description}
          primaryAction={cta.primaryAction}
          secondaryAction={cta.secondaryAction}
          variant="navy"
        />
      ) : null}
    </div>
  );
}

export { DetailPageLayout };
export type { DetailPageLayoutProps };
