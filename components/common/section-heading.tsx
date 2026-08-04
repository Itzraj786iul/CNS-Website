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
        "max-w-3xl space-y-2",
        align === "center" && "mx-auto text-center",
        className
      )}
      {...props}
    >
      {eyebrow ? (
        <p className={cn("eyebrow-pill w-fit", align === "center" && "mx-auto")}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-heading font-semibold tracking-[-0.02em] text-cns-navy",
          size === "default" &&
            "text-[1.375rem] leading-[1.2] min-[375px]:text-[1.625rem] sm:text-[1.875rem] lg:text-[1.875rem] lg:leading-[1.18]",
          size === "lg" &&
            "text-[1.625rem] sm:text-[2rem] lg:text-[2.25rem] lg:leading-[1.14]"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("prose-lead max-w-2xl", align === "center" && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export { SectionHeading };
