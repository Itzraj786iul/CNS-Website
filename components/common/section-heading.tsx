import * as React from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = React.ComponentProps<"div"> & {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  size?: "default" | "lg";
};

function SectionHeading({
  className,
  eyebrow,
  title,
  description,
  align = "left",
  size = "default",
  ...props
}: SectionHeadingProps) {
  return (
    <div
      data-slot="section-heading"
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" && "mx-auto text-center",
        className
      )}
      {...props}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-heading font-semibold tracking-tight text-cns-navy",
          size === "default" && "text-3xl sm:text-4xl",
          size === "lg" && "text-4xl sm:text-5xl"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export { SectionHeading };
