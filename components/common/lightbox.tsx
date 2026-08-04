"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  CARD_VARIANT_DEFAULT,
  type CardVariant,
} from "@/lib/card-variants";

export type LightboxImage = {
  src: string;
  alt: string;
  title?: string;
  category?: string;
};

type LightboxContextValue = {
  open: (images: LightboxImage[], index?: number) => void;
  close: () => void;
};

const LightboxContext = React.createContext<LightboxContextValue | null>(null);

function useLightbox() {
  const context = React.useContext(LightboxContext);
  if (!context) {
    throw new Error("useLightbox must be used within LightboxProvider");
  }
  return context;
}

function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [images, setImages] = React.useState<LightboxImage[]>([]);
  const [index, setIndex] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const open = React.useCallback((nextImages: LightboxImage[], startIndex = 0) => {
    setImages(nextImages);
    setIndex(startIndex);
    setIsOpen(true);
  }, []);

  const close = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  const goNext = React.useCallback(() => {
    setIndex((current) => (current + 1) % images.length);
  }, [images.length]);

  const goPrev = React.useCallback(() => {
    setIndex((current) => (current - 1 + images.length) % images.length);
  }, [images.length]);

  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close, goNext, goPrev]);

  const current = images[index];

  return (
    <LightboxContext.Provider value={{ open, close }}>
      {children}
      <AnimatePresence>
        {isOpen && current ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.title ?? current.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <X className="size-5" />
            </button>

            {images.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className="absolute left-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 md:right-16"
                  aria-label="Next image"
                >
                  <ChevronRight className="size-5" />
                </button>
              </>
            ) : null}

            <motion.div
              key={current.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[85vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-soft-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1024px"
                />
              </div>
              {(current.title || current.category) && (
                <div className="border-t border-white/10 bg-black/80 px-6 py-4">
                  {current.category ? (
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                      {current.category}
                    </p>
                  ) : null}
                  {current.title ? (
                    <p className="mt-1 font-heading text-lg font-semibold text-white">
                      {current.title}
                    </p>
                  ) : null}
                </div>
              )}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
}

type MasonryGalleryProps = {
  images: LightboxImage[];
  variant?: CardVariant;
  className?: string;
};

const galleryTileHeights: Record<CardVariant, [string, string, string]> = {
  compact: ["max-h-[120px] sm:max-h-[140px]", "max-h-[115px] sm:max-h-[130px]", "max-h-[118px] sm:max-h-[135px]"],
  standard: ["max-h-[150px] sm:max-h-[180px]", "max-h-[140px] sm:max-h-[160px]", "max-h-[145px] sm:max-h-[170px]"],
  detailed: ["max-h-[180px] sm:max-h-[220px]", "max-h-[170px] sm:max-h-[200px]", "max-h-[175px] sm:max-h-[210px]"],
};

function MasonryGallery({
  images,
  variant = CARD_VARIANT_DEFAULT,
  className,
}: MasonryGalleryProps) {
  const { open } = useLightbox();
  const heights = galleryTileHeights[variant];
  const columnClass =
    variant === "compact"
      ? "columns-1 gap-3 space-y-3 sm:columns-2 md:columns-3 lg:columns-4"
      : variant === "detailed"
        ? "columns-1 gap-4 space-y-4 sm:columns-2 md:columns-2 lg:columns-3"
        : "columns-1 gap-3 space-y-3 sm:columns-2 md:columns-2 lg:columns-3 xl:columns-4";

  return (
    <div className={cn(columnClass, className)}>
      {images.map((image, index) => (
        <button
          key={`${image.src}-${index}`}
          type="button"
          onClick={() => open(images, index)}
          className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-[20px] border border-cns-border/80 bg-card text-left shadow-soft transition-all duration-300 hover:border-primary/20 hover:shadow-soft-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          aria-label={`View ${image.title ?? image.alt}`}
        >
          <div
            className={cn(
              "relative w-full overflow-hidden bg-muted",
              index % 3 === 0
                ? cn("aspect-[4/5]", heights[0])
                : index % 3 === 1
                  ? cn("aspect-square", heights[1])
                  : cn("aspect-[4/3]", heights[2])
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading="lazy"
              className="img-zoom object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />
          </div>
          {(image.title || image.category) && (
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 via-black/40 to-transparent px-3 pb-3 pt-8">
              {image.category ? (
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70">
                  {image.category}
                </p>
              ) : null}
              {image.title ? (
                <p className="mt-0.5 font-heading text-xs font-semibold text-white sm:text-sm">
                  {image.title}
                </p>
              ) : null}
            </div>
          )}
        </button>
      ))}
    </div>
  );
}

export { LightboxProvider, MasonryGallery, useLightbox };
export type { LightboxContextValue };
