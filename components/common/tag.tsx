import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const tagVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide shadow-soft transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border-cns-border bg-white text-cns-navy",
        blue: "border-primary/20 bg-primary/5 text-primary",
        green: "border-secondary/20 bg-secondary/5 text-secondary",
        orange: "border-accent/20 bg-accent/5 text-accent",
        navy: "border-cns-navy/10 bg-cns-navy/5 text-cns-navy",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type TagProps = React.ComponentProps<"span"> &
  VariantProps<typeof tagVariants>;

function Tag({ className, variant, ...props }: TagProps) {
  return (
    <span
      data-slot="tag"
      className={cn(tagVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Tag, tagVariants };
