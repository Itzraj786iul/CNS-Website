"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { cn } from "@/lib/utils";

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
            className="fixed inset-0 z-[200] flex items-center justify-center bg-cns-navy/90 p-4 backdrop-blur-sm"
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
                <div className="border-t border-white/10 bg-cns-navy/95 px-6 py-4">
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
  className?: string;
};

function MasonryGallery({ images, className }: MasonryGalleryProps) {
  const { open } = useLightbox();

  return (
    <div
      className={cn(
        "columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3 xl:columns-4",
        className
      )}
    >
      {images.map((image, index) => (
        <button
          key={`${image.src}-${index}`}
          type="button"
          onClick={() => open(images, index)}
          className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-cns-border/80 bg-white text-left shadow-soft transition-all duration-300 hover:border-primary/20 hover:shadow-soft-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          aria-label={`View ${image.title ?? image.alt}`}
        >
          <div
            className={cn(
              "relative w-full overflow-hidden bg-muted",
              index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
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
            <div className="absolute inset-0 bg-cns-navy/0 transition-colors duration-300 group-hover:bg-cns-navy/20" />
          </div>
          {(image.title || image.category) && (
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-cns-navy/85 via-cns-navy/40 to-transparent px-4 pb-4 pt-10">
              {image.category ? (
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70">
                  {image.category}
                </p>
              ) : null}
              {image.title ? (
                <p className="mt-0.5 font-heading text-sm font-semibold text-white sm:text-base">
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
