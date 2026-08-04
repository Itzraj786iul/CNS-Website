import Link from "next/link";
import { Calendar } from "lucide-react";

import { CTASection } from "@/components/common/cta-section";
import { HospitalImage } from "@/components/common/hospital-image";
import { Tag } from "@/components/common/tag";
import { ResearchArticleLayout } from "@/components/layouts/research-article-layout";
import { getNewsBySlug, newsContent } from "@/components/news/data";
import { Button } from "@/components/ui/button";

type NewsDetailPageContentProps = {
  slug: string;
};

function NewsDetailPageContent({ slug }: NewsDetailPageContentProps) {
  const article = getNewsBySlug(slug);

  if (!article) {
    return null;
  }

  const { cta } = newsContent;

  return (
    <>
      <ResearchArticleLayout
        title={article.title}
        description={article.excerpt}
        eyebrow={article.category}
      >
        <div className="section-stack max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <Tag variant="blue">{article.category}</Tag>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="size-4" aria-hidden="true" />
              {article.date}
            </span>
          </div>
          <HospitalImage
            src={article.image}
            alt={article.title}
            aspect="landscape"
            className="w-full overflow-hidden rounded-[20px]"
            imageClassName="object-cover"
            sizes="(max-width: 768px) 100vw, 720px"
          />
          <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>{article.body}</p>
          </div>
          <Button
            variant="outline"
            nativeButton={false}
            render={<Link href="/news">Back to News</Link>}
            className="border-cns-border"
          />
        </div>
      </ResearchArticleLayout>
      <CTASection
        title={cta.title}
        description={cta.description}
        primaryAction={{ label: cta.primaryLabel, href: cta.primaryHref }}
        secondaryAction={{ label: cta.secondaryLabel, href: cta.secondaryHref }}
        variant="navy"
      />
    </>
  );
}

export { NewsDetailPageContent, getNewsBySlug };
