"use client";

import * as React from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

import {
  categoryLabels,
  imageAspectClasses,
  type ImageAspect,
  type ImageCategory,
} from "@/lib/content/images";
import { cn } from "@/lib/utils";

type HospitalImageProps = {
  src: string;
  alt: string;
  category?: ImageCategory;
  aspect?: ImageAspect;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  overlay?: boolean;
  zoom?: boolean;
};

function HospitalImageFallback({
  alt,
  category,
  aspect = "landscape",
  className,
}: {
  alt: string;
  category?: ImageCategory;
  aspect?: ImageAspect;
  className?: string;
}) {
  const label = category ? categoryLabels[category] : "Image";

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "image-placeholder relative flex w-full items-center justify-center overflow-hidden bg-linear-to-br from-[#EEF4F9] via-[#F8FBFD] to-[#E7EEF5]",
        imageAspectClasses[aspect],
        className
      )}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          <ImageIcon className="size-5" aria-hidden="true" />
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-cns-navy/60">
          {label}
        </span>
        <span className="text-[10px] text-muted-foreground">Photo pending</span>
      </div>
    </div>
  );
}

function HospitalImage({
  src,
  alt,
  category,
  aspect = "landscape",
  fill = true,
  width,
  height,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  overlay = true,
  zoom = true,
}: HospitalImageProps) {
  const [failed, setFailed] = React.useState(false);

  if (failed) {
    return (
      <HospitalImageFallback
        alt={alt}
        category={category}
        aspect={aspect}
        className={className}
      />
    );
  }

  const image = (
    <Image
      src={src}
      alt={alt}
      fill={fill && !width}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className={cn(
        "object-cover",
        zoom && "img-zoom",
        imageClassName
      )}
      onError={() => setFailed(true)}
    />
  );

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        fill && imageAspectClasses[aspect],
        className
      )}
    >
      {image}
      {overlay ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-black/5 to-transparent"
        />
      ) : null}
    </div>
  );
}

export { HospitalImage, HospitalImageFallback };
