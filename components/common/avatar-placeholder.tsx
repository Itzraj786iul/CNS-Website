"use client";

import { cn } from "@/lib/utils";

type AvatarPlaceholderProps = {
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "size-8 text-xs",
  md: "size-10 text-sm",
  lg: "size-12 text-base",
} as const;

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ""}${parts[parts.length - 1][0] ?? ""}`.toUpperCase();
}

function AvatarPlaceholder({ name, className, size = "sm" }: AvatarPlaceholderProps) {
  const initials = getInitials(name);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "photo-frame flex shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary/15 to-secondary/20 font-heading font-semibold text-primary ring-2 ring-white",
        sizeClasses[size],
        className
      )}
    >
      {initials}
    </div>
  );
}

export { AvatarPlaceholder };
