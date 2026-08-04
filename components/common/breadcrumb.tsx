import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("max-w-full overflow-x-auto", className)}>
      <ol className="inline-flex max-w-full flex-wrap items-center gap-1 rounded-full border border-border bg-card/85 px-3 py-1.5 shadow-soft backdrop-blur-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isHome = index === 0 && item.href === "/";

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              {index > 0 ? (
                <ChevronRight
                  className="size-3 shrink-0 text-muted-foreground/70"
                  aria-hidden="true"
                />
              ) : null}
              {isLast || !item.href ? (
                <span
                  className={cn(
                    "text-xs font-medium sm:text-sm",
                    isLast ? "text-cns-navy" : "text-muted-foreground"
                  )}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-primary sm:text-sm",
                    isHome && "text-cns-navy/80"
                  )}
                >
                  {isHome ? <Home className="size-3.5" aria-hidden="true" /> : null}
                  <span>{isHome ? "Home" : item.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export { Breadcrumb };
