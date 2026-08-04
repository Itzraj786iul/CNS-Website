import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const iconBoxVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-2xl shadow-soft transition-all duration-300 ease-out group-hover/icon:scale-105 group-hover/icon:-translate-y-0.5 group-hover/icon:shadow-soft-lg [&_svg]:size-5 [&_svg]:stroke-[1.75]",
  {
    variants: {
      variant: {
        blue: "bg-primary/10 text-primary",
        green: "bg-secondary/10 text-secondary",
        orange: "bg-accent/10 text-accent",
        navy: "bg-primary/10 text-primary dark:bg-primary/15 dark:text-primary",
        white: "bg-white/10 text-white dark:bg-white/10 dark:text-white",
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
      className={cn(iconBoxVariants({ variant, size }), "group/icon", className)}
      {...props}
    >
      <Icon aria-hidden="true" />
    </div>
  );
}

export { IconBox, iconBoxVariants };
