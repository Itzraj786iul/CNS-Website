/**
 * CNS design system layer — additional tokens and utilities
 * extend Tailwind via app/globals.css @theme inline.
 */

export const brandColors = {
  blue: "#1F7CC6",
  green: "#7DBD24",
  orange: "#F7941D",
  navy: "#16324A",
  background: "#F8FBFD",
  white: "#FFFFFF",
  border: "#E7EEF5",
  muted: "#6B7B8C",
} as const;

export const spacing = {
  section: {
    sm: "py-6 md:py-9",
    default: "py-9 md:py-12",
    lg: "py-11 md:py-16",
    xl: "py-12 md:py-20",
  },
} as const;

export const themes = {
  light: {
    background: "#F8FBFD",
    foreground: "#16324A",
    card: "#FFFFFF",
    surface: "#FFFFFF",
    border: "#C5D4E0",
    mutedForeground: "#4F6275",
    primary: "#186299",
    secondary: "#5F9418",
  },
  dim: {
    background: "#0B1220",
    foreground: "#F8FAFC",
    card: "#18314D",
    surface: "#13263D",
    elevatedSurface: "#18314D",
    border: "rgba(255,255,255,0.08)",
    textSecondary: "#CBD5E1",
    mutedForeground: "#CBD5E1",
    primary: "#1F7CC6",
    secondary: "#7DBD24",
    brandNavy: "#0A1628",
  },
} as const;
