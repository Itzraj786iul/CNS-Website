import { cn } from "@/lib/utils";

type SectionDividerProps = {
  variant?: "default" | "white" | "muted";
  className?: string;
};

const fillMap = {
  default: "#f8fbfd",
  white: "#ffffff",
  muted: "#eef4f9",
} as const;

function SectionDivider({ variant = "default", className }: SectionDividerProps) {
  const fill = fillMap[variant];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none relative -mt-px h-14 w-full overflow-hidden md:h-20",
        className
      )}
    >
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M0,32 C240,56 480,8 720,32 C960,56 1200,16 1440,36 L1440,64 L0,64 Z"
          fill={fill}
          opacity="0.85"
        />
      </svg>
      <div className="absolute inset-x-[8%] top-1/2 h-px bg-linear-to-r from-transparent via-cns-border/60 to-transparent" />
    </div>
  );
}

export { SectionDivider };
