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
    sm: "py-8 md:py-12",
    default: "py-12 md:py-16",
    lg: "py-14 md:py-20",
    xl: "py-16 md:py-24",
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
    background: "#0F172A",
    foreground: "#E2EAF2",
    card: "#18314D",
    surface: "#13263D",
    border: "#2A4560",
    mutedForeground: "#94A8BC",
    primary: "#3A9AD8",
    secondary: "#7DBD24",
  },
} as const;
