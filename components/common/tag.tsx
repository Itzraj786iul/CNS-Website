import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const tagVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide shadow-soft transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border-border bg-white text-cns-navy",
        blue: "border-primary/25 bg-primary/10 text-primary",
        green: "border-secondary/25 bg-secondary/10 text-[#4d7512]",
        orange: "border-accent/25 bg-accent/10 text-[#b45309]",
        navy: "border-cns-navy/15 bg-cns-navy/8 text-cns-navy",
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
