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
    sm: "py-12 md:py-16",
    default: "py-16 md:py-24",
    lg: "py-20 md:py-28",
    xl: "py-24 md:py-32",
  },
} as const;
