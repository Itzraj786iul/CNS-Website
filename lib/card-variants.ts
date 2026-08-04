export type CardVariant = "compact" | "standard" | "detailed";

export const CARD_VARIANT_DEFAULT: CardVariant = "standard";

/** Responsive grid columns per variant (mobile 1, tablet 2, desktop per spec). */
export const cardGridClasses: Record<CardVariant, string> = {
  compact: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
  standard: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
  detailed: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
};

/** Portrait image max-heights per variant (px). */
export const cardImageHeights: Record<CardVariant, string> = {
  compact: "max-h-[160px] sm:max-h-[180px]",
  standard: "max-h-[200px] sm:max-h-[220px]",
  detailed: "max-h-[240px] sm:max-h-[280px]",
};

/** Landscape / news image max-heights per variant. */
export const cardLandscapeImageHeights: Record<CardVariant, string> = {
  compact: "max-h-[120px] sm:max-h-[140px]",
  standard: "max-h-[160px] sm:max-h-[180px]",
  detailed: "max-h-[200px] sm:max-h-[220px]",
};

export const cardDescClamp: Record<CardVariant, string> = {
  compact: "line-clamp-2",
  standard: "line-clamp-3",
  detailed: "line-clamp-4",
};

export const cardTagLimit: Record<CardVariant, number> = {
  compact: 2,
  standard: 3,
  detailed: 99,
};

export const cardIconSize: Record<
  CardVariant,
  "sm" | "default" | "lg"
> = {
  compact: "sm",
  standard: "sm",
  detailed: "default",
};

export const cardShellPadding: Record<
  CardVariant,
  { header: string; content: string; footer: string; image: string }
> = {
  compact: {
    image: "p-2.5 pb-0",
    header: "gap-1 px-3 pb-0 pt-2",
    content: "gap-1.5 px-3 pb-0 pt-0",
    footer: "px-3 pb-3 pt-1.5",
  },
  standard: {
    image: "p-3 pb-0",
    header: "gap-1.5 px-4 pb-0 pt-2.5",
    content: "gap-2 px-4 pb-0 pt-1",
    footer: "px-4 pb-4 pt-2",
  },
  detailed: {
    image: "p-3 pb-0",
    header: "gap-1.5 px-4 pb-0 pt-2.5",
    content: "gap-2 px-4 pb-0 pt-1.5",
    footer: "px-4 pb-4 pt-2",
  },
};

export function getCardGridClass(variant: CardVariant = CARD_VARIANT_DEFAULT) {
  return cardGridClasses[variant];
}

export function getCardImageHeight(variant: CardVariant = CARD_VARIANT_DEFAULT) {
  return cardImageHeights[variant];
}

export {
  resolveCardVariant,
  resolveContentDensity,
  type ContentDensity,
  mediaImageClasses,
  splitColumnClasses,
  type SplitRatio,
} from "@/lib/design-system";
