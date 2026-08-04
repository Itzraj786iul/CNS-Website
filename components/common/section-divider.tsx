import { cn } from "@/lib/utils";

type SectionDividerProps = {
  variant?: "default" | "white" | "muted";
  className?: string;
};

const fillMap = {
  default: "var(--wave-fill-default)",
  white: "var(--wave-fill-white)",
  muted: "var(--wave-fill-muted)",
} as const;

function SectionDivider({ variant = "default", className }: SectionDividerProps) {
  const fill = fillMap[variant];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none relative -mt-px h-10 w-full overflow-hidden md:h-14",
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
          opacity="0.92"
        />
      </svg>
      <div className="wave-divider-line absolute inset-x-[8%] top-1/2 h-px" />
    </div>
  );
}

export { SectionDivider };
