import * as React from "react";

import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"div"> & {
  size?: "default" | "narrow" | "wide";
};

const sizeClasses = {
  default: "max-w-7xl",
  narrow: "max-w-4xl",
  wide: "max-w-[88rem]",
} as const;

function Container({
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      data-slot="container"
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-10",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}

export { Container };
