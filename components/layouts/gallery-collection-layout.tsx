import * as React from "react";

import { DetailPageLayout } from "@/components/layouts/detail-page-layout";
import { MasonryGallery, type LightboxImage } from "@/components/common/lightbox";

type GalleryCollectionLayoutProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  images: LightboxImage[];
  intro?: React.ReactNode;
  cta?: React.ComponentProps<typeof DetailPageLayout>["cta"];
};

/** Shell for future /gallery/[collection] pages. */
function GalleryCollectionLayout({
  title,
  description,
  eyebrow,
  images,
  intro,
  cta,
}: GalleryCollectionLayoutProps) {
  return (
    <DetailPageLayout
      hero={{
        title,
        description,
        eyebrow,
        breadcrumb: [
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery" },
          { label: title },
        ],
      }}
      cta={cta}
    >
      {intro}
      <MasonryGallery images={images} variant="standard" />
    </DetailPageLayout>
  );
}

export { GalleryCollectionLayout };
