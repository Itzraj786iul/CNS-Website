import { notFound } from "next/navigation";

import { getAllNewsSlugs, getNewsBySlug } from "@/components/news/data";
import { NewsDetailPageContent } from "@/components/news/news-detail-page";
import { createPageMetadata } from "@/lib/metadata";

type NewsDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllNewsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    return createPageMetadata({
      title: "Article Not Found",
      path: `/news/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: article.title,
    description: article.excerpt,
    path: article.href,
  });
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  return <NewsDetailPageContent slug={slug} />;
}
