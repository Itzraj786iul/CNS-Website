import type { CardVariant } from "@/lib/card-variants";

/**
 * Semantic content density used across the CNS design system.
 * Maps to card/layout scale tokens without breaking existing CardVariant usage.
 */
export type ContentDensity = "preview" | "listing" | "detail";

/** @deprecated Use ContentDensity — kept as alias for card token compatibility */
export type CardDensity = ContentDensity;

const densityToCardVariant = {
  preview: "compact",
  listing: "standard",
  detail: "detailed",
} as const satisfies Record<ContentDensity, CardVariant>;

export function resolveCardVariant(
  density: ContentDensity | CardVariant
): CardVariant {
  if (density in densityToCardVariant) {
    return densityToCardVariant[density as ContentDensity];
  }
  return density as CardVariant;
}

export function resolveContentDensity(
  density: ContentDensity | CardVariant
): ContentDensity {
  if (density === "compact") return "preview";
  if (density === "standard") return "listing";
  if (density === "detailed") return "detail";
  return density as ContentDensity;
}

/** Shared image ratios for split / media sections */
export const mediaImageClasses = {
  preview: "relative image-placeholder aspect-[3/2] w-full md:max-h-[170px] lg:max-h-[150px]",
  listing: "relative image-placeholder aspect-[3/2] w-full md:max-h-[210px] lg:max-h-[190px]",
  detail: "relative image-placeholder aspect-[3/2] w-full md:max-h-[250px] lg:max-h-[240px]",
} as const;

/** Split column ratios — tablet (md) uses 2-col where noted; desktop (lg) uses ratio presets */
export const splitColumnClasses = {
  equal: "md:grid-cols-2 lg:grid-cols-2",
  narrowWide: "md:grid-cols-2 lg:grid-cols-[0.9fr_1.1fr]",
  wideNarrow: "md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr]",
  contentAside: "md:grid-cols-2 lg:grid-cols-[1fr_1.4fr]",
  contentWide: "md:grid-cols-2 lg:grid-cols-[1fr_1.2fr]",
} as const;

export type SplitRatio = keyof typeof splitColumnClasses;
