import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button relative inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-semibold whitespace-normal sm:whitespace-nowrap transition-all duration-300 ease-out outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:scale-[1.015] active:scale-[0.985] active:transition-none disabled:pointer-events-none disabled:border-border disabled:bg-muted disabled:text-muted-foreground disabled:opacity-100 disabled:shadow-none disabled:hover:scale-100 aria-busy:cursor-wait aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-glow-blue hover:bg-[#14527a] hover:shadow-soft-lg",
        outline:
          "border-border bg-card text-foreground shadow-soft hover:border-primary/35 hover:bg-primary/5 hover:text-foreground hover:shadow-soft-lg aria-expanded:bg-primary/5 aria-expanded:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-glow-green hover:bg-[#527a14] hover:shadow-soft-lg aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        accent:
          "bg-accent text-accent-foreground shadow-soft hover:bg-[#cf7609] hover:shadow-soft-lg",
        navy:
          "bg-cns-brand-navy text-white shadow-soft hover:bg-[#122a3f] hover:shadow-soft-lg dark:hover:bg-[#0d1a2e]",
        ghost:
          "font-medium text-foreground hover:bg-muted hover:text-foreground hover:shadow-none aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive:
          "border border-destructive/20 bg-destructive/12 text-[#a61f1f] hover:border-destructive/30 hover:bg-destructive/18 focus-visible:ring-destructive/40",
        destructiveSolid:
          "bg-destructive text-white shadow-soft hover:bg-[#a61f1f] hover:shadow-soft-lg focus-visible:ring-destructive/40",
        link: "link-underline h-auto scale-100 px-0 font-medium hover:scale-100 active:scale-100",
      },
      size: {
        default:
          "h-[46px] min-h-[44px] gap-2 rounded-full px-4 sm:min-h-0 has-data-[icon=inline-end]:pr-3.5 has-data-[icon=inline-start]:pl-3.5",
        xs: "h-6 gap-1 rounded-full px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 min-h-[44px] gap-1.5 rounded-full px-3 text-sm sm:min-h-0 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 min-h-[44px] gap-2 rounded-full px-5 text-[15px] sm:min-h-0 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
