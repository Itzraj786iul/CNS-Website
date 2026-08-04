import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 8.5V6.75c0-.69.56-1.25 1.25-1.25H17V3h-2.25C13.01 3 11.5 4.51 11.5 6.75V8.5H9v3h2.5V21h3.5v-9.5H17l.5-3h-3.5z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.75" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.5 9.5H3.75V20.5H6.5V9.5ZM5.125 8.25a1.625 1.625 0 1 1 0-3.25 1.625 1.625 0 0 1 0 3.25ZM20.5 20.5h-2.75v-5.35c0-1.275-.025-2.925-1.78-2.925-1.785 0-2.06 1.395-2.06 2.835V20.5H11.18V9.5h2.64v1.56h.037c.368-.695 1.27-1.43 2.615-1.43 2.795 0 3.31 1.84 3.31 4.235V20.5Z" />
    </svg>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.8 8.001a2.75 2.75 0 0 0-1.935-1.944C18.697 5.75 12 5.75 12 5.75s-6.697 0-7.865.307A2.75 2.75 0 0 0 2.2 8.001 28.9 28.9 0 0 0 1.9 12a28.9 28.9 0 0 0 .3 3.999 2.75 2.75 0 0 0 1.935 1.944C5.303 18.25 12 18.25 12 18.25s6.697 0 7.865-.307a2.75 2.75 0 0 0 1.935-1.944c.24-1.303.3-2.001.3-3.999s-.06-2.696-.3-3.999ZM10 15.108V8.892L15.545 12 10 15.108Z" />
    </svg>
  );
}
