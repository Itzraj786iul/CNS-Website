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
          size === "lg" ? "heading-section text-[1.625rem] sm:text-[2rem] lg:text-[2.25rem]" : "heading-section"
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
