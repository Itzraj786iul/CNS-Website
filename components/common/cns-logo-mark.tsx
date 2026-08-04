import { cn } from "@/lib/utils";

type CnsLogoMarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-9 w-auto",
  md: "h-10 w-auto sm:h-11",
  lg: "h-14 w-auto sm:h-16",
} as const;

function CnsLogoMark({ className, size = "md" }: CnsLogoMarkProps) {
  return (
    <svg
      viewBox="0 0 248 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(sizeClasses[size], className)}
      role="img"
      aria-label="Center for Neuroscience"
    >
      {/* C — blue */}
      <rect x="0" y="3" width="36" height="38" rx="6" fill="#1F7CC6" />
      <path
        d="M24 14c-4.5 0-8 3.5-8 8s3.5 8 8 8c2.2 0 4.2-.9 5.6-2.3"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="15" cy="19" r="2" fill="white" opacity="0.85" />
      <circle cx="18" cy="24" r="1.5" fill="white" opacity="0.65" />

      {/* N — neural bridge */}
      <rect x="38" y="3" width="36" height="38" rx="6" fill="#1F7CC6" />
      <path
        d="M46 32V14l14 11V14"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="52" cy="18" r="1.8" fill="#F7941D" />
      <circle cx="58" cy="22" r="1.5" fill="#F7941D" />
      <circle cx="54" cy="26" r="1.3" fill="#7DBD24" />
      <line x1="52" y1="18" x2="58" y2="22" stroke="#F7941D" strokeWidth="0.8" opacity="0.7" />
      <line x1="58" y1="22" x2="54" y2="26" stroke="#F7941D" strokeWidth="0.8" opacity="0.7" />

      {/* S — green */}
      <rect x="76" y="3" width="36" height="38" rx="6" fill="#7DBD24" />
      <path
        d="M98 14c-4 0-7 2.5-7 5.5s3 5.5 7 5.5 7 2.5 7 5.5-3 5.5-7 5.5"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="91" y="22" width="3" height="5" rx="1" fill="white" opacity="0.75" />
      <rect x="96" y="20" width="3" height="5" rx="1" fill="white" opacity="0.75" />
      <rect x="101" y="22" width="3" height="5" rx="1" fill="white" opacity="0.75" />

      {/* Wordmark */}
      <text
        x="122"
        y="18"
        fill="currentColor"
        fontSize="10.5"
        fontWeight="700"
        letterSpacing="0.08em"
        fontFamily="var(--font-manrope), system-ui, sans-serif"
      >
        CENTER FOR
      </text>
      <text
        x="122"
        y="33"
        fill="currentColor"
        fontSize="10.5"
        fontWeight="700"
        letterSpacing="0.08em"
        fontFamily="var(--font-manrope), system-ui, sans-serif"
      >
        NEURO SCIENCE
      </text>
      <circle cx="186" cy="28.5" r="2.2" fill="#7DBD24" />
    </svg>
  );
}

export { CnsLogoMark };
