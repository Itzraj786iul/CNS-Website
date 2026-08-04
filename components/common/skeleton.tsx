import * as React from "react";

import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "animate-pulse rounded-xl bg-muted/80",
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
      <div className="bg-background pb-16 pt-10">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <Skeleton className="mb-6 h-4 w-32" />
          <Skeleton className="mb-4 h-12 w-full max-w-lg" />
          <Skeleton className="h-6 w-full max-w-xl" />
        </div>
      </div>
      <div className="bg-white py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 sm:px-6 lg:grid-cols-3 lg:px-8">
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
        </div>
      </div>
    </div>
  );
}

export { Skeleton, PageSkeleton };
