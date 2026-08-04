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
      className={cn("pointer-events-none relative -mt-px h-12 w-full overflow-hidden md:h-16", className)}
    >
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M0,24 C360,48 720,0 1080,24 C1260,36 1380,40 1440,32 L1440,48 L0,48 Z"
          fill={fill}
          opacity="0.6"
        />
      </svg>
      <div className="absolute inset-x-[10%] top-1/2 h-px bg-linear-to-r from-transparent via-cns-border/80 to-transparent" />
    </div>
  );
}

export { SectionDivider };
