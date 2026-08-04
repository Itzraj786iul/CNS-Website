import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const iconBoxVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-2xl shadow-soft transition-all duration-300 ease-out [&_svg]:size-5 [&_svg]:stroke-[1.75]",
  {
    variants: {
      variant: {
        blue: "bg-primary/10 text-primary",
        green: "bg-secondary/10 text-secondary",
        orange: "bg-accent/10 text-accent",
        navy: "bg-cns-navy/10 text-cns-navy",
        white: "bg-white/10 text-white",
      },
      size: {
        sm: "size-10 rounded-xl [&_svg]:size-4",
        default: "size-12",
        lg: "size-14 [&_svg]:size-6",
      },
    },
    defaultVariants: {
      variant: "blue",
      size: "default",
    },
  }
);

type IconBoxProps = React.ComponentProps<"div"> &
  VariantProps<typeof iconBoxVariants> & {
    icon: LucideIcon;
  };

function IconBox({
  className,
  icon: Icon,
  variant,
  size,
  ...props
}: IconBoxProps) {
  return (
    <div
      data-slot="icon-box"
      className={cn(iconBoxVariants({ variant, size }), className)}
      {...props}
    >
      <Icon aria-hidden="true" />
    </div>
  );
}

export { IconBox, iconBoxVariants };
