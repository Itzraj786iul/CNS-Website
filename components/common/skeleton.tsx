import * as React from "react";

import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "animate-pulse rounded-2xl bg-linear-to-br from-muted/90 to-muted/60 ring-1 ring-cns-border/40",
        className
      )}
      aria-hidden="true"
      {...props}
    />
  );
}

function PageSkeleton() {
  return (
    <div className="flex flex-1 flex-col" aria-busy="true" aria-label="Loading page">
      <div className="brand-surface-page relative overflow-hidden pb-20 pt-10">
        <div
          aria-hidden="true"
          className="neural-pattern pointer-events-none absolute inset-0 opacity-20"
        />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <Skeleton className="mb-6 h-8 w-40 rounded-full" />
          <Skeleton className="mb-3 h-1.5 w-12 rounded-full" />
          <Skeleton className="mb-5 h-12 w-full max-w-lg" />
          <Skeleton className="h-6 w-full max-w-xl" />
        </div>
      </div>
      <div className="section-surface-white py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-3 lg:px-10">
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
        </div>
      </div>
    </div>
  );
}

export { Skeleton, PageSkeleton };
